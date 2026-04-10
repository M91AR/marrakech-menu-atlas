import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VenuePageClient } from "@/components/venue-page";
import { getVenue, venues } from "@/data/venues";

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
    title: `${venue.name.en} | feen.ma`,
    description: `${venue.cuisine.en} in ${venue.neighborhood}, Marrakech. ${venue.shortDescription.en}`,
  };
}

export default async function VenuePage({ params }: Props) {
  const { slug } = await params;
  const venue = getVenue(slug);

  if (!venue) {
    notFound();
  }

  return <VenuePageClient venue={venue} />;
}
