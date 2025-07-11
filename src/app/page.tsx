"use client";

import { CTASection } from "@/features/landing/components/CTASection";
import { FAQSection } from "@/features/landing/components/FAQSection";
import { FeaturesSection } from "@/features/landing/components/FeaturesSection";
import { Footer } from "@/features/landing/components/Footer";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { Navbar } from "@/features/landing/components/Navbar";
import { TestimonialsSection } from "@/features/landing/components/TestimonialsSection";
import { TrustSection } from "@/features/landing/components/TrustSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
