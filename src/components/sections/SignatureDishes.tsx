"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/ui/Motion";
import { Plus, Sparkles, ChevronRight } from "lucide-react";

interface PopularDish {
  name: string;
  category: string;
  description: string;
  image: string;
  servingStyle: string;
  isVeg?: boolean;
}

const popularDishes: PopularDish[] = [
  {
    name: "Seeraga Samba Mutton Biryani",
    category: "Signature Main",
    description: "Slow-cooked tender mutton layered with fragrant short-grain rice, caramelized shallots and authentic dalcha.",
    image: "/images/mutton_biryani.jpg",
    servingStyle: "Served hot on banana leaf",
    isVeg: false,
  },
  {
    name: "Chettinad Chicken Chukka",
    category: "Special Starter",
    description: "Spicy pan-roasted chicken tossed with whole red chilies, roasted black peppercorns and crisp curry leaves.",
    image: "/images/chettinad_starters.jpg",
    servingStyle: "Served hot on banana leaf",
    isVeg: false,
  },
  {
    name: "Traditional Thalavazhai Ilai Saapaadu",
    category: "Wedding Grand Feast",
    description: "Full royal banana leaf spread with biryani, chicken 65, parotta, fish fry, payasam, raita, and accompaniments.",
    image: "/images/banana_leaf_feast.jpg",
    servingStyle: "Full banana leaf banquet",
    isVeg: false,
  },
  {
    name: "Nannari Sarbath & Rose Milk",
    category: "Welcome Drink",
    description: "Cooling herbal nannari cooler and rich cardamom rose milk served chilled in authentic brass tumblers.",
    image: "/images/welcome_drinks.jpg",
    servingStyle: "Traditional brass glasses",
    isVeg: true,
  },
];

export function SignatureDishes() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="section-padding bg-surface-cream overflow-hidden">
      <div className="container-site">
        {/* Section Header (Flavoria style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-saffron/10 border border-burnt-saffron/20 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A17]" />
                <span className="font-sans text-xs font-bold tracking-wider text-[#C85A17] uppercase">
                  Chef&apos;s Wedding Specials
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-obsidian tracking-tight">
                — Our Popular Dishes —
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="font-sans text-sm text-text-muted mt-2 max-w-lg">
                Freshly prepared with authentic stone-ground masalas and served exclusively on green banana leaves.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Link
              href="#menu"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-bold text-[#C85A17] hover:text-[#B34E12] transition-colors group"
            >
              <span>EXPLORE ALL MENUS</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>

        {/* 4 Cards Grid (Flavoria style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={
                shouldReduce
                  ? { opacity: 1 }
                  : { opacity: 0, y: 24, filter: "blur(10px)" }
              }
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl p-5 border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with rounded-2xl */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-stone-100">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[0.625rem] font-semibold tracking-wider uppercase">
                    {dish.category}
                  </div>
                </div>

                {/* Dish Info */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`w-3 h-3 border flex items-center justify-center shrink-0 rounded-xs ${
                      dish.isVeg ? "border-green-700" : "border-red-700"
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full ${
                        dish.isVeg ? "bg-green-700" : "bg-red-700"
                      }`}
                    />
                  </span>
                  <span className="font-sans text-[0.6875rem] font-bold text-stone-500 uppercase tracking-wide">
                    {dish.servingStyle}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-obsidian group-hover:text-[#C85A17] transition-colors leading-snug">
                  {dish.name}
                </h3>

                <p className="font-sans text-xs text-stone-600 leading-relaxed mt-2 line-clamp-3">
                  {dish.description}
                </p>
              </div>

              {/* Card Footer with rounded action button */}
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="font-sans text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Wedding Special
                </span>

                <Link
                  href="#quote"
                  className="w-9 h-9 rounded-full bg-stone-900 text-white group-hover:bg-[#C85A17] flex items-center justify-center shadow-xs transition-colors"
                  aria-label={`Enquire about ${dish.name}`}
                >
                  <Plus className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
