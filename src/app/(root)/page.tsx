"use client";

import { CTASection } from "@/app/(root)/components/cta-section";
import { FAQSection } from "@/app/(root)/components/faq-section";
import { FeaturesSection } from "@/app/(root)/components/features-section";
import { Footer } from "@/app/(root)/components/footer";
import { HeroSection } from "@/app/(root)/components/hero-section";
import { Navbar } from "@/app/(root)/components/navbar";
import { TestimonialsSection } from "@/app/(root)/components/testimonials-section";
import { TrustSection } from "@/app/(root)/components/trust-section";

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
