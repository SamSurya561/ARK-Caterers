"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly one viewport height)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-warm-ivory/95 backdrop-blur-sm border-t border-border-light"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="grid grid-cols-3 divide-x divide-border-light">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex flex-col items-center justify-center gap-1 py-3 text-obsidian hover:bg-obsidian/5 transition-colors"
              aria-label="Call ARK Caterers"
            >
              <Phone className="w-4 h-4" />
              <span className="font-sans text-[0.625rem] font-semibold tracking-wider uppercase">
                Call
              </span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessages.general)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 py-3 text-obsidian hover:bg-obsidian/5 transition-colors"
              aria-label="WhatsApp ARK Caterers"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-sans text-[0.625rem] font-semibold tracking-wider uppercase">
                WhatsApp
              </span>
            </a>
            <Link
              href="#quote"
              className="flex flex-col items-center justify-center gap-1 py-3 bg-deep-maroon text-text-on-maroon"
              aria-label="Get a catering quote"
            >
              <FileText className="w-4 h-4" />
              <span className="font-sans text-[0.625rem] font-semibold tracking-wider uppercase">
                Get Quote
              </span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
