import Link from "next/link";
import { BadgeCheck, Clock3, MapPin } from "lucide-react";
import { formatNeighborhood, getNeighborhood, type Venue } from "@/data/venues";

export function VenueCard({ venue }: { venue: Venue }) {
  const neighborhood = getNeighborhood(venue.neighborhood);

  return (
    <Link
      href={`/venues/${venue.slug}`}
      className="group surface-card overflow-hidden rounded-[2rem] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(88,58,26,0.12)]"
    >
      <div
        className="relative overflow-hidden px-5 pb-5 pt-4"
        style={{
          background: `linear-gradient(135deg, ${neighborhood?.tint ?? "#F7DFD5"} 0%, rgba(255,255,255,0.95) 78%)`,
        }}
      >
        <div
          className="absolute -right-8 -top-10 size-28 rounded-full opacity-80"
          style={{ backgroundColor: neighborhood?.accent ?? "#C96E4B" }}
        />
        <div className="absolute bottom-3 right-4 h-14 w-20 rounded-full border border-white/70 bg-white/45 blur-[1px]" />

        <div className="relative flex items-start justify-between gap-3">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: "rgba(255,255,255,0.82)",
              color: neighborhood?.deep ?? "#6F3125",
            }}
          >
            {venue.type === "cafe" ? "Café" : "Restaurant"}
          </span>
          <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[var(--ink)]">
            {venue.priceRange}
          </span>
        </div>

        <div className="relative mt-12">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            {formatNeighborhood(venue.neighborhood)}
          </div>
          <div className="mt-2 display-font text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            {venue.heroLabel}
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="display-font text-[1.65rem] font-semibold tracking-[-0.04em] text-[var(--ink)]">
              {venue.name}
            </h3>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{venue.shortDescription}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="tag-chip">{venue.cuisine}</span>
          {venue.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 space-y-2 rounded-[1.4rem] bg-[var(--paper-soft)] p-4">
          {venue.menuHighlights.slice(0, 2).map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-3 text-sm text-[var(--ink)]">
              <span>{item.name}</span>
              <span className="font-semibold text-[var(--accent)]">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
          <span className="inline-flex items-center gap-2">
            <Clock3 className="size-4" />
            {venue.hoursLabel}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4" />
            {formatNeighborhood(venue.neighborhood)}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="verified-pill">
            <BadgeCheck className="size-4" />
            {venue.lastVerified}
          </span>
          <span className="text-sm font-semibold text-[var(--green)] transition group-hover:translate-x-0.5">
            Open listing →
          </span>
        </div>
      </div>
    </Link>
  );
}
