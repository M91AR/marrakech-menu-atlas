import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { VenueCard } from "@/components/venue-card";
import { featuredVenues, neighborhoods, venues } from "@/data/venues";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-10">
      <section className="rounded-[2.3rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(244,182,109,0.2),transparent_26%),radial-gradient(circle_at_top_right,rgba(69,177,157,0.18),transparent_30%),linear-gradient(180deg,#0d1514_0%,#091111_100%)] p-6 shadow-2xl shadow-black/25 lg:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm text-white/68">
          <div className="font-semibold uppercase tracking-[0.24em] text-[#f2b66d]">feen.ma</div>
          <div>Private preview • Marrakech v1 • Restaurants, cafés & real menus</div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex rounded-full border border-[#f2b66d]/25 bg-[#f2b66d]/10 px-4 py-2 text-sm text-[#f8dcb8]">
              Find restaurants, cafés & real menus in Marrakech.
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              The menu-first dining guide Morocco is still missing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              feen.ma starts with Marrakech: Gueliz, Medina, Hivernage, Agdal, and Sidi Ghanem.
              Search by neighborhood, price, vibe, and actual menu structure.
            </p>

            <div className="mt-8">
              <SearchBar />
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/68">
              {[
                "Brunch in Gueliz",
                "Rooftops in Medina",
                "Date night in Hivernage",
                "Affordable breakfast in Agdal",
              ].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-[1.9rem] border border-white/10 bg-black/20 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Why this works</div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                <li>• discovery-first, not delivery-first</li>
                <li>• menu freshness as the moat</li>
                <li>• Morocco-local neighborhoods and filters</li>
                <li>• restaurant claims + paid profile upgrades later</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["5", "launch neighborhoods"],
                [String(venues.length), "preview venues"],
                ["2", "core listing types"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-white">{value}</div>
                  <div className="mt-2 text-sm text-white/60">{label}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featuredVenues.slice(0, 4).map((venue) => (
          <VenueCard key={venue.slug} venue={venue} />
        ))}
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2b66d]">Neighborhoods</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white">Start city: Marrakech</h2>
          </div>
          <Link
            href="/listings"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            View all listings
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-5">
          {neighborhoods.map((item) => (
            <Link
              key={item.slug}
              href={`/neighborhood/${item.slug}`}
              className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 transition hover:border-[#f2b66d]/40 hover:bg-white/7"
            >
              <div className="text-lg font-semibold text-white">{item.name}</div>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.bestFor.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full bg-black/20 px-3 py-1 text-xs text-white/58">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Operator note</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">This preview is built to prove structure, not freshness yet.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
            The next step is real venue collection: menus, WhatsApp numbers, opening hours, Instagram profiles,
            and last-verified timestamps across Marrakech.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#f2b66d]/20 bg-[#f2b66d]/8 p-7">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f8dcb8]">For restaurant owners</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">Claim your listing and keep your menu current.</h2>
          <p className="mt-4 text-sm leading-7 text-white/70">
            feen.ma will evolve into a menu management and discovery engine — starting with Marrakech.
          </p>
          <Link
            href="/claim"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-95"
          >
            Add or claim a venue
          </Link>
        </div>
      </section>
    </main>
  );
}

