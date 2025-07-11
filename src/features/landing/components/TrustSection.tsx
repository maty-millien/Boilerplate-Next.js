import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Globe, Star, Users } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Trusted by developers worldwide
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Join thousands of developers who ship faster
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what the community is
            saying about our boilerplate.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-2">
                <Star className="size-8 text-yellow-500 fill-yellow-500" />
              </div>
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm text-muted-foreground">
                Developer Rating
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-2">
                <Users className="size-8 text-blue-500" />
              </div>
              <div className="text-2xl font-bold">15,000+</div>
              <div className="text-sm text-muted-foreground">
                Happy Developers
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-2">
                <Download className="size-8 text-green-500" />
              </div>
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-2">
                <Globe className="size-8 text-purple-500" />
              </div>
              <div className="text-2xl font-bold">120+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Used by developers at these companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
              Google
            </div>
            <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
              Microsoft
            </div>
            <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
              Netflix
            </div>
            <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
              Spotify
            </div>
            <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
              Airbnb
            </div>
            <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
              Uber
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
