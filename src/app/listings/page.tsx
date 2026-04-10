import { Suspense } from "react";
import { ListingsPageClient } from "@/components/listings-page";

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="mx-auto mt-8 w-full max-w-7xl px-6 text-sm text-[var(--muted)] lg:px-8">Loading listings…</div>}>
      <ListingsPageClient />
    </Suspense>
  );
}
