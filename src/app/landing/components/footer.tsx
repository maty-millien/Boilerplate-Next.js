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
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Code className="size-6" />
              </div>
              <div className="text-xl font-bold">NextJS Boilerplate</div>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
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
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Get notified about updates and new features
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © 2024 NextJS Boilerplate. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400 text-sm">
            <span>Built with</span>
            <Heart className="size-4 text-red-500 fill-red-500" />
            <span>by developers, for developers</span>
          </div>

          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
