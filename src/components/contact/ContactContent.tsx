"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function ContactContent() {
  return (
    <section className="container-site">
      <div className="max-w-3xl mx-auto text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-text-muted mb-4">
          <Link href="/" className="hover:text-obsidian transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-burnt-saffron">Contact Us</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-saffron/10 border border-burnt-saffron/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C85A17]" />
          <span className="font-sans text-[0.6875rem] font-semibold tracking-wider text-[#C85A17] uppercase">
            Let&apos;s Connect
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-obsidian tracking-tight leading-[1.1]">
          Plan Your Unforgettable{" "}
          <span className="font-script text-[#C85A17] font-bold text-5xl sm:text-6xl block sm:inline">
            Wedding Feast.
          </span>
        </h1>

        <p className="font-sans text-base sm:text-lg text-text-secondary mt-4 leading-relaxed max-w-2xl mx-auto">
          Whether you are planning a grand banana-leaf reception for 2,000 guests or an intimate family celebration, our catering directors and master chefs are here to guide you.
        </p>
      </div>

      {/* Quick Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 max-w-6xl mx-auto">
        {/* Phone Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#C85A17] flex items-center justify-center mb-5 border border-amber-900/10">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-obsidian">
              Direct Phone
            </h3>
            <p className="font-sans text-xs text-text-muted mt-1 leading-relaxed">
              Speak directly with our senior catering event director.
            </p>
          </div>
          <div className="mt-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-sans text-sm font-bold text-[#C85A17] hover:underline block"
            >
              {siteConfig.contact.phone}
            </a>
            <span className="text-[0.6875rem] text-stone-500 block mt-0.5">
              Available 8:00 AM – 10:00 PM
            </span>
          </div>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-900/10">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-obsidian">
              WhatsApp Support
            </h3>
            <p className="font-sans text-xs text-text-muted mt-1 leading-relaxed">
              Fastest response for menu cards, dates check & estimates.
            </p>
          </div>
          <div className="mt-6">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.whatsappMessages.general
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-bold text-emerald-700 hover:underline flex items-center gap-1.5"
            >
              Chat with Us Now →
            </a>
            <span className="text-[0.6875rem] text-stone-500 block mt-0.5">
              Average reply in 15 mins
            </span>
          </div>
        </div>

        {/* Kitchen & Office Location */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#C85A17] flex items-center justify-center mb-5 border border-amber-900/10">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-obsidian">
              Kitchen & Office
            </h3>
            <p className="font-sans text-xs text-text-muted mt-1 leading-relaxed">
              Commercial central kitchen & customer tasting lounge.
            </p>
          </div>
          <div className="mt-6">
            <span className="font-sans text-xs font-semibold text-obsidian block">
              Chennai, Tamil Nadu
            </span>
            <span className="text-[0.6875rem] text-stone-500 block mt-0.5">
              Serving all across Chennai & Suburbs
            </span>
          </div>
        </div>

        {/* Tasting & Bookings */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#C85A17] flex items-center justify-center mb-5 border border-amber-900/10">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-obsidian">
              Tasting Sessions
            </h3>
            <p className="font-sans text-xs text-text-muted mt-1 leading-relaxed">
              Pre-booking food tasting sessions for wedding couples.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="#enquiry-form"
              className="font-sans text-sm font-bold text-[#C85A17] hover:underline block"
            >
              Schedule Tasting →
            </a>
            <span className="text-[0.6875rem] text-stone-500 block mt-0.5">
              By prior appointment only
            </span>
          </div>
        </div>
      </div>

      {/* Contact & Enquiry Section */}
      <div id="enquiry-form" className="mt-14 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-stone-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hospitality Commitment */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-sans text-xs font-bold tracking-wider text-burnt-saffron uppercase">
                The ARK Caterers Guarantee
              </span>
              <h2 className="font-display text-3xl font-bold text-obsidian mt-1">
                Authentic South Indian Hospitality
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mt-3">
                We treat every wedding as if it were our own family celebration. From fresh aromatic seeraga samba biryani cooked on traditional woodfire stoves to warm banana-leaf service, we guarantee:
              </p>
            </div>

            <div className="space-y-3.5">
              {[
                "100% Traditional Banana Leaf Service (Thalavazhai Ilai)",
                "Experienced Catering Staff in Clean Dhoti Uniform",
                "FSSAI Certified & Strict Kitchen Hygiene Standards",
                "100% Halal Mutton, Chicken & Daily Fresh Seafood",
                "Live Dosa & Parotta Counters with Fresh Accompaniments",
                "Punctual Setup 2 Hours Prior to Guest Arrival",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="font-sans text-xs sm:text-sm text-stone-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-900/10 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#C85A17] shrink-0" />
              <p className="font-sans text-xs text-stone-700 leading-relaxed">
                Have questions about specific regional wedding menus (Chettinad, Kongu, Muslim Kalyanam, or Brahmin Saapadu)? We customize menus to your family traditions.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Event Request Card */}
          <div className="lg:col-span-7 bg-stone-50/80 rounded-2xl p-6 sm:p-8 border border-stone-200/80">
            <h3 className="font-display text-2xl font-bold text-obsidian">
              Request a Custom Wedding Quote
            </h3>
            <p className="font-sans text-xs text-stone-600 mt-1 mb-6">
              Fill in your details below and we will prepare a complete dish-by-dish menu quote and availability schedule.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get("name") || "";
                const phone = data.get("phone") || "";
                const event = data.get("event") || "Wedding";
                const guests = data.get("guests") || "";
                const date = data.get("date") || "";
                const message = `Hi ARK Caterers, I would like to request a quote for our event.\nName: ${name}\nPhone: ${phone}\nEvent Type: ${event}\nGuests: ${guests}\nDate: ${date}`;
                window.open(
                  `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    message
                  )}`,
                  "_blank"
                );
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs font-semibold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Arun Kumar"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white font-sans text-sm focus:outline-none focus:border-[#C85A17]"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-semibold text-stone-700 mb-1">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 98400 12345"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white font-sans text-sm focus:outline-none focus:border-[#C85A17]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-sans text-xs font-semibold text-stone-700 mb-1">
                    Event Type
                  </label>
                  <select
                    name="event"
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white font-sans text-sm focus:outline-none focus:border-[#C85A17]"
                  >
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Muhurtham (Morning)">Muhurtham</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Family Celebration">Family Celebration</option>
                    <option value="Corporate Feast">Corporate Feast</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-stone-700 mb-1">
                    Estimated Guests
                  </label>
                  <input
                    type="text"
                    name="guests"
                    placeholder="e.g. 500 Guests"
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white font-sans text-sm focus:outline-none focus:border-[#C85A17]"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-stone-700 mb-1">
                    Tentative Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white font-sans text-sm focus:outline-none focus:border-[#C85A17]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs font-semibold text-stone-700 mb-1">
                  Serving Style Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 cursor-pointer">
                    <input
                      type="radio"
                      name="serving"
                      value="Banana Leaf"
                      defaultChecked
                      className="accent-[#C85A17]"
                    />
                    <span className="text-xs font-medium text-stone-800">
                      Traditional Banana Leaf
                    </span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 cursor-pointer">
                    <input
                      type="radio"
                      name="serving"
                      value="Buffet"
                      className="accent-[#C85A17]"
                    />
                    <span className="text-xs font-medium text-stone-800">
                      Grand Reception Buffet
                    </span>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#C85A17] hover:bg-[#B34E12] text-white font-sans text-sm font-bold shadow-md shadow-[#C85A17]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Enquiry via WhatsApp for Instant Quote
                </button>
                <p className="text-center font-sans text-[0.6875rem] text-stone-500 mt-2">
                  No commitment required. We respond within 15 minutes with complete dish packages.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Service Areas Strip */}
      <div className="mt-14 max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 text-center">
        <span className="font-sans text-xs font-bold tracking-wider text-[#C85A17] uppercase">
          Service Areas in Chennai & Tamil Nadu
        </span>
        <h3 className="font-display text-2xl font-bold text-obsidian mt-1">
          Serving All Leading Wedding Halls & Venues
        </h3>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {siteConfig.location.serviceAreas.map((area) => (
            <span
              key={area}
              className="px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 text-xs font-medium"
            >
              {area}
            </span>
          ))}
          <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            + Outstation Weddings Across Tamil Nadu
          </span>
        </div>
      </div>
    </section>
  );
}
