import Link from "next/link";
import {
  Coffee,
  Landmark,
  Martini,
  MoonStar,
  Sparkles,
  SunMedium,
  WalletCards,
  Wifi,
} from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { VenueCard } from "@/components/venue-card";
import {
  featuredVenues,
  formatNeighborhood,
  getNeighborhoodCount,
  neighborhoods,
  venues,
} from "@/data/venues";

const quickBrowse = [
  {
    label: "Brunch",
    note: "Slow mornings and pretty plates",
    href: "/listings?q=brunch",
    icon: SunMedium,
  },
  {
    label: "Rooftops",
    note: "Sunset views in the Medina",
    href: "/listings?q=rooftop",
    icon: Landmark,
  },
  {
    label: "Work-friendly",
    note: "Coffee and laptop tables",
    href: "/listings?q=work",
    icon: Wifi,
  },
  {
    label: "Under 100 MAD",
    note: "Easy picks with light budgets",
    href: "/listings?price=$",
    icon: WalletCards,
  },
  {
    label: "Late night",
    note: "Dinner and terrace energy",
    href: "/listings?q=late",
    icon: MoonStar,
  },
  {
    label: "Coffee runs",
    note: "Quick caffeine and casual stops",
    href: "/listings?q=coffee",
    icon: Coffee,
  },
];

const collections = [
  {
    title: "Best rooftops to send visitors first",
    text: "Medina picks that feel memorable before the food even lands.",
    href: "/listings?q=rooftop",
    accent: "#C96E4B",
  },
  {
    title: "Brunch that actually looks good and eats well",
    text: "Gueliz and Agdal cafés made for daylight, photos, and repeat visits.",
    href: "/listings?q=brunch",
    accent: "#D38A53",
  },
  {
    title: "Work-friendly coffee without generic chain energy",
    text: "Laptop-ready tables, specialty drinks, and calmer hours.",
    href: "/listings?q=coffee",
    accent: "#0F6B5E",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-10">
      <section className="surface-card relative overflow-hidden rounded-[2.5rem] px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-12">
        <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-[var(--sand)] opacity-50 blur-2xl" />
        <div className="absolute left-8 top-16 h-28 w-28 rounded-full bg-[var(--green-soft)] blur-2xl" />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <div className="section-label reveal-up">
              <Sparkles className="size-4" />
              Marrakech preview • menus before delivery apps
            </div>

            <div className="reveal-up">
              <h1 className="display-font max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
                Find where Marrakech actually eats.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                feen is built for restaurant and café discovery first — real menu signals, neighborhood taste,
                and a cleaner way to decide before you go.
              </p>
            </div>

            <div className="reveal-up">
              <SearchBar />
            </div>

            <div className="reveal-up flex flex-wrap gap-3">
              {[
                "Gueliz brunch",
                "Medina rooftops",
                "Hivernage date night",
                "Agdal breakfast",
              ].map((item) => (
                <Link key={item} href={`/listings?q=${encodeURIComponent(item.split(" ")[0].toLowerCase())}`} className="tag-chip">
                  {item}
                </Link>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [String(venues.length), "preview venues"],
                [String(neighborhoods.length), "Marrakech zones"],
                ["menu-first", "product stance"],
              ].map(([value, label], index) => (
                <div key={label} className="surface-soft reveal-up rounded-[1.6rem] px-5 py-4" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{value}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="surface-soft reveal-up rounded-[2rem] p-5">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">What makes feen different</div>
              <div className="mt-4 display-font text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                Closer to a local guide than a delivery catalog.
              </div>
              <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
                <div className="rounded-[1.25rem] bg-white/70 px-4 py-3">Verified menu freshness becomes the trust layer.</div>
                <div className="rounded-[1.25rem] bg-white/70 px-4 py-3">Neighborhood-first browsing feels more Marrakech-native.</div>
                <div className="rounded-[1.25rem] bg-white/70 px-4 py-3">Curation matters more than dumping every venue into search.</div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {featuredVenues.slice(0, 4).map((venue) => (
                <div key={venue.slug} className="surface-soft reveal-up rounded-[1.6rem] p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {formatNeighborhood(venue.neighborhood)}
                  </div>
                  <div className="mt-2 display-font text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {venue.name}
                  </div>
                  <div className="mt-2 text-sm text-[var(--muted)]">{venue.menuHighlights[0]?.name}</div>
                  <div className="mt-3 verified-pill w-fit text-xs">{venue.priceRange} • {venue.type}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="section-label">Quick browse</div>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              Explore by mood, not just by map pin.
            </h2>
          </div>
          <Link href="/listings" className="btn-secondary px-5 py-3 text-sm">
            See all listings
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {quickBrowse.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="surface-card reveal-up rounded-[2rem] p-5 transition duration-200 hover:-translate-y-1"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-14 place-items-center rounded-full bg-[var(--paper-soft)] text-[var(--accent)]">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="display-font text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                      {item.label}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.note}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <div className="section-label">Neighborhoods</div>
          <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
            Marrakech should feel local from the first tap.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-5">
          {neighborhoods.map((item, index) => (
            <Link
              key={item.slug}
              href={`/neighborhood/${item.slug}`}
              className="surface-card reveal-up overflow-hidden rounded-[2rem] p-0 transition duration-200 hover:-translate-y-1"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="p-5" style={{ background: `linear-gradient(135deg, ${item.tint} 0%, rgba(255,255,255,0.96) 100%)` }}>
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full display-font text-2xl font-semibold"
                  style={{ backgroundColor: item.accent, color: "white" }}
                >
                  {item.name.slice(0, 1)}
                </div>
                <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{item.name}</div>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.heroNote}</p>
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold text-[var(--ink)]">{getNeighborhoodCount(item.slug)} preview venues</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.bestFor.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="section-label">Featured picks</div>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              The cards should feel curated, not dumped from a database.
            </h2>
          </div>
          <div className="verified-pill">Preview now • verified layer next</div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
          {featuredVenues.map((venue) => (
            <VenueCard key={venue.slug} venue={venue} />
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 lg:grid-cols-3">
        {collections.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            className="surface-card reveal-up rounded-[2rem] p-6 transition duration-200 hover:-translate-y-1"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: item.accent }}>
              <Martini className="size-4" />
              Collection
            </div>
            <h3 className="display-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            <div className="mt-5 text-sm font-semibold" style={{ color: item.accent }}>
              Open collection →
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="surface-card rounded-[2.3rem] p-7 lg:p-8">
          <div className="section-label">Product direction</div>
          <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
            Better than Glovo isn’t about delivery. It’s about taste, trust, and freshness.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--muted)]">
            feen should feel friendlier and easier than a utility app, but more local and curated than a generic marketplace.
            That’s the lane.
          </p>
        </div>

        <div className="rounded-[2.3rem] bg-[var(--green)] px-7 py-8 text-white shadow-[0_22px_60px_rgba(15,107,94,0.2)]">
          <div className="section-label border-white/20 bg-white/10 text-white">Owners</div>
          <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em]">Claim your venue before feen goes fully live.</h2>
          <p className="mt-4 text-sm leading-8 text-white/78">
            The next layer is owner claims, live menu uploads, WhatsApp updates, and verified timestamps.
          </p>
          <Link href="/claim" className="btn-secondary mt-6 px-5 py-3 text-sm">
            Add or claim a listing
          </Link>
        </div>
      </section>
    </main>
  );
}
