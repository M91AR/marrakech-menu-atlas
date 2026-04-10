import type { Metadata } from "next";
import { Cairo, Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/locale-provider";
import { SiteChrome } from "@/components/site-chrome";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://m91ar.github.io/marrakech-menu-atlas"),
  title: {
    default: "feen.ma — Marrakech restaurant & café menus",
    template: "%s",
  },
  description:
    "A bilingual, menu-first Marrakech dining guide for restaurants, cafés, rooftops, brunch, user accounts, and admin workflows.",
  openGraph: {
    title: "feen.ma",
    description: "Find restaurants, cafés, accounts, and real menu discovery in Marrakech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${manrope.variable} ${cairo.variable} h-full antialiased`}>
      <body className="min-h-full text-[var(--ink)]">
        <LocaleProvider>
          <SiteChrome>{children}</SiteChrome>
        </LocaleProvider>
      </body>
    </html>
  );
}
