"use client";

import { Button } from "@/components/ui/button";
import { createAuthClient } from "better-auth/react";

// Create the auth client instance
const { signIn } = createAuthClient(); // Destructure signIn from the client

export default function AuthPage() {
  const handleGoogleSignIn = async () => {
    // Use the destructured signIn function
    await signIn.social({
      provider: "google",
      callbackURL: "/", // Always redirect to homepage after sign-in
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
          Sign In
        </h1>
        <div className="space-y-4">
          <Button
            onClick={handleGoogleSignIn}
            className="w-full"
            variant="outline"
          >
            Sign in with Google
          </Button>
        </div>
        {/* Add email/password form here if needed later */}
      </div>
    </div>
  );
}
