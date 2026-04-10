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

export const venueTypeLabels: Record<VenueType, LocalizedString> = {
  cafe: localized("Café", "مقهى"),
  restaurant: localized("Restaurant", "مطعم"),
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "gueliz",
    name: localized("Gueliz", "جيليز"),
    blurb: localized(
      "Modern cafés, brunch spots, remote-work tables, and all-day casual dining.",
      "مقاهٍ عصرية، أماكن برنش، طاولات مناسبة للعمل، وأكل يومي مريح طوال اليوم.",
    ),
    bestFor: [
      localized("coffee", "قهوة"),
      localized("brunch", "برنش"),
      localized("work-friendly", "مناسب للعمل"),
      localized("casual dinners", "عشاء كاجوال"),
    ],
    accent: "#FF8A58",
    tint: "#FFE6D4",
    deep: "#753E1D",
    heroNote: localized("For polished cafés and daytime energy.", "للمقاهي الأنيقة وطاقة النهار."),
  },
  {
    slug: "medina",
    name: localized("Medina", "المدينة"),
    blurb: localized(
      "Rooftops, traditional plates, tea stops, and tourist-heavy discovery.",
      "أسطح بإطلالات، أطباق تقليدية، جلسات شاي، واكتشاف مناسب للزوار.",
    ),
    bestFor: [
      localized("rooftops", "أسطح"),
      localized("traditional", "تقليدي"),
      localized("views", "إطلالات"),
      localized("tourist-friendly", "مناسب للزوار"),
    ],
    accent: "#FF6B5A",
    tint: "#FFE1DA",
    deep: "#7E2A22",
    heroNote: localized("For rooftops, tajines, and old-city charm.", "للأسطح والطواجن وسحر المدينة القديمة."),
  },
  {
    slug: "hivernage",
    name: localized("Hivernage", "هيفيرناج"),
    blurb: localized(
      "Upscale lounges, stylish dining, and polished evening spots.",
      "صالات راقية، مطاعم أنيقة، وأماكن مسائية مصقولة بعناية.",
    ),
    bestFor: [
      localized("date night", "سهرة"),
      localized("upscale", "راقٍ"),
      localized("cocktail vibe", "أجواء كوكتيل"),
      localized("late dinners", "عشاء متأخر"),
    ],
    accent: "#14A58C",
    tint: "#DDF8F1",
    deep: "#0B5044",
    heroNote: localized("For dressed-up dinners and evening plans.", "لعشاء أنيق وخطط المساء."),
  },
  {
    slug: "agdal",
    name: localized("Agdal", "أكدال"),
    blurb: localized(
      "Easy local hangouts, practical food options, and affordable everyday venues.",
      "أماكن محلية مريحة، خيارات عملية، وعناوين يومية بأسعار أسهل.",
    ),
    bestFor: [
      localized("local favorite", "مفضل محلي"),
      localized("value", "سعر مناسب"),
      localized("family-friendly", "مناسب للعائلات"),
      localized("daily food runs", "أكل يومي"),
    ],
    accent: "#E9A726",
    tint: "#FFF0C8",
    deep: "#6B4A05",
    heroNote: localized("For easy breakfasts and everyday value.", "لفطور سهل وقيمة يومية جيدة."),
  },
  {
    slug: "sidi-ghanem",
    name: localized("Sidi Ghanem", "سيدي غانم"),
    blurb: localized(
      "Creative district energy with design-forward cafés and workshop-style kitchens.",
      "طاقة حي إبداعي مع مقاهٍ بتصميم مميز ومطابخ بطابع الورشات.",
    ),
    bestFor: [
      localized("creative crowd", "جمهور إبداعي"),
      localized("industrial vibe", "طابع صناعي"),
      localized("slow mornings", "صباح هادئ"),
      localized("curated spots", "أماكن منتقاة"),
    ],
    accent: "#8C63FF",
    tint: "#ECE4FF",
    deep: "#452381",
    heroNote: localized("For curated spaces and creative crowd energy.", "لمساحات منتقاة وطاقة إبداعية."),
  },
];

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${query}, Marrakech`)}`;

