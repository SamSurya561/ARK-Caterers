"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { galleryImages, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { FadeUp } from "@/components/ui/Motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const shouldReduce = useReducedMotion();

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const selectedImage = selectedIndex !== null ? filtered[selectedIndex] : null;

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight" && selectedIndex < filtered.length - 1)
        setSelectedIndex(selectedIndex + 1);
      if (e.key === "ArrowLeft" && selectedIndex > 0)
        setSelectedIndex(selectedIndex - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, filtered.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <section id="gallery" className="section-padding bg-surface-cream">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-saffron/10 border border-burnt-saffron/20 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A17]" />
                <span className="font-sans text-xs font-bold tracking-wider text-[#C85A17] uppercase">
                  Wedding Moments & Feasts
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-obsidian tracking-tight leading-[1.1]">
                See the Grand{" "}
                <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl block sm:inline">
                  Banana Leaf Feast.
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="font-sans text-sm sm:text-base text-text-muted mt-2">
                A glimpse into our authentic catering setups, live counters, and traditional hospitality across Chennai weddings.
              </p>
            </FadeUp>
          </div>

          {/* Filter Pills */}
          <FadeUp delay={0.2}>
            <div className="flex gap-2 overflow-x-auto no-scrollbar justify-center mt-8 pb-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`shrink-0 px-5 py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-300 border cursor-pointer ${
                    activeFilter === cat
                      ? "bg-[#C85A17] text-white border-[#C85A17] shadow-md shadow-[#C85A17]/25"
                      : "bg-white text-stone-700 border-stone-200/90 hover:border-burnt-saffron"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Grid of Real Images */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((image, i) => (
                <motion.div
                  key={image.src + i}
                  layout
                  initial={
                    shouldReduce
                      ? {}
                      : { opacity: 0, scale: 0.94, filter: "blur(10px)" }
                  }
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  onClick={() => setSelectedIndex(i)}
                  className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-200/80 bg-stone-100"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />

                  {/* Gradient & Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="font-sans text-[0.6875rem] font-bold text-amber-400 uppercase tracking-wider mb-1">
                      {image.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white leading-tight">
                      {image.caption}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to view photo</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-obsidian/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
              aria-label="Close gallery lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav */}
            {selectedIndex > 0 && (
              <button
                onClick={() => setSelectedIndex(selectedIndex - 1)}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Nav */}
            {selectedIndex < filtered.length - 1 && (
              <button
                onClick={() => setSelectedIndex(selectedIndex + 1)}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Modal Image Display */}
            <motion.div
              key={selectedImage.src}
              className="max-w-4xl w-full mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-black border border-stone-800"
              initial={
                shouldReduce
                  ? {}
                  : { opacity: 0, scale: 0.95, filter: "blur(12px)" }
              }
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              <div className="p-4 sm:p-6 bg-stone-950/90 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-stone-800">
                <div>
                  <h4 className="font-display text-xl font-bold">
                    {selectedImage.caption}
                  </h4>
                  <p className="font-sans text-xs text-stone-400 mt-0.5">
                    {selectedImage.alt}
                  </p>
                </div>
                <div className="text-xs text-stone-400 font-mono px-3 py-1 rounded-full bg-stone-800 shrink-0">
                  {selectedIndex + 1} of {filtered.length}
                </div>
              </div>
            </motion.div>

            {/* Backdrop click to close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={() => setSelectedIndex(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
