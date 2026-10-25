"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "warm";
  size?: "default" | "lg" | "sm";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

const variants = {
  primary:
    "bg-deep-maroon text-text-on-maroon hover:bg-[#7a2533] shadow-md shadow-deep-maroon/15",
  secondary:
    "bg-obsidian text-text-on-dark hover:bg-[#2A2724] shadow-md shadow-obsidian/15",
  warm:
    "bg-[#C85A17] text-white hover:bg-[#B34E12] shadow-md shadow-[#C85A17]/25",
  outline:
    "bg-transparent border border-obsidian/30 text-obsidian hover:bg-obsidian hover:text-text-on-dark hover:border-obsidian",
  ghost:
    "bg-transparent text-obsidian hover:bg-obsidian/5",
  dark:
    "bg-warm-ivory text-obsidian hover:bg-white border border-border-light shadow-sm",
};

const sizes = {
  sm: "px-5 py-2 text-[0.8125rem]",
  default: "px-7 py-3 text-[0.875rem]",
  lg: "px-8 py-3.5 text-[0.9375rem]",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "default",
  className = "",
  showArrow = false,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-sans font-semibold tracking-wide rounded-full
    transition-all duration-300
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `.trim();

  const inner = (
    <>
      {children}
      {showArrow && (
        <motion.span
          className="inline-flex"
          whileHover={{ x: 2, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          whileTap={{ scale: 0.98 }}
        >
          {inner}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {inner}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileTap={{ scale: 0.98 }}
    >
      {inner}
    </motion.button>
  );
}
