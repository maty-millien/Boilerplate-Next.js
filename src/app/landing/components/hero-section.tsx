import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Github, Rocket, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-background via-background to-background dark:from-background dark:via-background dark:to-background h-220 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Blue Orb */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-chart-1/30 to-chart-2/20 rounded-full blur-3xl animate-float" />

        {/* Large Purple Orb */}
        <div className="absolute top-32 right-1/4 w-80 h-80 bg-gradient-to-br from-chart-4/25 to-chart-5/20 rounded-full blur-3xl animate-float-reverse" />

        {/* Medium Blue-Purple Orb */}
        <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-gradient-to-br from-chart-2/20 to-chart-4/25 rounded-full blur-2xl animate-float-delayed" />

        {/* Small Accent Orbs */}
        <div className="absolute top-1/2 left-1/6 w-48 h-48 bg-gradient-to-br from-chart-5/20 to-chart-1/15 rounded-full blur-2xl animate-float-slow" />

        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-br from-chart-2/15 to-chart-5/20 rounded-full blur-2xl animate-float-extra-slow" />
      </div>

      <div className="relative text-center max-w-5xl mx-auto px-4">
        {/* Eyebrow */}
        <Badge
          variant="outline"
          className="mb-10 px-4 py-2 text-sm font-medium border-foreground/30 rounded-full"
        >
          <Zap className="size-4 mr-2" />
          Ship faster with premium boilerplate
        </Badge>

        {/* Main Headlines */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-10">
          Build{" "}
          <span className="bg-gradient-to-r from-primary to-chart-4 dark:from-primary dark:to-chart-5 bg-clip-text text-transparent">
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
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code className="size-4" />
            TypeScript + Tailwind
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Rocket className="size-4" />
            Auth + Database
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="size-4" />
            Payments Ready
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg">
            Get Started Now
            <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline">
            <Github className="mr-2" />
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
