"use client";

import Image from "next/image";
import { FadeUp, BlurReveal } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const signatureItems = [
  "Chicken 65",
  "Mutton Chukka",
  "Dalcha Brinjal Gravy",
  "Onion Raita",
  "Boiled Egg",
  "Bread Halwa",
];

export function SignatureFeast() {
  return (
    <section className="section-padding bg-obsidian text-text-on-dark overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Biryani Photograph on Banana Leaf */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            <BlurReveal>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-800 aspect-[4/3]">
                <Image
                  src="/images/mutton_biryani.jpg"
                  alt="Authentic South Indian wedding Seeraga Samba Mutton Biryani served hot on fresh green banana leaf with clay pot raita"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md">
                    🌿 Seeraga Samba Woodfire Dum Biryani
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-burnt-saffron/90">
                    Signature Wedding Special
                  </span>
                </div>
              </div>
            </BlurReveal>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-burnt-saffron" />
                <span className="font-sans text-xs font-bold tracking-wider text-burnt-saffron uppercase">
                  Signature Wedding Feast
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm-ivory leading-[1.1] tracking-tight">
                The Grand Feast Begins{" "}
                <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl block sm:inline">
                  with the Biryani.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="font-sans text-sm sm:text-base text-text-on-dark/70 leading-relaxed">
                Slow-cooked over natural wood fire in large copper degs. Made with aromatic Seeraga Samba rice, tender prime cuts of mutton or country chicken, pure ghee, and traditional spices — served steaming hot directly onto the fresh green banana leaf.
              </p>
            </FadeUp>

            {/* Signature accompaniment items */}
            <FadeUp delay={0.2}>
              <div className="bg-stone-900/80 rounded-2xl p-5 border border-stone-800">
                <span className="font-sans text-xs font-bold tracking-wider text-burnt-saffron uppercase block mb-3">
                  The Royal Banana Leaf Accompaniments
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {signatureItems.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 text-burnt-saffron flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-sans text-xs sm:text-sm text-warm-ivory/80 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="#quote" variant="warm" size="lg" showArrow>
                  Include in Your Wedding Menu
                </Button>
                <Button href="#menu" variant="dark" size="lg">
                  View Full Menu
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
