"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle({
  variant = "default",
  className = "",
}: {
  variant?: "default" | "outline" | "ghost" | "secondary";
  className?: string;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <Button
      variant={variant}
      size="icon"
      aria-label="Toggle theme"
      className={className}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="relative h-5 w-5 flex items-center justify-center">
        <Sun className="absolute h-5 w-5 transition-all duration-300 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </div>
    </Button>
  );
}
