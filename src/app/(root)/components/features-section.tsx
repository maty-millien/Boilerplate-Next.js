import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  CreditCard,
  Database,
  Palette,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Everything you need to ship fast
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Stop wasting time on boilerplate code
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Focus on building your unique features while we handle the
            foundation. Our boilerplate comes with everything you need to launch
            a production-ready SaaS.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Authentication */}
          <Card className="relative group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Shield className="size-6 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Secure Authentication</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Problem:</strong> Authentication is complex and
                time-consuming to implement correctly.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Pre-built auth with Google, GitHub,
                and email/password. Includes user management, sessions, and
                security best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">NextAuth.js</Badge>
                <Badge variant="secondary">OAuth</Badge>
                <Badge variant="secondary">JWT</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Database */}
          <Card className="relative group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Database className="size-6 text-green-500" />
                </div>
                <CardTitle className="text-xl">Database Ready</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Problem:</strong> Setting up database schemas and
                migrations is tedious and error-prone.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Prisma ORM with PostgreSQL,
                pre-configured schemas, migrations, and type safety out of the
                box.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Prisma</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Payments */}
          <Card className="relative group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <CreditCard className="size-6 text-purple-500" />
                </div>
                <CardTitle className="text-xl">Payment Integration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Problem:</strong> Payment processing is complex and
                requires extensive testing.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Stripe integration with
                subscriptions, webhooks, and billing management. Start
                monetizing immediately.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Stripe</Badge>
                <Badge variant="secondary">Webhooks</Badge>
                <Badge variant="secondary">Subscriptions</Badge>
              </div>
            </CardContent>
          </Card>

          {/* UI Components */}
          <Card className="relative group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-pink-500/10 rounded-lg">
                  <Palette className="size-6 text-pink-500" />
                </div>
                <CardTitle className="text-xl">Beautiful UI</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Problem:</strong> Building a consistent, accessible UI
                from scratch takes months.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> 50+ pre-built components with
                Tailwind CSS, shadcn/ui, and dark mode support.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">shadcn/ui</Badge>
                <Badge variant="secondary">Dark Mode</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card className="relative group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Zap className="size-6 text-orange-500" />
                </div>
                <CardTitle className="text-xl">Optimized Performance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Problem:</strong> Poor performance hurts user experience
                and SEO rankings.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Next.js 14 with App Router, server
                components, and optimized builds for lightning-fast performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js 14</Badge>
                <Badge variant="secondary">App Router</Badge>
                <Badge variant="secondary">SSR</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Production Ready */}
          <Card className="relative group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Rocket className="size-6 text-red-500" />
                </div>
                <CardTitle className="text-xl">Production Ready</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Problem:</strong> Deploying to production involves
                countless configuration headaches.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> One-click deployment with Vercel,
                Docker support, and environment configuration templates.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Vercel</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">CI/CD</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">
            Plus dozens of other features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg">
              <CheckCircle className="size-5 text-green-500" />
              <span>Email Templates</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg">
              <CheckCircle className="size-5 text-green-500" />
              <span>Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg">
              <CheckCircle className="size-5 text-green-500" />
              <span>SEO Optimization</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg">
              <CheckCircle className="size-5 text-green-500" />
              <span>API Documentation</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg">
              <CheckCircle className="size-5 text-green-500" />
              <span>Testing Setup</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg">
              <CheckCircle className="size-5 text-green-500" />
              <span>Analytics Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
