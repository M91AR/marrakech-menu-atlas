import { getLocalizedString, localized, type Locale, type LocalizedString } from "@/lib/i18n";

export type VenueType = "restaurant" | "cafe";

export type NeighborhoodSlug =
  | "gueliz"
  | "medina"
  | "hivernage"
  | "agdal"
  | "sidi-ghanem";

export interface Neighborhood {
  slug: NeighborhoodSlug;
  name: LocalizedString;
  blurb: LocalizedString;
  bestFor: LocalizedString[];
  accent: string;
  tint: string;
  deep: string;
  heroNote: LocalizedString;
}

export interface Venue {
  slug: string;
  name: LocalizedString;
  type: VenueType;
  neighborhood: NeighborhoodSlug;
  addressSummary: LocalizedString;
  cuisine: LocalizedString;
  priceRange: "$" | "$$" | "$$$";
  shortDescription: LocalizedString;
  tags: LocalizedString[];
  menuHighlights: { name: LocalizedString; price: string }[];
  hoursLabel: LocalizedString;
  phone: string | null;
  whatsapp: string | null;
  instagram: string | null;
  lastVerified: LocalizedString;
  featured: boolean;
  heroLabel: LocalizedString;
}

type VenueSeed = {
  slug: string;
  name: string;
  type: VenueType;
  neighborhood: NeighborhoodSlug;
  addressSummary: string;
  cuisine: string;
  priceRange: "$" | "$$" | "$$$";
  shortDescription: string;
  tags: string[];
  heroLabel: string;
  featured?: boolean;
  menuHighlights?: { name: string; price: string }[];
  hoursLabel?: string;
  phone?: string | null;
  whatsapp?: string | null;
  instagram?: string | null;
  lastVerified?: string;
};

const l = (en: string, ar?: string) => localized(en, ar ?? en);

