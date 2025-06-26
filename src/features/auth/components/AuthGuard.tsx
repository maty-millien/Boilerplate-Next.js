"use client";

import { createAuthClient } from "better-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { useSession } = createAuthClient();

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = useSession();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isPending && !session && pathname !== "/auth") {
      router.replace("/auth");
    }
  }, [isPending, session, pathname, router]);

  if (!isClient || isPending) {
    return null;
  }

  if (!session && pathname !== "/auth") {
    return null;
  }

  if (session && pathname === "/auth") {
    router.replace("/dashboard");
    return null;
  }

  return <>{children}</>;
}
