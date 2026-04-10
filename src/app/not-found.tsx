"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export default function NotFound() {
  const { isArabic } = useLocale();

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="surface-card liquid-shell rounded-[2.2rem] p-8">
        <div className="section-label">404</div>
        <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
          {isArabic ? "هذه الصفحة غير موجودة بعد." : "This page isn’t here yet."}
        </h1>
        <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
          {isArabic
            ? "ارجع إلى معاينة مراكش واستكشف النسخة الحالية من المنتج."
            : "Go back to the Marrakech preview and explore the current product build."}
        </p>
        <Link href="/" className="btn-primary mt-6 px-5 py-3 text-sm">
          {isArabic ? "العودة للرئيسية" : "Back home"}
        </Link>
      </div>
    </main>
  );
}
