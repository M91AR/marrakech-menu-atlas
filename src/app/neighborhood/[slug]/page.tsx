import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VenueCard } from "@/components/venue-card";
import { getNeighborhood, neighborhoods, venues } from "@/data/venues";

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
      <div className="rounded-[2.1rem] border border-white/10 bg-white/5 p-7">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2b66d]">Neighborhood</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">{neighborhood.name}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">{neighborhood.blurb}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {neighborhood.bestFor.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-white/64">
              {tag}
            </span>
          ))}
        </div>
        <Link href="/listings" className="mt-6 inline-flex text-sm font-semibold text-[#f5d8b2]">
          ← Back to all listings
        </Link>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {matches.map((venue) => (
          <VenueCard key={venue.slug} venue={venue} />
        ))}
      </div>
    </main>
  );
}

