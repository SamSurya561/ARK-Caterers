"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqItems } from "@/data/faq";
import { FadeUp, StaggerContainer } from "@/components/ui/Motion";
import { fadeUpVariants } from "@/components/ui/Motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const shouldReduce = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-surface-cream" id="faq">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-saffron/10 border border-burnt-saffron/20 mb-3">
              <HelpCircle className="w-4 h-4 text-burnt-saffron" />
              <span className="font-sans text-xs font-bold tracking-wider text-burnt-saffron uppercase">
                Got Questions?
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-obsidian tracking-tight leading-[1.1]">
              Everything You Need to Know{" "}
              <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl block sm:inline">
                About Our Feasts.
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-sans text-sm sm:text-base text-text-muted mt-2">
              Clear answers regarding tasting sessions, banana-leaf service, minimum guest counts, and customized menus.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="space-y-3.5 max-w-3xl mx-auto">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "bg-white border-[#C85A17]/30 shadow-md ring-1 ring-[#C85A17]/10"
                  : "bg-white/80 border-stone-200/80 hover:border-stone-300"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full p-5 sm:p-6 flex items-start justify-between gap-4 text-left cursor-pointer"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-sans text-sm sm:text-base font-bold text-obsidian leading-snug pr-2">
                  {item.question}
                </span>
                <motion.span
                  className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600 mt-0.5"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={
                      shouldReduce ? { height: "auto" } : { height: 0, opacity: 0 }
                    }
                    animate={{ height: "auto", opacity: 1 }}
                    exit={shouldReduce ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 font-sans text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 mt-1">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
