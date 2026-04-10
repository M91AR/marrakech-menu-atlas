"use client";

import { SearchCheck, Sparkles } from "lucide-react";
import { ListingsClient } from "@/components/listings-client";
import { useLocale } from "@/components/locale-provider";

export function ListingsPageClient() {
  const { isArabic } = useLocale();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-8">
      <div className="surface-card liquid-shell rounded-[2.3rem] px-7 py-8 lg:px-9">
        <div className="section-label">
          <SearchCheck className="size-4" />
          {isArabic ? "الدليل" : "Listings"}
        </div>
        <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
          {isArabic ? "استكشف أماكن مراكش" : "Explore Marrakech venues"}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--muted)]">
          {isArabic
            ? "ابحث حسب الحي، النوع، السعر، أو الكلمات المفتاحية — بالعربية أو الإنجليزية."
            : "Filter by neighborhood, type, budget, or keyword — in Arabic or English."}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="verified-pill">
            <Sparkles className="size-4" />
            {isArabic ? "نتائج ثنائية اللغة" : "Bilingual results"}
          </span>
          <span className="tag-chip">{isArabic ? "حسابات مستخدمين" : "User accounts"}</span>
          <span className="tag-chip">{isArabic ? "طبقة إدارة" : "Admin layer"}</span>
        </div>
      </div>

      <div className="mt-8">
        <ListingsClient />
      </div>
    </main>
  );
}
