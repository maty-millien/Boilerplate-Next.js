import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createAuthClient } from "better-auth/react";
import { LogOutIcon } from "lucide-react";
import { useState } from "react";

const { signOut } = createAuthClient();

export default function LogoutButton({
  className = "",
  variant = "default",
  iconOnly = false,
}: {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  iconOnly?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    signOut();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={className}
          variant={variant}
          size={iconOnly ? "icon" : "default"}
        >
          {iconOnly ? <LogOutIcon /> : "Logout"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm logout</DialogTitle>
          <DialogDescription>
            Are you sure you want to logout from your account?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
