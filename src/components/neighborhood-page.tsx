"use client";

import Link from "next/link";
import { ArrowLeft, MapPinned, Sparkles } from "lucide-react";
import { VenueCard } from "@/components/venue-card";
import { useLocale } from "@/components/locale-provider";
import { getLocalizedString } from "@/lib/i18n";
import { getNeighborhoodCount, type Neighborhood, type Venue } from "@/data/venues";

export function NeighborhoodPageClient({
  neighborhood,
  matches,
}: {
  neighborhood: Neighborhood;
  matches: Venue[];
}) {
  const { isArabic, locale } = useLocale();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-8">
      <div className="surface-card liquid-shell overflow-hidden rounded-[2.4rem]">
        <div
          className="px-7 py-8 lg:px-9"
          style={{ background: `linear-gradient(135deg, ${neighborhood.tint} 0%, rgba(255,255,255,0.94) 100%)` }}
        >
          <div className="section-label" style={{ color: neighborhood.accent }}>
            <MapPinned className="size-4" />
            {isArabic ? "الحي" : "Neighborhood"}
          </div>
          <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
            {getLocalizedString(neighborhood.name, locale)}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--muted)]">
            {getLocalizedString(neighborhood.blurb, locale)}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {neighborhood.bestFor.map((tag) => (
              <span key={tag.en} className="tag-chip">
                {getLocalizedString(tag, locale)}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 px-7 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-9">
          <div className="text-sm text-[var(--muted)]">
            <span className="font-semibold text-[var(--ink)]">{getNeighborhoodCount(neighborhood.slug)} {isArabic ? "مكانًا" : "venues"}</span>
            <span className="ml-2">{isArabic ? "في هذه المعاينة" : "in this preview area"}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="verified-pill">
              <Sparkles className="size-4" />
              {getLocalizedString(neighborhood.heroNote, locale)}
            </span>
            <Link href="/listings" className="btn-secondary w-fit px-5 py-3 text-sm">
              <ArrowLeft className="size-4" />
              {isArabic ? "عودة إلى الدليل" : "Back to all listings"}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {matches.map((venue) => (
          <VenueCard key={venue.slug} venue={venue} />
        ))}
      </div>
    </main>
  );
}
