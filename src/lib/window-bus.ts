/**
 * Barramento entre a janela PRINCIPAL (host) e as janelas FILHAS (pop-out de
 * painéis). Same-origin, via BroadcastChannel. Tudo sem servidor.
 *
 * Modelo:
 *  - A principal e as filhas vivem juntas. Quando a principal fecha (ou
 *    recarrega), ela fecha TODAS as filhas na hora (`close-all` no canal +
 *    win.close() pelas referências). Fechamento simultâneo e imediato.
 *  - Heartbeat `host-alive` serve só de rede de segurança: se a principal
 *    morrer sem rodar o beforeunload (crash/kill), as filhas que ficarem sem
 *    pulso por HOST_TIMEOUT_MS se fecham sozinhas.
 *  - O layout (quais painéis + posição/tamanho de cada janela, em coordenadas
 *    absolutas da área de trabalho, cobrindo múltiplos monitores) é salvo no
 *    localStorage. Ao reabrir o app, restaura cada janela no MESMO monitor e
 *    posição (via Window Management API + moveTo/resizeTo).
 */

export type WinMsg =
  // principal → filhas: pulso de vida (rede de segurança do lease)
  | { type: "host-alive"; host: string; ts: number }
  // filha → principal: nasci / continuo viva (responde ao pulso, carrega geom)
  | { type: "child-hello"; id: string; x?: number; y?: number; w?: number; h?: number }
  // filha → principal: estou fechando agora
  | { type: "bye"; id: string }
  // filha → principal: me traga de volta pra principal (dock)
  | { type: "dock"; id: string }
  // filha → principal: minha posição/tamanho atuais (pra salvar o layout)
  | { type: "geom"; id: string; x: number; y: number; w: number; h: number }
  // filha → principal: selecionei um país
  | { type: "select"; code: string }
  // principal → filhas: qual país está selecionado (espelha nas filhas)
  | { type: "selected"; code: string | null }
  // principal → filha específica: feche você
  | { type: "close"; id: string }
  // principal → todas as filhas: fechem. dock=true significa "trazer pra
  // principal" (limpa o layout salvo); sem dock = app fechando (preserva o
  // layout, pra reabrir cada caixa onde estava).
  | { type: "close-all"; dock?: boolean };

export const WIN_CHANNEL = "wt-windows-v1";
export const OPEN_WINDOWS_KEY = "wt-open-windows";

/**
 * Tempos do lease (ms). Como o fechamento normal agora é imediato (via
 * close-all + win.close()), o lease é só fallback pra principal que morreu sem
 * avisar. Por isso o timeout pode ser folgado.
 */
export const HEARTBEAT_MS = 1000;
export const HOST_TIMEOUT_MS = 4000;

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

/**
 * Insere ou atualiza a entrada DESTA janela no layout salvo (idempotente).
 * Cada janela filha chama isto pra se registrar e manter a própria posição,
 * sem depender de a principal capturar via BroadcastChannel (que pode falhar
 * no app instalado / PWA). É a fonte da verdade do "onde cada caixa estava".
 */
export function upsertOpenWindow(win: StoredWin): void {
  try {
    const list = loadOpenWindows();
    const i = list.findIndex((w) => w.id === win.id);
    if (i >= 0) list[i] = { ...list[i], ...win };
    else list.push(win);
    saveOpenWindows(list);
  } catch {}
}

/** Remove esta janela do layout salvo (dock intencional ou fechar a caixa). */
export function removeOpenWindow(id: string): void {
  try {
    saveOpenWindows(loadOpenWindows().filter((w) => w.id !== id));
  } catch {}
}

/** Versão do app, exibida no menu de janelas pra confirmar a build no ar. */
export const APP_BUILD = "v9";
