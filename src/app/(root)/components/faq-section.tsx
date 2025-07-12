import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function FAQSection() {
  const faqs = [
    {
      question: "What&apos;s included in the boilerplate?",
      answer:
        "The boilerplate includes everything you need to launch a SaaS: Next.js 14 with App Router, TypeScript, Tailwind CSS, shadcn/ui components, Prisma ORM with PostgreSQL, NextAuth.js for authentication, Stripe for payments, email templates, admin dashboard, SEO optimization, testing setup, and comprehensive documentation.",
    },
    {
      question: "How do I get started after purchase?",
      answer:
        "After purchase, you&apos;ll receive immediate access to the private GitHub repository. Clone the repo, follow the setup guide in the README, configure your environment variables, and you&apos;ll be ready to start building. The entire setup takes less than 10 minutes.",
    },
    {
      question: "Do I need to pay for hosting and third-party services?",
      answer:
        "The boilerplate is designed to work with free tiers initially. You can deploy to Vercel for free, use Supabase&apos;s free PostgreSQL database, and Stripe has no monthly fees. As you scale, you&apos;ll need to upgrade to paid plans based on your usage.",
    },
    {
      question: "Can I customize the design and components?",
      answer:
        "Absolutely! The boilerplate uses Tailwind CSS and shadcn/ui components, making it highly customizable. You can modify colors, fonts, layouts, and components to match your brand. All components are built with customization in mind.",
    },
    {
      question: "Is there ongoing support and updates?",
      answer:
        "Yes! You get lifetime updates to the boilerplate, including new features, security patches, and dependency updates. We also provide email support and maintain an active community Discord server where you can get help and share tips.",
    },
    {
      question: "What if I&apos;m not satisfied with the purchase?",
      answer:
        "We offer a 30-day money-back guarantee. If you&apos;re not completely satisfied with the boilerplate, contact us within 30 days of purchase for a full refund. We&apos;re confident you&apos;ll love it!",
    },
    {
      question: "Can I use this for client projects?",
      answer:
        "Yes, the license allows you to use the boilerplate for unlimited personal and commercial projects, including client work. You can build and sell as many applications as you want using this boilerplate.",
    },
    {
      question: "How is this different from other boilerplates?",
      answer:
        "Our boilerplate focuses on production-ready code with best practices, comprehensive documentation, and ongoing support. Unlike other boilerplates that are just code dumps, we provide a complete solution with tutorials, examples, and a supportive community.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Got questions? We&apos;ve got answers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our Next.js boilerplate.
            Can&apos;t find the answer you&apos;re looking for? Feel free to
            reach out to our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help. Get in touch and we&apos;ll get
              back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@boilerplate.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                support@boilerplate.com
              </a>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
