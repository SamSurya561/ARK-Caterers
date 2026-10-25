import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { QuoteWizardController } from "@/components/forms/QuoteWizardController";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact ARK Caterers | Wedding Catering Enquiries & Tasting in Chennai",
  description:
    "Get in touch with ARK Caterers for traditional South Indian banana leaf wedding catering, corporate events and private celebrations in Chennai. Call or WhatsApp for a custom quote.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-24 bg-surface-cream min-h-screen">
        <ContactContent />
      </main>
      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp />
      <QuoteWizardController />
    </>
  );
}
