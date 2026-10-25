"use client";

import { FadeIn } from "@/components/ui/Motion";
import { Utensils, ShieldCheck, Clock, Users } from "lucide-react";

const trustFeatures = [
  {
    icon: Utensils,
    title: "100% Banana Leaf Serving",
    subtitle: "Authentic Thalavazhai Ilai Saapaadu",
  },
  {
    icon: ShieldCheck,
    title: "Fresh & 100% Halal",
    subtitle: "Stone-ground authentic masalas",
  },
  {
    icon: Clock,
    title: "Punctual Banquet Service",
    subtitle: "Setup 2 hours before guests arrive",
  },
  {
    icon: Users,
    title: "Uniformed Service Team",
    subtitle: "Traditional South Indian hospitality",
  },
];

export function TrustStrip() {
  return (
    <FadeIn>
      <section className="bg-white py-6 border-y border-stone-200/80 shadow-2xs">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="flex items-center gap-3.5 p-2"
                >
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-[#C85A17] flex items-center justify-center shrink-0 border border-amber-900/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-sm font-bold text-obsidian leading-snug">
                      {feat.title}
                    </h4>
                    <p className="font-sans text-[0.6875rem] text-text-muted mt-0.5">
                      {feat.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
