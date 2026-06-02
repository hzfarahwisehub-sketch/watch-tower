/**
 * Barramento entre a janela PRINCIPAL (host) e as janelas FILHAS (pop-out de
 * painéis). Modelo heartbeat/lease, tudo same-origin via BroadcastChannel:
 *
 *  - A principal emite `host-alive` continuamente (a cada HEARTBEAT_MS).
 *  - Cada filha só segue viva enquanto recebe esse pulso. Se o pulso para por
 *    mais de HOST_TIMEOUT_MS, a filha se fecha sozinha.
 *
 * Consequência: "fechar" e "reload" da principal viram ações sincronizadas,
 * sem janela órfã nem painel duplicado.
 *  - Reload da principal: o pulso some por um instante e volta antes do lease
 *    expirar; a filha renova o lease e se re-anuncia (`child-hello`), e a
 *    principal reconstrói o estado de janelas abertas. Nada duplica.
 *  - Fechar a principal: o pulso some de vez; todas as filhas expiram o lease
 *    e se fecham juntas.
 *
 * O localStorage guarda quais painéis estavam abertos + posição/tamanho, pra
 * restaurar o mesmo layout quando o app reabre. Sem servidor, sem cookie.
 */

export type WinMsg =
  // principal → filhas: pulso de vida (host = id da instância principal viva)
  | { type: "host-alive"; host: string; ts: number }
  // filha → principal: nasci / continuo viva (responde ao pulso)
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
  // principal → todas as filhas: fechem
  | { type: "close-all" };

export const WIN_CHANNEL = "wt-windows-v1";
export const OPEN_WINDOWS_KEY = "wt-open-windows";

/**
 * Tempos do lease (ms). HEARTBEAT_MS é o intervalo do pulso da principal;
 * HOST_TIMEOUT_MS é quanto a filha aguenta sem pulso antes de se fechar.
 * O timeout precisa ser > o gap típico de um reload da principal (parse +
 * hydrate), senão um simples F5 fecharia as filhas. ~2.5s cobre o reload
 * comum e ainda fecha as filhas rápido quando a principal é fechada de fato.
 */
export const HEARTBEAT_MS = 750;
export const HOST_TIMEOUT_MS = 2500;

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
