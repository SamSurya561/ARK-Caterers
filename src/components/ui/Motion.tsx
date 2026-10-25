"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

/* ── Animation tokens ────────────────────────── */

export const duration = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  cinematic: 1.0,
} as const;

export const ease = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  out: [0, 0, 0.2, 1] as const,
  spring: { type: "spring" as const, stiffness: 200, damping: 26 },
  gentle: { type: "spring" as const, stiffness: 120, damping: 20 },
} as const;

/* ── Reusable variants ───────────────────────── */

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: ease.smooth },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: ease.smooth },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: duration.normal, ease: ease.smooth },
  },
};

export const blurRevealVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: ease.smooth },
  },
};

export const slideInVariants = (direction: "left" | "right" = "left"): Variants => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: ease.smooth },
  },
});

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/* ── Reveal wrapper components ───────────────── */

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduce ? "visible" : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: duration.slow,
            ease: ease.smooth,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduce ? "visible" : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: duration.slow,
            ease: ease.smooth,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function BlurReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduce ? "visible" : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.8,
            ease: ease.smooth,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduce ? "visible" : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={shouldReduce ? "visible" : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { clipPath: "inset(100% 0 0 0)" },
        visible: {
          clipPath: "inset(0% 0 0 0)",
          transition: {
            duration: duration.cinematic,
            ease: ease.smooth,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
