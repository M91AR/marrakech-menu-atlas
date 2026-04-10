"use client";

import Link from "next/link";
import {
  ArrowLeft,
  AtSign,
  BadgeCheck,
  Clock3,
  ExternalLink,
  MapPin,
  Phone,
  Sparkles,
  Store,
} from "lucide-react";
import { FavoriteButton } from "@/components/favorite-button";
import { useLocale } from "@/components/locale-provider";
import { getLocalizedString } from "@/lib/i18n";
import {
  formatNeighborhood,
  getNeighborhood,
  getVenueMapsUrl,
  getVenueTypeLabel,
  type Venue,
} from "@/data/venues";

export function VenuePageClient({ venue }: { venue: Venue }) {
  const { isArabic, locale } = useLocale();
  const neighborhood = getNeighborhood(venue.neighborhood);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-8">
      <Link href="/listings" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--green)]">
        <ArrowLeft className="size-4" />
        {isArabic ? "عودة إلى الدليل" : "Back to listings"}
      </Link>

      <div className="surface-card liquid-shell overflow-hidden rounded-[2.5rem]">
        <div
          className="grid gap-6 px-7 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-9"
          style={{ background: `linear-gradient(135deg, ${neighborhood?.tint ?? "#FFE1DA"} 0%, rgba(255,255,255,0.96) 100%)` }}
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="section-label" style={{ color: neighborhood?.accent ?? "#FF6B5A" }}>
                <Sparkles className="size-4" />
                {getLocalizedString(venue.heroLabel, locale)}
              </div>
              <FavoriteButton slug={venue.slug} />
            </div>
            <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.06em] text-[var(--ink)] lg:text-6xl">
              {getLocalizedString(venue.name, locale)}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--muted)]">
              {getLocalizedString(venue.shortDescription, locale)}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="tag-chip">{getVenueTypeLabel(venue.type, locale)}</span>
              <span className="tag-chip">{getLocalizedString(venue.cuisine, locale)}</span>
              <span className="tag-chip">{venue.priceRange}</span>
              <span className="tag-chip">{formatNeighborhood(venue.neighborhood, locale)}</span>
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-5 sm:p-6">
            <div className="verified-pill w-fit">
              <BadgeCheck className="size-4" />
              {getLocalizedString(venue.lastVerified, locale)}
            </div>

            <div className="mt-5 grid gap-4 text-sm text-[var(--muted)]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 text-[var(--accent-strong)]" />
                <div>
                  <div className="font-semibold text-[var(--ink)]">{isArabic ? "الموقع" : "Location"}</div>
                  <div>{getLocalizedString(venue.addressSummary, locale)}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 size-4 text-[var(--accent-strong)]" />
                <div>
                  <div className="font-semibold text-[var(--ink)]">{isArabic ? "الأوقات" : "Hours"}</div>
                  <div>{getLocalizedString(venue.hoursLabel, locale)}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 size-4 text-[var(--accent-strong)]" />
                <div>
                  <div className="font-semibold text-[var(--ink)]">{isArabic ? "التواصل" : "Contact"}</div>
                  <div>{venue.phone ?? (isArabic ? "بانتظار التحقق الحي" : "Pending live verification")}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AtSign className="mt-1 size-4 text-[var(--accent-strong)]" />
                <div>
                  <div className="font-semibold text-[var(--ink)]">Instagram</div>
                  <div>{venue.instagram ?? (isArabic ? "بانتظار التحقق الحي" : "Pending live verification")}</div>
                </div>
              </div>
            </div>

            <a
              href={getVenueMapsUrl(venue)}
              target="_blank"
              rel="noreferrer"
              className="btn-dark mt-6 w-full px-5 py-3 text-sm"
            >
              <ExternalLink className="size-4" />
              {isArabic ? "افتح في خرائط غوغل" : "Open in Google Maps"}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.92fr]">
        <section className="surface-card rounded-[2.1rem] p-6 lg:p-7">
          <div className="section-label">{isArabic ? "لقطة من القائمة" : "Menu snapshot"}</div>
          <div className="mt-5 grid gap-3">
            {venue.menuHighlights.map((item) => (
              <div key={item.name.en} className="flex items-center justify-between gap-4 rounded-[1.3rem] bg-white/70 px-4 py-4 text-sm text-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                <span>{getLocalizedString(item.name, locale)}</span>
                <span className="font-semibold text-[var(--accent-strong)]">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[1.5rem] bg-[rgba(20,165,140,0.12)] px-4 py-4 text-sm leading-7 text-[var(--green)]">
            {isArabic
              ? "وعد feen: تحديث القوائم والطوابع الزمنية جزء أساسي من المنتج، لا تفصيل ثانوي."
              : "feen promise: menu freshness and verified timestamps are part of the product, not an afterthought."}
          </div>
        </section>

        <aside className="space-y-6">
          <div className="surface-card rounded-[2.1rem] p-6 lg:p-7">
            <div className="section-label">{isArabic ? "لماذا تذهب" : "Why go"}</div>
            <div className="mt-5 flex flex-wrap gap-2">
              {venue.tags.map((tag) => (
                <span key={tag.en} className="tag-chip">
                  {getLocalizedString(tag, locale)}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
              {isArabic
                ? "هذه الصفحة تمثل الاتجاه الذي يجب أن يفوز به feen: ثقة سريعة، إشارة قائمة سريعة، وسياق حي واضح."
                : "This is the kind of page feen should win with: quick trust, quick menu signal, and quick neighborhood context."}
            </p>
          </div>

          <div className="rounded-[2.1rem] bg-[linear-gradient(135deg,var(--green)_0%,#0C8E78_100%)] px-6 py-7 text-white shadow-[0_22px_60px_rgba(15,107,94,0.18)] lg:px-7">
            <div className="section-label border-white/20 bg-white/10 text-white">{isArabic ? "إجراء المالك" : "Owner action"}</div>
            <h2 className="display-font mt-4 text-3xl font-semibold tracking-[-0.05em]">
              {isArabic ? "طالب بهذه الصفحة" : "Claim this listing"}
            </h2>
            <p className="mt-3 text-sm leading-8 text-white/80">
              {isArabic
                ? "حدّث القائمة الحقيقية وبيانات التواصل وساعات العمل عندما ينتقل feen من المعاينة إلى التحقق المباشر."
                : "Update the real menu, contact details, and opening hours once feen moves from preview to live verification."}
            </p>
            <Link href="/claim" className="btn-secondary mt-6 px-5 py-3 text-sm">
              <Store className="size-4" />
              {isArabic ? "طالب أو أضف مكاناً" : "Claim or add a venue"}
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