export const venueTypeLabels: Record<VenueType, LocalizedString> = {
  cafe: localized("Café", "مقهى"),
  restaurant: localized("Restaurant", "مطعم"),
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "gueliz",
    name: localized("Gueliz", "جيليز"),
    blurb: localized(
      "Modern cafés, polished brunch spots, creative kitchens, and classic city dining.",
      "مقاهٍ عصرية، برنش أنيق، مطابخ إبداعية، وعناوين مدينة كلاسيكية.",
    ),
    bestFor: [
      localized("coffee", "قهوة"),
      localized("brunch", "برنش"),
      localized("city dining", "أكل المدينة"),
      localized("classic addresses", "عناوين كلاسيكية"),
    ],
    accent: "#D38A53",
    tint: "#FBE9D7",
    deep: "#6E472B",
    heroNote: localized("For polished cafés and modern city energy.", "للمقاهي الأنيقة وطاقة المدينة الحديثة."),
  },
  {
    slug: "medina",
    name: localized("Medina", "المدينة"),
    blurb: localized(
      "Rooftops, courtyards, design-led restaurants, tea stops, and the densest cluster of visitor favorites.",
      "أسطح، أفنية داخلية، مطاعم بتصميم مميز، جلسات شاي، وأكبر تجمع للعناوين المعروفة للزوار.",
    ),
    bestFor: [
      localized("rooftops", "أسطح"),
      localized("traditional", "تقليدي"),
      localized("courtyard dining", "أكل في الفناء"),
      localized("tourist-friendly", "مناسب للزوار"),
    ],
    accent: "#C96E4B",
    tint: "#F7DFD5",
    deep: "#6F3125",
    heroNote: localized("For rooftops, riads, and old-city character.", "للأسطح والرياضات وشخصية المدينة القديمة."),
  },
  {
    slug: "hivernage",
    name: localized("Hivernage", "هيفيرناج"),
    blurb: localized(
      "Hotel dining, glamorous dinner addresses, nightlife-adjacent venues, and luxury-brand restaurants.",
      "مطاعم الفنادق، عناوين عشاء راقية، أماكن قريبة من الحياة الليلية، ومطاعم بعلامات فاخرة.",
    ),
    bestFor: [
      localized("date night", "سهرة"),
      localized("luxury dining", "أكل فاخر"),
      localized("nightlife", "حياة ليلية"),
      localized("cocktails", "كوكتيلات"),
    ],
    accent: "#0F6B5E",
    tint: "#DEF2EC",
    deep: "#0B443B",
    heroNote: localized("For dressed-up dinners and hotel-district nights.", "لعشاء أنيق وليالي منطقة الفنادق."),
  },
  {
    slug: "agdal",
    name: localized("Agdal", "أكدال"),
    blurb: localized(
      "Practical local favorites, family-friendly restaurants, and easier everyday dining on the south side.",
      "عناوين محلية عملية، مطاعم مناسبة للعائلات، وأكل يومي أسهل في الجهة الجنوبية.",
    ),
    bestFor: [
      localized("local favorite", "مفضل محلي"),
      localized("family-friendly", "مناسب للعائلات"),
      localized("value", "سعر مناسب"),
      localized("casual meals", "وجبات كاجوال"),
    ],
    accent: "#D29A2E",
    tint: "#F9EDCC",
    deep: "#705314",
    heroNote: localized("For everyday favorites and easier dining runs.", "للعناوين اليومية والاختيارات الأسهل."),
  },
  {
    slug: "sidi-ghanem",
    name: localized("Sidi Ghanem", "سيدي غانم"),
    blurb: localized(
      "Industrial-creative Marrakech with destination cafés, design crowd energy, and warehouse-district dining.",
      "حي صناعي-إبداعي في مراكش مع مقاهٍ مقصدية وطاقة جمهور التصميم وأكل بطابع المستودعات.",
    ),
    bestFor: [
      localized("creative crowd", "جمهور إبداعي"),
      localized("design district", "حي التصميم"),
      localized("destination cafés", "مقاهٍ مقصدية"),
      localized("slow lunches", "غداء هادئ"),
    ],
    accent: "#8B63D8",
    tint: "#EEE7FF",
    deep: "#4A317A",
    heroNote: localized("For industrial-cool cafés and creative lunch spots.", "لمقاهٍ بطابع صناعي وأماكن غداء إبداعية."),
  },
];

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${query}, Marrakech`)}`;

const defaultRestaurantMenu = [
  { name: "Public menu snapshot pending", price: "—" },
  { name: "Live menu verification next", price: "—" },
];

const defaultCafeMenu = [
  { name: "Coffee and pastry snapshot pending", price: "—" },
  { name: "Live menu verification next", price: "—" },
];

const defaultHours = l("Hours listed online may vary", "الساعات الموجودة أونلاين قد تختلف");
const defaultStatus = l("Real venue • public web source", "مكان حقيقي • مصدر ويب عام");

