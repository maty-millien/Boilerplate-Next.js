"use client";

import { Button } from "@/components/ui/button";
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

  if (isPending) {
    return (
      <main>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      </main>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        {session.user.image && (
          <Image
            src={session.user.image}
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
        <h1 className="text-4xl font-bold">
          Hello, {session.user.name || session.user.email}!
        </h1>
        <Button variant="destructive" onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    </main>
  );
}
