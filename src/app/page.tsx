import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BrandStory } from "@/components/sections/BrandStory";
import { SignatureFeast } from "@/components/sections/SignatureFeast";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { PackageSection } from "@/components/packages/PackageSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { LiveCounters } from "@/components/sections/LiveCounters";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Gallery } from "@/components/gallery/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { QuoteWizardController } from "@/components/forms/QuoteWizardController";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <BrandStory />
        <SignatureFeast />
        <SignatureDishes />
        <MenuExplorer />
        <PackageSection />
        <EventsSection />
        <LiveCounters />
        <ProcessSection />
        <Gallery />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp />
      <QuoteWizardController />
    </>
  );
}
