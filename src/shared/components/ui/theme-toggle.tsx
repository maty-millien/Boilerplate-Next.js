"use client";

import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeToggleProps {
  variant?: "default" | "outline" | "ghost" | "secondary";
  className?: string;
}

export default function ThemeToggle({
  variant = "default",
  className = "",
}: ThemeToggleProps) {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => setTheme(newTheme));
  };

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size="icon"
          aria-label="Toggle theme"
          className={className}
        >
          <div className="relative h-5 w-5 flex items-center justify-center">
            <Sun className="absolute h-5 w-5 transition-all duration-300 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
