"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BadgeCheck,
  CheckCircle2,
  Languages,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";

type AdminSession = {
  name: string;
  email: string;
  focus: "verification" | "claims" | "translations";
};

const emptySession: AdminSession = {
  name: "",
  email: "",
  focus: "verification",
};

const metrics = [
  {
    value: "18",
    label: { en: "pending freshness checks", ar: "تحققات تحديث معلقة" },
    accent: "#14A58C",
  },
  {
    value: "07",
    label: { en: "owner claims to review", ar: "طلبات مطالبة للمراجعة" },
    accent: "#FF8A58",
  },
  {
    value: "24",
    label: { en: "Arabic/English copy pairs", ar: "أزواج نصوص عربي/إنجليزي" },
    accent: "#8C63FF",
  },
] as const;

export function AdminPageClient() {
  const { isArabic, locale } = useLocale();
  const { state: session, setState: setSession } = useLocalStorageState<AdminSession>(
    "feen-admin-session",
    emptySession,
  );
  const [draft, setDraft] = useState<AdminSession>(session);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDraft(session);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [session]);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSession(draft);
    setSubmitted(true);
  };

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-8">
      <section className="surface-card liquid-shell overflow-hidden rounded-[2.5rem] px-7 py-8 lg:px-9">
        <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
          <div>
            <div className="section-label">
              <ShieldCheck className="size-4" />
              {isArabic ? "لوحة الإدارة" : "Admin workspace"}
            </div>
            <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              {isArabic ? "إدارة feen صارت لها واجهة واضحة ومقنعة." : "feen now has a clear admin layer."}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--muted)]">
              {isArabic
                ? "هذه المساحة تجمع المراجعة، التحقق، الترجمة، والتشغيل في لوحة واحدة أكثر أناقة ووضوحاً."
                : "This surface pulls moderation, verification, translation QA, and operational oversight into a cleaner single dashboard."}
            </p>

            <form onSubmit={submit} className="mt-6 grid gap-4 rounded-[2rem] border border-white/70 bg-white/62 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-2xl">
              <label className="grid gap-2 text-sm text-[var(--muted)]">
                <span>{isArabic ? "اسم المسؤول" : "Admin name"}</span>
                <input
                  value={draft.name}
                  onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))}
                  placeholder={isArabic ? "اسم المسؤول" : "Admin operator"}
                  className="field-input"
                />
              </label>

              <label className="grid gap-2 text-sm text-[var(--muted)]">
                <span>{isArabic ? "البريد الإداري" : "Admin email"}</span>
                <input
                  type="email"
                  value={draft.email}
                  onChange={(event) => setDraft((current) => ({ ...current, email: event.target.value }))}
                  placeholder={isArabic ? "admin@feen.ma" : "admin@feen.ma"}
                  className="field-input"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm text-[var(--muted)]">
                <span>{isArabic ? "مجال التركيز" : "Current focus"}</span>
                <select
                  value={draft.focus}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      focus: event.target.value as AdminSession["focus"],
                    }))
                  }
                  className="field-select"
                >
                  <option value="verification">{isArabic ? "التحقق من التحديث" : "Freshness verification"}</option>
                  <option value="claims">{isArabic ? "طلبات الملكية" : "Owner claims"}</option>
                  <option value="translations">{isArabic ? "مراجعة الترجمة" : "Translation QA"}</option>
                </select>
              </label>

              <button type="submit" className="btn-primary w-fit px-5 py-3 text-sm">
                <CheckCircle2 className="size-4" />
                {isArabic ? "حفظ الجلسة الإدارية" : "Save admin session"}
              </button>
            </form>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-[linear-gradient(135deg,#8C63FF_0%,#5E7CFF_100%)] px-6 py-7 text-white shadow-[0_24px_70px_rgba(94,124,255,0.22)]">
              <div className="section-label border-white/20 bg-white/10 text-white">
                {isArabic ? "وضع الإدارة" : "Operator status"}
              </div>
              <div className="mt-4 display-font text-4xl font-semibold tracking-[-0.05em]">
                {session.email
                  ? isArabic
                    ? `مفعّل لـ ${session.name || session.email}`
                    : `Active for ${session.name || session.email}`
                  : isArabic
                    ? "جهّز جلسة الإدارة"
                    : "Prepare the admin session"}
              </div>
              <p className="mt-4 text-sm leading-8 text-white/86">
                {session.email
                  ? isArabic
                    ? `التركيز الحالي: ${
                        session.focus === "verification"
                          ? "التحقق من التحديث"
                          : session.focus === "claims"
                            ? "طلبات الملكية"
                            : "مراجعة الترجمة"
                      }.`
                    : `Current focus: ${
                        session.focus === "verification"
                          ? "freshness verification"
                          : session.focus === "claims"
                            ? "owner claims"
                            : "translation QA"
                      }.`
                  : isArabic
                    ? "استخدم هذا الجزء كمسودة UI للإدارة قبل ربط الأدوار الحقيقية وصلاحيات الوصول."
                    : "Use this as the admin UI draft before wiring real roles, permissions, and live moderation actions."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label.en} className="metric-tile rounded-[1.6rem] px-5 py-5">
                  <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{metric.value}</div>
                  <div className="mt-2 text-sm leading-7 text-[var(--muted)]">{metric.label[locale]}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-card floating-card rounded-[1.6rem] p-5">
                <div className="inline-flex size-11 items-center justify-center rounded-full bg-[rgba(20,165,140,0.14)] text-[var(--green)]">
                  <Workflow className="size-5" />
                </div>
                <div className="mt-4 text-lg font-semibold text-[var(--ink)]">
                  {isArabic ? "عمليات أوضح" : "Clearer operations"}
                </div>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {isArabic
                    ? "طلبات المطالبة، إشارات الثقة، والتحقق من التحديث صاروا جزءاً من تدفق واحد."
                    : "Claims, trust signals, and freshness checks now sit in one visual rhythm instead of scattered blocks."}
                </p>
              </div>

              <div className="surface-card floating-card rounded-[1.6rem] p-5">
                <div className="inline-flex size-11 items-center justify-center rounded-full bg-[rgba(255,138,88,0.14)] text-[var(--accent-strong)]">
                  <Languages className="size-5" />
                </div>
                <div className="mt-4 text-lg font-semibold text-[var(--ink)]">
                  {isArabic ? "مراجعة لغوية مدمجة" : "Built-in language QA"}
                </div>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {isArabic
                    ? "واجهة الإدارة نفسها تدعم العربي والإنجليزي حتى تكون جودة النصوص جزءاً من التشغيل."
                    : "The admin interface itself is bilingual, so language quality becomes part of operations, not an afterthought."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        <Link href="/claim" className="surface-card floating-card rounded-[2rem] p-6">
          <div className="inline-flex size-11 items-center justify-center rounded-full bg-[rgba(255,138,88,0.14)] text-[var(--accent-strong)]">
            <Store className="size-5" />
          </div>
          <h2 className="display-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            {isArabic ? "راجع طلبات المالكين" : "Review owner claims"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            {isArabic ? "الربط مع طبقة المالك جاهز كمسار تصميمي واضح." : "The merchant layer is now visually aligned with admin review flows."}
          </p>
        </Link>

        <Link href="/listings" className="surface-card floating-card rounded-[2rem] p-6">
          <div className="inline-flex size-11 items-center justify-center rounded-full bg-[rgba(20,165,140,0.14)] text-[var(--green)]">
            <BadgeCheck className="size-5" />
          </div>
          <h2 className="display-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            {isArabic ? "راجع الجودة على الواجهة" : "Audit the live surface"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            {isArabic ? "ارجع إلى الدليل وشاهد كيف تظهر جودة البيانات للمستخدم النهائي." : "Jump back to listings to see how quality signals land for end users."}
          </p>
        </Link>

        <div className="surface-card floating-card rounded-[2rem] p-6">
          <div className="inline-flex size-11 items-center justify-center rounded-full bg-[rgba(140,99,255,0.14)] text-[#8C63FF]">
            <Sparkles className="size-5" />
          </div>
          <h2 className="display-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            {isArabic ? "الخطوة التالية" : "Next obvious step"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            {isArabic
              ? "ربط الجلسة الإدارية مع أدوار حقيقية وصلاحيات Supabase أو أي باكند تختاره."
              : "Wire this admin shell to real roles, permissions, and Supabase-backed moderation if you want live workflows next."}
          </p>
        </div>
      </section>

      {submitted ? (
        <div className="mt-8 rounded-[1.7rem] border border-[rgba(140,99,255,0.2)] bg-[rgba(140,99,255,0.08)] px-5 py-4 text-sm text-[#5B46C8]">
          {isArabic ? "تم حفظ جلسة الإدارة في هذا المتصفح." : "The admin session has been saved in this browser."}
        </div>
      ) : null}
    </main>
  );
}