const venueSeeds: VenueSeed[] = [
  {
    slug: "grand-cafe-de-la-poste",
    name: "Grand Café de la Poste",
    type: "restaurant",
    neighborhood: "gueliz",
    addressSummary: "Historic Gueliz address on Boulevard El Mansour Eddahbi",
    cuisine: "French-Moroccan Brasserie",
    priceRange: "$$$",
    shortDescription: "An iconic Gueliz brasserie with terrace seating, polished service, and all-day city energy.",
    tags: ["historic", "terrace", "classic", "city favorite"],
    heroLabel: "Brasserie • Terrace • Gueliz",
    featured: true,
  },
  {
    slug: "le-petit-cornichon",
    name: "Le Petit Cornichon",
    type: "restaurant",
    neighborhood: "gueliz",
    addressSummary: "Central Gueliz, a short walk from Avenue Mohammed V",
    cuisine: "French Bistro",
    priceRange: "$$$",
    shortDescription: "A chef-led bistro known for seasonal menus, intimate rooms, and a loyal Marrakech crowd.",
    tags: ["bistro", "chef-led", "date night", "small dining room"],
    heroLabel: "Chef bistro • Intimate • Gueliz",
    featured: true,
  },
  {
    slug: "catanzaro",
    name: "Catanzaro",
    type: "restaurant",
    neighborhood: "gueliz",
    addressSummary: "Established Gueliz address near the neighborhood core",
    cuisine: "Italian",
    priceRange: "$$",
    shortDescription: "One of the classic Marrakech Italian names for pasta, pizza, and dependable city-center meals.",
    tags: ["italian", "classic", "city center", "group-friendly"],
    heroLabel: "Italian classic • Gueliz",
  },
  {
    slug: "bacha-coffee-gueliz",
    name: "Bacha Coffee",
    type: "cafe",
    neighborhood: "gueliz",
    addressSummary: "Carré Eden side of Gueliz",
    cuisine: "Coffee & Pastries",
    priceRange: "$$",
    shortDescription: "A destination café for coffee ceremony, polished service, and premium sweet breaks in Gueliz.",
    tags: ["coffee", "pastries", "premium", "meeting spot"],
    heroLabel: "Coffee ritual • Premium café",
    featured: true,
  },
  {
    slug: "cafe-du-livre",
    name: "Café du Livre",
    type: "cafe",
    neighborhood: "gueliz",
    addressSummary: "Gueliz side street with bookstore-café energy",
    cuisine: "Café & Light Meals",
    priceRange: "$$",
    shortDescription: "A long-running expat and local favorite for coffee, reading, casual lunches, and quieter conversations.",
    tags: ["book café", "quiet", "laptop-friendly", "casual lunch"],
    heroLabel: "Book café • Quiet • Gueliz",
  },
  {
    slug: "kechmara",
    name: "Kechmara",
    type: "cafe",
    neighborhood: "gueliz",
    addressSummary: "Corner location in central Gueliz",
    cuisine: "Café, Bar & Brunch",
    priceRange: "$$",
    shortDescription: "A well-known Gueliz hangout that moves from coffee and brunch into later terrace drinks.",
    tags: ["brunch", "terrace", "social", "late afternoon"],
    heroLabel: "Brunch • Terrace • Social",
  },
  {
    slug: "otano",
    name: "Otano",
    type: "restaurant",
    neighborhood: "gueliz",
    addressSummary: "Modern dining address in Gueliz",
    cuisine: "Japanese",
    priceRange: "$$$",
    shortDescription: "A polished Japanese dining room for sushi, evening meals, and a more contemporary city-night feel.",
    tags: ["japanese", "dinner", "polished", "date night"],
    heroLabel: "Japanese • Dinner • Gueliz",
  },
  {
    slug: "mamma-mia-marrakech",
    name: "Mamma Mia",
    type: "restaurant",
    neighborhood: "gueliz",
    addressSummary: "Gueliz neighborhood dining strip",
    cuisine: "Italian",
    priceRange: "$$",
    shortDescription: "A popular Italian option for pizza, pasta, family dinners, and easy city-center dining.",
    tags: ["italian", "pizza", "family-friendly", "casual"],
    heroLabel: "Pizza • Pasta • Family",
  },
  {
    slug: "amal-center",
    name: "Amal Center",
    type: "restaurant",
    neighborhood: "gueliz",
    addressSummary: "Gueliz-side social enterprise restaurant",
    cuisine: "Moroccan & Training Kitchen",
    priceRange: "$$",
    shortDescription: "A respected social-enterprise restaurant known for Moroccan cooking and training-led hospitality.",
    tags: ["moroccan", "social enterprise", "lunch", "mission-driven"],
    heroLabel: "Moroccan • Social enterprise",
    featured: true,
  },

  {
    slug: "nomad",
    name: "Nomad",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Rooftop address overlooking Rahba Kedima in the Medina",
    cuisine: "Modern Moroccan",
    priceRange: "$$$",
    shortDescription: "One of Marrakech’s best-known rooftop restaurants, mixing design-led dining with a modern Moroccan angle.",
    tags: ["rooftop", "design-led", "modern moroccan", "visitor favorite"],
    heroLabel: "Rooftop • Modern Moroccan",
    featured: true,
  },
  {
    slug: "le-jardin",
    name: "Le Jardin",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Garden courtyard restaurant inside the Medina",
    cuisine: "Moroccan & International",
    priceRange: "$$$",
    shortDescription: "A leafy courtyard address known for relaxed lunches, greenery, and broad appeal for first-time visitors.",
    tags: ["courtyard", "garden", "lunch", "visitor favorite"],
    heroLabel: "Garden • Courtyard • Medina",
    featured: true,
  },
  {
    slug: "cafe-des-epices",
    name: "Café des Épices",
    type: "cafe",
    neighborhood: "medina",
    addressSummary: "Rooftop café near Rahba Kedima square",
    cuisine: "Café & Moroccan Light Plates",
    priceRange: "$$",
    shortDescription: "A classic Medina rooftop café for tea, coffee, light plates, and steady people-watching above the square.",
    tags: ["rooftop", "tea", "people-watching", "medina classic"],
    heroLabel: "Rooftop café • Medina",
    featured: true,
  },
  {
    slug: "terrasse-des-epices",
    name: "Terrasse des Épices",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Rooftop restaurant above the Medina lanes",
    cuisine: "Moroccan & International",
    priceRange: "$$$",
    shortDescription: "A broad-appeal rooftop restaurant for sunset tables, cocktails, and bigger-group Medina dining.",
    tags: ["rooftop", "sunset", "cocktails", "group-friendly"],
    heroLabel: "Rooftop • Sunset • Medina",
  },
  {
    slug: "cafe-arabe",
    name: "Café Arabe",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Historic riad-style restaurant in the Medina",
    cuisine: "Italian & Moroccan",
    priceRange: "$$$",
    shortDescription: "A long-running riad restaurant with courtyard charm, a rooftop, and a classic Marrakech mixed menu.",
    tags: ["riad", "courtyard", "mixed menu", "classic"],
    heroLabel: "Riad dining • Classic",
  },
  {
    slug: "atay-cafe",
    name: "Atay Cafe",
    type: "cafe",
    neighborhood: "medina",
    addressSummary: "Compact Medina rooftop café",
    cuisine: "Tea, Coffee & Light Bites",
    priceRange: "$",
    shortDescription: "A smaller, casual Medina rooftop known for tea, simple plates, and an easygoing atmosphere.",
    tags: ["tea", "casual", "rooftop", "budget-friendly"],
    heroLabel: "Tea • Rooftop • Casual",
  },
  {
    slug: "le-foundouk",
    name: "Le Foundouk",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Medina dining house with rooftop and interior salon seating",
    cuisine: "Moroccan & Mediterranean",
    priceRange: "$$$",
    shortDescription: "A polished Medina address combining rooftop appeal with a more formal dinner-room atmosphere.",
    tags: ["dinner", "rooftop", "polished", "special occasion"],
    heroLabel: "Dinner • Rooftop • Medina",
    featured: true,
  },
  {
    slug: "dar-cherifa",
    name: "Dar Cherifa",
    type: "cafe",
    neighborhood: "medina",
    addressSummary: "Historic literary café in a restored Medina riad",
    cuisine: "Café & Moroccan Light Meals",
    priceRange: "$$",
    shortDescription: "A beautiful riad café valued for atmosphere, culture, and slower conversations inside the Medina.",
    tags: ["riad", "culture", "quiet", "tea"],
    heroLabel: "Riad café • Quiet • Culture",
  },
  {
    slug: "la-famille",
    name: "La Famille",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Medina garden address with an intimate layout",
    cuisine: "Vegetarian",
    priceRange: "$$$",
    shortDescription: "A highly photographed garden restaurant known for vegetarian plates and a calm Medina setting.",
    tags: ["vegetarian", "garden", "quiet", "design-led"],
    heroLabel: "Vegetarian • Garden • Medina",
  },
  {
    slug: "naranj",
    name: "Naranj",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Medina dining address near key old-city lanes",
    cuisine: "Levantine",
    priceRange: "$$$",
    shortDescription: "A warm Levantine restaurant with a strong reputation for dinner, sharing plates, and atmosphere.",
    tags: ["levantine", "dinner", "sharing plates", "warm lighting"],
    heroLabel: "Levantine • Dinner • Medina",
    featured: true,
  },
  {
    slug: "dardar-rooftop",
    name: "DarDar Rooftop",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Rooftop dining stop in the Medina",
    cuisine: "Moroccan & Mediterranean",
    priceRange: "$$$",
    shortDescription: "A newer rooftop-style address pitched around views, sunset appeal, and polished group dining.",
    tags: ["rooftop", "sunset", "group-friendly", "views"],
    heroLabel: "Rooftop • Sunset • Views",
  },
  {
    slug: "el-fenn-restaurant",
    name: "El Fenn Restaurant",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Design-hotel restaurant near the Medina edge",
    cuisine: "Moroccan & Mediterranean",
    priceRange: "$$$",
    shortDescription: "A design-forward hotel restaurant with rooftop appeal, style-conscious dining, and a luxury guest mix.",
    tags: ["design hotel", "rooftop", "stylish", "luxury"],
    heroLabel: "Design hotel • Rooftop",
  },
  {
    slug: "le-salama",
    name: "Le Salama",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Medina rooftop restaurant near Jemaa el-Fna side streets",
    cuisine: "Moroccan",
    priceRange: "$$$",
    shortDescription: "A long-standing Medina rooftop pick for dinner, views, and a more festive evening mood.",
    tags: ["rooftop", "moroccan", "dinner", "evening"],
    heroLabel: "Moroccan • Rooftop • Night",
  },
  {
    slug: "zeitoun-cafe",
    name: "Zeitoun Café",
    type: "cafe",
    neighborhood: "medina",
    addressSummary: "Popular Medina café with rooftop seating",
    cuisine: "Moroccan Café",
    priceRange: "$$",
    shortDescription: "A recognizable visitor staple for tagines, tea, and easy-access rooftop seating in the old city.",
    tags: ["rooftop", "tea", "tourist-friendly", "easy stop"],
    heroLabel: "Tea • Tagines • Rooftop",
  },
  {
    slug: "safran-by-koya",
    name: "Safran by Koya",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Design-conscious Medina dining address",
    cuisine: "Contemporary Moroccan",
    priceRange: "$$$",
    shortDescription: "A modern restaurant framing Moroccan flavors with a more contemporary room and presentation style.",
    tags: ["contemporary", "moroccan", "design-led", "dinner"],
    heroLabel: "Contemporary Moroccan",
  },
  {
    slug: "pepe-nero",
    name: "Pepe Nero",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Elegant riad restaurant in the Medina",
    cuisine: "Italian & Moroccan",
    priceRange: "$$$",
    shortDescription: "An elegant riad restaurant known for romantic dinners, candlelit rooms, and a more refined old-city feel.",
    tags: ["riad", "romantic", "dinner", "special occasion"],
    heroLabel: "Riad • Romantic • Dinner",
  },
  {
    slug: "le-trou-au-mur",
    name: "Le Trou au Mur",
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: "Medina restaurant near historical lanes and cultural stops",
    cuisine: "Moroccan",
    priceRange: "$$$",
    shortDescription: "A respected old-city restaurant focused on Moroccan classics in a quieter and more serious dining setting.",
    tags: ["moroccan", "quiet", "classic plates", "serious dining"],
    heroLabel: "Moroccan classics • Quiet",
    featured: true,
  },
  {
    slug: "one-life",
    name: "One Life",
    type: "cafe",
    neighborhood: "medina",
    addressSummary: "Creative café stop in the Medina",
    cuisine: "Café & Healthy Plates",
    priceRange: "$$",
    shortDescription: "A modern café-style stop in the old city with a younger crowd, lighter plates, and coffee appeal.",
    tags: ["coffee", "healthy", "casual", "creative crowd"],
    heroLabel: "Coffee • Light plates • Medina",
  },
  {
    slug: "henna-cafe",
    name: "Henna Cafe",
    type: "cafe",
    neighborhood: "medina",
    addressSummary: "Casual Medina café close to souk foot traffic",
    cuisine: "Moroccan Café",
    priceRange: "$",
    shortDescription: "A friendly, informal Medina café-stop better suited to simple breaks than formal dining plans.",
    tags: ["casual", "budget-friendly", "tea", "quick stop"],
    heroLabel: "Casual café • Medina",
  },
  {
    slug: "bakchich-cafe",
    name: "Bakchich Cafe",
    type: "cafe",
    neighborhood: "medina",
    addressSummary: "Compact Medina café around busy walking routes",
    cuisine: "Moroccan Café & Snacks",
    priceRange: "$",
    shortDescription: "A lighter, easy-stop Medina café option for snacks, drinks, and quick breaks in the middle of the souks.",
    tags: ["snacks", "quick stop", "budget-friendly", "medina"],
    heroLabel: "Snacks • Quick stop • Medina",
  },

  {
    slug: "comptoir-darna",
    name: "Comptoir Darna",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "Flagship Hivernage dinner address",
    cuisine: "Moroccan & International",
    priceRange: "$$$",
    shortDescription: "One of the best-known Marrakech night-out restaurants, combining dinner, spectacle, and a longtime social scene.",
    tags: ["nightlife", "dinner", "show", "iconic"],
    heroLabel: "Dinner • Nightlife • Iconic",
    featured: true,
  },
  {
    slug: "palais-jad-mahal",
    name: "Palais Jad Mahal",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "Hivernage entertainment dining address",
    cuisine: "Moroccan & International",
    priceRange: "$$$",
    shortDescription: "A lavish dinner-and-show venue built more for night energy, groups, and event-style evenings.",
    tags: ["show", "groups", "nightlife", "lavish"],
    heroLabel: "Show dinner • Hivernage",
  },
  {
    slug: "buddha-bar-marrakech",
    name: "Buddha-Bar Marrakech",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "Luxury dining strip in Hivernage",
    cuisine: "Asian Fusion",
    priceRange: "$$$",
    shortDescription: "A big-format luxury dining brand for cocktails, dramatic interiors, and dressier evening plans.",
    tags: ["asian fusion", "luxury", "cocktails", "evening"],
    heroLabel: "Asian fusion • Luxury",
  },
  {
    slug: "so-lounge-marrakech",
    name: "So Lounge Marrakech",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "Hivernage hotel-district nightlife venue",
    cuisine: "International",
    priceRange: "$$$",
    shortDescription: "A nightlife-adjacent venue designed for dinner-to-drinks transitions and later-night energy.",
    tags: ["nightlife", "drinks", "late night", "hotel district"],
    heroLabel: "Dinner • Drinks • Late night",
  },
  {
    slug: "the-lotus-club",
    name: "The Lotus Club",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "Dinner club concept in Hivernage",
    cuisine: "Mediterranean & International",
    priceRange: "$$$",
    shortDescription: "A dinner-club style address for evenings that lean more social, polished, and entertainment-led.",
    tags: ["dinner club", "social", "nightlife", "stylish"],
    heroLabel: "Dinner club • Stylish",
  },
  {
    slug: "la-table-du-marche",
    name: "La Table du Marché",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "Hivernage dining room inside the hotel district",
    cuisine: "French & Mediterranean",
    priceRange: "$$$",
    shortDescription: "A more polished hotel-side restaurant for refined lunches and dinners without the loud nightlife angle.",
    tags: ["hotel dining", "refined", "french", "business meal"],
    heroLabel: "Refined dining • Hivernage",
  },
  {
    slug: "nobu-marrakech",
    name: "Nobu Marrakech",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "Luxury hotel district in Hivernage",
    cuisine: "Japanese-Peruvian",
    priceRange: "$$$",
    shortDescription: "A global luxury-dining name bringing destination-level sushi and dinner appeal into Marrakech.",
    tags: ["japanese", "luxury", "destination dining", "night out"],
    heroLabel: "Luxury sushi • Hivernage",
    featured: true,
  },
  {
    slug: "sesamo-marrakech",
    name: "Sesamo Marrakech",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "Luxury hospitality setting in the hotel district",
    cuisine: "Italian",
    priceRange: "$$$",
    shortDescription: "A luxury-leaning Italian restaurant aimed at polished dinners and upscale city visitors.",
    tags: ["italian", "luxury", "hotel dining", "polished"],
    heroLabel: "Italian • Luxury • Hivernage",
  },
  {
    slug: "azar-marrakech",
    name: "Azar Marrakech",
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: "Evening dining address around Hivernage nightlife routes",
    cuisine: "Lebanese & Middle Eastern",
    priceRange: "$$$",
    shortDescription: "A longstanding festive dinner address for Lebanese food, larger groups, and later evening plans.",
    tags: ["lebanese", "groups", "nightlife", "festive"],
    heroLabel: "Lebanese • Festive • Night",
  },

  {
    slug: "al-fassia-aguedal",
    name: "Al Fassia Aguedal",
    type: "restaurant",
    neighborhood: "agdal",
    addressSummary: "Aguedal-side branch south of central Marrakech",
    cuisine: "Moroccan",
    priceRange: "$$$",
    shortDescription: "A widely respected Moroccan restaurant known for classic hospitality and destination-worthy local cooking.",
    tags: ["moroccan", "classic", "destination dining", "family-friendly"],
    heroLabel: "Moroccan classic • Agdal",
    featured: true,
  },
  {
    slug: "dar-soukkar",
    name: "Dar Soukkar",
    type: "restaurant",
    neighborhood: "agdal",
    addressSummary: "South-side Marrakech dinner and event venue",
    cuisine: "Moroccan & International",
    priceRange: "$$$",
    shortDescription: "A dinner-and-entertainment destination built for groups, events, and more theatrical evenings.",
    tags: ["event venue", "groups", "show", "night out"],
    heroLabel: "Dinner show • Agdal",
  },
  {
    slug: "patisserie-amandine-agdal",
    name: "Pâtisserie Amandine",
    type: "cafe",
    neighborhood: "agdal",
    addressSummary: "Agdal branch on a busy everyday dining route",
    cuisine: "Patisserie & Café",
    priceRange: "$",
    shortDescription: "A dependable everyday café-patisserie stop for pastries, coffee, breakfast, and quick meetings.",
    tags: ["pastries", "breakfast", "everyday", "quick stop"],
    heroLabel: "Pastries • Coffee • Everyday",
  },
  {
    slug: "cafe-grec-agdal",
    name: "Café Grec",
    type: "cafe",
    neighborhood: "agdal",
    addressSummary: "Casual Agdal café stop on a local dining strip",
    cuisine: "Café & Ice Cream",
    priceRange: "$",
    shortDescription: "A familiar casual stop for coffee, desserts, and low-friction local hangouts in Agdal.",
    tags: ["casual", "desserts", "coffee", "local favorite"],
    heroLabel: "Casual café • Agdal",
  },

  {
    slug: "mok-marrakech",
    name: "Mok Marrakech",
    type: "cafe",
    neighborhood: "sidi-ghanem",
    addressSummary: "Design-district café in Sidi Ghanem",
    cuisine: "Specialty Coffee",
    priceRange: "$$",
    shortDescription: "A destination coffee stop for the design crowd, slow mornings, and cleaner specialty-café aesthetics.",
    tags: ["specialty coffee", "design district", "slow mornings", "creative crowd"],
    heroLabel: "Specialty coffee • Design district",
    featured: true,
  },
  {
    slug: "le-blokk",
    name: "Le Blokk",
    type: "restaurant",
    neighborhood: "sidi-ghanem",
    addressSummary: "Warehouse-district dining address in Sidi Ghanem",
    cuisine: "French & International",
    priceRange: "$$$",
    shortDescription: "A dinner venue blending industrial energy, event-style evenings, and a design-district setting.",
    tags: ["industrial", "events", "dinner", "design district"],
    heroLabel: "Industrial • Dinner • Sidi Ghanem",
  },
  {
    slug: "blue-ribbon-marrakech",
    name: "Blue Ribbon",
    type: "restaurant",
    neighborhood: "sidi-ghanem",
    addressSummary: "Creative-district stop inside Sidi Ghanem",
    cuisine: "International",
    priceRange: "$$",
    shortDescription: "A casual design-district address for lunch, meetings, and easier meals around studios and showrooms.",
    tags: ["casual lunch", "creative crowd", "meetings", "design district"],
    heroLabel: "Creative lunch • Sidi Ghanem",
  },
  {
    slug: "plus-61",
    name: "Plus +61",
    type: "restaurant",
    neighborhood: "sidi-ghanem",
    addressSummary: "Destination restaurant in the Sidi Ghanem creative area",
    cuisine: "Australian-inspired Brunch & Grill",
    priceRange: "$$$",
    shortDescription: "A destination spot known for a more international brunch-and-dinner style in Marrakech’s creative district.",
    tags: ["brunch", "destination dining", "creative district", "international"],
    heroLabel: "Brunch • Destination • Sidi Ghanem",
    featured: true,
  },
];

