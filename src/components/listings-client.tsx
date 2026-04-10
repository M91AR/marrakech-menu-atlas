"use client";

import { useMemo, useState } from "react";
import { Filter, RotateCcw } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { neighborhoods, venues } from "@/data/venues";
import { VenueCard } from "@/components/venue-card";

export function ListingsClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const initialNeighborhood = searchParams.get("neighborhood") ?? "all";
  const initialType = searchParams.get("type") ?? "all";
  const initialPrice = searchParams.get("price") ?? "all";

  const [query, setQuery] = useState(initialQuery);
  const [neighborhood, setNeighborhood] = useState(initialNeighborhood);
  const [type, setType] = useState(initialType);
  const [price, setPrice] = useState(initialPrice);

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

  const activeFilters = [neighborhood, type, price].filter((value) => value !== "all").length + (query ? 1 : 0);

  return (
    <div className="space-y-8">
      <div className="surface-card rounded-[2rem] p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)]">
            <Filter className="size-4" />
            Search and filter
          </div>
          <button
            type="button"
            onClick={() => {
              setQuery(initialQuery);
              setNeighborhood(initialNeighborhood);
              setType(initialType);
              setPrice(initialPrice);
            }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[var(--green)] transition hover:bg-white/70"
          >
            <RotateCcw className="size-4" />
            Reset
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Marrakech venues"
            className="field-input"
          />

          <select
            value={neighborhood}
            onChange={(event) => setNeighborhood(event.target.value)}
            className="field-select"
          >
            <option value="all">All neighborhoods</option>
            {neighborhoods.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>

          <select value={type} onChange={(event) => setType(event.target.value)} className="field-select">
            <option value="all">Restaurant + café</option>
            <option value="restaurant">Restaurant</option>
            <option value="cafe">Café</option>
          </select>

          <select value={price} onChange={(event) => setPrice(event.target.value)} className="field-select">
            <option value="all">All prices</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm text-[var(--muted)]">Preview results</div>
          <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            {filtered.length} venues {activeFilters ? `• ${activeFilters} active filter${activeFilters > 1 ? "s" : ""}` : ""}
          </div>
        </div>
        <div className="verified-pill">Sample dataset • live verification comes next</div>
      </div>

      {filtered.length ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {filtered.map((venue) => (
            <VenueCard key={venue.slug} venue={venue} />
          ))}
        </div>
      ) : (
        <div className="surface-card rounded-[2rem] p-8 text-sm leading-7 text-[var(--muted)]">
          No matches yet. Try a different neighborhood, type, or keyword.
        </div>
      )}
    </div>
  );
}
