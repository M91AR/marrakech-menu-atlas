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

  return (
    <Link
      href={`/venues/${venue.slug}`}
      className="group block rounded-[2rem] transition duration-300 hover:-translate-y-1"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="surface-card venue-card overflow-hidden rounded-[2rem]"
      >
        <div
          className="relative overflow-hidden px-5 pb-5 pt-4"
          style={{
            background: `linear-gradient(145deg, ${neighborhood?.tint ?? "#FFE1DA"} 0%, rgba(255,255,255,0.96) 78%)`,
          }}
        >
          <div
            className="absolute -right-6 -top-8 size-28 rounded-full opacity-85 blur-[2px]"
            style={{ backgroundColor: neighborhood?.accent ?? "#FF6B5A" }}
          />
          <div className="absolute bottom-4 right-4 h-16 w-24 rounded-full border border-white/70 bg-white/45 blur-[1px]" />

          <div className="relative flex items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="liquid-badge" style={{ color: neighborhood?.deep ?? "#753E1D" }}>
                {getVenueTypeLabel(venue.type, locale)}
              </span>
              <span className="liquid-badge text-[var(--ink)]">{venue.priceRange}</span>
            </div>
            <FavoriteButton slug={venue.slug} compact />
          </div>

          <div className="relative mt-11">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              {formatNeighborhood(venue.neighborhood, locale)}
            </div>
            <div className="mt-2 display-font text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
              {getLocalizedString(venue.heroLabel, locale)}
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="display-font text-[1.65rem] font-semibold tracking-[-0.04em] text-[var(--ink)]">
                {getLocalizedString(venue.name, locale)}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {getLocalizedString(venue.shortDescription, locale)}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="tag-chip">{getLocalizedString(venue.cuisine, locale)}</span>
            {venue.tags.slice(0, 2).map((tag) => (
              <span key={tag.en} className="tag-chip">
                {getLocalizedString(tag, locale)}
              </span>
            ))}
          </div>

          <div className="mt-5 space-y-2 rounded-[1.5rem] bg-white/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            {venue.menuHighlights.slice(0, 2).map((item) => (
              <div key={item.name.en} className="flex items-center justify-between gap-3 text-sm text-[var(--ink)]">
                <span>{getLocalizedString(item.name, locale)}</span>
                <span className="font-semibold text-[var(--accent-strong)]">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="size-4" />
              {getLocalizedString(venue.hoursLabel, locale)}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" />
              {formatNeighborhood(venue.neighborhood, locale)}
            </span>
          </div>

          <div className={`mt-6 flex items-center justify-between gap-4 ${isArabic ? "sm:flex-row-reverse" : ""}`}>
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
