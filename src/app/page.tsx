"use client";

import { FeaturesSection } from "@/app/landing/components/features-section";
import { Footer } from "@/app/landing/components/footer";
import { HeroSection } from "@/app/landing/components/hero-section";
import { Navbar } from "@/app/landing/components/navbar";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
