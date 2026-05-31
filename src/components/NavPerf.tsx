"use client";
import { useEffect } from "react";
import { markNavigating } from "@/lib/nav-perf";

/**
 * Escuta rolagem/scroll-wheel e marca o documento como "navegando", o que faz
 * o CSS suspender os efeitos caros durante o movimento (navegação fluida).
 * Sem UI. Montado uma vez no layout.
 */
export function NavPerf() {
  useEffect(() => {
    const onMove = () => markNavigating();
    // capture: true pega scroll dos contêineres internos (corpos dos cards) também
    window.addEventListener("scroll", onMove, { passive: true, capture: true });
    window.addEventListener("wheel", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onMove, { capture: true });
      window.removeEventListener("wheel", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);
  return null;
}
