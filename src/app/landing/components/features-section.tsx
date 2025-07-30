import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Lock,
  Palette,
  Rocket,
  Settings,
  Shield,
  Star,
  Zap,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 bg-background">
      {/* Background Elements */}

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 backdrop-blur-xs py-1.5 px-3 rounded-full dark:text-primary-foreground text-primary border border-primary">
            <Star className="size-3 mr-1" />
            Core Features
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Everything you need to{" "}
            <span
              className="bg-clip-text text-transparent transition-all duration-500 hover:tracking-wider"
              style={{ backgroundImage: "var(--gradient-hero-section)" }}
            >
              ship faster
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Skip months of development with our production-ready boilerplate.
            Built with modern tools and best practices.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
          {/* Database Ready */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 h-full flex flex-col space-y-3">
              <div className="p-3 bg-green-500/10 rounded-xl w-fit mb-2 transition-all duration-300 group-hover:bg-green-500/20">
                <Database className="size-7 text-green-600 transition-transform group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-bold">Database & ORM</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                Prisma ORM with PostgreSQL, migrations, and optimized queries
                ready to use.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs text-foreground">
                  Prisma
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  PostgreSQL
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  Migrations
                </Badge>
              </div>
            </div>
          </div>

          {/* Modern UI */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 h-full flex flex-col space-y-3">
              <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-2 transition-all duration-300 group-hover:bg-purple-500/20">
                <Palette className="size-7 text-purple-600 transition-transform group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-bold">Beautiful UI</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                50+ pre-built components with Tailwind CSS and shadcn/ui for
                rapid development.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs text-foreground">
                  Tailwind CSS
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  50+ Components
                </Badge>
              </div>
            </div>
          </div>

          {/* Authentication - Large Feature */}
          <div className="lg:col-span-2 lg:row-span-2 group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 h-full flex flex-col space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-2 transition-all duration-300 group-hover:bg-primary/20">
                <Lock className="size-8 text-primary transition-transform group-hover:scale-110" />
              </div>

              <h3 className="text-2xl font-bold">Complete Authentication</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                Full-featured auth system with social logins, email
                verification, password reset, and role-based access control.
                Ready to use.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs text-foreground">
                  OAuth 2.0
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  JWT Tokens
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  Role Management
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  Session Control
                </Badge>
              </div>
            </div>
          </div>

          {/* Type Safety */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 h-full flex flex-col space-y-3">
              <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-2 transition-all duration-300 group-hover:bg-blue-500/20">
                <Code className="size-7 text-blue-600 transition-transform group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-bold">TypeScript</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                Full type safety across your entire stack with TypeScript and
                Zod validation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs text-foreground">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  Zod
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  tRPC
                </Badge>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 h-full flex flex-col space-y-3">
              <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-2 transition-all duration-300 group-hover:bg-orange-500/20">
                <Zap className="size-7 text-orange-600 transition-transform group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-bold">Optimized</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                Next.js 14 with App Router, server components, and performance
                optimizations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs text-foreground">
                  App Router
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  Server Components
                </Badge>
              </div>
            </div>
          </div>

          {/* Deployment Ready */}
          <div className="lg:col-span-2 group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 h-full flex flex-col space-y-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl w-fit transition-all duration-300 group-hover:bg-emerald-500/20">
                <Rocket className="size-7 text-emerald-600 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold">Deploy Anywhere</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                Configured for Vercel, Docker, and cloud providers. CI/CD
                pipelines included for seamless deployments.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs text-foreground">
                  Vercel
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  Docker
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  CI/CD
                </Badge>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 h-full flex flex-col space-y-3">
              <div className="p-3 bg-red-500/10 rounded-xl w-fit mb-2 transition-all duration-300 group-hover:bg-red-500/20">
                <Shield className="size-7 text-red-600 transition-transform group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-bold">Secure</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                Built-in security features, CSRF protection, and secure headers
                configured.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs text-foreground">
                  CSRF Protection
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  Secure Headers
                </Badge>
              </div>
            </div>
          </div>

          {/* Developer Experience */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 h-full flex flex-col space-y-3">
              <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-2 transition-all duration-300 group-hover:bg-indigo-500/20">
                <Settings className="size-7 text-indigo-600 transition-transform group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-bold">Great DX</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                ESLint, Prettier, hot reload, and debugging tools configured for
                productivity.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs text-foreground">
                  ESLint
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  Prettier
                </Badge>
                <Badge variant="outline" className="text-xs text-foreground">
                  Hot Reload
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
