import Link from "next/link";
import type { Venue } from "@/data/venues";

export function VenueCard({ venue }: { venue: Venue }) {
  return (
    <Link
      href={`/venues/${venue.slug}`}
      className="group rounded-[1.8rem] border border-white/10 bg-white/5 p-5 transition hover:border-[#f2b66d]/50 hover:bg-white/7"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2b66d]">
            {venue.heroLabel}
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
            {venue.name}
          </h3>
        </div>
        <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/72">
          {venue.type === "cafe" ? "Café" : "Restaurant"}
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-white/68">{venue.shortDescription}</p>

      <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/72">
        <span className="rounded-full border border-white/10 px-3 py-1">{venue.priceRange}</span>
        <span className="rounded-full border border-white/10 px-3 py-1">{venue.cuisine}</span>
        <span className="rounded-full border border-white/10 px-3 py-1 capitalize">{venue.neighborhood.replace("-", " ")}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {venue.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-white/7 px-3 py-1 text-xs text-white/60">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 text-sm font-medium text-[#f5d8b2] transition group-hover:translate-x-0.5">
        Open listing →
      </div>
    </Link>
  );
}

