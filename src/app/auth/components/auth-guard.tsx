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

  const isAuthPage = pathname === "/auth";
  const isHomePage = pathname === "/";
  const isAuthenticated = !!session;

  useEffect(() => {
    if (isPending || !isClient) {
      return;
    }

    if (!isAuthenticated && !isAuthPage && !isHomePage) {
      router.replace("/auth");
    }

    if (isAuthenticated && isAuthPage) {
      router.replace("/dashboard");
    }
  }, [isPending, isClient, isAuthenticated, isAuthPage, isHomePage, router]);

  if (isPending || !isClient) {
    return null;
  }

  if (
    (!isAuthenticated && !isAuthPage && !isHomePage) ||
    (isAuthenticated && isAuthPage)
  ) {
    return null;
  }

  return <>{children}</>;
}
