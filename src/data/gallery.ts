export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

export const galleryCategories = [
  "All",
  "Banana Leaf",
  "Food",
  "Weddings",
  "Live Counters",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/banana_leaf_feast.jpg",
    alt: "Royal South Indian wedding banana leaf feast with biryani, chicken sukka, parotta, and accompaniments",
    caption: "Royal Thalavazhai Ilai Saapaadu Feast",
    category: "Banana Leaf",
    aspectRatio: "landscape",
  },
  {
    src: "/images/mutton_biryani.jpg",
    alt: "Authentic Seeraga Samba mutton biryani on banana leaf with clay pot raita",
    caption: "Woodfire Mutton Dum Biryani on Banana Leaf",
    category: "Food",
    aspectRatio: "landscape",
  },
  {
    src: "/images/banana_leaf_dining.jpg",
    alt: "Traditional wedding banquet hall with banana leaves laid on long tables with catering staff",
    caption: "Grand Kalyana Mandapam Catering Staff Setup",
    category: "Weddings",
    aspectRatio: "landscape",
  },
  {
    src: "/images/live_dosa.jpg",
    alt: "Live counter chef making golden crispy ghee roast dosa on banana leaf",
    caption: "Live Ghee Roast Dosa Station",
    category: "Live Counters",
    aspectRatio: "square",
  },
  {
    src: "/images/chettinad_starters.jpg",
    alt: "Spicy Chettinad chicken sukka and crispy chicken 65 on banana leaf",
    caption: "Chettinad Chicken Chukka & Hot Starters",
    category: "Food",
    aspectRatio: "landscape",
  },
  {
    src: "/images/welcome_drinks.jpg",
    alt: "South Indian welcome drinks: Rose milk in brass cup, nannari sarbath and fresh tender coconut",
    caption: "Chilled Reception Drinks & Fresh Tender Coconut",
    category: "Banana Leaf",
    aspectRatio: "square",
  },
];
