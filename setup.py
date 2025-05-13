import os
import shutil
import sys
import re
import subprocess
from rich.console import Console
from rich.progress import Progress, SpinnerColumn, TextColumn

REPLACE_PATTERN = "boilerplate"
EXCLUDE = {".git", "node_modules", ".next", ".DS_Store", "boilerplate"}

console = Console()


class NewApp:
    def __init__(self, src=None, app_name=None):
        if src is None:
            src = os.path.dirname(os.path.abspath(__file__))
        self.src = src
        self.app_name = app_name or ""
        self.dst = ""

    def copy_boilerplate(self, exclude=EXCLUDE):
        for root, dirs, files in os.walk(self.src):
            rel_path = os.path.relpath(root, self.src)
            if rel_path == "":
                rel_path = ""
            target_root = os.path.join(self.dst, rel_path)
            dirs[:] = [d for d in dirs if d not in exclude]
            if not os.path.exists(target_root):
                os.makedirs(target_root)
            for file in files:
                if file in exclude:
                    continue
                src_file = os.path.join(root, file)
                dst_file = os.path.join(target_root, file)
                if os.path.islink(src_file):
                    if not os.path.exists(os.readlink(src_file)):
                        continue
                if not os.path.isfile(src_file):
                    continue
                try:
                    shutil.copy2(src_file, dst_file)
                except Exception:
                    continue

    def replace_in_files(self):
        pattern = re.compile(REPLACE_PATTERN, re.IGNORECASE)
        for root, _, files in os.walk(self.dst):
            for file in files:
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                        content = f.read()

                    def repl(match):
                        t = match.group(0)
                        if t.isupper():
                            return self.app_name.upper()
                        if t[0].isupper():
                            return self.app_name.capitalize()
                        return self.app_name

                    new_content = pattern.sub(repl, content)
                    if new_content != content:
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                except Exception:
                    pass

    def git_init_commit(self):
        try:
            subprocess.run(
                ["git", "init"],
                cwd=self.dst,
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
            subprocess.run(
                ["git", "add", "-A"],
                cwd=self.dst,
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
            subprocess.run(
                ["git", "commit", "-m", f"Initial commit for {self.app_name} project"],
                cwd=self.dst,
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
        except Exception:
            pass

    def pnpm_install(self):
        try:
            subprocess.run(
                ["pnpm", "i"],
                cwd=self.dst,
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.PIPE,
            )
        except subprocess.CalledProcessError as e:
            if e.stderr:
                console.print(f"[red]pnpm install failed:[/]")
                console.print(e.stderr.decode(errors="ignore"))

    def set_dst(self):
        self.dst = os.path.join(os.getcwd(), self.app_name)

    def setup(self):
        self.set_dst()
        if not os.path.exists(self.src):
            console.print(f"[red]Source boilerplate not found: {self.src}[/]")
            sys.exit(1)
        if os.path.exists(self.dst):
            console.print(f"[red]Target directory already exists: {self.dst}[/]")
            sys.exit(1)
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            transient=True,
        ) as progress:
            task = progress.add_task(description="Adding boilerplate...", total=None)
            self.copy_boilerplate()
        console.print("[green]✔ Added boilerplate")
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            transient=True,
        ) as progress:
            task = progress.add_task(description="Modifying files...", total=None)
            self.replace_in_files()
        console.print("[green]✔ Modified files")
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            transient=True,
        ) as progress:
            task = progress.add_task(description="Initializing git...", total=None)
            self.git_init_commit()
        console.print("[green]✔ Initialized git")
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            transient=True,
        ) as progress:
            task = progress.add_task(description="Installing packages...", total=None)
            self.pnpm_install()
        console.print("[green]✔ Packages installed")
        console.print(f"[bold green]Your base project is ready ![/]")


def main():
    if len(sys.argv) != 2:
        console.print(f"[red]Usage: command <app_name>[/]")
        sys.exit(1)
    NewApp(app_name=sys.argv[1]).setup()


if __name__ == "__main__":
    main()
