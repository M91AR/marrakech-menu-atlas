export type VenueType = "restaurant" | "cafe";

export type NeighborhoodSlug =
  | "gueliz"
  | "medina"
  | "hivernage"
  | "agdal"
  | "sidi-ghanem";

export interface Neighborhood {
  slug: NeighborhoodSlug;
  name: string;
  blurb: string;
  bestFor: string[];
}

export interface Venue {
  slug: string;
  name: string;
  type: VenueType;
  neighborhood: NeighborhoodSlug;
  addressSummary: string;
  cuisine: string;
  priceRange: "$" | "$$" | "$$$";
  shortDescription: string;
  tags: string[];
  menuHighlights: { name: string; price: string }[];
  hoursLabel: string;
  phone: string | null;
  whatsapp: string | null;
  instagram: string | null;
  lastVerified: string;
  featured: boolean;
  heroLabel: string;
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: "gueliz",
    name: "Gueliz",
    blurb: "Modern cafés, brunch spots, remote-work tables, and all-day casual dining.",
    bestFor: ["coffee", "brunch", "work-friendly", "casual dinners"],
  },
  {
    slug: "medina",
    name: "Medina",
    blurb: "Rooftops, traditional plates, tea stops, and tourist-heavy discovery.",
    bestFor: ["rooftops", "traditional", "views", "tourist-friendly"],
  },
  {
    slug: "hivernage",
    name: "Hivernage",
    blurb: "Upscale lounges, stylish dining, and polished evening spots.",
    bestFor: ["date night", "upscale", "cocktail vibe", "late dinners"],
  },
  {
    slug: "agdal",
    name: "Agdal",
    blurb: "Easy local hangouts, practical food options, and affordable everyday venues.",
    bestFor: ["local favorite", "value", "family-friendly", "daily food runs"],
  },
  {
    slug: "sidi-ghanem",
    name: "Sidi Ghanem",
    blurb: "Creative district energy with design-forward cafés and workshop-style kitchens.",
    bestFor: ["creative crowd", "industrial vibe", "slow mornings", "curated spots"],
  },
];

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${query}, Marrakech`)}`;

