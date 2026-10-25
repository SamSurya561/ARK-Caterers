"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-warm-ivory/95 backdrop-blur-sm border-b border-border-light"
            : "bg-transparent"
        }`}
      >
        <nav className="container-site flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex flex-col leading-none"
            aria-label="ARK Caterers — Home"
          >
            <span className="font-display text-lg md:text-xl font-bold tracking-[0.04em] text-obsidian">
              ARK
            </span>
            <span className="font-sans text-[0.55rem] md:text-[0.6rem] font-semibold tracking-[0.28em] text-text-muted uppercase -mt-0.5">
              CATERERS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-[0.8125rem] font-medium text-text-secondary hover:text-obsidian transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href={siteConfig.navigation.cta.href}
              variant="warm"
              size="sm"
            >
              {siteConfig.navigation.cta.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                className="block h-[1.5px] bg-obsidian origin-center"
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, y: 4.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-[1.5px] bg-obsidian"
                animate={
                  isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[1.5px] bg-obsidian origin-center"
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -4.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-warm-ivory"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-col justify-between h-full pt-24 pb-8 px-8">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                {[
                  { label: "Home", href: "/" },
                  { label: "Our Menu", href: "/#menu" },
                  { label: "Packages", href: "/#packages" },
                  { label: "Gallery", href: "/#gallery" },
                  { label: "FAQ", href: "/#faq" },
                  { label: "Contact", href: "/contact" },
                ].map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="block font-display text-3xl font-semibold text-obsidian py-2 hover:text-deep-maroon transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom actions */}
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Button
                  href="#quote"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Plan Your Feast
                </Button>
                <div className="flex gap-3">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-obsidian text-obsidian font-sans text-sm font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessages.general)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-obsidian text-obsidian font-sans text-sm font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
