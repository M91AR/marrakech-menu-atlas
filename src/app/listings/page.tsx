import { Suspense } from "react";
import { SearchCheck } from "lucide-react";
import { ListingsClient } from "@/components/listings-client";

export default function ListingsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-10">
      <div className="surface-card rounded-[2.3rem] px-7 py-8 lg:px-9">
        <div className="section-label">
          <SearchCheck className="size-4" />
          Listings
        </div>
        <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
          Explore Marrakech venues
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--muted)]">
          Filter by neighborhood, type, budget, or keyword. The design is now warmer and more local; the next step is real data freshness.
        </p>
      </div>

      <div className="mt-8">
        <Suspense fallback={<div className="surface-card rounded-[2rem] p-6 text-sm text-[var(--muted)]">Loading listings…</div>}>
          <ListingsClient />
        </Suspense>
      </div>
    </main>
  );
}
