"use client";
import { useEffect, useState } from "react";

// Controle de BORDAS/acento: troca o azul do app por dourado/ciano/royal na
// hora, sobrescrevendo as CSS vars. Persiste em localStorage. (O seletor de
// Layout Alfa/Beta agora vive no Header — ver LayoutSelector.)
type Accent = "blue" | "gold" | "cyan" | "royal";
const ACCENTS: { id: Accent; label: string; dot: string }[] = [
  { id: "blue", label: "Azul WiseHub", dot: "#4A78FF" },
  { id: "gold", label: "Dourado", dot: "#D4AF37" },
  { id: "cyan", label: "Ciano", dot: "#38CEE6" },
  { id: "royal", label: "Azul royal", dot: "#1F55FF" },
];
const ACCENT_KEYS = ["--color-wh-blue", "--color-wh-blue-light", "--color-wh-blue-dark", "--border", "--border-hi"];
const ACCENT_VARS: Record<Exclude<Accent, "blue">, Record<string, string>> = {
  gold: { "--color-wh-blue": "#C9A24E", "--color-wh-blue-light": "#E8C57A", "--color-wh-blue-dark": "#9C7B2E", "--border": "rgba(216,178,90,.30)", "--border-hi": "rgba(232,197,122,.6)" },
  cyan: { "--color-wh-blue": "#2BB4CE", "--color-wh-blue-light": "#48D0E6", "--color-wh-blue-dark": "#1B8296", "--border": "rgba(56,206,230,.28)", "--border-hi": "rgba(72,208,230,.6)" },
  royal: { "--color-wh-blue": "#1F55FF", "--color-wh-blue-light": "#4A78FF", "--color-wh-blue-dark": "#1442D6", "--border": "rgba(74,122,255,.30)", "--border-hi": "rgba(74,122,255,.6)" },
};
function applyAccent(a: Accent) {
  if (typeof document === "undefined") return;
  const s = document.documentElement.style;
  if (a === "blue") { ACCENT_KEYS.forEach((k) => s.removeProperty(k)); return; }
  const m = ACCENT_VARS[a];
  Object.entries(m).forEach(([k, v]) => s.setProperty(k, v));
}

export function TopControls() {
  const [accent, setAccent] = useState<Accent>("blue");
  useEffect(() => {
    try {
      const a = localStorage.getItem("wt-accent") as Accent | null;
      if (a && ACCENTS.some((x) => x.id === a)) { setAccent(a); applyAccent(a); }
    } catch {}
  }, []);
  useEffect(() => { applyAccent(accent); try { localStorage.setItem("wt-accent", accent); } catch {} }, [accent]);

  return (
    <div className="wt-topctrls">
      <div className="wt-accent" role="group" aria-label="Cor de bordas e destaque">
        {ACCENTS.map((a) => (
          <button
            key={a.id}
            type="button"
            title={a.label}
            aria-label={a.label}
            aria-pressed={accent === a.id}
            onClick={() => setAccent(a.id)}
            className={`wt-adot ${accent === a.id ? "on" : ""}`}
            style={{ background: a.dot }}
          />
        ))}
      </div>
    </div>
  );
}
