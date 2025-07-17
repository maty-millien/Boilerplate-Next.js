import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Github, Rocket, Sparkles, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-background via-background to-background dark:from-background dark:via-background dark:to-background h-220 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_55%_at_center,white_50%,transparent_85%)]" />

      {/* Animated central blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-hero-section)" }}
      />

      <div className="relative text-center max-w-5xl mx-auto px-4">
        {/* Eyebrow */}
        <Badge className="mb-6 bg-primary/10 backdrop-blur-xs py-1.5 px-3 rounded-full text-primary-foreground border border-primary">
          <Sparkles className="size-4 mr-1.5" />
          New Features
        </Badge>

        {/* Main Headlines */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
          Build{" "}
          <span
            className="bg-clip-text text-transparent font-extrabold"
            style={{ backgroundImage: "var(--gradient-hero-section)" }}
          >
            production-ready
          </span>
          <br />
          Next.js apps in minutes
        </h1>

        <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Skip the tedious setup and focus on what matters. Our premium
          boilerplate includes authentication, database, payments, and
          everything you need to launch your SaaS.
        </p>

        {/* Key Features */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="flex items-center gap-2 text-sm bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <Code className="size-4 text-primary" />
            TypeScript + Tailwind
          </div>
          <div className="flex items-center gap-2 text-sm bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <Rocket className="size-4 text-primary" />
            Auth + Database
          </div>
          <div className="flex items-center gap-2 text-sm bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <Zap className="size-4 text-primary" />
            Payments Ready
          </div>
        </div>

        {/* Enhanced CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center bg-background/50 backdrop-blur-sm rounded-2xl w-fit mx-auto p-3">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all"
          >
            Get Started Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="secondary">
            <Github />
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
