"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LogoutButton from "@/features/auth/components/LogoutButton";
import ThemeToggle from "@/features/theme/components/ThemeToggle";
import { createAuthClient } from "better-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const { useSession } = createAuthClient();

export default function Home() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth");
    }
  }, [session, isPending, router]);

  if (!session) return null;

  const handleSuccessToast = () => {
    toast.success("Operation completed successfully!", {
      description: "Your changes have been saved to the database.",
    });
  };

  const handleErrorToast = () => {
    toast.error("Operation failed!", {
      description: "There was an error saving your changes.",
    });
  };

  const handleWarningToast = () => {
    toast.warning("Warning!", {
      description: "Your session will expire in 5 minutes.",
    });
  };

  const handleInfoToast = () => {
    toast.info("Did you know?", {
      description: "Toast notifications can have different styles.",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      <Card className="w-[350px]">
        <CardContent className="flex flex-col items-center justify-center">
          {session.user.image && (
            <Image
              src={session.user.image}
              alt="Profile Picture"
              width={96}
              height={96}
              className="rounded-full mb-4"
            />
          )}
          <h1 className="text-4xl font-bold">{session.user.name}</h1>
          <p className="text-muted-foreground mb-8">{session.user.email}</p>
          <div className="grid grid-cols-2 gap-2 w-full mb-2">
            <Button variant="default" onClick={handleSuccessToast}>
              Success Toast
            </Button>
            <Button variant="destructive" onClick={handleErrorToast}>
              Error Toast
            </Button>
            <Button variant="outline" onClick={handleWarningToast}>
              Warning Toast
            </Button>
            <Button variant="secondary" onClick={handleInfoToast}>
              Info Toast
            </Button>
          </div>
          <div className="flex gap-2 w-full">
            <LogoutButton variant="outline" iconOnly />
            <ThemeToggle variant="outline" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
