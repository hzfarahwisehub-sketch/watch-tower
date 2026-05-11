"use client";
import { useEffect } from "react";
import type { Country } from "@/lib/types";

export function Modal({ country, onClose }: { country: Country | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!country) return null;

  const statusLabel = { crit: "Status Crítico", warn: "Status Atenção", stable: "Status Estável" }[country.status];

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-5 backdrop-blur-lg"
      style={{
        background: "rgba(10,8,26,.85)",
        animation: "wt-fade .2s ease-out",
      }}
    >
      <div
        className="max-w-[680px] w-full rounded-2xl"
        style={{
          background: "linear-gradient(180deg, var(--surface), var(--surface-hi))",
          border: "1px solid var(--border-hi)",
          boxShadow: "0 24px 80px rgba(0,0,0,.6), 0 0 60px rgba(31,85,255,.3)",
          animation: "wt-slide .3s ease-out",
        }}
      >
        <div className="flex items-center gap-3.5 px-6 py-5" style={{ borderBottom: "1px solid var(--border)" }}>
          <span className={`wt-flag md ${country.code}`} />
          <h2 className="flex-1 text-[18px] font-bold" style={{ color: "var(--text)" }}>{country.name}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-[24px] cursor-pointer bg-transparent border-0 p-1"
            style={{ color: "var(--text-3)" }}
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5 max-h-[60vh] overflow-y-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[14px] text-[11px] font-extrabold tracking-wider uppercase mb-4"
            style={{
              background:
                country.status === "crit" ? "rgba(255,59,92,.18)" :
                country.status === "warn" ? "rgba(255,138,31,.18)" :
                "rgba(16,224,160,.18)",
              color:
                country.status === "crit" ? "var(--color-status-critical)" :
                country.status === "warn" ? "var(--color-status-warning)" :
                "var(--color-status-stable)",
              border: `1px solid ${
                country.status === "crit" ? "rgba(255,59,92,.4)" :
                country.status === "warn" ? "rgba(255,138,31,.4)" :
                "rgba(16,224,160,.4)"
              }`,
            }}
          >
            <span className={`wt-status ${country.status}`} style={{ width: 8, height: 8 }} />
            {statusLabel} · {country.changes} mudança{country.changes > 1 ? "s" : ""} ativa{country.changes > 1 ? "s" : ""}
          </div>

          <div className="flex flex-col gap-3.5">
            {country.events.map((e, i) => (
              <div
                key={i}
                className="px-4 py-3.5 rounded-lg"
                style={{
                  background: "rgba(15,12,30,.4)",
                  borderLeft: "3px solid var(--color-wh-blue-light)",
                }}
              >
                <h4 className="text-[13px] mb-1 tracking-wider uppercase font-extrabold" style={{ color: "var(--color-wh-blue-light)" }}>
                  {e.time}
                </h4>
                <p className="text-[13px] leading-relaxed mb-1.5" style={{ color: "var(--text)" }}>
                  <strong>{e.title}</strong>
                  <br />
                  {e.desc}
                </p>
                <div className="text-[11px] uppercase tracking-wide font-semibold" style={{ color: "var(--text-3)" }}>
                  Fonte: {e.src}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
