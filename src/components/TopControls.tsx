"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import type { Theme } from "@/lib/types";

// ── Controle de BORDAS/acento (troca o azul do app por dourado/ciano/royal) ──
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
  if (a === "blue") {
    ACCENT_KEYS.forEach((k) => s.removeProperty(k));
    return;
  }
  const m = ACCENT_VARS[a];
  Object.entries(m).forEach(([k, v]) => s.setProperty(k, v));
}

// ── Seletor de LAYOUTS (presets nomeados em grego) ──
const GREEK = ["Alfa", "Beta", "Gama", "Delta", "Épsilon", "Zeta", "Eta", "Teta", "Iota", "Kappa", "Lambda", "Mi"];
type Preset = { name: string; theme: Theme; accent: Accent };

export function TopControls() {
  const { theme, setTheme } = useTheme();
  const [accent, setAccent] = useState<Accent>("blue");
  const [presets, setPresets] = useState<Preset[]>([{ name: "Alfa", theme: "dark", accent: "blue" }]);
  const [active, setActive] = useState("Alfa");
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // load persistido
  useEffect(() => {
    try {
      const a = localStorage.getItem("wt-accent") as Accent | null;
      if (a && ACCENTS.some((x) => x.id === a)) { setAccent(a); applyAccent(a); }
      const p = localStorage.getItem("wt-presets");
      if (p) { const arr = JSON.parse(p) as Preset[]; if (Array.isArray(arr) && arr.length) setPresets(arr); }
      const ap = localStorage.getItem("wt-active-preset");
      if (ap) setActive(ap);
    } catch {}
  }, []);
  useEffect(() => { applyAccent(accent); try { localStorage.setItem("wt-accent", accent); } catch {} }, [accent]);
  useEffect(() => { try { localStorage.setItem("wt-presets", JSON.stringify(presets)); } catch {} }, [presets]);
  useEffect(() => { try { localStorage.setItem("wt-active-preset", active); } catch {} }, [active]);

  // fecha o menu ao clicar fora
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, [menuOpen]);

  const saveCurrent = () => {
    const next = GREEK[presets.length] ?? `L${presets.length + 1}`;
    setPresets((prev) => [...prev, { name: next, theme, accent }]);
    setActive(next);
    setMenuOpen(false);
  };
  const applyPreset = (p: Preset) => {
    setTheme(p.theme);
    setAccent(p.accent);
    setActive(p.name);
    setMenuOpen(false);
  };

  return (
    <div className="wt-topctrls">
      {/* Bordas / acento */}
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

      {/* Layouts */}
      <div className="wt-lo-wrap" ref={wrapRef}>
        <button type="button" className="wt-lo-btn" onClick={() => setMenuOpen((v) => !v)} aria-haspopup="menu" aria-expanded={menuOpen}>
          <span aria-hidden>▦</span>
          <span className="wt-lo-name">Layout: <b>{active}</b></span>
          <span aria-hidden>▾</span>
        </button>
        {menuOpen && (
          <div className="wt-lo-menu" role="menu">
            <div className="wt-lo-head">Layouts salvos</div>
            {presets.map((p) => (
              <button key={p.name} type="button" className={`wt-lo-item ${p.name === active ? "active" : ""}`} onClick={() => applyPreset(p)}>
                <span className="lgk">{p.name.charAt(0)}</span>
                Layout {p.name}
                {p.name === active && <span className="lck" aria-hidden>✓</span>}
              </button>
            ))}
            <button type="button" className="wt-lo-save" onClick={saveCurrent}>＋ Salvar disposição atual</button>
          </div>
        )}
      </div>
    </div>
  );
}
