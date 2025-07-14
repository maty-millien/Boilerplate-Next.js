"use client";

import ThemeToggle from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Code, Menu, Zap } from "lucide-react";
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-2xl p-3 w-[95%] max-w-4xl ${
        isScrolled
          ? "bg-background/90 dark:bg-card/90 backdrop-blur-md shadow-lg border border-border dark:border-border"
          : ""
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="p-2 bg-primary rounded-lg">
          <Code className="size-5 text-primary-foreground" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-muted-foreground dark:text-foreground hover:text-foreground dark:hover:text-foreground transition-colors font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle variant="ghost" />
          <Button>
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
                  <div className="p-2 bg-primary rounded-lg">
                    <Code className="size-5 text-primary-foreground" />
                  </div>
                  NextJS Boilerplate
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-3 px-4 text-muted-foreground dark:text-foreground hover:text-foreground dark:hover:text-foreground hover:bg-muted dark:hover:bg-accent rounded-lg transition-colors font-medium"
                  >
                    {item.name}
                  </button>
                ))}

                <div className="pt-4 border-t border-border dark:border-border">
                  <Button size="sm" className="w-full gap-2">
                    <Zap className="size-4" />
                    Get Started
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
