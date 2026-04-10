"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, Clock3, MapPin } from "lucide-react";
import { FavoriteButton } from "@/components/favorite-button";
import { useLocale } from "@/components/locale-provider";
import { getLocalizedString } from "@/lib/i18n";
import { formatNeighborhood, getNeighborhood, getVenueTypeLabel, type Venue } from "@/data/venues";

export function VenueCard({ venue }: { venue: Venue }) {
  const neighborhood = getNeighborhood(venue.neighborhood);
  const { locale, isArabic } = useLocale();
  const hasRealMenuSnapshot = venue.menuHighlights.some((item) => item.price !== "—");

  return (
    <Link href={`/venues/${venue.slug}`} className="group block rounded-[1.75rem] transition duration-300 hover:-translate-y-1">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="surface-card venue-card overflow-hidden rounded-[1.75rem]"
      >
        <div className="h-1.5 w-full" style={{ backgroundColor: neighborhood?.accent ?? "#c86743" }} />

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="liquid-badge" style={{ color: neighborhood?.deep ?? "#6d3b28" }}>
                {getVenueTypeLabel(venue.type, locale)}
              </span>
              <span className="liquid-badge text-[var(--ink)]">{venue.priceRange}</span>
              <span className="liquid-badge text-[var(--muted)]">{formatNeighborhood(venue.neighborhood, locale)}</span>
            </div>
            <FavoriteButton slug={venue.slug} compact />
          </div>

          <div className="mt-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              {getLocalizedString(venue.heroLabel, locale)}
            </div>
            <h3 className="display-font mt-2 text-[1.9rem] font-semibold tracking-[-0.05em] text-[var(--ink)]">
              {getLocalizedString(venue.name, locale)}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {getLocalizedString(venue.shortDescription, locale)}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="tag-chip">{getLocalizedString(venue.cuisine, locale)}</span>
            {venue.tags.slice(0, 2).map((tag) => (
              <span key={tag.en} className="tag-chip">
                {getLocalizedString(tag, locale)}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-[1.2rem] border border-[var(--line)] bg-[var(--paper-soft)] p-4">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              {hasRealMenuSnapshot ? (isArabic ? "لقطة من القائمة" : "Menu snapshot") : isArabic ? "حالة البيانات" : "Data status"}
            </div>
            {hasRealMenuSnapshot ? (
              <div className="space-y-2">
                {venue.menuHighlights.slice(0, 2).map((item) => (
                  <div key={item.name.en} className="flex items-center justify-between gap-3 text-sm text-[var(--ink)]">
                    <span>{getLocalizedString(item.name, locale)}</span>
                    <span className="font-semibold text-[var(--accent-strong)]">{item.price}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm leading-7 text-[var(--muted)]">
                {isArabic
                  ? "تمت إضافة هذا المكان الحقيقي من مصادر ويب عامة. استيراد القائمة الحية يأتي لاحقاً."
                  : "This real venue was added from public web sources. Live menu import comes next."}
              </p>
            )}
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="size-4" />
              {getLocalizedString(venue.hoursLabel, locale)}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" />
              {formatNeighborhood(venue.neighborhood, locale)}
            </span>
          </div>

          <div className={`mt-6 flex items-center justify-between gap-4 border-t border-[var(--line)] pt-4 ${isArabic ? "sm:flex-row-reverse" : ""}`}>
            <span className="verified-pill">
              <BadgeCheck className="size-4" />
              {getLocalizedString(venue.lastVerified, locale)}
            </span>
            <span className="text-sm font-semibold text-[var(--green)] transition group-hover:translate-x-0.5">
              {isArabic ? "افتح الصفحة ←" : "Open listing →"}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
