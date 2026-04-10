import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08110f] text-[#eef5f1]">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(103,196,180,0.08),transparent_24%),linear-gradient(180deg,#08110f_0%,#0b1211_100%)]">
          <header className="mx-auto w-full max-w-7xl px-6 pt-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
              <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f2b66d]">
                feen.ma
              </Link>
              <nav className="flex flex-wrap items-center gap-5 text-sm text-white/68">
                <Link href="/listings" className="transition hover:text-white">
                  Listings
                </Link>
                <Link href="/claim" className="transition hover:text-white">
                  Claim listing
                </Link>
              </nav>
            </div>
          </header>

          {children}

          <footer className="mx-auto mt-auto w-full max-w-7xl px-6 pb-10 pt-6 lg:px-10">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/55">
              feen.ma preview • Marrakech-first • sample dataset until live verification is added
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
