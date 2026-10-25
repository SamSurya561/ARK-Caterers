"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/ui/Motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Flame, Sparkles } from "lucide-react";

const liveCounters = [
  {
    name: "Live Ghee Roast & Dosa Counter",
    description: "Paper-thin, golden crispy dosas and podi uthappams made live on cast-iron griddles and served hot directly on fresh banana leaves with three chutneys.",
    image: "/images/live_dosa.jpg",
    tags: ["Signature Live", "Staffed Chefs"],
  },
  {
    name: "Live Ceylon & Malabar Parotta",
    description: "Hand-stretched, multi-layered flaky parottas flipped live in front of guests, served piping hot with rich non-veg salna.",
    image: "/images/banana_leaf_feast.jpg",
    tags: ["Live Griddle", "Freshly Prepared"],
  },
  {
    name: "Live Tandoori & BBQ Kebab Counter",
    description: "Juicy chicken tikka, seekh kebabs and charred paneer skewers roasted over glowing charcoal embers.",
    image: "/images/chettinad_starters.jpg",
    tags: ["Live Charcoal", "Chef Station"],
  },
  {
    name: "Traditional Filter Coffee & Degree Counter",
    description: "Freshly brewed Kumbakonam degree filter coffee served hot in authentic brass davarah-tumblers by traditional attired servers.",
    image: "/images/welcome_drinks.jpg",
    tags: ["Traditional", "Hot Beverage"],
  },
];

export function LiveCounters() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="section-padding bg-obsidian text-text-on-dark overflow-hidden">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3">
                <Flame className="w-4 h-4 text-burnt-saffron" />
                <span className="font-sans text-xs font-bold tracking-wider text-burnt-saffron uppercase">
                  Interactive Dining Experience
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-ivory tracking-tight">
                Some Delicacies Deserve to Be{" "}
                <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl block sm:inline">
                  Watched Being Made.
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="font-sans text-sm text-text-on-dark/60 mt-2 max-w-xl">
                Add vibrant energy and sensory theatre to your reception with our live culinary stations operated by skilled banquet chefs.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Button href="#quote" variant="warm" size="default">
              Add Live Counters to Package
            </Button>
          </FadeUp>
        </div>

        {/* Live Counters 4-Grid with Rounded Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveCounters.map((counter, i) => (
            <motion.div
              key={counter.name}
              initial={
                shouldReduce
                  ? { opacity: 1 }
                  : { opacity: 0, y: 24, filter: "blur(10px)" }
              }
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-stone-900/90 rounded-3xl p-5 border border-stone-800 shadow-md hover:border-amber-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-stone-800">
                  <Image
                    src={counter.image}
                    alt={counter.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-[0.625rem] font-semibold tracking-wider uppercase">
                    Live Counter
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {counter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-amber-500/15 text-burnt-saffron text-[0.625rem] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl font-bold text-warm-ivory group-hover:text-burnt-saffron transition-colors leading-snug">
                  {counter.name}
                </h3>

                <p className="font-sans text-xs text-text-on-dark/60 leading-relaxed mt-2">
                  {counter.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                <span>Served Fresh on Demand</span>
                <span className="text-burnt-saffron font-semibold">Available</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
