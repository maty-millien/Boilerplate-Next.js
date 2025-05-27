import { Button } from "@/components/ui/button";
import { createAuthClient } from "better-auth/react";
import { FcGoogle } from "react-icons/fc";

const { signIn } = createAuthClient();

export default function GoogleSignInButton() {
  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };
  return (
    <Button onClick={handleGoogleSignIn} className="w-full">
      <FcGoogle className="mr-2 h-4 w-4" />
      Sign in with Google
    </Button>
  );
}
