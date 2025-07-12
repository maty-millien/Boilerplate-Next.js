"use client";

import { CTASection } from "@/features/landing/components/cta-section";
import { FAQSection } from "@/features/landing/components/faq-section";
import { FeaturesSection } from "@/features/landing/components/features-section";
import { Footer } from "@/features/landing/components/footer";
import { HeroSection } from "@/features/landing/components/hero-section";
import { Navbar } from "@/features/landing/components/navbar";
import { TestimonialsSection } from "@/features/landing/components/testimonials-section";
import { TrustSection } from "@/features/landing/components/trust-section";

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
