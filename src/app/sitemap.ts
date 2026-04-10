import type { MetadataRoute } from "next";
import { neighborhoods, venues } from "@/data/venues";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://m91ar.github.io/marrakech-menu-atlas";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/listings",
    "/account",
    "/admin",
    "/claim",
    ...neighborhoods.map((item) => `/neighborhood/${item.slug}`),
    ...venues.map((venue) => `/venues/${venue.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