export const venues: Venue[] = [
  {
    slug: "atlas-brunch-club",
    name: "Atlas Brunch Club",
    type: "cafe",
    neighborhood: "gueliz",
    addressSummary: "Central Gueliz near shopping streets",
    cuisine: "Brunch & Coffee",
    priceRange: "$$",
    shortDescription: "A bright all-day café concept built for breakfast, laptop hours, and easy catch-ups.",
    tags: ["brunch", "work-friendly", "coffee", "air-conditioned"],
    menuHighlights: [
      { name: "Amlou French toast", price: "58 MAD" },
      { name: "Iced pistachio latte", price: "34 MAD" },
      { name: "Eggs kefta skillet", price: "62 MAD" },
    ],
    hoursLabel: "08:00–20:00",
    phone: null,
    whatsapp: null,
    instagram: "@atlasbrunchclub",
    lastVerified: "Preview dataset • 10 Apr 2026",
    featured: true,
    heroLabel: "Coffee • Brunch • Work",
  },
  {
    slug: "gueliz-coffee-bureau",
    name: "Gueliz Coffee Bureau",
    type: "cafe",
    neighborhood: "gueliz",
    addressSummary: "West Gueliz, easy walk from offices and showrooms",
    cuisine: "Specialty Coffee",
    priceRange: "$$",
    shortDescription: "A sharper specialty-coffee angle for fast meetings, remote work, and simple lunch plates.",
    tags: ["specialty coffee", "fast wifi", "solo-friendly"],
    menuHighlights: [
      { name: "V60 + cookie combo", price: "42 MAD" },
      { name: "Turkey focaccia", price: "49 MAD" },
      { name: "Cold brew tonic", price: "36 MAD" },
    ],
    hoursLabel: "07:30–19:30",
    phone: null,
    whatsapp: null,
    instagram: "@guelizcoffeebureau",
    lastVerified: "Preview dataset • 10 Apr 2026",
    featured: false,
    heroLabel: "Specialty coffee • Laptop time",
  },
  {
    slug: "medina-sunset-rooftop",
    name: "Medina Sunset Rooftop",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Inside the Medina, rooftop access near souk lanes",
    cuisine: "Moroccan",
    priceRange: "$$$",
    shortDescription: "A rooftop-first concept focused on tajines, grilled plates, and sunset tea service.",
    tags: ["rooftop", "views", "tourist-friendly", "dinner"],
    menuHighlights: [
      { name: "Lamb prune tajine", price: "128 MAD" },
      { name: "Royal couscous", price: "118 MAD" },
      { name: "Orange blossom tea", price: "22 MAD" },
    ],
    hoursLabel: "12:00–23:00",
    phone: null,
    whatsapp: null,
    instagram: "@medinasunsetrooftop",
    lastVerified: "Preview dataset • 10 Apr 2026",
    featured: true,
    heroLabel: "Rooftop • Dinner • Sunset",
  },
  {
    slug: "riad-spice-table",
    name: "Riad Spice Table",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Quiet Medina corner, riad-style dining room",
    cuisine: "Moroccan Home-Style",
    priceRange: "$$",
    shortDescription: "Warm local-style plates, slower dinners, and a more intimate Medina feel.",
    tags: ["traditional", "family-style", "quiet"],
    menuHighlights: [
      { name: "Chicken lemon olive tajine", price: "92 MAD" },
      { name: "Zaalouk trio", price: "38 MAD" },
      { name: "Harira bowl", price: "28 MAD" },
    ],
    hoursLabel: "11:30–22:30",
    phone: null,
    whatsapp: null,
    instagram: "@riadspicetable",
    lastVerified: "Preview dataset • 10 Apr 2026",
    featured: false,
    heroLabel: "Traditional • Quiet • Local feel",
  },
  {
    slug: "hivernage-garden-table",
    name: "Hivernage Garden Table",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "Hivernage hotel district",
    cuisine: "Mediterranean Fusion",
    priceRange: "$$$",
    shortDescription: "An upscale dinner format with polished plates and a lounge-adjacent atmosphere.",
    tags: ["date night", "upscale", "stylish", "evening"],
    menuHighlights: [
      { name: "Seared seabass", price: "164 MAD" },
      { name: "Truffle mushroom risotto", price: "132 MAD" },
      { name: "Citrus burrata", price: "76 MAD" },
    ],
    hoursLabel: "18:00–00:30",
    phone: null,
    whatsapp: null,
    instagram: "@hivernagegardentable",
    lastVerified: "Preview dataset • 10 Apr 2026",
    featured: true,
    heroLabel: "Upscale • Date night • Lounge feel",
  },
  {
    slug: "night-terrace-25",
    name: "Night Terrace 25",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "South Hivernage nightlife corridor",
    cuisine: "International Grill",
    priceRange: "$$$",
    shortDescription: "Late dinner energy, grilled mains, and terrace seating built for groups.",
    tags: ["late night", "groups", "terrace"],
    menuHighlights: [
      { name: "Mixed grill platter", price: "188 MAD" },
      { name: "Smoked chicken sliders", price: "74 MAD" },
      { name: "Sparkling mocktail", price: "34 MAD" },
    ],
    hoursLabel: "19:00–01:00",
    phone: null,
    whatsapp: null,
    instagram: "@nightterrace25",
    lastVerified: "Preview dataset • 10 Apr 2026",
    featured: false,
    heroLabel: "Late dinner • Terrace • Groups",
  },
  {
    slug: "agdal-morning-society",
    name: "Agdal Morning Society",
    type: "cafe",
    neighborhood: "agdal",
    addressSummary: "Agdal neighborhood center",
    cuisine: "Breakfast & Juice",
    priceRange: "$",
    shortDescription: "An affordable breakfast spot with juice, msemen, eggs, and casual all-day traffic.",
    tags: ["breakfast", "value", "juice", "family-friendly"],
    menuHighlights: [
      { name: "Msemen + honey set", price: "24 MAD" },
      { name: "Avocado almond smoothie", price: "28 MAD" },
      { name: "Omelette sandwich", price: "26 MAD" },
    ],
    hoursLabel: "07:00–18:00",
    phone: null,
    whatsapp: null,
    instagram: "@agdalmorningsociety",
    lastVerified: "Preview dataset • 10 Apr 2026",
    featured: true,
    heroLabel: "Breakfast • Juice • Value",
  },
  {
    slug: "agdal-pizza-lab",
    name: "Agdal Pizza Lab",
    type: "restaurant",
    neighborhood: "agdal",
    addressSummary: "Near residential Agdal blocks",
    cuisine: "Pizza & Casual Dining",
    priceRange: "$$",
    shortDescription: "Casual pizza-first concept with easy family orders and fast evening turnover.",
    tags: ["pizza", "casual", "family-friendly"],
    menuHighlights: [
      { name: "Spicy merguez pizza", price: "68 MAD" },
      { name: "Burrata margherita", price: "74 MAD" },
      { name: "Chicken caesar", price: "46 MAD" },
    ],
    hoursLabel: "12:00–23:00",
    phone: null,
    whatsapp: null,
    instagram: "@agdalpizzalab",
    lastVerified: "Preview dataset • 10 Apr 2026",
    featured: false,
    heroLabel: "Pizza • Casual • Family",
  },
  {
    slug: "workshop-kitchen-sidi-ghanem",
    name: "Workshop Kitchen",
    type: "restaurant",
    neighborhood: "sidi-ghanem",
    addressSummary: "Design district warehouse strip",
    cuisine: "Creative Comfort Food",
    priceRange: "$$",
    shortDescription: "Industrial-chic lunch and dinner spot for the creative district crowd.",
    tags: ["creative district", "industrial", "lunch", "design crowd"],
    menuHighlights: [
      { name: "Roasted chicken bowl", price: "72 MAD" },
      { name: "Harissa mac & cheese", price: "64 MAD" },
      { name: "Carrot ginger cooler", price: "30 MAD" },
    ],
    hoursLabel: "11:00–22:00",
    phone: null,
    whatsapp: null,
    instagram: "@workshopkitchenmkech",
    lastVerified: "Preview dataset • 10 Apr 2026",
    featured: true,
    heroLabel: "Creative district • Lunch • Design vibe",
  },
  {
    slug: "daily-roast-sidi-ghanem",
    name: "Daily Roast Sidi Ghanem",
    type: "cafe",
    neighborhood: "sidi-ghanem",
    addressSummary: "Clustered beside showrooms and ateliers",
    cuisine: "Coffee & Light Plates",
    priceRange: "$$",
    shortDescription: "Slow coffee, simple breakfast plates, and a relaxed stop between studio visits.",
    tags: ["coffee", "showroom stop", "slow mornings"],
    menuHighlights: [
      { name: "Flat white", price: "24 MAD" },
      { name: "Granola yogurt bowl", price: "44 MAD" },
      { name: "Turkey pesto toastie", price: "48 MAD" },
    ],
    hoursLabel: "08:00–18:30",
    phone: null,
    whatsapp: null,
    instagram: "@dailyroastsg",
    lastVerified: "Preview dataset • 10 Apr 2026",
    featured: false,
    heroLabel: "Coffee • Slow mornings • Creative crowd",
  },
];

export const featuredVenues = venues.filter((venue) => venue.featured);

export function getNeighborhood(slug: string) {
  return neighborhoods.find((item) => item.slug === slug);
}

export function getVenue(slug: string) {
  return venues.find((item) => item.slug === slug);
}

export function getVenueMapsUrl(venue: Venue) {
  return mapsSearch(venue.name);
}

