"use client";

import { packages } from "@/data/packages";
import { FadeUp, StaggerContainer } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { fadeUpVariants } from "@/components/ui/Motion";

export function PackageSection() {
  return (
    <section id="packages" className="section-padding bg-warm-ivory/50">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-saffron/10 border border-burnt-saffron/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A17]" />
              <span className="font-sans text-xs font-bold tracking-wider text-[#C85A17] uppercase">
                Curated Wedding Feasts
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-obsidian tracking-tight leading-[1.1]">
              Your Celebration,{" "}
              <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl block sm:inline">
                Your Custom Feast.
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-sans text-sm sm:text-base text-text-muted mt-3">
              Start with one of our proven banana-leaf feast packages or build a completely bespoke menu with our master catering team.
            </p>
          </FadeUp>
        </div>

        {/* Package Grid with Rounded-3xl Cards */}
        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <motion.article
              key={pkg.slug}
              variants={fadeUpVariants}
              className={`relative p-8 lg:p-10 rounded-3xl border transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                pkg.isFeatured
                  ? "border-[#C85A17]/30 bg-white ring-2 ring-[#C85A17]/10"
                  : pkg.isCustom
                  ? "border-stone-800 bg-obsidian text-text-on-dark"
                  : "border-stone-200/90 bg-white"
              }`}
            >
              {pkg.isFeatured && (
                <span className="absolute -top-3.5 left-8 font-sans text-[0.625rem] font-bold tracking-wider text-white bg-[#C85A17] px-4 py-1 rounded-full uppercase shadow-sm">
                  ★ Most Popular Wedding Package
                </span>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`font-sans text-xs font-bold tracking-wider uppercase ${
                      pkg.isCustom ? "text-amber-400" : "text-[#C85A17]"
                    }`}
                  >
                    {pkg.subtitle}
                  </span>
                  <span
                    className={`text-[0.6875rem] font-semibold px-2.5 py-0.5 rounded-full ${
                      pkg.isCustom
                        ? "bg-stone-800 text-stone-300"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    Banana Leaf Service
                  </span>
                </div>

                <h3
                  className={`font-display text-2xl sm:text-3xl font-bold ${
                    pkg.isCustom ? "text-warm-ivory" : "text-obsidian"
                  }`}
                >
                  {pkg.name}
                </h3>

                <p
                  className={`font-sans text-xs sm:text-sm leading-relaxed mt-3 ${
                    pkg.isCustom ? "text-text-on-dark/60" : "text-text-secondary"
                  }`}
                >
                  {pkg.description}
                </p>

                {/* Inclusions */}
                <div className="mt-6 pt-5 border-t border-stone-100/10">
                  <span
                    className={`font-sans text-[0.6875rem] font-bold uppercase tracking-wider block mb-3 ${
                      pkg.isCustom ? "text-stone-400" : "text-stone-500"
                    }`}
                  >
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 font-sans text-xs sm:text-sm ${
                          pkg.isCustom ? "text-text-on-dark/80" : "text-stone-700"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            pkg.isCustom
                              ? "bg-amber-400/20 text-amber-400"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.note && (
                  <p
                    className={`font-sans text-xs mt-5 italic ${
                      pkg.isCustom ? "text-text-on-dark/40" : "text-text-muted"
                    }`}
                  >
                    {pkg.note}
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4">
                <Button
                  href="#quote"
                  variant={pkg.isCustom ? "dark" : pkg.isFeatured ? "warm" : "outline"}
                  showArrow
                  className="w-full"
                >
                  {pkg.cta}
                </Button>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
