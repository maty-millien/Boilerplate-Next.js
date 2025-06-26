"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LogoutButton from "@/features/auth/components/LogoutButton";
import ThemeToggle from "@/features/theme/components/ThemeToggle";
import { createAuthClient } from "better-auth/react";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const { useSession } = createAuthClient();

export default function Home() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session) router.replace("/auth");
  }, [isPending, session, router]);

  if (isPending || !session)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
        <Loader2 className="animate-spin" />
      </div>
    );

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
          <div className="flex gap-2 w-full">
            <Button
              variant="default"
              className="flex-1"
              onClick={() => toast.success("Operation completed successfully!")}
            >
              Click me
            </Button>
            <LogoutButton variant="outline" iconOnly />
            <ThemeToggle variant="outline" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
