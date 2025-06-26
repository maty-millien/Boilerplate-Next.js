import os
import shutil
import sys
import re
import subprocess
from rich.console import Console
from rich.progress import Progress, SpinnerColumn, TextColumn
from contextlib import suppress

REPLACE_PATTERN = "boilerplate"
EXCLUDE = {".git", "node_modules", ".next", ".DS_Store", "setup.py"}

console = Console()


class NewApp:
    def __init__(self, src=None, app_name=None):
        self.src = src or os.path.dirname(os.path.abspath(__file__))
        self.app_name = app_name or ""
        self.dst = os.path.join(os.getcwd(), self.app_name)

    def copy_boilerplate(self, exclude=EXCLUDE):
        for root, dirs, files in os.walk(self.src):
            rel_path = os.path.relpath(root, self.src)
            target_root = os.path.join(self.dst, rel_path if rel_path != "." else "")
            dirs[:] = [d for d in dirs if d not in exclude]
            os.makedirs(target_root, exist_ok=True)
            for file in files:
                if file in exclude:
                    continue
                src_file = os.path.join(root, file)
                dst_file = os.path.join(target_root, file)
                if os.path.islink(src_file) and not os.path.exists(
                    os.readlink(src_file)
                ):
                    continue
                if os.path.isfile(src_file):
                    with suppress(Exception):
                        shutil.copy2(src_file, dst_file)

    def replace_in_files(self):
        pattern = re.compile(REPLACE_PATTERN, re.IGNORECASE)
        for root, _, files in os.walk(self.dst):
            for file in files:
                file_path = os.path.join(root, file)
                with suppress(Exception):
                    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                        content = f.read()

                    def repl(m):
                        t = m.group(0)
                        return (
                            self.app_name.upper()
                            if t.isupper()
                            else (
                                self.app_name.capitalize()
                                if t[0].isupper()
                                else self.app_name
                            )
                        )

                    new_content = pattern.sub(repl, content)
                    if new_content != content:
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(new_content)

    def git_init_commit(self):
        with suppress(Exception):
            subprocess.run(
                f"git init && git add -A && git commit -m 'Initial commit for {self.app_name} project'",
                cwd=self.dst,
                shell=True,
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )

    def install_packages(self):
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
                console.print("[red]Failed to install packages:[/]")
                console.print(e.stderr.decode(errors="ignore"))

    def self_update_pnpm(self):
        try:
            subprocess.run(
                ["pnpm", "self-update"],
                cwd=self.dst,
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.PIPE,
            )
        except subprocess.CalledProcessError as e:
            if e.stderr:
                console.print("[red]Failed to update pnpm:[/]")
                console.print(e.stderr.decode(errors="ignore"))

    def run_step(self, func, desc, success):
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console,
            transient=True,
        ) as progress:
            progress.add_task(description=desc, total=None)
            func()
        console.print(success)

    def setup(self):
        if not os.path.exists(self.src):
            console.print(f"[red]Source boilerplate not found: {self.src}[/]")
            sys.exit(1)
        if os.path.exists(self.dst):
            console.print(f"[red]Target directory already exists: {self.dst}[/]")
            sys.exit(1)
        steps = [
            (
                self.copy_boilerplate,
                "Adding boilerplate...",
                "[green]✔ Added boilerplate",
            ),
            (
                self.self_update_pnpm,
                "Updating pnpm...",
                "[green]✔ pnpm updated",
            ),
            (self.replace_in_files, "Modifying files...", "[green]✔ Modified files"),
            (
                self.git_init_commit,
                "Initializing git repository...",
                "[green]✔ Initialized git repository",
            ),
            (
                self.install_packages,
                "Installing packages...",
                "[green]✔ Packages installed",
            ),
        ]
        for func, desc, success in steps:
            self.run_step(func, desc, success)
        console.print(f"[bold green]Your base project is ready ![/]")


def main():
    if len(sys.argv) != 2:
        console.print(f"[red]Usage: command <app_name>[/]")
        sys.exit(1)
    NewApp(app_name=sys.argv[1]).setup()


if __name__ == "__main__":
    main()
