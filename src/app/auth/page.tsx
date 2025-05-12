"use client";

import LoginCard from "@/features/auth/components/LoginCard";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background dark:bg-gray-900 p-4">
      <LoginCard />
    </div>
  );
}
