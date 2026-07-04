"use client";

import { useEffect, useState } from "react";

type S = "checking" | "online" | "offline";

/**
 * Selo fixo no canto: luz VERDE = VDS online, VERMELHA = VDS offline.
 * Consulta /api/vds-status (que faz um SELECT 1 real no banco da VDS) a cada
 * 30s. Confiavel: se ficar vermelho, o servidor caiu de verdade.
 */
export function VdsStatusBadge() {
  const [state, setState] = useState<S>("checking");
  const [latency, setLatency] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    const check = async () => {
      try {
        const r = await fetch("/api/vds-status", { cache: "no-store" });
        const d = (await r.json()) as { online?: boolean; latencyMs?: number };
        if (!alive) return;
        setState(d.online ? "online" : "offline");
        setLatency(typeof d.latencyMs === "number" ? d.latencyMs : null);
      } catch {
        if (alive) setState("offline");
      }
    };
    check();
    const id = setInterval(check, 30_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  const color = state === "online" ? "#22c55e" : state === "offline" ? "#ef4444" : "#9ca3af";
  const label = state === "online" ? "VDS online" : state === "offline" ? "VDS offline" : "VDS…";
  const title =
    state === "online"
      ? `Servidor (VDS) respondendo${latency != null ? ` em ${latency}ms` : ""}`
      : state === "offline"
        ? "Servidor (VDS) sem resposta"
        : "Verificando o servidor (VDS)";

  return (
    <div
      title={title}
      aria-label={label}
      style={{
        position: "fixed",
        bottom: 12,
        right: 12,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(10,14,20,0.85)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 999,
        padding: "6px 12px",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.02em",
        color: "#e8e6f4",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 8px ${color}`,
          transition: "background 0.3s ease",
        }}
      />
      {label}
    </div>
  );
}
