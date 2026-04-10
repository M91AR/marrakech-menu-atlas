"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Globe2, Heart, LayoutDashboard, Sparkles, Store, UserRound } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";
import { useSavedVenues } from "@/hooks/use-saved-venues";
import { getLocalizedString } from "@/lib/i18n";
import { venues } from "@/data/venues";

type UserProfile = {
  name: string;
  email: string;
  language: "en" | "ar";
};

const emptyProfile: UserProfile = {
  name: "",
  email: "",
  language: "en",
};

export function AccountPageClient() {
  const { isArabic, locale, setLocale } = useLocale();
  const { ready, state: profile, setState: setProfile } = useLocalStorageState<UserProfile>(
    "feen-user-profile",
    emptyProfile,
  );
  const { savedVenues } = useSavedVenues();
  const [draft, setDraft] = useState<UserProfile>(profile);
  const [submitted, setSubmitted] = useState(false);

  const savedVenueDetails = useMemo(
    () => venues.filter((venue) => savedVenues.includes(venue.slug)).slice(0, 4),
    [savedVenues],
  );

  useEffect(() => {
    if (!ready) {
      return;
    }

    const timer = window.setTimeout(() => {
      setDraft(profile);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [profile, ready]);

  const hasProfile = Boolean(profile.email);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProfile(draft);
    setLocale(draft.language);
    setSubmitted(true);
  };

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-8">
      <section className="surface-card liquid-shell overflow-hidden rounded-[2.5rem] px-7 py-8 lg:px-9">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="section-label">
              <UserRound className="size-4" />
              {isArabic ? "حساب المستخدم" : "User account"}
            </div>
            <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              {isArabic ? "حساب feen صار جزءاً من التجربة." : "The feen account is now part of the product."}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--muted)]">
              {isArabic
                ? "هذا الحساب التجريبي يحفظ اسمك، بريدك، تفضيل اللغة، والأماكن التي تحفظها داخل المعاينة."
                : "This preview account stores your name, email, language preference, and the places you save across the experience."}
            </p>

            <form onSubmit={submit} className="mt-6 grid gap-4 rounded-[2rem] border border-white/70 bg-white/62 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-2xl sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[var(--muted)]">
                <span>{isArabic ? "الاسم" : "Name"}</span>
                <input
                  value={draft.name}
                  onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))}
                  placeholder={isArabic ? "اسمك" : "Your name"}
                  className="field-input"
                />
              </label>

              <label className="grid gap-2 text-sm text-[var(--muted)]">
                <span>{isArabic ? "البريد الإلكتروني" : "Email"}</span>
                <input
                  type="email"
                  value={draft.email}
                  onChange={(event) => setDraft((current) => ({ ...current, email: event.target.value }))}
                  placeholder={isArabic ? "you@example.com" : "you@example.com"}
                  className="field-input"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm text-[var(--muted)] sm:col-span-2">
                <span>{isArabic ? "اللغة المفضلة" : "Preferred language"}</span>
                <select
                  value={draft.language}
                  onChange={(event) => setDraft((current) => ({ ...current, language: event.target.value as "en" | "ar" }))}
                  className="field-select"
                >
                  <option value="en">English</option>
                  <option value="ar">العربية</option>
                </select>
              </label>

              <div className="sm:col-span-2 flex flex-wrap gap-3">
                <button type="submit" className="btn-primary px-5 py-3 text-sm">
                  <CheckCircle2 className="size-4" />
                  {isArabic ? "حفظ الحساب" : "Save account"}
                </button>
                <Link href="/listings" className="btn-secondary px-5 py-3 text-sm">
                  <Sparkles className="size-4" />
                  {isArabic ? "اكتشف الأماكن" : "Explore venues"}
                </Link>
              </div>
            </form>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-[linear-gradient(135deg,#FF8A58_0%,#FFB152_100%)] px-6 py-7 text-white shadow-[0_24px_70px_rgba(255,138,88,0.28)]">
              <div className="section-label border-white/20 bg-white/10 text-white">
                {isArabic ? "الحالة الحالية" : "Current status"}
              </div>
              <div className="mt-4 display-font text-4xl font-semibold tracking-[-0.05em]">
                {hasProfile
                  ? isArabic
                    ? `مرحباً ${profile.name || "بك"}`
                    : `Welcome ${profile.name || "back"}`
                  : isArabic
                    ? "أنشئ حسابك التجريبي"
                    : "Create your preview account"}
              </div>
              <p className="mt-4 text-sm leading-8 text-white/86">
                {hasProfile
                  ? isArabic
                    ? `تم حفظ ${profile.email} مع لغة ${profile.language === "ar" ? "العربية" : "English"}.`
                    : `${profile.email} is saved with ${profile.language === "ar" ? "Arabic" : "English"} as the preferred language.`
                  : isArabic
                    ? "احفظ بياناتك هنا ليصير الانتقال بين العربية والإنجليزية جزءاً من تجربة الحساب."
                    : "Save your details here so switching between English and Arabic becomes part of the account experience."}
              </p>
            </div>

            <div className="surface-card rounded-[2rem] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--muted)]">
                <Heart className="size-4" />
                {isArabic ? "الأماكن المحفوظة" : "Saved places"}
              </div>
              <div className="mt-4 grid gap-3">
                {savedVenueDetails.length ? (
                  savedVenueDetails.map((venue) => (
                    <Link key={venue.slug} href={`/venues/${venue.slug}`} className="floating-card rounded-[1.4rem] border border-white/70 bg-white/72 p-4">
                      <div className="font-semibold text-[var(--ink)]">{getLocalizedString(venue.name, locale)}</div>
                      <div className="mt-1 text-sm text-[var(--muted)]">{getLocalizedString(venue.shortDescription, locale)}</div>
                    </Link>
                  ))
                ) : (
                  <div className="rounded-[1.4rem] border border-dashed border-[var(--line)] bg-white/45 px-4 py-5 text-sm leading-7 text-[var(--muted)]">
                    {isArabic
                      ? "لم تحفظ أي مكان بعد. جرّب حفظ بعض البطاقات من صفحة الدليل."
                      : "You have not saved any places yet. Save a few cards from the listings page."}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="surface-card floating-card rounded-[2rem] p-6">
          <div className="inline-flex size-11 items-center justify-center rounded-full bg-[rgba(255,138,88,0.14)] text-[var(--accent-strong)]">
            <Globe2 className="size-5" />
          </div>
          <h2 className="display-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            {isArabic ? "لغة قابلة للتبديل" : "Switchable language"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            {isArabic
              ? "تفضيل اللغة مرتبط بالحساب، لا فقط بزر مؤقت في الواجهة."
              : "Language preference belongs to the account, not just a temporary toggle in the UI."}
          </p>
        </div>

        <div className="surface-card floating-card rounded-[2rem] p-6">
          <div className="inline-flex size-11 items-center justify-center rounded-full bg-[rgba(20,165,140,0.14)] text-[var(--green)]">
            <Store className="size-5" />
          </div>
          <h2 className="display-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            {isArabic ? "طريق إلى المالك" : "Path to owner access"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            {isArabic
              ? "المستخدم الذي يملك مكاناً يمكنه الانتقال لاحقاً إلى طبقة المالك دون كسر التجربة."
              : "A user who also owns a venue can later graduate into the owner layer without a broken journey."}
          </p>
          <Link href="/claim" className="mt-5 inline-flex text-sm font-semibold text-[var(--green)]">
            {isArabic ? "افتح وصول المالك →" : "Open owner access →"}
          </Link>
        </div>

        <div className="surface-card floating-card rounded-[2rem] p-6">
          <div className="inline-flex size-11 items-center justify-center rounded-full bg-[rgba(140,99,255,0.14)] text-[#8C63FF]">
            <LayoutDashboard className="size-5" />
          </div>
          <h2 className="display-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            {isArabic ? "جاهز للربط لاحقاً" : "Ready for real auth later"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            {isArabic
              ? "الواجهة تحفظ البيانات محلياً الآن، والخطوة التالية هي ربط Supabase أو أي طبقة مصادقة حقيقية."
              : "The UI stores data locally for now, and the next obvious step is wiring Supabase or a real auth layer."}
          </p>
          <Link href="/admin" className="mt-5 inline-flex text-sm font-semibold text-[#8C63FF]">
            {isArabic ? "شاهد لوحة الإدارة →" : "See admin workspace →"}
          </Link>
        </div>
      </section>

      {submitted && ready ? (
        <div className="mt-8 rounded-[1.7rem] border border-[rgba(20,165,140,0.18)] bg-[rgba(20,165,140,0.09)] px-5 py-4 text-sm text-[var(--green)]">
          {isArabic
            ? "تم حفظ حسابك التجريبي في هذا المتصفح."
            : "Your preview account has been saved in this browser."}
        </div>
      ) : null}
    </main>
  );
}
