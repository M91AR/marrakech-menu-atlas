import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Clock3,
  ExternalLink,
  AtSign,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";
import { formatNeighborhood, getNeighborhood, getVenue, getVenueMapsUrl, venues } from "@/data/venues";

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

  const neighborhood = getNeighborhood(venue.neighborhood);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-10">
      <Link href="/listings" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--green)]">
        <ArrowLeft className="size-4" />
        Back to listings
      </Link>

      <div className="surface-card overflow-hidden rounded-[2.5rem]">
        <div className="grid gap-6 px-7 py-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-9" style={{ background: `linear-gradient(135deg, ${neighborhood?.tint ?? "#F7DFD5"} 0%, rgba(255,255,255,0.96) 100%)` }}>
          <div>
            <div className="section-label" style={{ color: neighborhood?.accent ?? "#C96E4B" }}>
              <Sparkles className="size-4" />
              {venue.heroLabel}
            </div>
            <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.06em] text-[var(--ink)] lg:text-6xl">
              {venue.name}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--muted)]">{venue.shortDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="tag-chip">{venue.type === "cafe" ? "Café" : "Restaurant"}</span>
              <span className="tag-chip">{venue.cuisine}</span>
              <span className="tag-chip">{venue.priceRange}</span>
              <span className="tag-chip">{formatNeighborhood(venue.neighborhood)}</span>
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-5 sm:p-6">
            <div className="verified-pill w-fit">
              <BadgeCheck className="size-4" />
              {venue.lastVerified}
            </div>

            <div className="mt-5 grid gap-4 text-sm text-[var(--muted)]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 text-[var(--accent)]" />
                <div>
                  <div className="font-semibold text-[var(--ink)]">Location</div>
                  <div>{venue.addressSummary}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 size-4 text-[var(--accent)]" />
                <div>
                  <div className="font-semibold text-[var(--ink)]">Hours</div>
                  <div>{venue.hoursLabel}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 size-4 text-[var(--accent)]" />
                <div>
                  <div className="font-semibold text-[var(--ink)]">Contact</div>
                  <div>{venue.phone ?? "Pending live verification"}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AtSign className="mt-1 size-4 text-[var(--accent)]" />
                <div>
                  <div className="font-semibold text-[var(--ink)]">Instagram</div>
                  <div>{venue.instagram ?? "Pending live verification"}</div>
                </div>
              </div>
            </div>

            <a
              href={getVenueMapsUrl(venue)}
              target="_blank"
              rel="noreferrer"
              className="btn-dark mt-6 w-full px-5 py-3 text-sm"
            >
              <ExternalLink className="size-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.92fr]">
        <section className="surface-card rounded-[2.1rem] p-6 lg:p-7">
          <div className="section-label">Menu snapshot</div>
          <div className="mt-5 grid gap-3">
            {venue.menuHighlights.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4 rounded-[1.3rem] bg-[var(--paper-soft)] px-4 py-4 text-sm text-[var(--ink)]">
                <span>{item.name}</span>
                <span className="font-semibold text-[var(--accent)]">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[1.5rem] bg-[var(--green-soft)] px-4 py-4 text-sm leading-7 text-[var(--green)]">
            feen promise: menu freshness and verified timestamps become part of the product, not an afterthought.
          </div>
        </section>

        <aside className="space-y-6">
          <div className="surface-card rounded-[2.1rem] p-6 lg:p-7">
            <div className="section-label">Why go</div>
            <div className="mt-5 flex flex-wrap gap-2">
              {venue.tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
              This listing is shaped like the kind of page feen should win with: quick trust, quick menu signal, quick neighborhood context.
            </p>
          </div>

          <div className="rounded-[2.1rem] bg-[var(--green)] px-6 py-7 text-white shadow-[0_22px_60px_rgba(15,107,94,0.18)] lg:px-7">
            <div className="section-label border-white/20 bg-white/10 text-white">Owner action</div>
            <h2 className="display-font mt-4 text-3xl font-semibold tracking-[-0.05em]">Claim this listing</h2>
            <p className="mt-3 text-sm leading-8 text-white/80">
              Update the real menu, contact details, and opening hours once feen moves from preview to live verification.
            </p>
            <Link href="/claim" className="btn-secondary mt-6 px-5 py-3 text-sm">
              Claim or add a venue
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
