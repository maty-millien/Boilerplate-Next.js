import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Code,
  Github,
  Heart,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-32">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Code className="size-6" />
              </div>
              <div className="text-xl font-bold ml-2">NextJS Boilerplate</div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The most comprehensive Next.js boilerplate for building
              production-ready SaaS applications. Trusted by thousands of
              developers worldwide.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay updated</h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button size="icon">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get notified about updates and new features
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-secondary rounded-lg hover:opacity-90 transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary rounded-lg hover:opacity-90 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary rounded-lg hover:opacity-90 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary rounded-lg hover:opacity-90 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2024 NextJS Boilerplate. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="size-4 text-primary fill-primary" />
            <span>by developers, for developers</span>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
