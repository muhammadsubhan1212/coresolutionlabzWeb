"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const numericMatch = value.match(/\d+/);

  useEffect(() => {
    const el = ref.current;
    if (!el || !numericMatch || !isInView) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = Number(numericMatch[0]);
    const suffix = value.replace(numericMatch[0], "");

    if (prefersReducedMotion) {
      el.textContent = value;
      return;
    }

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        el.textContent = `${Math.round(latest)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, numericMatch, value]);

  if (!numericMatch) {
    return <span>{value}</span>;
  }

  return <span ref={ref}>0{value.replace(numericMatch[0], "")}</span>;
}
