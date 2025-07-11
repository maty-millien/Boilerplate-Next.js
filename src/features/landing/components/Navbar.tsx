"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "@/features/theme/components/ThemeToggle";
import { ArrowRight, Code, Github, Menu, Star, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Docs", href: "#docs" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border border-slate-200 dark:border-slate-700"
          : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
      } rounded-2xl p-3 w-[95%] max-w-6xl`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-500 rounded-lg">
            <Code className="size-5 text-white" />
          </div>
          <div className="font-bold text-lg">NextJS Boilerplate</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <Github className="size-4" />
            <span className="hidden lg:inline">GitHub</span>
          </Button>

          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
            <Star className="size-3 fill-yellow-400 text-yellow-400" />
            <span>2.1k</span>
          </div>

          <ThemeToggle variant="ghost" />

          <Button size="sm" className="gap-2">
            <Zap className="size-4" />
            Get Started
            <ArrowRight className="size-4" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle variant="ghost" />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Code className="size-5 text-white" />
                  </div>
                  NextJS Boilerplate
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-3 px-4 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors font-medium"
                  >
                    {item.name}
                  </button>
                ))}

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 mb-3"
                    onClick={() => window.open("https://github.com", "_blank")}
                  >
                    <Github className="size-4" />
                    View on GitHub
                  </Button>

                  <Button size="sm" className="w-full gap-2">
                    <Zap className="size-4" />
                    Get Started
                    <ArrowRight className="size-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-4">
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-full">
                    <Star className="size-3 fill-yellow-400 text-yellow-400" />
                    <span>2.1k stars on GitHub</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
