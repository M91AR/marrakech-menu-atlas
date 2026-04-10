import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NeighborhoodPageClient } from "@/components/neighborhood-page";
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
    title: `${neighborhood.name.en} | feen.ma`,
    description: `Preview restaurant and café listings for ${neighborhood.name.en}, Marrakech.`,
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const neighborhood = getNeighborhood(slug);

  if (!neighborhood) {
    notFound();
  }

  const matches = venues.filter((venue) => venue.neighborhood === slug);

  return <NeighborhoodPageClient neighborhood={neighborhood} matches={matches} />;
}
