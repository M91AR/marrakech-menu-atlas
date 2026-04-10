"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Landmark,
  LayoutDashboard,
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
import {
  featuredVenues,
  getNeighborhoodCount,
  neighborhoods,
  venues,
} from "@/data/venues";

const quickBrowse = [
  {
    label: { en: "Brunch", ar: "برنش" },
    note: { en: "Slow mornings and pretty plates", ar: "صباح هادئ وأطباق جميلة" },
    href: "/listings?q=brunch",
    icon: SunMedium,
  },
  {
    label: { en: "Rooftops", ar: "روفتوب" },
    note: { en: "Sunset views in the Medina", ar: "إطلالات غروب داخل المدينة" },
    href: "/listings?q=rooftop",
    icon: Landmark,
  },
  {
    label: { en: "Work-friendly", ar: "مناسب للعمل" },
    note: { en: "Coffee and laptop tables", ar: "قهوة وطاولات لابتوب" },
    href: "/listings?q=work",
    icon: Wifi,
  },
  {
    label: { en: "Under 100 MAD", ar: "أقل من 100 درهم" },
    note: { en: "Easy picks with light budgets", ar: "خيارات سهلة بميزانية خفيفة" },
    href: "/listings?price=$",
    icon: WalletCards,
  },
  {
    label: { en: "Late night", ar: "وقت متأخر" },
    note: { en: "Dinner and terrace energy", ar: "عشاء وأجواء تراس" },
    href: "/listings?q=late",
    icon: MoonStar,
  },
  {
    label: { en: "Coffee runs", ar: "قهوة سريعة" },
    note: { en: "Quick caffeine and casual stops", ar: "كافيين سريع وتوقفات خفيفة" },
    href: "/listings?q=coffee",
    icon: Coffee,
  },
] as const;

const accountLayers = [
  {
    href: "/account",
    icon: UserRound,
    title: {
      en: "User accounts",
      ar: "حسابات المستخدمين",
    },
    text: {
      en: "Save favorite spots, keep language preferences, and build your own Marrakech shortlist.",
      ar: "احفظ الأماكن المفضلة، ثبت اللغة، وابنِ قائمتك الخاصة في مراكش.",
    },
    accent: "#FF8A58",
  },
  {
    href: "/claim",
    icon: Store,
    title: {
      en: "Owner access",
      ar: "وصول المالك",
    },
    text: {
      en: "Claim venues, refresh menus, and prepare the merchant layer before launch.",
      ar: "طالب بمكانك، حدّث القوائم، وجهّز طبقة التاجر قبل الإطلاق.",
    },
    accent: "#14A58C",
  },
  {
    href: "/admin",
    icon: ShieldCheck,
    title: {
      en: "Admin workspace",
      ar: "مساحة الإدارة",
    },
    text: {
      en: "Review claims, keep freshness signals clean, and run quality control in one surface.",
      ar: "راجع الطلبات، حافظ على إشارات التحديث، وشغّل الجودة من واجهة واحدة.",
    },
    accent: "#8C63FF",
  },
] as const;

