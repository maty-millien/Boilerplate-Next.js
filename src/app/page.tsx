"use client";

import { createAuthClient } from "better-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Create auth client instance (consider moving to a shared file like src/lib/auth-client.ts)
const { useSession } = createAuthClient();

export default function Home() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth");
    }
  }, [session, isPending, router]);

  // Display loading state or welcome message
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
    // Should be redirected by useEffect, but return null briefly to avoid flashing content
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
      </div>
    </main>
  );
}
