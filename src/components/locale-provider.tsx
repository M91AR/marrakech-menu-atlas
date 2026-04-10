"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { getLocalizedString, isLocale, type Locale, type LocalizedString } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  isArabic: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("feen-locale");

    if (!(stored && isLocale(stored))) {
      return;
    }

    const timer = window.setTimeout(() => {
      setLocale(stored);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.locale = locale;
    window.localStorage.setItem("feen-locale", locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((current) => (current === "en" ? "ar" : "en")),
      isArabic: locale === "ar",
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}

type LocalizedTextProps<T extends ElementType> = {
  as?: T;
  className?: string;
  en: string;
  ar: string;
};

export function LocalizedText<T extends ElementType = "span">({
  as,
  className,
  en,
  ar,
}: LocalizedTextProps<T>) {
  const { locale } = useLocale();
  const Component = (as ?? "span") as ElementType;

  return <Component className={className}>{locale === "ar" ? ar : en}</Component>;
}

type LocalizedValueProps<T extends ElementType> = {
  as?: T;
  className?: string;
  value: LocalizedString;
};

export function LocalizedValue<T extends ElementType = "span">({
  as,
  className,
  value,
}: LocalizedValueProps<T>) {
  const { locale } = useLocale();
  const Component = (as ?? "span") as ElementType;

  return <Component className={className}>{getLocalizedString(value, locale)}</Component>;
}
