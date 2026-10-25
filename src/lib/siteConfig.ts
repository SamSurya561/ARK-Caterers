export const siteConfig = {
  brand: {
    name: "ARK Caterers",
    tagline: "South Indian flavours. Beautifully served.",
    description:
      "Premium South Indian wedding catering with signature biryani, chicken, mutton and seafood menus, traditional banana-leaf service, buffet catering and customized wedding feasts.",
    positioning: "The food people talk about after the wedding.",
  },

  contact: {
    phone: "[PHONE NUMBER]",
    whatsapp: "[WHATSAPP NUMBER]",
    whatsappNumber: "91XXXXXXXXXX", // without + prefix, for wa.me link
    email: "[EMAIL ADDRESS]",
  },

  location: {
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    serviceAreas: [
      "T. Nagar",
      "Anna Nagar",
      "Velachery",
      "Adyar",
      "Porur",
      "Tambaram",
      "Chromepet",
      "Guindy",
      "Mylapore",
      "Nungambakkam",
      "Kodambakkam",
      "Vadapalani",
    ],
  },

  credentials: {
    fssai: "[FSSAI NUMBER]",
    yearsOfExperience: "[YEARS OF EXPERIENCE]",
    eventsCompleted: "[NUMBER OF EVENTS]",
    halal: true,
  },

  social: {
    instagram: "[INSTAGRAM URL]",
    facebook: "[FACEBOOK URL]",
    youtube: "[YOUTUBE URL]",
  },

  seo: {
    title: "ARK Caterers | Premium South Indian Wedding Catering",
    description:
      "Premium South Indian wedding catering in Chennai with signature biryani, chicken, mutton and seafood menus, traditional banana-leaf service, buffet catering and customized wedding feasts.",
    url: "https://arkcaterers.com",
    ogImage: "/og-image.jpg",
  },

  whatsappMessages: {
    general:
      "Hi ARK Caterers, I would like to enquire about catering for my event.",
    wedding:
      "Hi ARK Caterers, I would like to enquire about catering for my wedding.",
    menu: "Hi ARK Caterers, I'd like to discuss your wedding catering menu.",
    quote: (event?: string, date?: string, count?: string, location?: string) =>
      `Hi ARK Caterers, I would like a catering quote.${event ? ` Event: ${event}.` : ""}${date ? ` Date: ${date}.` : ""}${count ? ` Guests: ${count}.` : ""}${location ? ` Location: ${location}.` : ""}`,
  },

  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "Menu", href: "/#menu" },
      { label: "Packages", href: "/#packages" },
      { label: "Gallery", href: "/#gallery" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
    cta: { label: "Plan Your Feast", href: "#quote" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
