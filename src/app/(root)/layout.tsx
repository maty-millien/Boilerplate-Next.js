import "@/app/(root)/globals.css";
import AuthGuard from "@/app/auth/components/auth-guard";
import { Toaster } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boilerplate",
  description: "Boilerplate",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthGuard>
            <Toaster />
            <Suspense
              fallback={
                <div className="flex h-screen w-full items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              }
            >
              {children}
            </Suspense>
          </AuthGuard>
        </ThemeProvider>
      </body>
    </html>
  );
}
