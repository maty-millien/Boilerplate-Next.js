import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/20 text-white border-white/20"
          >
            <Zap className="size-4 mr-2" />
            Limited Time Offer
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to ship your SaaS in record time?
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of developers who have already accelerated their
            development with our premium boilerplate. Stop wasting time on setup
            and start building features that matter.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-4">
                    Everything you need, nothing you don&apos;t
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-1 bg-white/20 rounded-full">
                        <Shield className="size-4" />
                      </div>
                      <span>Production-ready authentication & security</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-1 bg-white/20 rounded-full">
                        <Zap className="size-4" />
                      </div>
                      <span>Stripe payments & subscription management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-1 bg-white/20 rounded-full">
                        <Clock className="size-4" />
                      </div>
                      <span>Lifetime updates & premium support</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-5xl font-bold mb-2">$199</div>
                    <div className="text-lg text-blue-100">
                      One-time payment
                    </div>
                    <div className="text-sm text-blue-200">
                      Save 40+ hours of development
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className="w-full bg-white text-blue-600 hover:bg-blue-50 text-lg py-6"
                    >
                      Get Started Now
                      <ArrowRight className="ml-2 size-5" />
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-white/30 text-white hover:bg-white/10 text-lg py-6"
                    >
                      View Live Demo
                    </Button>
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-blue-200">
                    <div>✓ 30-day money-back guarantee</div>
                    <div>✓ Instant access to private repository</div>
                    <div>✓ Lifetime updates included</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
            <div className="size-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>2,847 developers have purchased this month</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold mb-2">30-Day</div>
            <div className="text-blue-200">Money-Back Guarantee</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">24/7</div>
            <div className="text-blue-200">Developer Support</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">Lifetime</div>
            <div className="text-blue-200">Updates & Improvements</div>
          </div>
        </div>
      </div>
    </section>
  );
}
