"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createAuthClient } from "better-auth/react";
import { Loader2 } from "lucide-react";
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

  if (isPending) {
    return (
      <main>
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader2 className="h-12 w-12 animate-spin" />
        </div>
      </main>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
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
            Hello, {session.user.name || session.user.email}!
          </h1>
          <Button onClick={() => signOut()}>Logout</Button>
        </CardContent>
      </Card>
    </div>
  );
}
