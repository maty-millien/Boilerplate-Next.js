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
    if (isPending || !isClient) {
      return;
    }

    const isAuthPage = pathname === "/auth";
    const isHomePage = pathname === "/";

    if (!session && !isAuthPage && !isHomePage) {
      router.replace("/auth");
    }

    if (session && isAuthPage) {
      router.replace("/dashboard");
    }
  }, [isPending, session, pathname, router, isClient]);

  if (isPending || !isClient) {
    return null;
  }

  const isAuthPage = pathname === "/auth";
  const isHomePage = pathname === "/";

  if (!session && !isAuthPage && !isHomePage) {
    return null;
  }

  if (session && isAuthPage) {
    return null;
  }

  return <>{children}</>;
}
