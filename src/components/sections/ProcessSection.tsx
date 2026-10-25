"use client";

import { FadeUp, StaggerContainer } from "@/components/ui/Motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/components/ui/Motion";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Event",
    description:
      "Share your event type, guest count, date and location. We listen first.",
  },
  {
    number: "02",
    title: "Choose Your Menu",
    description:
      "Select dishes, pick a package, or let us suggest a menu based on your preferences.",
  },
  {
    number: "03",
    title: "Finalize Guest Count",
    description:
      "Confirm the headcount and service style — banana leaf, buffet or both.",
  },
  {
    number: "04",
    title: "Prepare & Coordinate",
    description:
      "We handle kitchen logistics, sourcing, staff coordination and venue setup planning.",
  },
  {
    number: "05",
    title: "Serve the Feast",
    description:
      "Fresh food, professional service, clean presentation. On time, every time.",
  },
  {
    number: "06",
    title: "Leave the Memories",
    description:
      "The food becomes part of the story your guests tell long after the celebration.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-warm-ivory">
      <div className="container-site">
        <FadeUp>
          <SectionLabel label="How We Work" />
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-obsidian leading-[1.08] mt-5 tracking-tight">
            From Our Kitchen
            <br />
            <em className="font-medium italic">to Your Celebration.</em>
          </h2>
        </FadeUp>

        {/* Desktop horizontal / Mobile vertical timeline */}
        <StaggerContainer className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUpVariants}
                className="relative py-8 lg:py-10 px-6 lg:px-8 border-b lg:border-b-0 lg:border-r border-border-light last:border-0 group"
              >
                {/* Number */}
                <span className="font-display text-5xl font-bold text-obsidian/[0.06] absolute top-4 right-6">
                  {step.number}
                </span>

                <span className="eyebrow text-deep-maroon/60 text-[0.6rem]">
                  Step {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-obsidian mt-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed mt-3">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
