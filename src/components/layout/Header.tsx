"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
          scrolled
            ? "bg-white/95 shadow-[0_1px_0_0_rgba(226,232,240,1)] backdrop-blur-sm"
            : "bg-transparent"
        )}
      >
        <div
          id="site-header-bar"
          className="container-app flex h-20 items-center justify-between md:h-24"
        >
          <Link href="#home" className="flex items-center gap-2.5" aria-label="CoreSolutionLabz home">
            <Image
              src="/assets/logo/icon-full-color.png"
              alt=""
              width={44}
              height={44}
              className="h-9 w-9 md:h-10 md:w-10"
              priority
            />
            <span className="font-heading text-[19px] font-bold leading-none tracking-tight text-primary md:text-[21px]">
              Core<span className="text-secondary">Solution</span>Labz
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-primary/80 transition-colors duration-200 hover:text-secondary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" size="md">
              Get Free Consultation
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors duration-200 hover:border-secondary hover:text-secondary lg:hidden"
          >
            <Menu size={20} strokeWidth={2} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={menuButtonRef}
      />
    </>
  );
}
