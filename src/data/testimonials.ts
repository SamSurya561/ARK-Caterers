export interface Testimonial {
  quote: string;
  name: string;
  eventType: string;
  location?: string;
  isPlaceholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote: "[REAL CUSTOMER REVIEW]",
    name: "[Customer Name]",
    eventType: "Wedding Reception",
    location: "Chennai",
    isPlaceholder: true,
  },
  {
    quote: "[REAL CUSTOMER REVIEW]",
    name: "[Customer Name]",
    eventType: "Wedding",
    location: "Chennai",
    isPlaceholder: true,
  },
  {
    quote: "[REAL CUSTOMER REVIEW]",
    name: "[Customer Name]",
    eventType: "Family Function",
    location: "Chennai",
    isPlaceholder: true,
  },
];
