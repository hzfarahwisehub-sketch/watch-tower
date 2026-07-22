"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

// Dois layouts disponíveis no app: "tabs" (novo, por abas) e "classic" (a grade
// livre original). O Hammis alterna pelo header; escolha persiste no navegador.
export type LayoutMode = "tabs" | "classic";

const Ctx = createContext<{ mode: LayoutMode; setMode: (m: LayoutMode) => void }>({
  mode: "tabs",
  setMode: () => {},
});

export function LayoutModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<LayoutMode>("tabs");
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("panel") === "spatial" || params.has("brain")) {
        setModeState("tabs");
        localStorage.setItem("wt-layout-mode", "tabs");
        return;
      }
      const m = localStorage.getItem("wt-layout-mode");
      if (m === "tabs" || m === "classic") setModeState(m);
    } catch {}
  }, []);
  const setMode = (m: LayoutMode) => {
    setModeState(m);
    try { localStorage.setItem("wt-layout-mode", m); } catch {}
  };
  return <Ctx.Provider value={{ mode, setMode }}>{children}</Ctx.Provider>;
}

export const useLayoutMode = () => useContext(Ctx);