export const venues: Venue[] = [
  {
    slug: "atlas-brunch-club",
    name: localized("Atlas Brunch Club", "أطلس برنش كلوب"),
    type: "cafe",
    neighborhood: "gueliz",
    addressSummary: localized("Central Gueliz near shopping streets", "وسط جيليز قرب شوارع التسوق"),
    cuisine: localized("Brunch & Coffee", "برنش وقهوة"),
    priceRange: "$$",
    shortDescription: localized(
      "A bright all-day café concept built for breakfast, laptop hours, and easy catch-ups.",
      "مقهى مشرق طوال اليوم، مناسب للفطور، ساعات العمل باللابتوب، واللقاءات الخفيفة.",
    ),
    tags: [
      localized("brunch", "برنش"),
      localized("work-friendly", "مناسب للعمل"),
      localized("coffee", "قهوة"),
      localized("air-conditioned", "مكيف"),
    ],
    menuHighlights: [
      { name: localized("Amlou French toast", "توست فرنسي بأملو"), price: "58 MAD" },
      { name: localized("Iced pistachio latte", "لاتيه فستق مثلج"), price: "34 MAD" },
      { name: localized("Eggs kefta skillet", "مقلاة بيض وكفتة"), price: "62 MAD" },
    ],
    hoursLabel: localized("08:00–20:00", "08:00–20:00"),
    phone: null,
    whatsapp: null,
    instagram: "@atlasbrunchclub",
    lastVerified: localized("Preview dataset • 10 Apr 2026", "بيانات تجريبية • 10 أبريل 2026"),
    featured: true,
    heroLabel: localized("Coffee • Brunch • Work", "قهوة • برنش • عمل"),
  },
  {
    slug: "gueliz-coffee-bureau",
    name: localized("Gueliz Coffee Bureau", "غيليز كوفي بيورو"),
    type: "cafe",
    neighborhood: "gueliz",
    addressSummary: localized("West Gueliz, easy walk from offices and showrooms", "غرب جيليز، على مسافة مشي من المكاتب وصالات العرض"),
    cuisine: localized("Specialty Coffee", "قهوة مختصة"),
    priceRange: "$$",
    shortDescription: localized(
      "A sharper specialty-coffee angle for fast meetings, remote work, and simple lunch plates.",
      "عنوان أكثر تركيزاً على القهوة المختصة للاجتماعات السريعة، والعمل عن بعد، وغداء خفيف.",
    ),
    tags: [
      localized("specialty coffee", "قهوة مختصة"),
      localized("fast wifi", "واي فاي سريع"),
      localized("solo-friendly", "مناسب للفرد"),
    ],
    menuHighlights: [
      { name: localized("V60 + cookie combo", "في60 مع كوكي"), price: "42 MAD" },
      { name: localized("Turkey focaccia", "فوكاشيا ديك رومي"), price: "49 MAD" },
      { name: localized("Cold brew tonic", "كولد برو تونيك"), price: "36 MAD" },
    ],
    hoursLabel: localized("07:30–19:30", "07:30–19:30"),
    phone: null,
    whatsapp: null,
    instagram: "@guelizcoffeebureau",
    lastVerified: localized("Preview dataset • 10 Apr 2026", "بيانات تجريبية • 10 أبريل 2026"),
    featured: false,
    heroLabel: localized("Specialty coffee • Laptop time", "قهوة مختصة • وقت العمل"),
  },
  {
    slug: "medina-sunset-rooftop",
    name: localized("Medina Sunset Rooftop", "ميدينا سانسِت روفتوب"),
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: localized("Inside the Medina, rooftop access near souk lanes", "داخل المدينة مع وصول إلى السطح قرب أزقة السوق"),
    cuisine: localized("Moroccan", "مغربي"),
    priceRange: "$$$",
    shortDescription: localized(
      "A rooftop-first concept focused on tajines, grilled plates, and sunset tea service.",
      "مكان يركز على تجربة السطح مع طواجن، أطباق مشوية، وخدمة شاي وقت الغروب.",
    ),
    tags: [
      localized("rooftop", "سطح"),
      localized("views", "إطلالة"),
      localized("tourist-friendly", "مناسب للزوار"),
      localized("dinner", "عشاء"),
    ],
    menuHighlights: [
      { name: localized("Lamb prune tajine", "طاجين لحم بالبرقوق"), price: "128 MAD" },
      { name: localized("Royal couscous", "كسكس ملكي"), price: "118 MAD" },
      { name: localized("Orange blossom tea", "شاي زهر البرتقال"), price: "22 MAD" },
    ],
    hoursLabel: localized("12:00–23:00", "12:00–23:00"),
    phone: null,
    whatsapp: null,
    instagram: "@medinasunsetrooftop",
    lastVerified: localized("Preview dataset • 10 Apr 2026", "بيانات تجريبية • 10 أبريل 2026"),
    featured: true,
    heroLabel: localized("Rooftop • Dinner • Sunset", "سطح • عشاء • غروب"),
  },
  {
    slug: "riad-spice-table",
    name: localized("Riad Spice Table", "رياض سبايس تايبل"),
    type: "restaurant",
    neighborhood: "medina",
    addressSummary: localized("Quiet Medina corner, riad-style dining room", "زاوية هادئة في المدينة مع قاعة أكل بطابع رياض"),
    cuisine: localized("Moroccan Home-Style", "مغربي منزلي"),
    priceRange: "$$",
    shortDescription: localized(
      "Warm local-style plates, slower dinners, and a more intimate Medina feel.",
      "أطباق محلية دافئة، عشاء أهدأ، وإحساس أكثر حميمية داخل المدينة.",
    ),
    tags: [
      localized("traditional", "تقليدي"),
      localized("family-style", "بطابع عائلي"),
      localized("quiet", "هادئ"),
    ],
    menuHighlights: [
      { name: localized("Chicken lemon olive tajine", "طاجين دجاج بالليمون والزيتون"), price: "92 MAD" },
      { name: localized("Zaalouk trio", "ثلاثية الزعلوك"), price: "38 MAD" },
      { name: localized("Harira bowl", "وعاء حريرة"), price: "28 MAD" },
    ],
    hoursLabel: localized("11:30–22:30", "11:30–22:30"),
    phone: null,
    whatsapp: null,
    instagram: "@riadspicetable",
    lastVerified: localized("Preview dataset • 10 Apr 2026", "بيانات تجريبية • 10 أبريل 2026"),
    featured: false,
    heroLabel: localized("Traditional • Quiet • Local feel", "تقليدي • هادئ • إحساس محلي"),
  },
  {
    slug: "hivernage-garden-table",
    name: localized("Hivernage Garden Table", "هيفيرناج غاردن تايبل"),
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: localized("Hivernage hotel district", "منطقة فنادق هيفيرناج"),
    cuisine: localized("Mediterranean Fusion", "متوسطي مع لمسة عصرية"),
    priceRange: "$$$",
    shortDescription: localized(
      "An upscale dinner format with polished plates and a lounge-adjacent atmosphere.",
      "تجربة عشاء راقية مع أطباق أنيقة وأجواء قريبة من اللounge.",
    ),
    tags: [
      localized("date night", "سهرة"),
      localized("upscale", "راقٍ"),
      localized("stylish", "أنيق"),
      localized("evening", "مسائي"),
    ],
    menuHighlights: [
      { name: localized("Seared seabass", "سي باس مشوح"), price: "164 MAD" },
      { name: localized("Truffle mushroom risotto", "ريزوتو فطر بالكمأة"), price: "132 MAD" },
      { name: localized("Citrus burrata", "بوراتا بالحمضيات"), price: "76 MAD" },
    ],
    hoursLabel: localized("18:00–00:30", "18:00–00:30"),
    phone: null,
    whatsapp: null,
    instagram: "@hivernagegardentable",
    lastVerified: localized("Preview dataset • 10 Apr 2026", "بيانات تجريبية • 10 أبريل 2026"),
    featured: true,
    heroLabel: localized("Upscale • Date night • Lounge feel", "راقٍ • سهرة • أجواء لاونج"),
  },
  {
    slug: "night-terrace-25",
    name: localized("Night Terrace 25", "نايت تراس 25"),
    type: "restaurant",
    neighborhood: "hivernage",
    addressSummary: localized("South Hivernage nightlife corridor", "الجهة الجنوبية من محور الحياة الليلية في هيفيرناج"),
    cuisine: localized("International Grill", "مشاوي عالمية"),
    priceRange: "$$$",
    shortDescription: localized(
      "Late dinner energy, grilled mains, and terrace seating built for groups.",
      "طاقة عشاء متأخر، أطباق مشوية، وجلسات تراس مناسبة للمجموعات.",
    ),
    tags: [
      localized("late night", "حتى وقت متأخر"),
      localized("groups", "مجموعات"),
      localized("terrace", "تراس"),
    ],
    menuHighlights: [
      { name: localized("Mixed grill platter", "طبق مشاوي مشكلة"), price: "188 MAD" },
      { name: localized("Smoked chicken sliders", "سلايدر دجاج مدخن"), price: "74 MAD" },
      { name: localized("Sparkling mocktail", "موكتيل فوار"), price: "34 MAD" },
    ],
    hoursLabel: localized("19:00–01:00", "19:00–01:00"),
    phone: null,
    whatsapp: null,
    instagram: "@nightterrace25",
    lastVerified: localized("Preview dataset • 10 Apr 2026", "بيانات تجريبية • 10 أبريل 2026"),
    featured: false,
    heroLabel: localized("Late dinner • Terrace • Groups", "عشاء متأخر • تراس • مجموعات"),
  },
  {
    slug: "agdal-morning-society",
    name: localized("Agdal Morning Society", "أكدال مورنينغ سوسايتي"),
    type: "cafe",
    neighborhood: "agdal",
    addressSummary: localized("Agdal neighborhood center", "وسط حي أكدال"),
    cuisine: localized("Breakfast & Juice", "فطور وعصير"),
    priceRange: "$",
    shortDescription: localized(
      "An affordable breakfast spot with juice, msemen, eggs, and casual all-day traffic.",
      "مكان فطور بسعر مناسب يقدم العصير، المسمن، البيض، وحركة يومية مريحة.",
    ),
    tags: [
      localized("breakfast", "فطور"),
      localized("value", "سعر مناسب"),
      localized("juice", "عصير"),
      localized("family-friendly", "مناسب للعائلات"),
    ],
    menuHighlights: [
      { name: localized("Msemen + honey set", "طقم مسمن مع العسل"), price: "24 MAD" },
      { name: localized("Avocado almond smoothie", "سموثي أفوكادو ولوز"), price: "28 MAD" },
      { name: localized("Omelette sandwich", "ساندويتش أومليت"), price: "26 MAD" },
    ],
    hoursLabel: localized("07:00–18:00", "07:00–18:00"),
    phone: null,
    whatsapp: null,
    instagram: "@agdalmorningsociety",
    lastVerified: localized("Preview dataset • 10 Apr 2026", "بيانات تجريبية • 10 أبريل 2026"),
    featured: true,
    heroLabel: localized("Breakfast • Juice • Value", "فطور • عصير • قيمة"),
  },
  {
    slug: "agdal-pizza-lab",
    name: localized("Agdal Pizza Lab", "أكدال بيتزا لاب"),
    type: "restaurant",
    neighborhood: "agdal",
    addressSummary: localized("Near residential Agdal blocks", "قرب المجمعات السكنية في أكدال"),
    cuisine: localized("Pizza & Casual Dining", "بيتزا وأكل كاجوال"),
    priceRange: "$$",
    shortDescription: localized(
      "Casual pizza-first concept with easy family orders and fast evening turnover.",
      "مطعم بيتزا بطابع كاجوال مع طلبات عائلية سهلة ودوران سريع في المساء.",
    ),
    tags: [
      localized("pizza", "بيتزا"),
      localized("casual", "كاجوال"),
      localized("family-friendly", "مناسب للعائلات"),
    ],
    menuHighlights: [
      { name: localized("Spicy merguez pizza", "بيتزا مرقاز حارة"), price: "68 MAD" },
      { name: localized("Burrata margherita", "مارغريتا ببوراتا"), price: "74 MAD" },
      { name: localized("Chicken caesar", "سيزر بالدجاج"), price: "46 MAD" },
    ],
    hoursLabel: localized("12:00–23:00", "12:00–23:00"),
    phone: null,
    whatsapp: null,
    instagram: "@agdalpizzalab",
    lastVerified: localized("Preview dataset • 10 Apr 2026", "بيانات تجريبية • 10 أبريل 2026"),
    featured: false,
    heroLabel: localized("Pizza • Casual • Family", "بيتزا • كاجوال • عائلة"),
  },
  {
    slug: "workshop-kitchen-sidi-ghanem",
    name: localized("Workshop Kitchen", "وركشوب كيتشن"),
    type: "restaurant",
    neighborhood: "sidi-ghanem",
    addressSummary: localized("Design district warehouse strip", "على امتداد مستودعات حي التصميم"),
    cuisine: localized("Creative Comfort Food", "أكل مريح بطابع إبداعي"),
    priceRange: "$$",
    shortDescription: localized(
      "Industrial-chic lunch and dinner spot for the creative district crowd.",
      "عنوان غداء وعشاء بطابع صناعي أنيق يناسب جمهور الحي الإبداعي.",
    ),
    tags: [
      localized("creative district", "حي إبداعي"),
      localized("industrial", "صناعي"),
      localized("lunch", "غداء"),
      localized("design crowd", "جمهور التصميم"),
    ],
    menuHighlights: [
      { name: localized("Roasted chicken bowl", "وعاء دجاج مشوي"), price: "72 MAD" },
      { name: localized("Harissa mac & cheese", "ماك آند تشيز بالهريسة"), price: "64 MAD" },
      { name: localized("Carrot ginger cooler", "مشروب جزر وزنجبيل بارد"), price: "30 MAD" },
    ],
    hoursLabel: localized("11:00–22:00", "11:00–22:00"),
    phone: null,
    whatsapp: null,
    instagram: "@workshopkitchenmkech",
    lastVerified: localized("Preview dataset • 10 Apr 2026", "بيانات تجريبية • 10 أبريل 2026"),
    featured: true,
    heroLabel: localized("Creative district • Lunch • Design vibe", "حي إبداعي • غداء • طابع تصميم"),
  },
  {
    slug: "daily-roast-sidi-ghanem",
    name: localized("Daily Roast Sidi Ghanem", "ديلي روست سيدي غانم"),
    type: "cafe",
    neighborhood: "sidi-ghanem",
    addressSummary: localized("Clustered beside showrooms and ateliers", "بجانب صالات العرض والورشات"),
    cuisine: localized("Coffee & Light Plates", "قهوة وأطباق خفيفة"),
    priceRange: "$$",
    shortDescription: localized(
      "Slow coffee, simple breakfast plates, and a relaxed stop between studio visits.",
      "قهوة هادئة، أطباق فطور بسيطة، وتوقف مريح بين زيارات الاستوديوهات.",
    ),
    tags: [
      localized("coffee", "قهوة"),
      localized("showroom stop", "توقف بين المعارض"),
      localized("slow mornings", "صباح هادئ"),
    ],
    menuHighlights: [
      { name: localized("Flat white", "فلات وايت"), price: "24 MAD" },
      { name: localized("Granola yogurt bowl", "وعاء غرانولا مع ياغورت"), price: "44 MAD" },
      { name: localized("Turkey pesto toastie", "توستي بيستو وديك رومي"), price: "48 MAD" },
    ],
    hoursLabel: localized("08:00–18:30", "08:00–18:30"),
    phone: null,
    whatsapp: null,
    instagram: "@dailyroastsg",
    lastVerified: localized("Preview dataset • 10 Apr 2026", "بيانات تجريبية • 10 أبريل 2026"),
    featured: false,
    heroLabel: localized("Coffee • Slow mornings • Creative crowd", "قهوة • صباح هادئ • جمهور إبداعي"),
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
