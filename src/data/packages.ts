export interface Package {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  inclusions: string[];
  isCustom?: boolean;
  isFeatured?: boolean;
  cta: string;
  note?: string;
}

export const packages: Package[] = [
  {
    slug: "classic",
    name: "The Classic Feast",
    subtitle: "For intimate celebrations",
    description:
      "A carefully composed menu with the essential South Indian wedding favourites — biryani, starters, accompaniments and a sweet finish.",
    inclusions: [
      "Chicken Dum Biryani",
      "Chicken 65",
      "Onion Raita",
      "Brinjal Gravy",
      "Boiled Egg",
      "Appalam",
      "Bread Halwa",
      "Ice Cream",
      "Welcome Drink",
    ],
    cta: "Enquire About This Package",
    note: "Sample menu — can be customized to your preferences.",
  },
  {
    slug: "grand",
    name: "The Grand Feast",
    subtitle: "A richer wedding menu",
    description:
      "An expanded menu with mutton, Chettinad preparations and a wider selection of starters and sides for a more generous celebration.",
    inclusions: [
      "Mutton or Chicken Biryani",
      "Chicken 65",
      "Mutton Chukka",
      "Chicken Chettinad",
      "Onion Raita",
      "Brinjal Gravy",
      "Boiled Egg",
      "Bread Halwa",
      "Ice Cream",
      "Welcome Drink",
    ],
    isFeatured: true,
    cta: "Enquire About This Package",
    note: "Sample menu — can be customized to your preferences.",
  },
  {
    slug: "signature",
    name: "The Signature Feast",
    subtitle: "For larger premium receptions",
    description:
      "A premium spread featuring seafood, mutton specials, live counters and a dessert selection designed for celebrations that call for something extraordinary.",
    inclusions: [
      "Mutton Dum Biryani",
      "Chicken 65",
      "Vanjaram Tawa Roast",
      "Prawn Ghee Roast",
      "Mutton Chukka",
      "Chicken Chettinad",
      "Parotta / Rumali Roti",
      "Onion Raita",
      "Brinjal Gravy",
      "Premium Dessert Selection",
      "Ice Cream",
      "Live Counter",
      "Welcome Drink",
    ],
    cta: "Enquire About This Package",
    note: "Sample menu — can be customized to your preferences.",
  },
  {
    slug: "custom",
    name: "The Custom Feast",
    subtitle: "Designed entirely around your celebration",
    description:
      "Tell us your guest count, preferred dishes, regional style and budget. We will shape a menu that fits your celebration perfectly.",
    inclusions: [
      "Choose your biryani",
      "Select starters",
      "Pick main courses",
      "Add seafood if desired",
      "Choose breads",
      "Select desserts",
      "Add live counters",
      "Choose service style",
    ],
    isCustom: true,
    cta: "Build Your Menu",
  },
];
