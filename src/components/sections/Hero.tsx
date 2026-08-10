"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { photos, siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20 sm:pt-24 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,_var(--color-secondary-50),_transparent_55%),radial-gradient(ellipse_50%_40%_at_0%_100%,_var(--color-accent-50),_transparent_50%)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="container-app grid w-full items-center gap-10 py-8 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-4 xl:gap-20">
        <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13px] font-medium tracking-[0.14em] text-secondary uppercase"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-balance text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]"
          >
            Core<span className="text-secondary">Solution</span>Labz
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-balance text-[1.2rem] font-semibold leading-snug tracking-tight text-primary/90 sm:text-[1.45rem] lg:text-[1.6rem] lg:leading-[1.25]"
          >
            Engineering software that businesses build their future on.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-balance text-[15px] leading-relaxed text-muted sm:text-lg"
          >
            We design, build, and scale websites, software, mobile apps, and cloud
            infrastructure — engineered to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
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
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[560px] px-3 pb-6 pt-4 sm:px-5 sm:pb-8 sm:pt-6 lg:max-w-none lg:px-6 lg:pb-10 lg:pt-8"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-32px_rgba(15,23,42,0.35)] sm:aspect-[16/11]">
            <Image
              src={photos.hero}
              alt="CoreSolutionLabz team collaborating in a modern office"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 48vw"
              className="object-cover object-center transition-transform duration-[1.4s] ease-out hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -16, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-2 left-0 z-10 hidden w-[36%] overflow-hidden rounded-2xl border-4 border-white shadow-[0_20px_40px_-16px_rgba(15,23,42,0.35)] sm:block lg:bottom-3 lg:left-1"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={photos.heroAccentA}
                alt="Technology workstation spanning web, data, and engineering tools"
                fill
                sizes="180px"
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16, y: -12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-0 z-10 hidden w-[32%] overflow-hidden rounded-2xl border-4 border-white shadow-[0_20px_40px_-16px_rgba(15,23,42,0.3)] sm:block lg:right-1 lg:top-1"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={photos.heroAccentB}
                alt="Responsive CoreSolutionLabz website across multiple devices"
                fill
                sizes="160px"
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
