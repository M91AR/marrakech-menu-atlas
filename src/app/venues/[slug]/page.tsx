import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVenue, getVenueMapsUrl, venues } from "@/data/venues";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return venues.map((venue) => ({ slug: venue.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const venue = getVenue(slug);

  if (!venue) {
    return {};
  }

  return {
    title: `${venue.name} | feen.ma`,
    description: `${venue.cuisine} in ${venue.neighborhood}, Marrakech. ${venue.shortDescription}`,
  };
}

export default async function VenuePage({ params }: Props) {
  const { slug } = await params;
  const venue = getVenue(slug);

  if (!venue) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-10">
      <div className="rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(244,182,109,0.16),transparent_24%),linear-gradient(180deg,#0d1514_0%,#0a1111_100%)] p-7 lg:p-9">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2b66d]">{venue.heroLabel}</div>
        <div className="mt-4 flex flex-wrap items-start justify-between gap-5">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">{venue.name}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{venue.shortDescription}</p>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-black/15 px-4 py-3 text-sm text-white/72">
            <div>{venue.type === "cafe" ? "Café" : "Restaurant"}</div>
            <div className="mt-1">{venue.cuisine}</div>
            <div className="mt-1">{venue.priceRange}</div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {venue.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/64">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.88fr]">
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Menu snapshot</div>
          <div className="mt-5 grid gap-3">
            {venue.menuHighlights.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-[1.25rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/75">
                <span>{item.name}</span>
                <span className="font-semibold text-[#f8dcb8]">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[1.4rem] border border-[#f2b66d]/20 bg-[#f2b66d]/8 p-4 text-sm leading-7 text-white/70">
            Last verified: <span className="font-semibold text-[#f8dcb8]">{venue.lastVerified}</span>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">Practical info</div>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/72">
              <div>
                <div className="text-white/45">Neighborhood</div>
                <div className="font-medium capitalize text-white">{venue.neighborhood.replace("-", " ")}</div>
              </div>
              <div>
                <div className="text-white/45">Address</div>
                <div className="font-medium text-white">{venue.addressSummary}</div>
              </div>
              <div>
                <div className="text-white/45">Hours</div>
                <div className="font-medium text-white">{venue.hoursLabel}</div>
              </div>
              <div>
                <div className="text-white/45">Phone</div>
                <div className="font-medium text-white">{venue.phone ?? "Pending live verification"}</div>
              </div>
              <div>
                <div className="text-white/45">WhatsApp</div>
                <div className="font-medium text-white">{venue.whatsapp ?? "Pending live verification"}</div>
              </div>
              <div>
                <div className="text-white/45">Instagram</div>
                <div className="font-medium text-white">{venue.instagram ?? "Pending live verification"}</div>
              </div>
            </div>
            <a
              href={getVenueMapsUrl(venue)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-95"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-[2rem] border border-[#f2b66d]/20 bg-[#f2b66d]/8 p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f8dcb8]">Owner action</div>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">Claim this listing</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Update your real menu, contact details, and opening hours as feen.ma moves from preview to verified launch.
            </p>
            <Link
              href="/claim"
              className="mt-5 inline-flex rounded-full border border-white/15 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-95"
            >
              Claim or add a venue
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}

