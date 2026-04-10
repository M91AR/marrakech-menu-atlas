"use client";

import Link from "next/link";
import { BadgeCheck, LayoutDashboard, Mail, MenuSquare, PhoneCall, Sparkles, Store, UserRound } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

const items = [
  {
    icon: Store,
    title: { en: "Claim your venue", ar: "طالب بمكانك" },
    text: {
      en: "Lock ownership before feen opens public verification and merchant tools.",
      ar: "ثبت ملكيتك قبل فتح التحقق العام وأدوات التجار.",
    },
  },
  {
    icon: MenuSquare,
    title: { en: "Upload fresh menus", ar: "ارفع القوائم المحدثة" },
    text: {
      en: "Keep prices and menu pages aligned with what guests see on-site.",
      ar: "اجعل الأسعار والقوائم مطابقة لما يراه الضيف على أرض الواقع.",
    },
  },
  {
    icon: PhoneCall,
    title: { en: "Update contact details", ar: "حدث بيانات التواصل" },
    text: {
      en: "Add phone, WhatsApp, and opening hours without waiting on delivery apps.",
      ar: "أضف الهاتف وواتساب وساعات العمل دون انتظار منصات التوصيل.",
    },
  },
  {
    icon: BadgeCheck,
    title: { en: "Earn trust signals", ar: "ابنِ إشارات الثقة" },
    text: {
      en: "Verified freshness becomes one of the reasons users choose your venue.",
      ar: "تحديث القوائم يصبح سبباً مباشراً لاختيار المستخدمين لمكانك.",
    },
  },
] as const;

export function ClaimPageClient() {
  const { isArabic, locale } = useLocale();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-8">
      <section className="surface-card liquid-shell overflow-hidden rounded-[2.4rem]">
        <div className="grid gap-6 px-7 py-8 lg:grid-cols-[1fr_0.95fr] lg:px-9">
          <div>
            <div className="section-label">
              <Sparkles className="size-4" />
              {isArabic ? "طبقة المالك" : "Owner layer"}
            </div>
            <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              {isArabic ? "أضف أو طالب بمكانك في مراكش" : "Add or claim your Marrakech venue"}
            </h1>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              {isArabic
                ? "واجهة المالك جاهزة بصرياً داخل feen: ثنائية اللغة، ناعمة، ومبنية لتدفق القوائم والتحديثات والبيانات بشكل أسرع."
                : "The owner side now has a proper product shell: bilingual, smoother, and ready for menu updates, operational details, and verification workflows."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title.en} className="surface-soft floating-card rounded-[1.5rem] p-4">
                    <div className="grid size-11 place-items-center rounded-full bg-white/80 text-[var(--accent-strong)] shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <div className="mt-4 text-lg font-semibold text-[var(--ink)]">{item.title[locale]}</div>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.text[locale]}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-[linear-gradient(135deg,var(--green)_0%,#0C8E78_100%)] px-6 py-7 text-white shadow-[0_24px_70px_rgba(20,165,140,0.22)] lg:px-7">
              <div className="section-label border-white/20 bg-white/10 text-white">
                {isArabic ? "وصول مبكر للمالكين" : "Early owner access"}
              </div>
              <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em]">
                {isArabic ? "ابدأ الآن وادخل إلى أول طبقة موثقة داخل feen." : "Start now and get into feen’s first verified merchant layer."}
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/82">
                {isArabic
                  ? "الخطوة التالية بعد هذه المعاينة هي ربط تدفق المطالبة ورفع القوائم مع قاعدة بيانات حقيقية."
                  : "The next step after this UI pass is wiring real claims and menu uploads to a live database."}
              </p>

              <a
                href="mailto:hello@feen.ma?subject=Claim%20my%20feen.ma%20listing"
                className="btn-secondary mt-6 w-full px-5 py-3 text-sm"
              >
                <Mail className="size-4" />
                {isArabic ? "راسل hello@feen.ma" : "Email hello@feen.ma"}
              </a>
            </div>

            <div className="surface-card rounded-[2rem] p-5">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                {isArabic ? "مسارات مرتبطة" : "Connected paths"}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Link href="/account" className="floating-card rounded-[1.4rem] border border-white/70 bg-white/72 p-4">
                  <div className="inline-flex size-10 items-center justify-center rounded-full bg-[rgba(255,138,88,0.12)] text-[var(--accent-strong)]">
                    <UserRound className="size-4" />
                  </div>
                  <div className="mt-3 font-semibold text-[var(--ink)]">{isArabic ? "حساب المستخدم" : "User account"}</div>
                  <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                    {isArabic ? "المفضلة، اللغة، والتجربة الشخصية." : "Favorites, language, and personal discovery."}
                  </p>
                </Link>
                <Link href="/admin" className="floating-card rounded-[1.4rem] border border-white/70 bg-white/72 p-4">
                  <div className="inline-flex size-10 items-center justify-center rounded-full bg-[rgba(140,99,255,0.12)] text-[#8C63FF]">
                    <LayoutDashboard className="size-4" />
                  </div>
                  <div className="mt-3 font-semibold text-[var(--ink)]">{isArabic ? "لوحة الإدارة" : "Admin workspace"}</div>
                  <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                    {isArabic ? "التحقق، المراجعة، والجودة." : "Verification, moderation, and QA."}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
