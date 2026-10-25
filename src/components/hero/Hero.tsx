"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Sparkles, HeartHandshake, UtensilsCrossed, Award } from "lucide-react";

export function Hero() {
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.12,
        delayChildren: shouldReduce ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduce
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-surface-cream overflow-hidden"
      aria-label="ARK Caterers Hero"
    >
      {/* Subtle warm background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Content */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill Tag */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burnt-saffron/10 border border-burnt-saffron/20 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C85A17] animate-pulse" />
                <span className="font-sans text-xs font-bold tracking-wider text-[#C85A17] uppercase">
                  South Indian Wedding Catering • Chennai
                </span>
              </div>
            </motion.div>

            {/* Main Headline with script accent */}
            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-obsidian tracking-tight leading-[1.08]"
              variants={itemVariants}
            >
              A Royal Feast for{" "}
              <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl lg:text-7xl block sm:inline">
                Every Celebration.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              Experience the true grandeur of South Indian wedding hospitality.
              Fragrant woodfire Seeraga Samba mutton biryani, crisp Chicken 65,
              fresh Vanjaram fish fry and live counters — served traditionally on
              fresh vibrant green banana leaves.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3 pt-2"
              variants={itemVariants}
            >
              <Button href="#quote" variant="warm" size="lg" showArrow>
                Plan Your Feast
              </Button>
              <Button href="#menu" variant="outline" size="lg">
                Explore Welcome Drinks & Menu
              </Button>
            </motion.div>

            {/* 3 Value Pillars */}
            <motion.div
              className="grid grid-cols-3 gap-3 pt-6 border-t border-stone-200/80 max-w-lg"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
                <div className="w-10 h-10 rounded-full bg-emerald-100/70 text-emerald-800 flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <span className="font-sans text-xs font-bold text-obsidian">
                  Banana Leaf Service
                </span>
                <span className="text-[0.6875rem] text-text-muted leading-tight">
                  Authentic Thalavazhai Ilai
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
                <div className="w-10 h-10 rounded-full bg-amber-100/80 text-burnt-saffron flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-sans text-xs font-bold text-obsidian">
                  100% Halal & Fresh
                </span>
                <span className="text-[0.6875rem] text-text-muted leading-tight">
                  Zero frozen meats used
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
                <div className="w-10 h-10 rounded-full bg-rose-100/70 text-rose-800 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="font-sans text-xs font-bold text-obsidian">
                  Master Chefs
                </span>
                <span className="text-[0.6875rem] text-text-muted leading-tight">
                  15+ Years wedding mastery
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Feast Photograph with Floating Badge */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5 relative"
            initial={
              shouldReduce
                ? { opacity: 1 }
                : { opacity: 0, scale: 0.95, filter: "blur(12px)" }
            }
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-amber-200/50 via-orange-100/40 to-transparent blur-sm -z-10" />

              {/* Main Feast Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/banana_leaf_feast.jpg"
                  alt="Authentic South Indian wedding feast served on green banana leaf"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold">
                    🌿 Authentic Thalavazhai Ilai Saapaadu
                  </div>
                </div>
              </div>

              {/* Top Floating Badge: 30+ Signature Dishes */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-stone-200/80 flex items-center gap-3"
                initial={shouldReduce ? {} : { y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#C85A17] text-white flex items-center justify-center font-display font-bold text-lg shadow-sm">
                  30+
                </div>
                <div>
                  <div className="font-sans text-xs font-bold text-obsidian leading-tight">
                    Signature Dishes
                  </div>
                  <div className="text-[0.6875rem] text-text-muted">
                    Custom Wedding Feasts
                  </div>
                </div>
              </motion.div>

              {/* Bottom Floating Badge: 100% Traditional Hospitality */}
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-stone-200/80 flex items-center gap-3"
                initial={shouldReduce ? {} : { y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-display font-bold text-lg shadow-sm">
                  15+
                </div>
                <div>
                  <div className="font-sans text-xs font-bold text-obsidian leading-tight">
                    Years of Heritage
                  </div>
                  <div className="text-[0.6875rem] text-text-muted">
                    500+ Grand Receptions
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
