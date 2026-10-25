"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Sparkles, ChevronRight, Check } from "lucide-react";
import { menuCategories, type MenuItem } from "@/data/menu";
import { FadeUp, BlurReveal } from "@/components/ui/Motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function MenuExplorer() {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>("welcome");
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  // Active category object — defaults strictly to "welcome"
  const activeCategory =
    menuCategories.find((cat) => cat.slug === activeCategorySlug) ||
    menuCategories[0];

  // Close modal on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedDish(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedDish) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDish]);

  return (
    <>
      <section className="section-padding bg-surface-cream" id="menu">
        <div className="container-site">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-saffron/10 border border-burnt-saffron/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-burnt-saffron" />
                <span className="font-sans text-[0.6875rem] font-semibold tracking-wider text-burnt-saffron uppercase">
                  South Indian Feast Menu
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-obsidian leading-[1.1] tracking-tight">
                From the First Sip{" "}
                <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl block sm:inline mt-1">
                  to the Grand Feast.
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="font-sans text-sm sm:text-base text-text-muted mt-3">
                Served fresh on traditional green banana leaves. Click below to explore each course at your own pace without long scrolling.
              </p>
            </FadeUp>
          </div>

          {/* Category Tabs Pill Bar */}
          <FadeUp delay={0.2} className="mt-8">
            <div
              ref={navRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 max-w-5xl mx-auto sm:justify-center"
            >
              {menuCategories.map((cat) => {
                const isActive = activeCategorySlug === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategorySlug(cat.slug)}
                    className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-[#C85A17] text-white shadow-md shadow-[#C85A17]/30 scale-[1.02]"
                        : "bg-white text-stone-700 hover:text-obsidian hover:bg-stone-50 border border-stone-200/80 shadow-xs"
                    }`}
                  >
                    <span>{cat.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </FadeUp>

          {/* Active Category Content Display */}
          <div className="mt-10 max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.slug}
                initial={
                  shouldReduce
                    ? { opacity: 1 }
                    : { opacity: 0, y: 16, filter: "blur(10px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={
                  shouldReduce
                    ? { opacity: 0 }
                    : { opacity: 0, y: -16, filter: "blur(10px)" }
                }
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-burnt-saffron/10 text-burnt-saffron flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      {activeCategory.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian">
                        {activeCategory.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-text-muted mt-0.5">
                        {activeCategorySlug === "welcome"
                          ? "Refreshing welcome drinks served chilled in traditional brass cups and coconut shells"
                          : `Authentic wedding delicacies served hot on fresh green banana leaves (${activeCategory.items.length} items)`}
                      </p>
                    </div>
                  </div>

                  {activeCategorySlug !== "welcome" && (
                    <button
                      onClick={() => setActiveCategorySlug("welcome")}
                      className="self-start sm:self-auto text-xs font-semibold text-burnt-saffron hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      ← Back to Welcome Drinks
                    </button>
                  )}
                </div>

                {/* If Welcome Drinks: Show Featured Drinks Media Card */}
                {activeCategorySlug === "welcome" && (
                  <div className="my-6 p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-900/10 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                    <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                      <Image
                        src="/images/welcome_drinks.jpg"
                        alt="South Indian welcome drinks on banana leaf with brass glasses"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-obsidian/75 backdrop-blur-sm text-white text-[0.6875rem] font-semibold tracking-wider uppercase">
                        Freshly Prepared
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <span className="font-sans text-xs font-semibold tracking-wider text-burnt-saffron uppercase">
                        The Wedding Welcome Tradition
                      </span>
                      <h4 className="font-display text-xl sm:text-2xl font-semibold text-obsidian mt-1">
                        Cooling Herbal Nannari, Rose Milk & Tender Coconut
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mt-2">
                        Before your guests sit down for the grand feast, we greet them with chilled authentic South Indian coolers served in traditional brass tumblers and freshly opened green tender coconuts with eco-friendly straws.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-stone-700 text-xs font-medium border border-stone-200">
                          <Check className="w-3 h-3 text-green-600" /> 100% Natural Ingredients
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-stone-700 text-xs font-medium border border-stone-200">
                          <Check className="w-3 h-3 text-green-600" /> Served Chilled at Reception
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {activeCategory.items.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={
                        shouldReduce
                          ? { opacity: 1 }
                          : { opacity: 0, y: 12, filter: "blur(6px)" }
                      }
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        delay: idx * 0.05,
                        duration: 0.35,
                      }}
                      onClick={() => setSelectedDish(item)}
                      className="group p-4 sm:p-5 rounded-2xl border border-stone-200/70 hover:border-burnt-saffron/40 bg-stone-50/50 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between text-left"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            {/* Veg / Non-veg dot */}
                            <span
                              className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 rounded-xs ${
                                item.isVeg
                                  ? "border-green-700"
                                  : "border-red-700"
                              }`}
                              title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  item.isVeg ? "bg-green-700" : "bg-red-700"
                                }`}
                              />
                            </span>
                            <h4 className="font-sans text-[0.9375rem] font-bold text-obsidian group-hover:text-[#C85A17] transition-colors">
                              {item.name}
                            </h4>
                          </div>

                          {item.isSignature && (
                            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[0.625rem] font-bold uppercase tracking-wider shrink-0">
                              Signature
                            </span>
                          )}
                        </div>

                        {item.regionalLabel && (
                          <span className="inline-block font-sans text-[0.6875rem] font-medium text-stone-500 uppercase tracking-wide mt-1 pl-5.5">
                            {item.regionalLabel}
                          </span>
                        )}

                        <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mt-2 line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-stone-200/50 flex items-center justify-between text-xs font-semibold text-burnt-saffron opacity-80 group-hover:opacity-100">
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Callout: Explore More Categories without scrolling */}
                <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-stone-50/80 p-5 rounded-2xl">
                  <div>
                    <h5 className="font-sans text-sm font-bold text-obsidian">
                      Looking for custom wedding menu packages?
                    </h5>
                    <p className="font-sans text-xs text-text-muted mt-0.5">
                      Explore other courses or request a customized banana leaf feast quote.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeCategorySlug === "welcome" ? (
                      <>
                        <button
                          onClick={() => setActiveCategorySlug("starters")}
                          className="px-4 py-2 rounded-full bg-white hover:bg-stone-100 text-obsidian font-sans text-xs font-semibold border border-stone-200 shadow-2xs transition-all cursor-pointer"
                        >
                          View Starters →
                        </button>
                        <button
                          onClick={() => setActiveCategorySlug("biryani")}
                          className="px-4 py-2 rounded-full bg-[#C85A17] hover:bg-[#B34E12] text-white font-sans text-xs font-semibold shadow-2xs transition-all cursor-pointer"
                        >
                          View Biryani & Rice →
                        </button>
                      </>
                    ) : (
                      <Button href="#quote" variant="warm" size="sm">
                        Get Custom Menu Quote
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Dish detail modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-obsidian/60 backdrop-blur-xs"
              onClick={() => setSelectedDish(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Card */}
            <motion.div
              className="relative bg-white rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto z-10 shadow-2xl border border-stone-200"
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduce ? {} : { opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={selectedDish.name}
            >
              {/* Image banner */}
              <div className="aspect-[16/10] bg-surface-cream relative overflow-hidden rounded-t-3xl">
                <Image
                  src={
                    selectedDish.name.toLowerCase().includes("biryani")
                      ? "/images/mutton_biryani.jpg"
                      : selectedDish.name.toLowerCase().includes("drink") ||
                        selectedDish.name.toLowerCase().includes("milk") ||
                        selectedDish.name.toLowerCase().includes("sarbath") ||
                        selectedDish.name.toLowerCase().includes("coconut") ||
                        selectedDish.name.toLowerCase().includes("juice")
                      ? "/images/welcome_drinks.jpg"
                      : selectedDish.name.toLowerCase().includes("dosa")
                      ? "/images/live_dosa.jpg"
                      : selectedDish.name.toLowerCase().includes("chicken") ||
                        selectedDish.name.toLowerCase().includes("chukka") ||
                        selectedDish.name.toLowerCase().includes("roast")
                      ? "/images/chettinad_starters.jpg"
                      : "/images/banana_leaf_feast.jpg"
                  }
                  alt={selectedDish.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[0.6875rem] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
                    Traditional Banana Leaf Serving
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 rounded-xs ${
                      selectedDish.isVeg ? "border-green-700" : "border-red-700"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        selectedDish.isVeg ? "bg-green-700" : "bg-red-700"
                      }`}
                    />
                  </span>
                  {selectedDish.isSignature && (
                    <span className="font-sans text-[0.625rem] font-bold tracking-wider text-amber-800 bg-amber-100 uppercase px-2.5 py-0.5 rounded-full">
                      Signature Wedding Special
                    </span>
                  )}
                  {selectedDish.regionalLabel && (
                    <span className="font-sans text-[0.6875rem] tracking-wider text-stone-500 uppercase font-medium">
                      {selectedDish.regionalLabel}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-obsidian">
                  {selectedDish.name}
                </h3>
                <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed mt-3">
                  {selectedDish.description}
                </p>

                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-medium">
                    Available in customized wedding packages
                  </span>
                  <Button
                    href="#quote"
                    variant="warm"
                    size="sm"
                    onClick={() => setSelectedDish(null)}
                  >
                    Add to Feast Quote
                  </Button>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-white/90 hover:bg-white text-obsidian shadow-md transition-all cursor-pointer"
                aria-label="Close dish details"
              >
                <X className="w-5 h-5 text-obsidian" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
