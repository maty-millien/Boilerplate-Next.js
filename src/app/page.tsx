"use client";

import { Footer } from "@/app/landing/components/footer";
import { HeroSection } from "@/app/landing/components/hero-section";
import { Navbar } from "@/app/landing/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <Footer />
      </main>
    </>
  );
}
