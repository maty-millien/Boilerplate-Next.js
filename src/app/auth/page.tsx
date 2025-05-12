"use client";

import LoginCard from "@/features/auth/components/LoginCard";
import ThemeToggle from "@/features/theme/components/ThemeToggle";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <ThemeToggle variant="outline" className="absolute top-4 right-4" />
      <LoginCard />
    </div>
  );
}
