"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none" | "left" | "right";
  as?: "div" | "span";
};

const distanceMap = {
  up: { y: 20, x: 0 },
  none: { y: 0, x: 0 },
  left: { y: 0, x: -20 },
  right: { y: 0, x: 20 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: RevealProps) {
  const offset = distanceMap[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = as === "span" ? motion.span : motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
