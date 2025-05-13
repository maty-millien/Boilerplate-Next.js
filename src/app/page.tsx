"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "@/features/theme/components/ThemeToggle";
import { createAuthClient } from "better-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { useSession, signOut } = createAuthClient();

export default function Home() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth");
    }
  }, [session, isPending, router]);

  if (!session) return null;

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
            <Button onClick={() => signOut()} className="flex-1">
              Logout
            </Button>
            <ThemeToggle variant="outline" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
