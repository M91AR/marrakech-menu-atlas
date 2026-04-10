"use client";

import { useMemo } from "react";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";

const STORAGE_KEY = "feen-saved-venues";

export function useSavedVenues() {
  const { ready, state, setState } = useLocalStorageState<string[]>(STORAGE_KEY, []);

  const savedVenues = useMemo(() => Array.from(new Set(state)), [state]);

  const hasSaved = (slug: string) => savedVenues.includes(slug);

  const toggleSaved = (slug: string) => {
    setState((current) => {
      const set = new Set(current);
      if (set.has(slug)) {
        set.delete(slug);
      } else {
        set.add(slug);
      }
      return Array.from(set);
    });
  };

  return {
    ready,
    savedVenues,
    hasSaved,
    toggleSaved,
  };
}
