// i18n do Watch Tower — config enxuta (padrão dicionário próprio, sem framework).
// Espelha o modelo do wisehub-site, mas client-side (sem roteamento [locale]):
// o dashboard é SPA-like com react-grid-layout + estado em localStorage, então
// trocar a URL por locale seria invasivo. O idioma vive no LocaleProvider.

export const LOCALES = ["pt-BR", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt-BR";

// Nome cheio (para menus futuros) e rótulo curto (para o botão do header).
export const LOCALE_NAMES: Record<Locale, string> = {
  "pt-BR": "Português",
  en: "English",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  "pt-BR": "PT",
  en: "EN",
};

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as readonly string[]).includes(v);
}

// Mapeia o locale do app para uma tag BCP-47 usável em Intl / toLocaleString.
export function intlLocale(locale: Locale): string {
  return locale === "en" ? "en-US" : "pt-BR";
}
