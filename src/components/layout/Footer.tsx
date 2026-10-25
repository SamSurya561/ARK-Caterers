import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian text-text-on-dark">
      <div className="container-site section-padding">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold tracking-[0.04em] text-warm-ivory block">
                ARK
              </span>
              <span className="font-sans text-[0.55rem] font-semibold tracking-[0.28em] text-text-on-dark/50 uppercase -mt-1 block">
                CATERERS
              </span>
            </Link>
            <p className="font-sans text-sm text-text-on-dark/60 leading-relaxed max-w-xs">
              South Indian flavours. Beautifully served.
            </p>
            <p className="mt-4 text-[0.7rem] tracking-wider text-text-on-dark/40 uppercase font-sans">
              Halal Certified
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="eyebrow text-text-on-dark/40 mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Menu & Welcome Drinks", href: "/#menu" },
                { label: "Wedding Packages", href: "/#packages" },
                { label: "Feast Gallery", href: "/#gallery" },
                { label: "Frequently Asked Questions", href: "/#faq" },
                { label: "Contact & Tasting Lounge", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-text-on-dark/60 hover:text-warm-ivory transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow text-text-on-dark/40 mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Wedding Catering",
                "Reception Catering",
                "Biryani Catering",
                "Buffet Catering",
                "Banana Leaf Catering",
                "Live Counters",
                "Private Events",
              ].map((service) => (
                <li key={service}>
                  <span className="font-sans text-sm text-text-on-dark/60">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-text-on-dark/40 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-start gap-3 font-sans text-sm text-text-on-dark/60 hover:text-warm-ivory transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-sans text-sm text-text-on-dark/60 hover:text-warm-ivory transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 font-sans text-sm text-text-on-dark/60 hover:text-warm-ivory transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 font-sans text-sm text-text-on-dark/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {siteConfig.location.city}, {siteConfig.location.state}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider divider-dark mt-16 mb-8 opacity-20" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-text-on-dark/40">
            &copy; {new Date().getFullYear()} ARK Caterers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-sans text-xs text-text-on-dark/40 hover:text-text-on-dark/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-xs text-text-on-dark/40 hover:text-text-on-dark/70 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
