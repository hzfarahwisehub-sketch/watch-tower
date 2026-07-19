"use client";

import { useEffect } from "react";

/**
 * useVisiblePoll — roda `fn` imediatamente e depois a cada `intervalMs`,
 * mas SÓ enquanto a aba está visível. Aba em segundo plano não dispara
 * requisição (e portanto não acorda função na Vercel — os polls de 30s
 * com aba aberta 24/7 foram 92% do consumo do ciclo de julho/2026).
 *
 * Ao voltar pra aba, dispara na hora se o último disparo já venceu o
 * intervalo — o usuário nunca vê dado mais velho que `intervalMs` de
 * tela ativa.
 *
 * `fn` deve ser estável (useCallback), como os `reload` dos painéis já são.
 * `enabled=false` desliga tudo (ex.: usuário deslogado).
 */
export function useVisiblePoll(fn: () => void, intervalMs: number, enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;
    let last = 0;
    let id: ReturnType<typeof setInterval> | null = null;

    const run = () => {
      last = Date.now();
      fn();
    };
    const start = () => {
      if (id !== null) return;
      if (Date.now() - last >= intervalMs) run();
      id = setInterval(run, intervalMs);
    };
    const stop = () => {
      if (id !== null) {
        clearInterval(id);
        id = null;
      }
    };
    const onVis = () => {
      if (document.visibilityState === "visible") start();
      else stop();
    };

    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [fn, intervalMs, enabled]);
}
