"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { FadeUp } from "@/components/ui/Motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduce = useReducedMotion();
  const current = testimonials[activeIndex];

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-padding bg-deep-maroon text-text-on-maroon overflow-hidden">
      <div className="container-narrow text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="font-sans text-xs font-bold tracking-wider text-warm-ivory uppercase">
              Client Experiences
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-warm-ivory leading-[1.12] tracking-tight">
            Good Food Feeds the Guests,{" "}
            <span className="font-script text-amber-300 font-bold text-5xl sm:text-6xl block sm:inline">
              Great Food Becomes the Memory.
            </span>
          </h2>
        </FadeUp>

        {/* Testimonial Card */}
        <div className="mt-12 relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={
                shouldReduce
                  ? {}
                  : { opacity: 0, y: 15, filter: "blur(10px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={
                shouldReduce
                  ? {}
                  : { opacity: 0, y: -15, filter: "blur(10px)" }
              }
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-black/25 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl text-center"
            >
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="font-display text-xl sm:text-2xl font-medium text-warm-ivory leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <footer className="mt-8 pt-6 border-t border-white/10">
                <cite className="not-italic">
                  <span className="font-sans text-base font-bold text-warm-ivory block">
                    {current.name}
                  </span>
                  <span className="font-sans text-xs text-warm-ivory/60 mt-1 block">
                    {current.eventType}
                    {current.location && ` • ${current.location}`}
                  </span>
                </cite>
              </footer>
            </motion.div>
          </AnimatePresence>

          {/* Navigation with rounded-full pills */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full flex items-center justify-center border border-warm-ivory/30 text-warm-ivory/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-sans text-xs text-warm-ivory/50 tracking-widest font-mono">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center border border-warm-ivory/30 text-warm-ivory/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
