"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data";

const trustBadges = [
  { icon: ShieldCheck, label: "Security-first engineering" },
  { icon: Sparkles, label: "Senior team on every project" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20 sm:pt-24 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--color-secondary-50),_transparent_55%)]" />

      <div className="container-app grid w-full items-center gap-4 py-2 sm:gap-8 sm:py-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-0">
        <div className="flex flex-col gap-3 sm:gap-5 lg:gap-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden items-center gap-2 self-start rounded-full border border-border bg-surface px-4 py-1.5 sm:flex lg:self-start"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[13px] font-medium text-muted">{siteConfig.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-[1.7rem] font-semibold leading-[1.18] tracking-tight text-primary sm:text-5xl sm:leading-[1.12] lg:text-[3.4rem] lg:leading-[1.08]"
          >
            Engineering software that businesses build their future on.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-balance text-[13.5px] leading-snug text-muted sm:text-lg sm:leading-relaxed"
          >
            CoreSolutionLabz partners with ambitious companies to design, build, and scale
            websites, software, mobile apps, and cloud infrastructure — engineered to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2.5 pt-1 sm:gap-3"
          >
            <Button href="#contact" size="md">
              Get Free Consultation
              <ArrowRight size={16} strokeWidth={2.25} />
            </Button>
            <Button href="#services" variant="secondary" size="md">
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="hidden flex-wrap items-center gap-5 pt-2 sm:flex lg:gap-6"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[13px] font-medium text-muted">
                <Icon size={16} className="text-accent" strokeWidth={2} />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto h-[22dvh] max-h-[240px] w-full max-w-[300px] sm:h-auto sm:max-w-[420px] sm:aspect-[4/3] lg:max-w-none"
        >
          <Image
            src="/assets/illustrations/hero.png"
            alt="Isometric illustration of CoreSolutionLabz engineering stack — cloud infrastructure, dashboards, and secure systems"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-contain drop-shadow-[0_30px_60px_rgba(15,23,42,0.12)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
