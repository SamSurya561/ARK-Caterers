"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";
import { MessageCircle, Phone, Calendar, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding bg-surface-cream relative overflow-hidden">
      <div className="container-site">
        <div className="relative rounded-[2.5rem] bg-stone-950 text-white p-8 sm:p-16 lg:p-20 overflow-hidden shadow-2xl border border-stone-800">
          {/* Subtle warm glow background */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C85A17]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A17] animate-pulse" />
                <span className="font-sans text-xs font-bold tracking-wider text-warm-ivory uppercase">
                  Reserve Your Wedding Date
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
                Let&apos;s Plan Your Royal{" "}
                <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl lg:text-7xl block sm:inline">
                  Banana Leaf Feast.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="font-sans text-base sm:text-lg text-stone-300 leading-relaxed mt-5 max-w-xl mx-auto">
                Tell us your event date, estimated guest count, and preferred menu selections. Our catering directors will prepare a detailed dish-by-dish proposal.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
                <Button href="#quote" variant="warm" size="lg" showArrow>
                  Plan Your Feast
                </Button>
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.whatsappMessages.general
                  )}`}
                  variant="dark"
                  size="lg"
                  external
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  Chat on WhatsApp
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
                <Link
                  href="/contact"
                  className="hover:text-white font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Visit Tasting Lounge & Contact Page</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C85A17]" />
                </Link>
                <span>•</span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C85A17]" />
                  <span>Call {siteConfig.contact.phone}</span>
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
