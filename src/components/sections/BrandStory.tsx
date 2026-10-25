"use client";

import Image from "next/image";
import { FadeUp, BlurReveal } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Heart, Sparkles, ChefHat } from "lucide-react";

export function BrandStory() {
  return (
    <section className="section-padding bg-warm-ivory/60 overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Dining Hall Photograph with Experience Badge */}
          <div className="lg:col-span-6 relative">
            <BlurReveal>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/banana_leaf_dining.jpg"
                  alt="Traditional South Indian wedding banquet hall with fresh banana leaf service and catering team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md">
                    Traditional Kalyana Mandapam Catering
                  </span>
                </div>
              </div>

              {/* Floating Badge (Flavoria style) */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-stone-200/80 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#C85A17] text-white flex items-center justify-center font-display font-bold text-xl shadow-sm">
                  15+
                </div>
                <div>
                  <div className="font-sans text-xs sm:text-sm font-bold text-obsidian leading-tight">
                    Years of Heritage
                  </div>
                  <div className="text-[0.6875rem] text-text-muted mt-0.5">
                    Authentic Tamil Weddings
                  </div>
                </div>
              </div>
            </BlurReveal>
          </div>

          {/* Right Column: Story & Features */}
          <div className="lg:col-span-6 space-y-6">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-saffron/10 border border-burnt-saffron/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A17]" />
                <span className="font-sans text-xs font-bold tracking-wider text-[#C85A17] uppercase">
                  Welcome to ARK Caterers
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-obsidian tracking-tight leading-[1.12]">
                Pure Tradition,{" "}
                <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl block sm:inline">
                  Grand Celebrations.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
                At ARK Caterers, we believe that food is not just a course in a wedding — it is the lasting memory your guests take home. From the fragrant steam rising as the Seeraga Samba biryani lid opens, to the crisp crunch of hot Chicken 65 on the green banana leaf, every detail is treated with reverence.
              </p>
            </FadeUp>

            {/* 3 Circular Feature Rows (Matching Flavoria reference) */}
            <FadeUp delay={0.2}>
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/80 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-burnt-saffron flex items-center justify-center shrink-0 border border-amber-900/10">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-obsidian">
                      Quality Ingredients & Hand-Ground Masalas
                    </h4>
                    <p className="font-sans text-xs text-text-muted mt-0.5">
                      Authentic Chettinad, Dindigul and Ambur spice blends prepared fresh for each wedding.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/80 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-900/10">
                    <ChefHat className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-obsidian">
                      Master Wedding Chefs & Courteous Staff
                    </h4>
                    <p className="font-sans text-xs text-text-muted mt-0.5">
                      Professional service staff in clean traditional attire trained in traditional banana leaf hospitality.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/80 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-orange-50 text-[#C85A17] flex items-center justify-center shrink-0 border border-orange-900/10">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-obsidian">
                      100% Traditional Banana Leaf Serving
                    </h4>
                    <p className="font-sans text-xs text-text-muted mt-0.5">
                      No western plating shortcuts — authentic Thalavazhai Ilai Saapaadu for all your respected guests.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="warm" size="default" showArrow>
                  Schedule a Tasting Session
                </Button>
                <Button href="#quote" variant="outline" size="default">
                  Check Wedding Date Availability
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
