"use client";

import { useMemo, useState } from "react";
import { Filter, RotateCcw, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "@/components/locale-provider";
import { VenueCard } from "@/components/venue-card";
import { getLocalizedString } from "@/lib/i18n";
import {
  formatNeighborhood,
  getVenueSearchText,
  neighborhoods,
  venues,
} from "@/data/venues";

export function ListingsClient() {
  const searchParams = useSearchParams();
  const { isArabic, locale } = useLocale();
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
      const matchesQuery = !q || getVenueSearchText(venue).includes(q);
      const matchesNeighborhood = neighborhood === "all" || venue.neighborhood === neighborhood;
      const matchesType = type === "all" || venue.type === type;
      const matchesPrice = price === "all" || venue.priceRange === price;

      return matchesQuery && matchesNeighborhood && matchesType && matchesPrice;
    });
  }, [neighborhood, price, query, type]);

  const activeFilters = [neighborhood, type, price].filter((value) => value !== "all").length + (query ? 1 : 0);
  const activeNeighborhood = neighborhoods.find((item) => item.slug === neighborhood);

  return (
    <div className="space-y-8">
      <div className="surface-card liquid-shell rounded-[2rem] p-5 sm:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)]">
            <Filter className="size-4" />
            {isArabic ? "البحث والتصفية" : "Search and filter"}
          </div>
          <button
            type="button"
            onClick={() => {
              setQuery(initialQuery);
              setNeighborhood(initialNeighborhood);
              setType(initialType);
              setPrice(initialPrice);
            }}
            className="nav-pill nav-pill-compact"
          >
            <RotateCcw className="size-4" />
            {isArabic ? "إعادة الضبط" : "Reset"}
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={isArabic ? "ابحث داخل أماكن مراكش" : "Search Marrakech venues"}
            className="field-input"
          />

          <select
            value={neighborhood}
            onChange={(event) => setNeighborhood(event.target.value)}
            className="field-select"
          >
            <option value="all">{isArabic ? "كل الأحياء" : "All neighborhoods"}</option>
            {neighborhoods.map((item) => (
              <option key={item.slug} value={item.slug}>
                {getLocalizedString(item.name, locale)}
              </option>
            ))}
          </select>

          <select value={type} onChange={(event) => setType(event.target.value)} className="field-select">
            <option value="all">{isArabic ? "مطاعم + مقاهٍ" : "Restaurant + café"}</option>
            <option value="restaurant">{isArabic ? "مطعم" : "Restaurant"}</option>
            <option value="cafe">{isArabic ? "مقهى" : "Café"}</option>
          </select>

          <select value={price} onChange={(event) => setPrice(event.target.value)} className="field-select">
            <option value="all">{isArabic ? "كل الأسعار" : "All prices"}</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-[2rem] border border-white/60 bg-white/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-sm text-[var(--muted)]">{isArabic ? "نتائج المعاينة" : "Preview results"}</div>
          <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            {filtered.length} {isArabic ? "مكان" : "venues"}
            {activeFilters ? ` • ${activeFilters} ${isArabic ? "فلتر نشط" : `active filter${activeFilters > 1 ? "s" : ""}`}` : ""}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="verified-pill">
            <Sparkles className="size-4" />
            {isArabic ? "بحث بالعربية والإنجليزية" : "Arabic + English search"}
          </span>
          {activeNeighborhood ? (
            <span className="tag-chip">{formatNeighborhood(activeNeighborhood.slug, locale)}</span>
          ) : null}
        </div>
      </div>

      {filtered.length ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {filtered.map((venue) => (
            <VenueCard key={venue.slug} venue={venue} />
          ))}
        </div>
      ) : (
        <div className="surface-card rounded-[2rem] p-8 text-sm leading-7 text-[var(--muted)]">
          {isArabic
            ? "لا توجد نتائج الآن. جرّب كلمة أخرى أو حيًا مختلفًا أو نوع مكان مختلفًا."
            : "No matches yet. Try a different neighborhood, type, or keyword."}
        </div>
      )}
    </div>
  );
}
