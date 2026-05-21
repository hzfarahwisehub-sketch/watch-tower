"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

/**
 * SettingsProvider — estado global de UI do dashboard:
 *  - locked: trava drag/resize das caixas
 *  - accent: cor de destaque (sobrescreve --color-wh-blue)
 *  - font: família tipográfica (sobrescreve --font-sans)
 *  - panel: controla abertura do SettingsPanel
 *
 * Persiste em localStorage (key wt-settings-v1).
 */

export type AccentPreset = {
  key: string;
  label: string;
  value: string; // hex base
  lightValue: string; // versão clara pra hover/accent secundário
  deepValue: string; // versão escura
};

export const ACCENT_PRESETS: AccentPreset[] = [
  { key: "wisehub-blue",   label: "WiseHub Blue",  value: "#1F55FF", lightValue: "#4A7AFF", deepValue: "#0E3FCF" },
  { key: "esmeralda",      label: "Esmeralda",     value: "#10A570", lightValue: "#3FD49C", deepValue: "#087348" },
  { key: "dourado",        label: "Dourado",       value: "#D4A04A", lightValue: "#E5B86C", deepValue: "#A37522" },
  { key: "violeta",        label: "Violeta",       value: "#7B5BFF", lightValue: "#9D85FF", deepValue: "#5837D4" },
  { key: "rosa",           label: "Rosa",          value: "#E5478C", lightValue: "#FF6FA5", deepValue: "#B82770" },
  { key: "sunset",         label: "Sunset",        value: "#FF7A2F", lightValue: "#FF9D5F", deepValue: "#D4571A" },
  { key: "ciano",          label: "Ciano",         value: "#1FB5D4", lightValue: "#4FD0E5", deepValue: "#0E8AA8" },
  { key: "grafite",        label: "Grafite",       value: "#6B7280", lightValue: "#9AA0AB", deepValue: "#4B5563" },
];

export type FontPreset = {
  key: string;
  label: string;
  stack: string;
  category: "sans" | "serif" | "mono";
};

export const FONT_PRESETS: FontPreset[] = [
  { key: "inter",      label: "Inter (padrão)",     stack: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", category: "sans" },
  { key: "system",     label: "Sistema",            stack: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", category: "sans" },
  { key: "roboto",     label: "Roboto",             stack: "Roboto, 'Helvetica Neue', Arial, sans-serif", category: "sans" },
  { key: "helvetica",  label: "Helvetica Neue",     stack: "'Helvetica Neue', Helvetica, Arial, sans-serif", category: "sans" },
  { key: "georgia",    label: "Georgia (serif)",    stack: "Georgia, 'Times New Roman', serif", category: "serif" },
  { key: "merriweather", label: "Merriweather (serif)", stack: "Merriweather, Georgia, serif", category: "serif" },
  { key: "mono",       label: "Monospace",          stack: "'JetBrains Mono', 'Courier New', monospace", category: "mono" },
];

const DEFAULT_ACCENT = ACCENT_PRESETS[0];
const DEFAULT_FONT = FONT_PRESETS[0];
const STORAGE_KEY = "wt-settings-v1";

type Settings = {
  locked: boolean;
  accentKey: string;
  fontKey: string;
};

type SettingsCtx = {
  locked: boolean;
  toggleLock: () => void;

  accent: AccentPreset;
  setAccentByKey: (key: string) => void;

  font: FontPreset;
  setFontByKey: (key: string) => void;

  panelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;

  resetAll: () => void;
};

const Ctx = createContext<SettingsCtx | null>(null);

function loadFromStorage(): Settings {
  if (typeof window === "undefined") {
    return { locked: false, accentKey: DEFAULT_ACCENT.key, fontKey: DEFAULT_FONT.key };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { locked: false, accentKey: DEFAULT_ACCENT.key, fontKey: DEFAULT_FONT.key };
    const parsed = JSON.parse(raw) as Partial<Settings>;
    return {
      locked: !!parsed.locked,
      accentKey: typeof parsed.accentKey === "string" ? parsed.accentKey : DEFAULT_ACCENT.key,
      fontKey: typeof parsed.fontKey === "string" ? parsed.fontKey : DEFAULT_FONT.key,
    };
  } catch {
    return { locked: false, accentKey: DEFAULT_ACCENT.key, fontKey: DEFAULT_FONT.key };
  }
}

function saveToStorage(s: Settings) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {}
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Settings>({ locked: false, accentKey: DEFAULT_ACCENT.key, fontKey: DEFAULT_FONT.key });
  const [panelOpen, setPanelOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Carrega do localStorage no mount
  useEffect(() => {
    setState(loadFromStorage());
    setHydrated(true);
  }, []);

  // Aplica accent + font nas CSS vars do documento sempre que mudar
  useEffect(() => {
    if (!hydrated) return;
    const accent = ACCENT_PRESETS.find((a) => a.key === state.accentKey) ?? DEFAULT_ACCENT;
    const font = FONT_PRESETS.find((f) => f.key === state.fontKey) ?? DEFAULT_FONT;
    const root = document.documentElement;
    root.style.setProperty("--color-wh-blue", accent.value);
    root.style.setProperty("--color-wh-blue-light", accent.lightValue);
    root.style.setProperty("--color-wh-blue-deep", accent.deepValue);
    root.style.setProperty("--font-sans", font.stack);
    document.body.style.fontFamily = font.stack;
  }, [state.accentKey, state.fontKey, hydrated]);

  // Persiste qualquer mudança
  useEffect(() => {
    if (!hydrated) return;
    saveToStorage(state);
  }, [state, hydrated]);

  const toggleLock = useCallback(() => {
    setState((s) => ({ ...s, locked: !s.locked }));
  }, []);

  const setAccentByKey = useCallback((key: string) => {
    setState((s) => ({ ...s, accentKey: key }));
  }, []);

  const setFontByKey = useCallback((key: string) => {
    setState((s) => ({ ...s, fontKey: key }));
  }, []);

  const openPanel = useCallback(() => setPanelOpen(true), []);
  const closePanel = useCallback(() => setPanelOpen(false), []);

  const resetAll = useCallback(() => {
    setState({ locked: false, accentKey: DEFAULT_ACCENT.key, fontKey: DEFAULT_FONT.key });
  }, []);

  const accent = useMemo(
    () => ACCENT_PRESETS.find((a) => a.key === state.accentKey) ?? DEFAULT_ACCENT,
    [state.accentKey]
  );
  const font = useMemo(
    () => FONT_PRESETS.find((f) => f.key === state.fontKey) ?? DEFAULT_FONT,
    [state.fontKey]
  );

  const value = useMemo<SettingsCtx>(
    () => ({
      locked: state.locked,
      toggleLock,
      accent,
      setAccentByKey,
      font,
      setFontByKey,
      panelOpen,
      openPanel,
      closePanel,
      resetAll,
    }),
    [state.locked, toggleLock, accent, setAccentByKey, font, setFontByKey, panelOpen, openPanel, closePanel, resetAll]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSettings(): SettingsCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSettings must be used inside <SettingsProvider>");
  return ctx;
}
