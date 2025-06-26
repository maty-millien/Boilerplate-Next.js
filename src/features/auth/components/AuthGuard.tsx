"use client";

import { createAuthClient } from "better-auth/react";
import { Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const { useSession } = createAuthClient();

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session && pathname !== "/auth") router.replace("/auth");
  }, [isPending, session, router, pathname]);

  if (isPending || (!session && pathname !== "/auth")) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
