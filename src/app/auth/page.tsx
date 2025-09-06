"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ThemeToggle from "@/components/ui/theme-toggle";
import { createAuthClient } from "better-auth/react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const { signIn, useSession } = createAuthClient();

export default function AuthPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && session) {
      const redirectPath =
        localStorage.getItem("redirectAfterAuth") || "/dashboard";
      localStorage.removeItem("redirectAfterAuth");
      router.replace(redirectPath);
    }
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
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Sign In
          </CardTitle>
          <CardDescription>
            Choose your preferred sign-in method below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => signIn.social({ provider: "google" })}
            className="w-full"
          >
            <FcGoogle className="mr-2 h-4 w-4" />
            Login with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