export function HomePage() {
  const { locale, isArabic } = useLocale();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-8">
      <section className="surface-card liquid-shell relative overflow-hidden rounded-[2.6rem] px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-11">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/85 to-transparent" />
        <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-[rgba(255,138,88,0.22)] blur-3xl" />
        <div className="absolute -right-8 bottom-8 h-52 w-52 rounded-full bg-[rgba(20,165,140,0.18)] blur-3xl" />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="section-label reveal-up">
              <Sparkles className="size-4" />
              {isArabic ? "معاينة مراكش • قوائم قبل تطبيقات التوصيل" : "Marrakech preview • menus before delivery apps"}
            </div>

            <div className="reveal-up">
              <h1 className="display-font max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
                {isArabic ? "اكتشف أين يأكل أهل مراكش فعلاً." : "Find where Marrakech actually eats."}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                {isArabic
                  ? "feen صار الآن ثنائي اللغة مع واجهات حساب مستخدم، حساب مالك، ولوحة إدارة — كلها داخل تجربة أكثر سلاسة وجمالاً."
                  : "feen is now built as a bilingual discovery product with user accounts, owner access, and an admin layer inside one more seamless interface."}
              </p>
            </div>

            <div className="reveal-up">
              <SearchBar />
            </div>

            <div className="reveal-up flex flex-wrap gap-3">
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

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [String(venues.length), isArabic ? "مكان تجريبي" : "preview venues"],
                [String(neighborhoods.length), isArabic ? "أحياء مراكش" : "Marrakech zones"],
                [isArabic ? "ثنائي اللغة" : "bilingual", isArabic ? "واجهة كاملة" : "full shell"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className="metric-tile reveal-up rounded-[1.6rem] px-5 py-4"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{value}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/account" className="btn-primary px-5 py-3 text-sm">
                <UserRound className="size-4" />
                {isArabic ? "افتح حسابك" : "Open your account"}
              </Link>
              <Link href="/admin" className="btn-secondary px-5 py-3 text-sm">
                <LayoutDashboard className="size-4" />
                {isArabic ? "شاهد لوحة الإدارة" : "See admin workspace"}
              </Link>
            </div>
          </div>

          <aside className="grid gap-4 lg:grid-rows-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="surface-card spotlight-card rounded-[2rem] p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="section-label">
                  <Sparkles className="size-4" />
                  {isArabic ? "طبقة المنتج" : "Product layer"}
                </div>
                <span className="verified-pill">{isArabic ? "جديد" : "new"}</span>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.88fr]">
                <div>
                  <div className="display-font text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
                    {isArabic ? "واجهة واحدة للاكتشاف، الحفظ، والإدارة." : "One shell for discovery, saved taste, and operations."}
                  </div>
                  <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
                    {isArabic
                      ? "بدلاً من صفحة ثابتة فقط، feen صار أقرب إلى منتج: لغة قابلة للتبديل، بطاقات عائمة، أزرار أكثر حيوية، ومسارات منفصلة للمستخدمين والمالكين والإدارة."
                      : "Instead of a static preview only, feen now feels like a product: language switching, floating cards, brighter buttons, and separate flows for users, owners, and admins."}
                  </p>
                </div>

                <div className="grid gap-3">
                  {accountLayers.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: isArabic ? -16 : 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
                        className="floating-card rounded-[1.6rem] border border-white/70 bg-white/72 p-4 shadow-[0_20px_50px_rgba(22,26,34,0.08)] backdrop-blur-2xl"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]" style={{ backgroundColor: `${item.accent}20`, color: item.accent }}>
                              <Icon className="size-4" />
                              {item.title[locale]}
                            </div>
                            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text[locale]}</p>
                          </div>
                          <ArrowUpRight className="mt-1 size-4 text-[var(--muted)]" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {neighborhoods.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.18 + index * 0.06 }}
                  className="surface-soft floating-card rounded-[1.6rem] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                        {getLocalizedString(item.heroNote, locale)}
                      </div>
                      <div className="mt-2 display-font text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                        {getLocalizedString(item.name, locale)}
                      </div>
                    </div>
                    <div className="grid size-11 place-items-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: item.accent }}>
                      {getNeighborhoodCount(item.slug)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="section-label">{isArabic ? "تصفح سريع" : "Quick browse"}</div>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              {isArabic ? "اكتشف حسب المزاج، لا فقط حسب الخريطة." : "Browse by mood, not just by map pin."}
            </h2>
          </div>
          <Link href="/listings" className="btn-secondary px-5 py-3 text-sm">
            {isArabic ? "كل الأماكن" : "See all listings"}
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {quickBrowse.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="surface-card floating-card rounded-[2rem] p-5"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-14 place-items-center rounded-full bg-white/70 text-[var(--accent-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <Icon className="size-6" />
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

      <section className="mt-16" id="neighborhoods">
        <div className="mb-6">
          <div className="section-label">{isArabic ? "الأحياء" : "Neighborhoods"}</div>
          <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
            {isArabic ? "كل حي له طاقة مختلفة — والواجهة لازم تعكس هذا." : "Each neighborhood has a different pulse — the interface should show it."}
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-5">
          {neighborhoods.map((item, index) => (
            <Link
              key={item.slug}
              href={`/neighborhood/${item.slug}`}
              className="surface-card floating-card overflow-hidden rounded-[2rem] p-0"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div
                className="p-5"
                style={{ background: `linear-gradient(135deg, ${item.tint} 0%, rgba(255,255,255,0.96) 100%)` }}
              >
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full display-font text-2xl font-semibold text-white"
                  style={{ backgroundColor: item.accent }}
                >
                  {getLocalizedString(item.name, locale).slice(0, 1)}
                </div>
                <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                  {getLocalizedString(item.name, locale)}
                </div>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{getLocalizedString(item.heroNote, locale)}</p>
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold text-[var(--ink)]">
                  {getNeighborhoodCount(item.slug)} {isArabic ? "مكانًا تجريبيًا" : "preview venues"}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
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

      <section className="mt-16">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="section-label">{isArabic ? "أماكن مختارة" : "Featured picks"}</div>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              {isArabic ? "بطاقات تطفو بصرياً، لكن المعلومة تظل واضحة وسريعة." : "Floating cards, but still clear enough to decide quickly."}
            </h2>
          </div>
          <div className="verified-pill">{isArabic ? "المعاينة الآن • التحقق الحي لاحقاً" : "Preview now • live verification next"}</div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
          {featuredVenues.map((venue) => (
            <VenueCard key={venue.slug} venue={venue} />
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 lg:grid-cols-3">
        {accountLayers.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="surface-card floating-card rounded-[2rem] p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: item.accent }}>
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
