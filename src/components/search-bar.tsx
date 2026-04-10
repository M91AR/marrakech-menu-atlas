"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Search } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const { isArabic } = useLocale();
  const [query, setQuery] = useState("");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/listings?q=${encodeURIComponent(value)}` : "/listings");
  };

  return (
    <form
      onSubmit={submit}
      className={`surface-card search-shell flex w-full flex-col gap-3 rounded-[1.5rem] p-3 sm:flex-row ${
        compact ? "max-w-3xl" : "max-w-4xl"
      }`}
    >
      <label className="relative flex-1">
        <Search className="search-icon pointer-events-none absolute top-1/2 size-5 -translate-y-1/2 text-[var(--muted)]" />
        <span className="sr-only">{isArabic ? "ابحث عن الأماكن" : "Search venues"}</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={
            isArabic
              ? "برنش، روف توب، قهوة، جيليز، المدينة..."
              : "Brunch, rooftop, coffee, Gueliz, Medina..."
          }
          className="field-input search-input"
        />
      </label>

      <button type="submit" className="btn-primary h-[3.35rem] px-6 text-sm sm:px-7">
        <ArrowUpRight className="size-4" />
        {isArabic ? "ابدأ البحث" : "Search the guide"}
      </button>
    </form>
  );
}
