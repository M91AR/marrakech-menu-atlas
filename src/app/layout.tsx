import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Link from "next/link";
import { Compass, MapPinned } from "lucide-react";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://m91ar.github.io/marrakech-menu-atlas"),
  title: {
    default: "feen.ma — Marrakech restaurant & café menus",
    template: "%s",
  },
  description: "A menu-first Marrakech dining guide for restaurants, cafés, rooftops, brunch, and local discovery.",
  openGraph: {
    title: "feen.ma",
    description: "Find restaurants, cafés & real menus in Marrakech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full text-[var(--ink)]">
        <div className="relative min-h-screen overflow-x-hidden">
          <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-10">
            <div className="surface-card flex flex-wrap items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-5">
              <Link href="/" className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-[var(--green)] text-white shadow-[0_10px_24px_rgba(15,107,94,0.18)]">
                  <Compass className="size-4" />
                </div>
                <div>
                  <div className="display-font text-xl font-semibold tracking-[-0.04em]">feen.ma</div>
                  <div className="text-xs text-[var(--muted)]">Marrakech menu-first preview</div>
                </div>
              </Link>

              <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)] sm:gap-3">
                <Link href="/listings" className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-[var(--ink)]">
                  Listings
                </Link>
                <Link href="/claim" className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-[var(--ink)]">
                  Claim listing
                </Link>
                <a
                  href="https://m91ar.github.io/marrakech-menu-atlas/"
                  className="btn-secondary px-4 py-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPinned className="size-4" />
                  Live preview
                </a>
              </nav>
            </div>
          </header>

          {children}

          <footer className="mx-auto mt-auto w-full max-w-7xl px-6 pb-10 pt-6 lg:px-10">
            <div className="surface-card flex flex-col gap-3 rounded-[2rem] px-6 py-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="display-font text-lg text-[var(--ink)]">feen.ma</span>
                <span className="ml-2">Built for menu discovery, freshness, and local taste.</span>
              </div>
              <div>Preview dataset now • live verification layer next</div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
