"use client";

import { siteConfig } from "@/lib/siteConfig";
import { FadeUp, StaggerContainer } from "@/components/ui/Motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/components/ui/Motion";
import { MapPin } from "lucide-react";

export function ServiceAreas() {
  return (
    <section className="section-padding bg-warm-ivory">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <FadeUp>
              <SectionLabel label="Service Area" />
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-obsidian leading-[1.08] mt-5 tracking-tight">
                We Cater Across
                <br />
                <em className="font-medium italic text-deep-maroon">
                  {siteConfig.location.city}.
                </em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-sans text-base text-text-secondary leading-[1.75] mt-6 max-w-md">
                From intimate home celebrations to large wedding halls, we bring
                our kitchen, service team and carefully planned menus to your
                chosen venue.
              </p>
            </FadeUp>
          </div>

          {/* Right — Service areas grid */}
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:pt-4">
            {siteConfig.location.serviceAreas.map((area) => (
              <motion.div
                key={area}
                variants={fadeUpVariants}
                className="flex items-center gap-2.5 py-3 px-4 border border-border-light hover:border-obsidian/20 transition-colors duration-300"
              >
                <MapPin className="w-3.5 h-3.5 text-deep-maroon/50 shrink-0" />
                <span className="font-sans text-sm text-text-secondary">
                  {area}
                </span>
              </motion.div>
            ))}
            <motion.div
              variants={fadeUpVariants}
              className="flex items-center gap-2.5 py-3 px-4 border border-dashed border-border-light col-span-2 sm:col-span-1"
            >
              <span className="font-sans text-sm text-text-muted italic">
                & surrounding areas
              </span>
            </motion.div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
