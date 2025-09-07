"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative min-h-[80dvh] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_55%_at_center,white_10%,transparent_85%)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-primary to-chart-4" />

      <ThemeToggle variant="ghost" className="absolute top-4 right-4" />

      <section className="relative z-10 mx-auto w-full max-w-3xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-3 py-1.5 text-primary backdrop-blur-xs">
          <Badge className="bg-transparent border-0 p-0 text-primary">
            404
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Oops! Page not found.
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          The link you followed may be broken, or the page may have been
          removed. Try heading back home or going back.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => {
              if (typeof window !== "undefined" && window.history.length > 1) {
                router.back();
              } else {
                router.push("/");
              }
            }}
            variant="ghost"
          >
            <ArrowLeft className="size-4" />
            Go back
          </Button>
          <Button onClick={() => router.push("/")}>
            <Home className="size-4" />
            Home
          </Button>
        </div>
      </section>
    </main>
  );
}
