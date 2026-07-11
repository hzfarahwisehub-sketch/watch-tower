"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { STORAGE, load, save } from "@/lib/storage";
import type { Theme } from "@/lib/types";

interface ThemeCtx { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void; }
const Ctx = createContext<ThemeCtx>({ theme: "dark", toggle: () => {}, setTheme: () => {} });

// Ordem do ciclo do botão de tema. Sempre abre no "dark" (padrão).
const THEME_CYCLE: Theme[] = ["dark", "wise", "light"];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = load<Theme>(STORAGE.theme, "dark");
    setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    save(STORAGE.theme, theme);
  }, [theme]);

  const toggle = () =>
    setTheme((t) => {
      const i = THEME_CYCLE.indexOf(t);
      return THEME_CYCLE[(i + 1) % THEME_CYCLE.length];
    });

  return <Ctx.Provider value={{ theme, toggle, setTheme }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
