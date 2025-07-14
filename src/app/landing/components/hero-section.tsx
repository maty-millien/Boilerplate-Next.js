import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Github, Rocket, Sparkles, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-background via-background to-background dark:from-background dark:via-background dark:to-background h-220 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_55%_at_center,white_50%,transparent_85%)]" />

      {/* Large central blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-hero-section)" }}
      />

      <div className="relative text-center max-w-5xl mx-auto px-4">
        {/* Eyebrow */}
        <Badge className="mb-10 bg-primary/10 backdrop-blur-xs py-1 px-2 rounded-full text-primary-foreground border border-primary">
          <Sparkles />
          New Features
        </Badge>

        {/* Main Headlines */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-10">
          Build{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-hero-section)" }}
          >
            production-ready
          </span>
          <br />
          Next.js apps in minutes
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Skip the tedious setup and focus on what matters. Our premium
          boilerplate includes authentication, database, payments, and
          everything you need to launch your SaaS.
        </p>

        {/* Key Features */}
        <div className="flex flex-wrap justify-center gap-12 mb-10">
          <div className="flex items-center gap-2 text-sm">
            <Code className="size-4" />
            TypeScript + Tailwind
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Rocket className="size-4" />
            Auth + Database
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="size-4" />
            Payments Ready
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg">
            Get Started Now
            <ArrowRight />
          </Button>
          <Button size="lg" variant="outline" className="backdrop-blur-xs">
            <Github />
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
