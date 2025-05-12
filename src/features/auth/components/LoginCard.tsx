import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GoogleSignInButton from "@/features/auth/components/GoogleSignInButton";

export default function LoginCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Sign In
        </CardTitle>
        <CardDescription>
          Choose your preferred sign-in method below.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <GoogleSignInButton />
      </CardContent>
    </Card>
  );
}
