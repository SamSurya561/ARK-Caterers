"use client";

import { events } from "@/data/events";
import { FadeUp, StaggerContainer } from "@/components/ui/Motion";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/components/ui/Motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function EventsSection() {
  return (
    <section className="section-padding bg-surface-cream">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-saffron/10 border border-burnt-saffron/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A17]" />
              <span className="font-sans text-xs font-bold tracking-wider text-[#C85A17] uppercase">
                Occasions & Celebrations
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-obsidian tracking-tight leading-[1.1]">
              One Master Kitchen,{" "}
              <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl block sm:inline">
                Every Celebration.
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-sans text-sm sm:text-base text-text-muted mt-2">
              From auspicious muhurthams to celebratory wedding receptions and private family milestones.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, i) => (
            <motion.article
              key={event.slug}
              variants={fadeUpVariants}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-amber-50 text-burnt-saffron font-mono font-bold text-xs flex items-center justify-center border border-amber-900/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link
                    href="#quote"
                    className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#C85A17] group-hover:text-white flex items-center justify-center text-stone-600 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <h3 className="font-display text-2xl font-bold text-obsidian group-hover:text-[#C85A17] transition-colors">
                  {event.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mt-2.5">
                  {event.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-burnt-saffron">
                  Custom Banana Leaf Feasts
                </span>
                <span className="text-stone-400">50 – 2,500+ Guests</span>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
