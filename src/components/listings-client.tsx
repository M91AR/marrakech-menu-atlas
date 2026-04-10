"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { neighborhoods, venues } from "@/data/venues";
import { VenueCard } from "@/components/venue-card";

export function ListingsClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const [neighborhood, setNeighborhood] = useState("all");
  const [type, setType] = useState("all");
  const [price, setPrice] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return venues.filter((venue) => {
      const matchesQuery =
        !q ||
        [venue.name, venue.shortDescription, venue.cuisine, venue.neighborhood, ...venue.tags]
          .join(" ")
          .toLowerCase()
          .includes(q);

      const matchesNeighborhood = neighborhood === "all" || venue.neighborhood === neighborhood;
      const matchesType = type === "all" || venue.type === type;
      const matchesPrice = price === "all" || venue.priceRange === price;

      return matchesQuery && matchesNeighborhood && matchesType && matchesPrice;
    });
  }, [neighborhood, price, query, type]);

  return (
    <div className="space-y-8">
      <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/5 p-5 md:grid-cols-4">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Marrakech venues"
          className="h-12 rounded-2xl border border-white/10 bg-black/15 px-4 text-sm text-white outline-none placeholder:text-white/40"
        />

        <select
          value={neighborhood}
          onChange={(event) => setNeighborhood(event.target.value)}
          className="h-12 rounded-2xl border border-white/10 bg-black/15 px-4 text-sm text-white outline-none"
        >
          <option value="all">All neighborhoods</option>
          {neighborhoods.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          className="h-12 rounded-2xl border border-white/10 bg-black/15 px-4 text-sm text-white outline-none"
        >
          <option value="all">Restaurant + café</option>
          <option value="restaurant">Restaurant</option>
          <option value="cafe">Café</option>
        </select>

        <select
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className="h-12 rounded-2xl border border-white/10 bg-black/15 px-4 text-sm text-white outline-none"
        >
          <option value="all">All prices</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm text-white/55">Preview results</div>
          <div className="text-2xl font-semibold tracking-[-0.03em] text-white">{filtered.length} venues</div>
        </div>
        <div className="rounded-full border border-[#f2b66d]/30 bg-[#f2b66d]/10 px-4 py-2 text-xs text-[#f8dcb8]">
          Sample dataset • live verification comes next
        </div>
      </div>

      {filtered.length ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {filtered.map((venue) => (
            <VenueCard key={venue.slug} venue={venue} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-white/12 bg-white/4 p-8 text-sm leading-7 text-white/68">
          No matches yet. Try a different neighborhood, type, or keyword.
        </div>
      )}
    </div>
  );
}

