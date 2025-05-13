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

  if (!session) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      <Card className="w-[350px]">
        <CardContent className="flex flex-col items-center justify-center gap-4">
          {session.user.image && (
            <Image
              src={session.user.image}
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full"
            />
          )}
          <h1 className="text-2xl font-bold">
            Hello, {session.user.name || session.user.email} !
          </h1>
          <div className="flex gap-2">
            <Button onClick={() => signOut()}>Logout</Button>
            <ThemeToggle variant="outline" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
