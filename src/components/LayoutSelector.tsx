"use client";
import { useEffect, useRef, useState } from "react";
import { useLayoutMode } from "./LayoutMode";

// Seletor MESTRE de layout, no header (aparece nos dois layouts):
//   • Alfa · Clássico  → app original (grade livre, sem abas)
//   • Beta · Abas      → layout por abas
// Futuros arranjos entram como Gama, Delta... (mesma dropdown).
export function LayoutSelector() {
  const { mode, setMode } = useLayoutMode();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, [open]);

  const current = mode === "classic" ? "Alfa" : "Beta";
  const items = [
    { name: "Alfa", sub: "Clássico", target: "classic" as const },
    { name: "Beta", sub: "Abas", target: "tabs" as const },
  ];

  return (
    <div className="wt-lo-wrap" ref={wrapRef}>
      <button type="button" className="wt-lo-btn" onClick={() => setOpen((v) => !v)} aria-haspopup="menu" aria-expanded={open}>
        <span aria-hidden>▦</span>
        <span className="wt-lo-name">Layout: <b>{current}</b></span>
        <span aria-hidden>▾</span>
      </button>
      {open && (
        <div className="wt-lo-menu" role="menu">
          <div className="wt-lo-head">Layouts</div>
          {items.map((it) => (
            <button
              key={it.name}
              type="button"
              className={`wt-lo-item ${current === it.name ? "active" : ""}`}
              onClick={() => { setMode(it.target); setOpen(false); }}
            >
              <span className="lgk">{it.name.charAt(0)}</span>
              {it.name} · {it.sub}
              {current === it.name && <span className="lck" aria-hidden>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
