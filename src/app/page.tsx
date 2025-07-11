"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LogoutButton from "@/features/auth/components/LogoutButton";
import ThemeToggle from "@/features/theme/components/ThemeToggle";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      <Card className="w-[350px]">
        <CardContent className="flex flex-col items-center justify-center">
          <div className="flex gap-2 w-full">
            <Button
              variant="default"
              className="flex-1"
              onClick={() => toast.success("Operation completed successfully!")}
            >
              Click me
            </Button>
            <Button variant="outline" onClick={() => router.push("/dashboard")}>
              Dashboard
            </Button>
            <LogoutButton variant="outline" iconOnly />
            <ThemeToggle variant="outline" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
