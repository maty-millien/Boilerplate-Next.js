import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Database,
  Globe,
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

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 backdrop-blur-xs py-1 px-3 rounded-full text-primary-foreground border border-primary">
            <Star className="size-3 mr-1" />
            Core Features
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Everything you need to{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero-section)" }}
            >
              ship faster
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Skip months of development with our production-ready boilerplate.
            Built with modern tools and best practices.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Authentication - Large Feature */}
          <div className="lg:col-span-2 lg:row-span-2 group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6">
                <Lock className="size-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Complete Authentication
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full-featured auth system with social logins, email
                verification, password reset, and role-based access control.
                Ready to use.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary text-xs rounded-full">
                  OAuth 2.0
                </span>
                <span className="px-3 py-1 bg-secondary text-xs rounded-full">
                  JWT Tokens
                </span>
                <span className="px-3 py-1 bg-secondary text-xs rounded-full">
                  Role Management
                </span>
                <span className="px-3 py-1 bg-secondary text-xs rounded-full">
                  Session Control
                </span>
              </div>

              <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                <span>Explore auth features</span>
                <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Database Ready */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="p-3 bg-green-500/10 rounded-xl w-fit mb-4">
                <Database className="size-6 text-green-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">Database & ORM</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Prisma ORM with PostgreSQL, migrations, and optimized queries
                ready to use.
              </p>
            </div>
          </div>

          {/* Modern UI */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-4">
                <Palette className="size-6 text-purple-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">Beautiful UI</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                50+ pre-built components with Tailwind CSS and shadcn/ui for
                rapid development.
              </p>
            </div>
          </div>

          {/* Type Safety */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-4">
                <Code className="size-6 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">TypeScript</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full type safety across your entire stack with TypeScript and
                Zod validation.
              </p>
            </div>
          </div>

          {/* Performance */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-4">
                <Zap className="size-6 text-orange-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">Optimized</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Next.js 14 with App Router, server components, and performance
                optimizations.
              </p>
            </div>
          </div>

          {/* Deployment Ready */}
          <div className="lg:col-span-2 group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl w-fit">
                  <Rocket className="size-6 text-emerald-600" />
                </div>
                <Globe className="size-5 text-muted-foreground" />
              </div>

              <h3 className="text-xl font-bold mb-3">Deploy Anywhere</h3>
              <p className="text-muted-foreground leading-relaxed">
                Configured for Vercel, Docker, and cloud providers. CI/CD
                pipelines included for seamless deployments.
              </p>

              <div className="flex items-center text-sm text-emerald-600 font-medium mt-4 group-hover:gap-2 transition-all">
                <span>View deployment guides</span>
                <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="p-3 bg-red-500/10 rounded-xl w-fit mb-4">
                <Shield className="size-6 text-red-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">Secure</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Built-in security features, CSRF protection, and secure headers
                configured.
              </p>
            </div>
          </div>

          {/* Developer Experience */}
          <div className="group relative bg-muted backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-4">
                <Settings className="size-6 text-indigo-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">Great DX</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ESLint, Prettier, hot reload, and debugging tools configured for
                productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
