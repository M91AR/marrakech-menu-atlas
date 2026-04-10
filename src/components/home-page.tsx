"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Landmark,
  MoonStar,
  ShieldCheck,
  Sparkles,
  Store,
  SunMedium,
  UserRound,
  WalletCards,
  Wifi,
} from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { VenueCard } from "@/components/venue-card";
import { useLocale } from "@/components/locale-provider";
import { getLocalizedString } from "@/lib/i18n";
import { featuredVenues, getNeighborhoodCount, neighborhoods, venues } from "@/data/venues";

const quickBrowse = [
  {
    label: { en: "Brunch", ar: "برنش" },
    note: { en: "Slow mornings and daylight cafés", ar: "صباح هادئ ومقاهٍ نهارية" },
    href: "/listings?q=brunch",
    icon: SunMedium,
  },
  {
    label: { en: "Rooftops", ar: "روفتوب" },
    note: { en: "Medina views and sunset tables", ar: "إطلالات المدينة وطاولات الغروب" },
    href: "/listings?q=rooftop",
    icon: Landmark,
  },
  {
    label: { en: "Work-friendly", ar: "مناسب للعمل" },
    note: { en: "Coffee, wifi, and laptop hours", ar: "قهوة وواي فاي وساعات عمل" },
    href: "/listings?q=work",
    icon: Wifi,
  },
  {
    label: { en: "Under 100 MAD", ar: "أقل من 100 درهم" },
    note: { en: "Lighter budgets, still good taste", ar: "ميزانية أخف مع ذوق جيد" },
    href: "/listings?price=$",
    icon: WalletCards,
  },
  {
    label: { en: "Late night", ar: "وقت متأخر" },
    note: { en: "Dinner, terraces, and evening energy", ar: "عشاء وتراسات وطاقة مسائية" },
    href: "/listings?q=late",
    icon: MoonStar,
  },
  {
    label: { en: "Coffee runs", ar: "قهوة سريعة" },
    note: { en: "Quick stops, strong coffee, easy picks", ar: "توقفات سريعة وقهوة قوية" },
    href: "/listings?q=coffee",
    icon: Coffee,
  },
] as const;

const guideSignals = [
  {
    title: { en: "Curated like a city guide", ar: "منتقى مثل دليل مدينة" },
    text: {
      en: "The homepage should feel opinionated and local, not like an endless delivery catalog.",
      ar: "يجب أن تبدو الواجهة محلية وواضحة الرأي، لا ككتالوج توصيل لا ينتهي.",
    },
  },
  {
    title: { en: "Useful like a booking product", ar: "عملي مثل منتج حجز" },
    text: {
      en: "Search, menus, neighborhoods, and quick signals have to be readable in seconds.",
      ar: "البحث والقوائم والأحياء والإشارات السريعة يجب أن تُفهم خلال ثوانٍ.",
    },
  },
  {
    title: { en: "Trust built into the surface", ar: "الثقة جزء من الواجهة" },
    text: {
      en: "Freshness, owner claims, and bilingual clarity should feel product-native.",
      ar: "التحديث وطلبات الملكية والوضوح الثنائي اللغة يجب أن تبدو جزءاً من المنتج نفسه.",
    },
  },
] as const;

const accountLayers = [
  {
    href: "/account",
    icon: UserRound,
    title: { en: "Diner account", ar: "حساب الزائر" },
    text: {
      en: "Save favorites, keep your language, and build a Marrakech shortlist.",
      ar: "احفظ المفضلة، ثبت لغتك، وابنِ قائمتك الخاصة في مراكش.",
    },
    accent: "#c86743",
  },
  {
    href: "/claim",
    icon: Store,
    title: { en: "Owner access", ar: "وصول المالك" },
    text: {
      en: "Claim a venue, refresh menus, and prepare the merchant layer before launch.",
      ar: "طالب بمكانك، حدّث القوائم، وجهّز طبقة التاجر قبل الإطلاق.",
    },
    accent: "#1f5b50",
  },
  {
    href: "/admin",
    icon: ShieldCheck,
    title: { en: "Admin workspace", ar: "مساحة الإدارة" },
    text: {
      en: "Moderation, freshness review, and bilingual QA live in one cleaner surface.",
      ar: "المراجعة والتحقق والجودة الثنائية اللغة في واجهة أوضح وأنظف.",
    },
    accent: "#7e64d8",
  },
] as const;

