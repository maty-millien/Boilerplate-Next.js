import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Github, Rocket, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Blue Orb */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-full blur-3xl animate-float" />

        {/* Large Purple Orb */}
        <div className="absolute top-32 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/25 to-purple-600/20 rounded-full blur-3xl animate-float-reverse" />

        {/* Medium Blue-Purple Orb */}
        <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-500/25 rounded-full blur-2xl animate-float-delayed" />

        {/* Small Accent Orbs */}
        <div className="absolute top-1/2 left-1/6 w-48 h-48 bg-gradient-to-br from-purple-600/20 to-blue-500/15 rounded-full blur-2xl animate-float-slow" />

        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-br from-blue-700/15 to-purple-700/20 rounded-full blur-2xl animate-float-extra-slow" />
      </div>

      <div className="container relative mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="text-center max-w-5xl mx-auto">
          {/* Eyebrow */}
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium"
          >
            <Zap className="size-4 mr-2" />
            Ship faster with premium boilerplate
          </Badge>

          {/* Main Headlines */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Build{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
              production-ready
            </span>
            <br />
            Next.js apps in minutes
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Skip the tedious setup and focus on what matters. Our premium
            boilerplate includes authentication, database, payments, and
            everything you need to launch your SaaS.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Now
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Github className="mr-2 size-5" />
              View Demo
            </Button>
          </div>

          {/* Product Preview */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-1 rounded-3xl">
              <CardContent className="p-1">
                <div className="bg-gradient-to-br from-slate-100/80 to-slate-200/80 dark:from-slate-800/80 dark:to-slate-900/80 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="size-3 bg-red-500 rounded-full"></div>
                    <div className="size-3 bg-yellow-500 rounded-full"></div>
                    <div className="size-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-6 text-left">
                    <pre className="text-green-400 text-sm font-mono">
                      <span className="text-gray-500">$</span> npx
                      create-next-app --template premium-boilerplate
                      <br />
                      <span className="text-blue-400">✓</span> Installing
                      dependencies...
                      <br />
                      <span className="text-blue-400">✓</span> Setting up
                      authentication...
                      <br />
                      <span className="text-blue-400">✓</span> Configuring
                      database...
                      <br />
                      <span className="text-green-400">✓</span> Ready to launch!
                      🚀
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
