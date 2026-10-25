export interface EventType {
  name: string;
  description: string;
  slug: string;
}

export const events: EventType[] = [
  {
    name: "Weddings",
    description:
      "Traditional wedding meals, premium reception buffets and customized menus designed around your celebration.",
    slug: "weddings",
  },
  {
    name: "Receptions",
    description:
      "Elegant buffet service, live counters and premium non-veg selections for the evening celebration.",
    slug: "receptions",
  },
  {
    name: "Engagements",
    description:
      "Compact, thoughtfully composed menus designed for intimate celebrations.",
    slug: "engagements",
  },
  {
    name: "Family Functions",
    description:
      "Birthdays, anniversaries, get-togethers and special occasions with flexible menus.",
    slug: "family-functions",
  },
  {
    name: "Corporate Events",
    description:
      "Professional catering for meetings, lunches and company celebrations.",
    slug: "corporate",
  },
  {
    name: "House Functions",
    description:
      "Home celebrations with flexible guest counts and service formats.",
    slug: "house-functions",
  },
];