function makeVenue(seed: VenueSeed): Venue {
  return {
    slug: seed.slug,
    name: l(seed.name),
    type: seed.type,
    neighborhood: seed.neighborhood,
    addressSummary: l(seed.addressSummary),
    cuisine: l(seed.cuisine),
    priceRange: seed.priceRange,
    shortDescription: l(seed.shortDescription),
    tags: seed.tags.map((tag) => l(tag)),
    menuHighlights: (seed.menuHighlights ?? (seed.type === "cafe" ? defaultCafeMenu : defaultRestaurantMenu)).map((item) => ({
      name: l(item.name),
      price: item.price,
    })),
    hoursLabel: l(seed.hoursLabel ?? defaultHours.en, seed.hoursLabel ? undefined : defaultHours.ar),
    phone: seed.phone ?? null,
    whatsapp: seed.whatsapp ?? null,
    instagram: seed.instagram ?? null,
    lastVerified: l(seed.lastVerified ?? defaultStatus.en, seed.lastVerified ? undefined : defaultStatus.ar),
    featured: seed.featured ?? false,
    heroLabel: l(seed.heroLabel),
  };
}

export const venues: Venue[] = venueSeeds.map(makeVenue);

export const featuredVenues = venues.filter((venue) => venue.featured);

export function getNeighborhood(slug: string) {
  return neighborhoods.find((item) => item.slug === slug);
}

