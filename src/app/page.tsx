"use client";

import { CTASection } from "@/app/landing/components/cta-section";
import { FAQSection } from "@/app/landing/components/faq-section";
import { FeaturesSection } from "@/app/landing/components/features-section";
import { Footer } from "@/app/landing/components/footer";
import { HeroSection } from "@/app/landing/components/hero-section";
import { Navbar } from "@/app/landing/components/navbar";
import { TestimonialsSection } from "@/app/landing/components/testimonials-section";
import { TrustSection } from "@/app/landing/components/trust-section";

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
