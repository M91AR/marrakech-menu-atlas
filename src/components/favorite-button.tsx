"use client";

import { Heart } from "lucide-react";
import { useSavedVenues } from "@/hooks/use-saved-venues";
import { useLocale } from "@/components/locale-provider";

type FavoriteButtonProps = {
  slug: string;
  compact?: boolean;
};

export function FavoriteButton({ slug, compact = false }: FavoriteButtonProps) {
  const { locale } = useLocale();
  const { ready, hasSaved, toggleSaved } = useSavedVenues();
  const saved = ready && hasSaved(slug);

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={locale === "ar" ? "حفظ في حسابي" : "Save to my account"}
      className={`liquid-icon-button ${compact ? "size-11" : "h-12 px-4"}`}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleSaved(slug);
      }}
    >
      <Heart className={`size-4 ${saved ? "fill-current" : ""}`} />
      {!compact ? <span>{locale === "ar" ? (saved ? "محفوظ" : "احفظ") : saved ? "Saved" : "Save"}</span> : null}
    </button>
  );
}
