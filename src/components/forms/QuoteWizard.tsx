"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Check, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";

interface QuoteWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const eventTypes = [
  "Wedding",
  "Reception",
  "Engagement",
  "Birthday",
  "Corporate Event",
  "Family Function",
  "Other",
];

const guestCounts = [
  "50 – 100",
  "100 – 250",
  "250 – 500",
  "500 – 1,000",
  "1,000+",
];

const serviceTypes = [
  "Banana Leaf",
  "Buffet",
  "Both",
  "Not Sure",
];

const foodPreferences = [
  "Non-Veg Focused",
  "Mixed Menu",
  "Vegetarian",
  "Custom",
];

const menuCategories = [
  "Biryani",
  "Chicken",
  "Mutton",
  "Seafood",
  "Starters",
  "Breads",
  "Desserts",
  "Live Counters",
];

const TOTAL_STEPS = 5;

export function QuoteWizard({ isOpen, onClose }: QuoteWizardProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const shouldReduce = useReducedMotion();

  const [formData, setFormData] = useState({
    eventType: "",
    guestCount: "",
    serviceType: "",
    foodPreference: "",
    categories: [] as string[],
    eventDate: "",
    venue: "",
    name: "",
    phone: "",
    whatsapp: "",
  });

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    setFormData({
      eventType: "",
      guestCount: "",
      serviceType: "",
      foodPreference: "",
      categories: [],
      eventDate: "",
      venue: "",
      name: "",
      phone: "",
      whatsapp: "",
    });
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 400);
  };

  const toggleCategory = (cat: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.eventType !== "";
      case 2: return formData.guestCount !== "" && formData.serviceType !== "";
      case 3: return formData.foodPreference !== "";
      case 4: return formData.eventDate !== "";
      case 5: return formData.name !== "" && formData.phone !== "";
      default: return false;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-obsidian/70"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-warm-ivory w-full h-full sm:h-auto sm:max-w-xl sm:max-h-[90vh] overflow-y-auto z-10 sm:rounded-3xl shadow-2xl border border-stone-200"
            initial={shouldReduce ? {} : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduce ? {} : { opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Plan Your Feast"
          >
            {/* Header */}
            <div className="sticky top-0 bg-warm-ivory/95 backdrop-blur-sm z-10 px-8 pt-8 pb-4 border-b border-border-light sm:rounded-t-3xl">
              <div className="flex items-start justify-between">
                <div>
                  <span className="eyebrow text-deep-maroon/60">
                    Plan Your Feast
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-obsidian mt-1">
                    {isSubmitted
                      ? "Request Sent"
                      : "Tell us about your celebration."}
                  </h3>
                </div>
                <button
                  onClick={handleClose}
                  className="w-10 h-10 flex items-center justify-center hover:bg-obsidian/5 transition-colors -mr-2"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-obsidian" />
                </button>
              </div>
              {!isSubmitted && (
                <div className="flex items-center gap-2 mt-4">
                  {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                    <div
                      key={i}
                      className={`h-[2px] flex-1 transition-colors duration-300 ${
                        i + 1 <= step ? "bg-deep-maroon" : "bg-border-light"
                      }`}
                    />
                  ))}
                  <span className="font-sans text-xs text-text-muted ml-2">
                    {String(step).padStart(2, "0")} / {String(TOTAL_STEPS).padStart(2, "0")}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="px-8 py-8">
              {isSubmitted ? (
                <SuccessState />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={shouldReduce ? {} : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={shouldReduce ? {} : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 1 && (
                      <StepContent
                        title="What are you celebrating?"
                        subtitle="Select the type of event."
                      >
                        <OptionGrid
                          options={eventTypes}
                          selected={formData.eventType}
                          onSelect={(val) =>
                            setFormData((prev) => ({ ...prev, eventType: val }))
                          }
                        />
                      </StepContent>
                    )}

                    {step === 2 && (
                      <StepContent
                        title="Guest count & service"
                        subtitle="How many guests and what service style?"
                      >
                        <label className="eyebrow text-text-muted block mb-3">
                          Estimated guests
                        </label>
                        <OptionGrid
                          options={guestCounts}
                          selected={formData.guestCount}
                          onSelect={(val) =>
                            setFormData((prev) => ({ ...prev, guestCount: val }))
                          }
                        />
                        <label className="eyebrow text-text-muted block mb-3 mt-8">
                          Preferred service
                        </label>
                        <OptionGrid
                          options={serviceTypes}
                          selected={formData.serviceType}
                          onSelect={(val) =>
                            setFormData((prev) => ({
                              ...prev,
                              serviceType: val,
                            }))
                          }
                        />
                      </StepContent>
                    )}

                    {step === 3 && (
                      <StepContent
                        title="Food preference"
                        subtitle="What kind of menu are you looking for?"
                      >
                        <OptionGrid
                          options={foodPreferences}
                          selected={formData.foodPreference}
                          onSelect={(val) =>
                            setFormData((prev) => ({
                              ...prev,
                              foodPreference: val,
                            }))
                          }
                        />
                        <label className="eyebrow text-text-muted block mb-3 mt-8">
                          Interested categories (optional)
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {menuCategories.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => toggleCategory(cat)}
                              className={`py-3 px-4 font-sans text-sm text-left border transition-colors duration-200 flex items-center justify-between ${
                                formData.categories.includes(cat)
                                  ? "border-deep-maroon bg-deep-maroon/5 text-obsidian"
                                  : "border-border-light text-text-secondary hover:border-obsidian/30"
                              }`}
                            >
                              {cat}
                              {formData.categories.includes(cat) && (
                                <Check className="w-3.5 h-3.5 text-deep-maroon" />
                              )}
                            </button>
                          ))}
                        </div>
                      </StepContent>
                    )}

                    {step === 4 && (
                      <StepContent
                        title="Event details"
                        subtitle="When and where is the celebration?"
                      >
                        <div className="space-y-5">
                          <div>
                            <label className="eyebrow text-text-muted block mb-2">
                              Event date
                            </label>
                            <input
                              type="date"
                              value={formData.eventDate}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  eventDate: e.target.value,
                                }))
                              }
                              className="w-full py-3 px-4 border border-border-light bg-transparent font-sans text-sm text-obsidian focus:border-deep-maroon focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="eyebrow text-text-muted block mb-2">
                              Venue / Area (optional)
                            </label>
                            <input
                              type="text"
                              value={formData.venue}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  venue: e.target.value,
                                }))
                              }
                              placeholder="e.g. Wedding hall in T. Nagar"
                              className="w-full py-3 px-4 border border-border-light bg-transparent font-sans text-sm text-obsidian placeholder:text-text-muted/50 focus:border-deep-maroon focus:outline-none transition-colors"
                            />
                          </div>
                        </div>
                      </StepContent>
                    )}

                    {step === 5 && (
                      <StepContent
                        title="Your details"
                        subtitle="How can we reach you?"
                      >
                        <div className="space-y-5">
                          <div>
                            <label className="eyebrow text-text-muted block mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              className="w-full py-3 px-4 border border-border-light bg-transparent font-sans text-sm text-obsidian focus:border-deep-maroon focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="eyebrow text-text-muted block mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  phone: e.target.value,
                                }))
                              }
                              className="w-full py-3 px-4 border border-border-light bg-transparent font-sans text-sm text-obsidian focus:border-deep-maroon focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="eyebrow text-text-muted block mb-2">
                              WhatsApp (if different)
                            </label>
                            <input
                              type="tel"
                              value={formData.whatsapp}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  whatsapp: e.target.value,
                                }))
                              }
                              placeholder="Same as phone if blank"
                              className="w-full py-3 px-4 border border-border-light bg-transparent font-sans text-sm text-obsidian placeholder:text-text-muted/50 focus:border-deep-maroon focus:outline-none transition-colors"
                            />
                          </div>
                        </div>
                      </StepContent>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Footer actions */}
            {!isSubmitted && (
              <div className="sticky bottom-0 bg-warm-ivory border-t border-border-light px-8 py-5 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="font-sans text-sm font-medium text-text-muted hover:text-obsidian transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}
                {step < TOTAL_STEPS ? (
                  <Button
                    onClick={() => setStep((s) => s + 1)}
                    variant="primary"
                    disabled={!canProceed()}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    disabled={!canProceed()}
                  >
                    Request My Catering Quote
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Sub-components ──────────────────────────── */

function StepContent({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-display text-xl font-semibold text-obsidian">
        {title}
      </h4>
      <p className="font-sans text-sm text-text-muted mt-1 mb-6">{subtitle}</p>
      {children}
    </div>
  );
}

function OptionGrid({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (val: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`py-3.5 px-4 font-sans text-sm text-left border rounded-2xl transition-all duration-200 cursor-pointer ${
            selected === option
              ? "border-[#C85A17] bg-[#C85A17]/10 text-obsidian font-bold shadow-xs"
              : "border-border-light bg-white/70 text-text-secondary hover:border-obsidian/30 hover:bg-white"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function SuccessState() {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
        <Check className="w-8 h-8" />
      </div>
      <h4 className="font-display text-2xl font-bold text-obsidian">
        Your Feast Request Is In!
      </h4>
      <p className="font-sans text-sm text-text-secondary leading-relaxed mt-4 max-w-sm mx-auto">
        We&apos;ll review your celebration details and prepare a tailored banana-leaf feast menu and quote.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessages.general)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C85A17] text-white rounded-full font-sans text-sm font-bold shadow-md shadow-[#C85A17]/25 hover:bg-[#B34E12] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Us Directly
        </a>
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-stone-300 bg-white rounded-full text-obsidian font-sans text-sm font-semibold hover:bg-stone-50 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Caterer
        </a>
      </div>
    </div>
  );
}
