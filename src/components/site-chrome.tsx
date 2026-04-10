"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Compass,
  Globe2,
  Languages,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Store,
  UserRound,
} from "lucide-react";
import { useLocale } from "@/components/locale-provider";

const navLinks = [
  {
    href: "/listings",
    label: { en: "Listings", ar: "الدليل" },
  },
  {
    href: "/claim",
    label: { en: "Owners", ar: "المالكون" },
  },
  {
    href: "/account",
    label: { en: "Account", ar: "الحساب" },
  },
  {
    href: "/admin",
    label: { en: "Admin", ar: "الإدارة" },
  },
] as const;

const accountLinks = [
  {
    href: "/account",
    icon: UserRound,
    label: { en: "User account", ar: "حساب المستخدم" },
    note: { en: "Save venues and switch language.", ar: "احفظ الأماكن وبدّل اللغة." },
  },
  {
    href: "/claim",
    icon: Store,
    label: { en: "Owner access", ar: "وصول المالك" },
    note: { en: "Claim a venue and manage menus.", ar: "طالب بمكانك وحدث القوائم." },
  },
  {
    href: "/admin",
    icon: ShieldCheck,
    label: { en: "Admin studio", ar: "استوديو الإدارة" },
    note: { en: "Moderation, freshness, and QA.", ar: "المراجعة، التحديث، وضبط الجودة." },
  },
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { isArabic, locale, setLocale } = useLocale();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="page-orb page-orb-primary" />
      <div className="page-orb page-orb-secondary" />
      <div className="page-orb page-orb-tertiary" />

      <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="surface-card liquid-shell flex flex-wrap items-center justify-between gap-4 rounded-[2rem] px-4 py-4 sm:px-5"
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="logo-badge">
              <Compass className="size-5" />
            </div>
            <div>
              <div className="display-font text-xl font-semibold tracking-[-0.05em] text-[var(--ink)]">feen.ma</div>
              <div className="text-xs text-[var(--muted)]">
                {isArabic ? "واجهة ثنائية اللغة لاكتشاف مطاعم ومقاهي مراكش" : "Bilingual dining discovery for Marrakech"}
              </div>
            </div>
          </Link>

          <nav className="hidden flex-wrap items-center gap-2 lg:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={`nav-pill ${active ? "nav-pill-active" : ""}`}>
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button type="button" className="nav-pill nav-pill-compact">
                  <Languages className="size-4" />
                  <span>{isArabic ? "العربية" : "English"}</span>
                  <ChevronDown className="size-4 text-[var(--muted)]" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={10} align="end" className="menu-surface w-56 rounded-[1.4rem] p-2">
                  <DropdownMenu.Label className="menu-label">
                    {isArabic ? "اللغة" : "Language"}
                  </DropdownMenu.Label>
                  <DropdownMenu.Item className="menu-item" onSelect={() => setLocale("en")}> 
                    <Globe2 className="size-4" />
                    <div>
                      <div className="font-semibold text-[var(--ink)]">English</div>
                      <div className="text-xs text-[var(--muted)]">Menu-first experience</div>
                    </div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="menu-item" onSelect={() => setLocale("ar")}> 
                    <Languages className="size-4" />
                    <div>
                      <div className="font-semibold text-[var(--ink)]">العربية</div>
                      <div className="text-xs text-[var(--muted)]">تجربة ثنائية اللغة</div>
                    </div>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button type="button" className="btn-secondary h-11 px-4 text-sm">
                  <LayoutDashboard className="size-4" />
                  <span>{isArabic ? "المساحات" : "Spaces"}</span>
                  <ChevronDown className="size-4 opacity-70" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={10} align="end" className="menu-surface w-72 rounded-[1.4rem] p-2">
                  <DropdownMenu.Label className="menu-label">
                    {isArabic ? "ادخل الواجهة المناسبة" : "Jump into the right workspace"}
                  </DropdownMenu.Label>
                  {accountLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenu.Item key={item.href} asChild>
                        <Link href={item.href} className="menu-item">
                          <div className="menu-item-icon">
                            <Icon className="size-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-[var(--ink)]">{item.label[locale]}</div>
                            <div className="text-xs text-[var(--muted)]">{item.note[locale]}</div>
                          </div>
                        </Link>
                      </DropdownMenu.Item>
                    );
                  })}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <Link href="/listings" className="btn-primary h-11 px-5 text-sm">
              <Sparkles className="size-4" />
              {isArabic ? "ابدأ الاستكشاف" : "Start exploring"}
            </Link>
          </div>
        </motion.div>
      </header>

      {children}

      <footer className="mx-auto mt-auto w-full max-w-7xl px-6 pb-10 pt-8 lg:px-8">
        <div className="surface-card liquid-shell flex flex-col gap-5 rounded-[2rem] px-6 py-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="display-font text-2xl font-semibold tracking-[-0.05em] text-[var(--ink)]">feen.ma</div>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              {isArabic
                ? "منتج لاكتشاف المطاعم والقهاوي في مراكش عبر القوائم، الأحياء، والثقة في تحديث المعلومات."
                : "A menu-first Marrakech product for discovery, neighborhood browsing, and trusted freshness."}
            </p>
          </div>
          <div className="grid gap-2 text-sm text-[var(--muted)] sm:text-right">
            <span>{isArabic ? "واجهة إنجليزية + عربية" : "English + Arabic interface"}</span>
            <span>{isArabic ? "حسابات مستخدمين ولوحة إدارة ضمن المعاينة" : "User accounts and admin workspace included in the preview"}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