export function getVenue(slug: string) {
  return venues.find((item) => item.slug === slug);
}

export function getVenueMapsUrl(venue: Venue) {
  return mapsSearch(venue.name.en);
}

export function getVenueTypeLabel(type: VenueType, locale: Locale = "en") {
  return getLocalizedString(venueTypeLabels[type], locale);
}

export function formatNeighborhood(slug: NeighborhoodSlug, locale: Locale = "en") {
  const neighborhood = getNeighborhood(slug);

  if (!neighborhood) {
    return slug.replace(/-/g, " ");
  }

  return getLocalizedString(neighborhood.name, locale);
}

export function getNeighborhoodCount(slug: NeighborhoodSlug) {
  return venues.filter((venue) => venue.neighborhood === slug).length;
}

export function getVenueSearchText(venue: Venue) {
  return [
    venue.name.en,
    venue.name.ar,
    venue.shortDescription.en,
    venue.shortDescription.ar,
    venue.cuisine.en,
    venue.cuisine.ar,
    venue.addressSummary.en,
    venue.addressSummary.ar,
    venue.heroLabel.en,
    venue.heroLabel.ar,
    ...venue.tags.flatMap((tag) => [tag.en, tag.ar]),
    ...venue.menuHighlights.flatMap((item) => [item.name.en, item.name.ar]),
  ]
    .join(" ")
    .toLowerCase();
}
