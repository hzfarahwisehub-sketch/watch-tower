/**
 * Barramento entre a janela PRINCIPAL e as janelas FILHAS (pop-out de painéis).
 * Usa BroadcastChannel (mesma origem) pra coordenar dock/fechar/seleção, e
 * localStorage pra lembrar quais painéis estavam abertos + posição (pra
 * "Restaurar janelas" com 1 clique). Tudo same-origin, sem servidor.
 */

export type WinMsg =
  | { type: "hello"; id: string } // filha avisa que abriu/está viva
  | { type: "bye"; id: string } // filha fechando
  | { type: "dock"; id: string } // filha pede pra voltar pra principal
  | { type: "geom"; id: string; x: number; y: number; w: number; h: number }
  | { type: "select"; code: string } // filha selecionou um país (filha → principal)
  | { type: "selected"; code: string | null } // principal avisa as filhas qual país está selecionado (principal → filhas)
  | { type: "close"; id: string } // principal manda a filha fechar
  | { type: "ping" }; // principal pergunta quem está vivo

export const WIN_CHANNEL = "wt-windows-v1";
export const OPEN_WINDOWS_KEY = "wt-open-windows";

export type StoredWin = { id: string; x?: number; y?: number; w?: number; h?: number };

export function makeBus(): BroadcastChannel | null {
  try {
    return new BroadcastChannel(WIN_CHANNEL);
  } catch {
    return null;
  }
}

export function loadOpenWindows(): StoredWin[] {
  try {
    const raw = localStorage.getItem(OPEN_WINDOWS_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? (arr as StoredWin[]) : [];
  } catch {
    return [];
  }
}

export function saveOpenWindows(list: StoredWin[]): void {
  try {
    localStorage.setItem(OPEN_WINDOWS_KEY, JSON.stringify(list));
  } catch {}
}