export function HomePage() {
  const { locale, isArabic } = useLocale();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_26rem] lg:items-start">
        <div className="surface-card liquid-shell rounded-[2rem] px-6 py-7 sm:px-8 sm:py-9 lg:px-10">
          <div className="section-label reveal-up">
            <Sparkles className="size-4" />
            {isArabic ? "مراكش • دليل أكل محلي" : "Marrakech • local dining guide"}
          </div>

          <div className="reveal-up mt-6 max-w-4xl">
            <h1 className="display-font text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
              {isArabic
                ? "اعثر على المطاعم والمقاهي والروف توب التي تستحق فعلاً في مراكش."
                : "Find the restaurants, cafés, and rooftops in Marrakech that are actually worth it."}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {isArabic
                ? "الاتجاه الجديد لـ feen أقرب إلى دليل مدينة منتقى: وضوح سريع، إحساس محلي، وقوائم تساعدك على الاختيار قبل أن تذهب."
                : "The new feen direction is closer to a curated city guide: faster clarity, stronger local taste, and menu-first signals before you go."}
            </p>
          </div>

          <div className="reveal-up mt-7">
            <SearchBar />
          </div>

          <div className="reveal-up mt-5 flex flex-wrap gap-3">
            {[
              { en: "Gueliz brunch", ar: "برنش جيليز", query: "brunch" },
              { en: "Medina rooftops", ar: "روفتوب المدينة", query: "rooftop" },
              { en: "Hivernage dinner", ar: "عشاء هيفيرناج", query: "dinner" },
              { en: "Agdal breakfast", ar: "فطور أكدال", query: "breakfast" },
            ].map((item) => (
              <Link key={item.query} href={`/listings?q=${encodeURIComponent(item.query)}`} className="tag-chip">
                {item[locale]}
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              [String(venues.length), isArabic ? "مكان تجريبي" : "preview venues"],
              [String(neighborhoods.length), isArabic ? "أحياء مراكش" : "Marrakech zones"],
              [isArabic ? "ثنائي اللغة" : "bilingual", isArabic ? "واجهة كاملة" : "full product shell"],
            ].map(([value, label]) => (
              <div key={label} className="metric-tile rounded-[1.3rem] px-5 py-4">
                <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{value}</div>
                <div className="mt-1 text-sm text-[var(--muted)]">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/listings" className="btn-primary px-5 py-3 text-sm">
              <ArrowUpRight className="size-4" />
              {isArabic ? "ابدأ من الدليل" : "Browse the guide"}
            </Link>
            <Link href="#featured-picks" className="btn-secondary px-5 py-3 text-sm">
              {isArabic ? "شاهد الاختيارات" : "See featured picks"}
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="surface-card spotlight-card rounded-[2rem] p-6"
          >
            <div className="section-label">{isArabic ? "اتجاه التصميم" : "Design direction"}</div>
            <h2 className="display-font mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              {isArabic ? "تحرير محلي أولاً. فائدة عملية ثانياً. ضجيج أقل." : "Local editorial first. Practical utility second. Less noise."}
            </h2>
            <div className="mt-5 space-y-3">
              {guideSignals.map((item) => (
                <div key={item.title.en} className="rounded-[1.2rem] border border-[var(--line)] bg-[var(--paper-soft)] px-4 py-4">
                  <div className="font-semibold text-[var(--ink)]">{item.title[locale]}</div>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.text[locale]}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {quickBrowse.slice(0, 4).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 + index * 0.05 }}
                >
                  <Link href={item.href} className="surface-card floating-card flex items-start gap-4 rounded-[1.5rem] p-4">
                    <div className="grid size-11 place-items-center rounded-full bg-[var(--paper-soft)] text-[var(--accent-strong)]">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--ink)]">{item.label[locale]}</div>
                      <div className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.note[locale]}</div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="section-label">{isArabic ? "تصفح سريع" : "Quick browse"}</div>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              {isArabic ? "تصفح حسب اللحظة، لا فقط حسب الفلتر." : "Browse by moment, not just by filter."}
            </h2>
          </div>
          <Link href="/listings" className="btn-secondary px-5 py-3 text-sm">
            {isArabic ? "كل الأماكن" : "View all venues"}
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {quickBrowse.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="surface-card floating-card rounded-[1.6rem] p-5">
                <div className="flex items-start gap-4">
                  <div className="grid size-12 place-items-center rounded-full bg-[var(--paper-soft)] text-[var(--accent-strong)]">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="display-font text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                      {item.label[locale]}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.note[locale]}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <div className="section-label">{isArabic ? "الأحياء" : "Neighborhoods"}</div>
          <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
            {isArabic ? "كل حي يجب أن يملك شخصية واضحة داخل الواجهة." : "Each neighborhood should feel like it has a point of view."}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {neighborhoods.map((item) => (
            <Link key={item.slug} href={`/neighborhood/${item.slug}`} className="surface-card floating-card rounded-[1.75rem] overflow-hidden">
              <div className="h-2 w-full" style={{ backgroundColor: item.accent }} />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="display-font text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
                      {getLocalizedString(item.name, locale)}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{getLocalizedString(item.heroNote, locale)}</p>
                  </div>
                  <div className="rounded-full border border-[var(--line)] bg-[var(--paper-soft)] px-3 py-1 text-sm font-semibold text-[var(--ink)]">
                    {getNeighborhoodCount(item.slug)}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.bestFor.slice(0, 3).map((tag) => (
                    <span key={tag.en} className="tag-chip">
                      {getLocalizedString(tag, locale)}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16" id="featured-picks">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="section-label">{isArabic ? "اختيارات اليوم" : "Featured picks"}</div>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              {isArabic ? "اختيارات أقرب إلى توصية موثوقة من مجرد بطاقات كثيرة." : "Shortlisted like a trusted recommendation, not a dump of cards."}
            </h2>
          </div>
          <div className="verified-pill">{isArabic ? "قوائم أولاً • تحقق حي لاحقاً" : "Menus first • live freshness next"}</div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featuredVenues.slice(0, 4).map((venue) => (
            <VenueCard key={venue.slug} venue={venue} />
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 lg:grid-cols-3">
        {accountLayers.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="surface-card floating-card rounded-[1.8rem] p-6">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]" style={{ backgroundColor: `${item.accent}14`, color: item.accent }}>
                <Icon className="size-4" />
                {item.title[locale]}
              </div>
              <h3 className="display-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                {item.title[locale]}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text[locale]}</p>
              <div className="mt-5 text-sm font-semibold" style={{ color: item.accent }}>
                {isArabic ? "افتح الواجهة ←" : "Open workspace →"}
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
