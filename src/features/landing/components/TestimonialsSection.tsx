import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer",
      company: "TechCorp",
      avatar: "/api/placeholder/40/40",
      content:
        "This boilerplate saved me 3 weeks of development time. The authentication system is rock-solid and the code quality is exceptional.",
      rating: 5,
      initials: "SC",
    },
    {
      name: "Mike Rodriguez",
      role: "Founder",
      company: "StartupFlow",
      avatar: "/api/placeholder/40/40",
      content:
        "I&apos;ve launched 3 SaaS products using this boilerplate. The payment integration and user management features are game-changers.",
      rating: 5,
      initials: "MR",
    },
    {
      name: "Emily Johnson",
      role: "Fullstack Developer",
      company: "DevStudio",
      avatar: "/api/placeholder/40/40",
      content:
        "The TypeScript setup and component library are exactly what I needed. Clean, maintainable code that scales beautifully.",
      rating: 5,
      initials: "EJ",
    },
    {
      name: "David Kim",
      role: "Tech Lead",
      company: "InnovateLab",
      avatar: "/api/placeholder/40/40",
      content:
        "Best investment I&apos;ve made as a developer. The documentation is clear, and the codebase follows all the best practices.",
      rating: 5,
      initials: "DK",
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      company: "GrowthCo",
      avatar: "/api/placeholder/40/40",
      content:
        "Our development velocity increased by 300% after switching to this boilerplate. The team loves the developer experience.",
      rating: 5,
      initials: "LW",
    },
    {
      name: "Alex Turner",
      role: "Indie Hacker",
      company: "Solo Dev",
      avatar: "/api/placeholder/40/40",
      content:
        "Perfect for solo developers like me. I can focus on building features instead of wrestling with authentication and database setup.",
      rating: 5,
      initials: "AT",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Loved by developers worldwide
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Don&apos;t just take our word for it
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of developers who have shipped faster and built
            better products with our boilerplate.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="size-8 text-blue-500/20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-blue-500/10 text-blue-500 font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-muted-foreground">Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
