"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      className={`flex w-full flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-white/6 p-3 backdrop-blur sm:flex-row ${
        compact ? "max-w-3xl" : "max-w-4xl"
      }`}
    >
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search brunch, rooftop, coffee, Medina..."
        className="h-14 flex-1 rounded-[1.2rem] border border-white/10 bg-black/15 px-5 text-sm text-white outline-none placeholder:text-white/40"
      />
      <button
        type="submit"
        className="h-14 rounded-[1.2rem] bg-[#f2b66d] px-6 text-sm font-semibold text-slate-950 transition hover:brightness-105"
      >
        Explore Marrakech
      </button>
    </form>
  );
}

