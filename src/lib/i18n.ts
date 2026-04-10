export type Locale = "en" | "ar";

export type LocalizedString = {
  en: string;
  ar: string;
};

export const localized = (en: string, ar: string): LocalizedString => ({ en, ar });

export function getLocalizedString(value: LocalizedString | string, locale: Locale) {
  if (typeof value === "string") {
    return value;
  }

  return value[locale] ?? value.en;
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ar";
}
