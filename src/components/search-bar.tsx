"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/listings?q=${encodeURIComponent(value)}` : "/listings");
  };

  return (
    <form
      onSubmit={submit}
      className={`surface-card flex w-full flex-col gap-3 rounded-[1.8rem] p-3 sm:flex-row ${
        compact ? "max-w-3xl" : "max-w-4xl"
      }`}
    >
      <label className="relative flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[var(--muted)]" />
        <span className="sr-only">Search venues</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search brunch, rooftop, coffee, Medina..."
          className="field-input pl-12"
        />
      </label>

      <button type="submit" className="btn-primary h-[3.4rem] px-6 text-sm sm:px-7">
        Explore Marrakech
      </button>
    </form>
  );
}
