"use client";
import { createContext, useContext, useRef, useState, useCallback, type ReactNode } from "react";

/**
 * Histórico de Desfazer/Refazer da SESSÃO (enquanto o app está aberto).
 *
 * Cada ação reversível registra um par { undo, redo }. Os botões Voltar/Avançar
 * (no Dashboard) consomem essa pilha. Cobre ajustes de layout e remoções em
 * quadros PESSOAIS.
 *
 * REGRA (Hammis): ações direcionadas à Friday / quadros de EQUIPE NÃO entram
 * aqui — alterá-las passa pelo fluxo de aviso ao Hammis, não pelo undo. Quem
 * registra a ação é responsável por só chamar `push` em ações do próprio usuário.
 */

export type UndoAction = {
  /** rótulo curto pro tooltip (ex.: "apagar tarefa", "mover caixa") */
  label: string;
  undo: () => void | Promise<void>;
  redo: () => void | Promise<void>;
};

type UndoCtx = {
  push: (a: UndoAction) => void;
  undo: () => void;
  redo: () => void;
  clear: () => void;
  canUndo: boolean;
  canRedo: boolean;
  nextUndoLabel: string | null;
  nextRedoLabel: string | null;
};

const Ctx = createContext<UndoCtx | null>(null);
const MAX = 60;

export function UndoProvider({ children }: { children: ReactNode }) {
  const pastRef = useRef<UndoAction[]>([]);
  const futureRef = useRef<UndoAction[]>([]);
  const busyRef = useRef(false);
  const [, setTick] = useState(0);
  const bump = useCallback(() => setTick((t) => t + 1), []);

  const push = useCallback((a: UndoAction) => {
    pastRef.current = [...pastRef.current, a].slice(-MAX);
    futureRef.current = [];
    bump();
  }, [bump]);

  const undo = useCallback(async () => {
    if (busyRef.current) return;
    const a = pastRef.current[pastRef.current.length - 1];
    if (!a) return;
    busyRef.current = true;
    pastRef.current = pastRef.current.slice(0, -1);
    futureRef.current = [...futureRef.current, a];
    bump();
    try {
      await a.undo();
    } finally {
      busyRef.current = false;
      bump();
    }
  }, [bump]);

  const redo = useCallback(async () => {
    if (busyRef.current) return;
    const a = futureRef.current[futureRef.current.length - 1];
    if (!a) return;
    busyRef.current = true;
    futureRef.current = futureRef.current.slice(0, -1);
    pastRef.current = [...pastRef.current, a];
    bump();
    try {
      await a.redo();
    } finally {
      busyRef.current = false;
      bump();
    }
  }, [bump]);

  const clear = useCallback(() => {
    pastRef.current = [];
    futureRef.current = [];
    bump();
  }, [bump]);

  const value: UndoCtx = {
    push,
    undo,
    redo,
    clear,
    canUndo: pastRef.current.length > 0,
    canRedo: futureRef.current.length > 0,
    nextUndoLabel: pastRef.current[pastRef.current.length - 1]?.label ?? null,
    nextRedoLabel: futureRef.current[futureRef.current.length - 1]?.label ?? null,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** Hook obrigatório (lança se fora do provider). */
export function useUndo(): UndoCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useUndo precisa estar dentro de <UndoProvider>");
  return ctx;
}

/** Hook opcional (retorna null fora do provider) — pra componentes plugáveis. */
export function useUndoOptional(): UndoCtx | null {
  return useContext(Ctx);
}
