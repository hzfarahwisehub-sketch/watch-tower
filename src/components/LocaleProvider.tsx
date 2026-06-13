"use client";
import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { load, save } from "@/lib/storage";
import { DEFAULT_LOCALE, intlLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { MESSAGES } from "@/lib/i18n/messages";

// Chave própria no localStorage (segue o padrão "wt-*" do projeto).
const LOCALE_KEY = "wt-locale";

type TParams = Record<string, string | number>;

interface LocaleCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: (key: string, params?: TParams) => string;
  intl: string; // tag BCP-47 pra Intl / toLocaleString
}

function translate(locale: Locale, key: string, params?: TParams): string {
  const dict = MESSAGES[locale] ?? {};
  // fallback: locale atual -> PT-BR -> a própria chave (nunca quebra)
  let s = dict[key] ?? MESSAGES[DEFAULT_LOCALE][key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      s = s.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    }
  }
  return s;
}

const Ctx = createContext<LocaleCtx>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  toggle: () => {},
  t: (key, params) => translate(DEFAULT_LOCALE, key, params),
  intl: intlLocale(DEFAULT_LOCALE),
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Começa no padrão nos dois lados (server+client) e lê o localStorage só após
  // montar — mesmo modelo do ThemeProvider, sem mismatch de hidratação.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = load<string>(LOCALE_KEY, DEFAULT_LOCALE);
    if (isLocale(stored)) setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    save(LOCALE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggle = useCallback(() => setLocaleState((l) => (l === "pt-BR" ? "en" : "pt-BR")), []);
  const t = useCallback(
    (key: string, params?: TParams) => translate(locale, key, params),
    [locale],
  );

  return (
    <Ctx.Provider value={{ locale, setLocale, toggle, t, intl: intlLocale(locale) }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLocale = () => useContext(Ctx);
export const useT = () => useContext(Ctx).t;
