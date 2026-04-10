import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPinned } from "lucide-react";
import { notFound } from "next/navigation";
import { VenueCard } from "@/components/venue-card";
import { getNeighborhood, getNeighborhoodCount, neighborhoods, venues } from "@/data/venues";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return neighborhoods.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = getNeighborhood(slug);

  if (!neighborhood) {
    return {};
  }

  return {
    title: `${neighborhood.name} | feen.ma`,
    description: `Preview restaurant and café listings for ${neighborhood.name}, Marrakech.`,
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const neighborhood = getNeighborhood(slug);

  if (!neighborhood) {
    notFound();
  }

  const matches = venues.filter((venue) => venue.neighborhood === slug);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-10">
      <div className="surface-card overflow-hidden rounded-[2.4rem]">
        <div className="px-7 py-8 lg:px-9" style={{ background: `linear-gradient(135deg, ${neighborhood.tint} 0%, rgba(255,255,255,0.94) 100%)` }}>
          <div className="section-label" style={{ color: neighborhood.accent }}>
            <MapPinned className="size-4" />
            Neighborhood
          </div>
          <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
            {neighborhood.name}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--muted)]">{neighborhood.blurb}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {neighborhood.bestFor.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 px-7 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-9">
          <div className="text-sm text-[var(--muted)]">
            <span className="font-semibold text-[var(--ink)]">{getNeighborhoodCount(neighborhood.slug)} venues</span>
            <span className="ml-2">in this preview area</span>
          </div>
          <Link href="/listings" className="btn-secondary w-fit px-5 py-3 text-sm">
            <ArrowLeft className="size-4" />
            Back to all listings
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {matches.map((venue) => (
          <VenueCard key={venue.slug} venue={venue} />
        ))}
      </div>
    </main>
  );
}
