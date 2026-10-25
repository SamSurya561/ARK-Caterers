export interface MenuItem {
  name: string;
  description: string;
  isSignature?: boolean;
  isVeg?: boolean;
  regionalLabel?: string;
  imageSlot?: string;
}

export interface MenuCategory {
  slug: string;
  name: string;
  shortName: string;
  number: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    slug: "welcome",
    name: "Welcome Drinks",
    shortName: "Welcome",
    number: "01",
    items: [
      {
        name: "Nannari Sarbath",
        description:
          "A refreshing herbal cooler made with nannari root syrup, served chilled.",
        isVeg: true,
        regionalLabel: "South Indian Classic",
      },
      {
        name: "Rose Milk",
        description:
          "Chilled milk infused with rose syrup and a hint of cardamom.",
        isVeg: true,
      },
      {
        name: "Badam Milk",
        description:
          "Rich, creamy badam milk with saffron, served warm or chilled.",
        isVeg: true,
      },
      {
        name: "Watermelon Juice",
        description: "Freshly pressed watermelon with a touch of mint.",
        isVeg: true,
      },
      {
        name: "Tender Coconut",
        description:
          "Fresh tender coconut, a natural and cooling welcome drink.",
        isVeg: true,
      },
      {
        name: "Lemon & Mint Cooler",
        description: "Zesty lemon with crushed mint, sugar and sparkling water.",
        isVeg: true,
      },
    ],
  },
  {
    slug: "starters",
    name: "Signature Starters",
    shortName: "Starters",
    number: "02",
    items: [
      {
        name: "Chicken 65",
        description:
          "Crisp, succulent chicken tossed in a bold South Indian spice blend with curry leaves.",
        isSignature: true,
        imageSlot: "chicken-65",
      },
      {
        name: "Pepper Chicken",
        description:
          "Tender chicken cooked with coarsely ground black pepper, curry leaves and shallots.",
      },
      {
        name: "Chicken Leg Fry",
        description:
          "Whole leg piece marinated in spices and deep-fried until golden and crisp.",
      },
      {
        name: "Chicken Lollipop",
        description:
          "Frenched chicken drumettes coated in a flavourful batter and fried crisp.",
      },
      {
        name: "Tandoori Chicken",
        description:
          "Chicken marinated overnight in yoghurt and tandoori spices, cooked in a clay oven.",
        regionalLabel: "North Indian Style",
      },
      {
        name: "Mutton Chukka",
        description:
          "Tender mutton cooked down with roasted spices, black pepper, curry leaves and caramelized onions.",
        isSignature: true,
        imageSlot: "mutton-chukka",
      },
      {
        name: "Mutton Kola Urundai",
        description:
          "Spiced minced mutton shaped into rounds, shallow-fried until crisp on the outside.",
        regionalLabel: "Chettinad Style",
      },
      {
        name: "Fish 65",
        description:
          "Boneless fish pieces marinated in South Indian spices and fried crisp.",
      },
      {
        name: "Vanjaram Tawa Roast",
        description:
          "Fresh seer fish marinated in South Indian spices and seared on a hot tawa.",
        isSignature: true,
        imageSlot: "vanjaram-roast",
      },
      {
        name: "Prawn Tawa Roast",
        description:
          "Succulent prawns marinated and roasted on a flat griddle with spices.",
      },
      {
        name: "Prawn Ghee Roast",
        description:
          "Prawns tossed in a rich, aromatic ghee-based masala with Mangalorean influences.",
        isSignature: true,
        imageSlot: "prawn-ghee-roast",
      },
      {
        name: "Crab Masala",
        description:
          "Fresh crab cooked in a thick, spiced masala with onions and tomatoes.",
      },
    ],
  },
  {
    slug: "chicken",
    name: "Chicken Specials",
    shortName: "Chicken",
    number: "03",
    items: [
      {
        name: "Chicken Chettinad",
        description:
          "A robust Chettinad-style chicken curry with freshly ground spices and coconut.",
        isSignature: true,
        regionalLabel: "Chettinad",
        imageSlot: "chicken-chettinad",
      },
      {
        name: "Chicken Pepper Masala",
        description:
          "Chicken pieces in a thick, pepper-forward gravy with onions and curry leaves.",
      },
      {
        name: "Chicken Curry",
        description:
          "Home-style chicken curry with a balanced blend of South Indian spices.",
      },
      {
        name: "Chicken Tikka Masala",
        description:
          "Grilled chicken tikka pieces simmered in a rich, creamy tomato-based sauce.",
        regionalLabel: "North Indian Style",
      },
      {
        name: "Kadai Chicken",
        description:
          "Chicken cooked with capsicum, onions and kadai masala in a wok-style preparation.",
      },
      {
        name: "Butter Chicken",
        description:
          "Tender chicken in a smooth, mildly spiced tomato-cream gravy.",
        regionalLabel: "North Indian Style",
      },
      {
        name: "Red Chicken Masala",
        description:
          "Chicken in a vibrant red masala sauce with dried chillies and garlic.",
      },
    ],
  },
  {
    slug: "mutton",
    name: "Mutton Specials",
    shortName: "Mutton",
    number: "04",
    items: [
      {
        name: "Mutton Curry",
        description:
          "Slow-cooked mutton in a traditional South Indian curry with aromatic spices.",
        imageSlot: "mutton-curry",
      },
      {
        name: "Mutton Pepper Masala",
        description:
          "Tender mutton pieces tossed in a bold pepper masala with curry leaves.",
        isSignature: true,
      },
      {
        name: "Mutton Gravy",
        description:
          "Rich and flavourful mutton gravy, slow-simmered for depth of flavour.",
      },
      {
        name: "Mutton Chukka",
        description:
          "Dry-roasted mutton with a concentrated spice blend, black pepper and shallots.",
        isSignature: true,
      },
    ],
  },
  {
    slug: "seafood",
    name: "Seafood",
    shortName: "Seafood",
    number: "05",
    items: [
      {
        name: "Fish Curry",
        description:
          "Tangy fish curry with tamarind, tomato and a South Indian spice base.",
      },
      {
        name: "Meen Kuzhambu",
        description:
          "Traditional Tamil-style fish curry cooked in a tamarind and chilli gravy.",
        regionalLabel: "Tamil Classic",
        isSignature: true,
      },
      {
        name: "Prawn Thokku",
        description:
          "Prawns cooked in a thick, spiced thokku-style masala with shallots and tomatoes.",
      },
      {
        name: "Crab Lollipop",
        description:
          "Crab meat shaped around a stick, coated in batter and deep-fried until crisp.",
      },
      {
        name: "Fish Fry",
        description:
          "Whole fish or fillets marinated in turmeric and chilli, pan-fried until golden.",
      },
    ],
  },
  {
    slug: "biryani",
    name: "Biryani",
    shortName: "Biryani",
    number: "06",
    items: [
      {
        name: "Chicken Dum Biryani",
        description:
          "Fragrant basmati rice layered with spiced chicken and slow-cooked under dum.",
        isSignature: true,
        imageSlot: "chicken-biryani",
      },
      {
        name: "Mutton Dum Biryani",
        description:
          "Tender mutton pieces layered with aromatic rice and cooked on slow fire.",
        isSignature: true,
        imageSlot: "mutton-biryani",
      },
      {
        name: "Ambur Chicken Biryani",
        description:
          "A lighter, seeraga samba rice-based biryani from the Ambur tradition.",
        regionalLabel: "Ambur Style",
        isSignature: true,
      },
      {
        name: "Ambur Mutton Biryani",
        description:
          "Fragrant seeraga samba rice, slow-cooked with tender mutton and aromatic spices.",
        regionalLabel: "Ambur Style",
      },
      {
        name: "Seeraga Samba Chicken Biryani",
        description:
          "Aromatic seeraga samba rice cooked with chicken and whole spices.",
        regionalLabel: "South Indian Style",
      },
      {
        name: "Seeraga Samba Mutton Biryani",
        description:
          "Seeraga samba rice slow-cooked with mutton, fried onions and fresh spices.",
        regionalLabel: "South Indian Style",
      },
      {
        name: "Kuska",
        description:
          "Plain spiced rice cooked with whole aromatics, often served alongside curries.",
        isVeg: true,
      },
    ],
  },
  {
    slug: "curries",
    name: "Gravies & Curries",
    shortName: "Curries",
    number: "07",
    items: [
      {
        name: "Chettinad Chicken Kuzhambu",
        description:
          "A fiery, aromatic Chettinad kuzhambu with freshly pounded spices and chicken.",
        regionalLabel: "Chettinad",
      },
      {
        name: "Salna",
        description:
          "A light, aromatic gravy traditionally served with parotta or idiyappam.",
        regionalLabel: "Chennai Style",
      },
      {
        name: "Dhalcha",
        description:
          "A tangy lentil and vegetable gravy, the classic biryani accompaniment.",
      },
      {
        name: "Brinjal Gravy",
        description:
          "Roasted brinjal cooked in a spiced onion-tomato gravy, served with biryani.",
        isVeg: true,
      },
    ],
  },
  {
    slug: "breads",
    name: "Indian Breads",
    shortName: "Breads",
    number: "08",
    items: [
      {
        name: "Parotta",
        description:
          "Flaky, layered South Indian flatbread, hand-stretched and cooked on a hot griddle.",
        isVeg: true,
        isSignature: true,
        regionalLabel: "South Indian Classic",
      },
      {
        name: "Nool Parotta",
        description:
          "Delicate, string-like parotta pulled into fine strands before cooking.",
        isVeg: true,
      },
      {
        name: "Rumali Roti",
        description:
          "Thin, soft handkerchief-style roti, cooked on an inverted tawa.",
        isVeg: true,
      },
      {
        name: "Chapathi",
        description: "Soft whole wheat flatbread, freshly made and served warm.",
        isVeg: true,
      },
      {
        name: "Kari Dosai",
        description:
          "Crisp dosa topped with a spiced minced meat filling, folded and served hot.",
        regionalLabel: "South Indian",
      },
      {
        name: "Idiyappam",
        description:
          "Delicate steamed rice noodles, served with stew or coconut milk.",
        isVeg: true,
        regionalLabel: "South Indian Classic",
      },
    ],
  },
  {
    slug: "sides",
    name: "Accompaniments",
    shortName: "Sides",
    number: "09",
    items: [
      {
        name: "Onion Raita",
        description:
          "Cool, creamy yoghurt mixed with chopped onions, coriander and a pinch of cumin.",
        isVeg: true,
      },
      {
        name: "Curd Raita",
        description:
          "Plain whipped curd seasoned with salt, tempered with mustard and curry leaves.",
        isVeg: true,
      },
      {
        name: "Brinjal Pachadi",
        description:
          "Smoky roasted brinjal mixed with yoghurt, tempered with mustard and chillies.",
        isVeg: true,
      },
      {
        name: "Kathrikai Thokku",
        description:
          "A thick, tangy brinjal relish cooked down with chilli and sesame oil.",
        isVeg: true,
      },
      {
        name: "Boiled Egg",
        description:
          "A simple boiled egg, a classic accompaniment to South Indian biryani.",
      },
      {
        name: "Pickles",
        description:
          "Assorted South Indian pickles including mango, lemon and mixed vegetable.",
        isVeg: true,
      },
      {
        name: "Appalam",
        description:
          "Crisp, thin pappadums fried or roasted, served as a crunchy side.",
        isVeg: true,
      },
    ],
  },
  {
    slug: "desserts",
    name: "Desserts",
    shortName: "Desserts",
    number: "10",
    items: [
      {
        name: "Bread Halwa",
        description:
          "A rich, slow-cooked South Indian dessert with a soft, buttery texture and cardamom fragrance.",
        isSignature: true,
        isVeg: true,
        imageSlot: "bread-halwa",
      },
      {
        name: "Elaneer Payasam",
        description:
          "Delicate tender coconut pieces in a sweet, milk-based payasam with rose water.",
        isVeg: true,
      },
      {
        name: "Muthanjan",
        description:
          "Sweet saffron rice cooked with ghee, cashews, raisins and cardamom.",
        isVeg: true,
        regionalLabel: "South Indian Classic",
      },
      {
        name: "Rasmalai",
        description:
          "Soft cottage cheese dumplings soaked in chilled, cardamom-flavoured cream.",
        isVeg: true,
      },
      {
        name: "Gulab Jamun",
        description:
          "Soft, golden milk-solid dumplings soaked in rose-scented sugar syrup.",
        isVeg: true,
      },
      {
        name: "Ice Cream",
        description:
          "Assorted premium ice cream flavours served as the final sweet course.",
        isVeg: true,
      },
      {
        name: "Jangiri",
        description:
          "Crisp, lacy rings of urad dal batter soaked in saffron-scented sugar syrup.",
        isVeg: true,
        regionalLabel: "South Indian Classic",
      },
      {
        name: "Badam Halwa",
        description:
          "Rich almond halwa slow-cooked with ghee and saffron until glossy.",
        isVeg: true,
      },
    ],
  },
  {
    slug: "live-counters",
    name: "Live Counters",
    shortName: "Live",
    number: "11",
    items: [
      {
        name: "Live Dosa Counter",
        description:
          "Freshly made dosas prepared on a hot griddle, right before your guests.",
        isVeg: true,
      },
      {
        name: "Parotta Counter",
        description:
          "Hand-stretched parottas cooked live, served hot off the griddle.",
        isVeg: true,
      },
      {
        name: "Chaat Counter",
        description:
          "An interactive street food counter with pani puri, bhel and more.",
        isVeg: true,
      },
      {
        name: "Mocktail Counter",
        description:
          "Freshly crafted mocktails and coolers mixed on the spot for your guests.",
        isVeg: true,
      },
      {
        name: "Live Grill",
        description:
          "Meats and vegetables grilled over an open flame for smoky flavour.",
      },
      {
        name: "Live Fry Station",
        description:
          "Freshly fried starters prepared to order in front of the guests.",
      },
      {
        name: "Dessert Counter",
        description:
          "An assortment of sweets and desserts displayed and served live.",
        isVeg: true,
      },
      {
        name: "Filter Coffee Counter",
        description:
          "Traditional South Indian filter coffee brewed and poured fresh.",
        isVeg: true,
        isSignature: true,
        regionalLabel: "South Indian Classic",
      },
    ],
  },
  {
    slug: "beverages",
    name: "Beverages",
    shortName: "Beverages",
    number: "12",
    items: [
      {
        name: "Filter Coffee",
        description:
          "Strong, aromatic South Indian filter coffee served in a traditional davara-tumbler.",
        isVeg: true,
        regionalLabel: "South Indian Classic",
      },
      {
        name: "Tea",
        description: "Hot masala tea or plain tea served after the meal.",
        isVeg: true,
      },
      {
        name: "Beeda / Pan",
        description:
          "A traditional post-meal palate cleanser with betel leaf and fillings.",
        isVeg: true,
      },
    ],
  },
];
