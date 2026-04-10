"use client";

import { useEffect, useState } from "react";

export function useLocalStorageState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let nextValue: T | null = null;

    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        nextValue = JSON.parse(raw) as T;
      }
    } catch {
      // Ignore malformed or unavailable storage in preview mode.
    }

    const timer = window.setTimeout(() => {
      if (nextValue !== null) {
        setState(nextValue);
      }
      setReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [key]);

  useEffect(() => {
    if (!ready) {
      return;
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // Ignore storage write failures in restricted browser contexts.
    }
  }, [key, ready, state]);

  return { ready, state, setState };
}
