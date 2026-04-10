import { Suspense } from "react";
import { ListingsClient } from "@/components/listings-client";

export default function ListingsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2b66d]">Listings</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">Explore Marrakech venues</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
          Search the preview dataset by neighborhood, type, keyword, and price band.
        </p>
      </div>

      <div className="mt-8">
        <Suspense fallback={<div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm text-white/65">Loading listings…</div>}>
          <ListingsClient />
        </Suspense>
      </div>
    </main>
  );
}

