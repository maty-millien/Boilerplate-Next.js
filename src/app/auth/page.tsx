"use client";

import LoginCard from "@/app/auth/components/login-card";
import ThemeToggle from "@/components/theme/theme-toggle";
import { createAuthClient } from "better-auth/react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { useSession } = createAuthClient();

export default function AuthPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && session) router.replace("/");
  }, [isPending, session, router]);

  if (isPending || session)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
        <Loader2 className="animate-spin" />
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ThemeToggle variant="outline" className="absolute top-4 right-4" />
      <LoginCard />
    </div>
  );
}
