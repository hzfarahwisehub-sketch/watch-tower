"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { load, save } from "./storage";

/**
 * useDualStorage — hook duplo localStorage ↔ API REST.
 *
 * Quando deslogado: usa localStorage (zero regressao em relacao ao atual).
 * Quando logado: usa /api/{path} (sincronizado entre devices/socios).
 *
 * Mantem o tipo LOCAL exposto ao componente (id: number, etc) — adapter
 * mapeia DB → local na leitura, local → DB na escrita. ID local
 * incremental, mapeado pra cuid via IdMap interno.
 *
 * Migracao one-shot: no primeiro login, os items do localStorage sao
 * importados pra API e o localStorage marcado como "migrated" (flag
 * separada por entidade pra evitar duplicacao em logins futuros).
 */

class IdMap {
  private localToDb = new Map<number, string>();
  private dbToLocal = new Map<string, number>();
  private nextId = 1;

  register(dbId: string): number {
    const existing = this.dbToLocal.get(dbId);
    if (existing !== undefined) return existing;
    const localId = this.nextId++;
    this.localToDb.set(localId, dbId);
    this.dbToLocal.set(dbId, localId);
    return localId;
  }

  getDb(localId: number): string | undefined {
    return this.localToDb.get(localId);
  }

  reset(): void {
    this.localToDb.clear();
    this.dbToLocal.clear();
    this.nextId = 1;
  }
}

export type DualStorageConfig<TLocal extends { id: number }, TDb extends { id: string }> = {
  /** localStorage key */
  storageKey: string;
  /** Defaults usados em cold-start sem dados */
  defaults: TLocal[];
  /** API base path (sem trailing slash). ex: "/api/tasks" */
  apiPath: string;
  /** Nome do array no JSON da API. ex: "tasks", "items", "reminders" */
  apiArrayKey: string;
  /** Adapter DB → local */
  fromDb: (dbItem: TDb, idMap: IdMap) => TLocal;
  /** Adapter local → DB (pra create POST body) */
  toCreatePayload: (item: Omit<TLocal, "id">) => unknown;
  /** Adapter local → DB (pra patch PATCH body) */
  toPatchPayload: (patch: Partial<TLocal>) => unknown;
};

export function useDualStorage<
  TLocal extends { id: number },
  TDb extends { id: string },
>(config: DualStorageConfig<TLocal, TDb>) {
  const { data: session, status: sessionStatus } = useSession();
  const isLoggedIn = sessionStatus === "authenticated" && !!session?.user?.email;

  const [items, setItems] = useState<TLocal[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const idMapRef = useRef(new IdMap());

  // ============ load ============
  useEffect(() => {
    let cancelled = false;

    async function load_() {
      if (sessionStatus === "loading") return; // espera definir
      if (isLoggedIn) {
        // Carrega da API
        try {
          const res = await fetch(config.apiPath, { cache: "no-store" });
          if (res.status === 401) {
            // Fallback pra local (provavelmente token expirou)
            setItems(load(config.storageKey, config.defaults));
            setHydrated(true);
            return;
          }
          const data = await res.json();
          const dbItems: TDb[] = data[config.apiArrayKey] ?? [];
          if (cancelled) return;
          idMapRef.current.reset();
          const local = dbItems.map((d) => config.fromDb(d, idMapRef.current));
          setItems(local);
          setHydrated(true);

          // Migration one-shot: se localStorage tem items E nao foi migrado ainda
          const migrationFlag = `${config.storageKey}__migrated`;
          const wasMigrated = load(migrationFlag, false);
          if (!wasMigrated) {
            const localOnly = load(config.storageKey, config.defaults);
            // Filtra defaults (heuristica simples: nao migra defaults sem alteracao)
            const itemsToMigrate = localOnly.filter((local) => {
              return !config.defaults.some(
                (def) => JSON.stringify(stripId(def)) === JSON.stringify(stripId(local)),
              );
            });
            if (itemsToMigrate.length > 0) {
              for (const item of itemsToMigrate) {
                try {
                  await fetch(config.apiPath, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(config.toCreatePayload(stripId(item) as Omit<TLocal, "id">)),
                  });
                } catch {
                  // silencia falhas individuais
                }
              }
              // Recarrega pra refletir os migrados
              const res2 = await fetch(config.apiPath, { cache: "no-store" });
              if (res2.ok) {
                const data2 = await res2.json();
                const dbItems2: TDb[] = data2[config.apiArrayKey] ?? [];
                idMapRef.current.reset();
                const local2 = dbItems2.map((d) => config.fromDb(d, idMapRef.current));
                if (!cancelled) setItems(local2);
              }
            }
            save(migrationFlag, true);
          }
        } catch {
          // fallback
          setItems(load(config.storageKey, config.defaults));
          setHydrated(true);
        }
      } else {
        // Sem sessao — localStorage
        setItems(load(config.storageKey, config.defaults));
        setHydrated(true);
      }
    }

    load_();
    return () => { cancelled = true; };
  }, [isLoggedIn, sessionStatus, config]);

  // ============ persist localStorage quando deslogado ============
  useEffect(() => {
    if (hydrated && !isLoggedIn) {
      save(config.storageKey, items);
    }
  }, [items, hydrated, isLoggedIn, config.storageKey]);

  // ============ mutations ============

  /** Adiciona item. Retorna o id local atribuído. */
  const add = useCallback(async (item: Omit<TLocal, "id">): Promise<number | null> => {
    if (isLoggedIn) {
      const res = await fetch(config.apiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config.toCreatePayload(item)),
      });
      if (!res.ok) return null;
      const data = await res.json();
      // Resposta varia: { task } / { item } / { reminder } / { action }
      const dbItem = (data.task ?? data.item ?? data.reminder ?? data.action) as TDb | undefined;
      if (!dbItem) return null;
      const local = config.fromDb(dbItem, idMapRef.current);
      setItems((prev) => [...prev, local]);
      return local.id;
    } else {
      const newId = items.reduce((max, t) => Math.max(max, t.id), 0) + 1;
      const local = { ...item, id: newId } as TLocal;
      setItems((prev) => [...prev, local]);
      return newId;
    }
  }, [isLoggedIn, items, config]);

  /** Atualiza parcialmente um item pelo id local. */
  const update = useCallback(async (id: number, patch: Partial<TLocal>): Promise<boolean> => {
    if (isLoggedIn) {
      const dbId = idMapRef.current.getDb(id);
      if (!dbId) return false;
      const res = await fetch(`${config.apiPath}/${dbId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config.toPatchPayload(patch)),
      });
      if (!res.ok) return false;
      setItems((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
      return true;
    } else {
      setItems((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
      return true;
    }
  }, [isLoggedIn, config]);

  /** Remove pelo id local. */
  const remove = useCallback(async (id: number): Promise<boolean> => {
    if (isLoggedIn) {
      const dbId = idMapRef.current.getDb(id);
      if (!dbId) return false;
      const res = await fetch(`${config.apiPath}/${dbId}`, { method: "DELETE" });
      if (!res.ok) return false;
      setItems((prev) => prev.filter((t) => t.id !== id));
      return true;
    } else {
      setItems((prev) => prev.filter((t) => t.id !== id));
      return true;
    }
  }, [isLoggedIn, config]);

  /** Substitui o array inteiro (usado em reorder etc). Local-only. */
  const setAll = useCallback((next: TLocal[]) => {
    setItems(next);
  }, []);

  return {
    items,
    setAll,
    add,
    update,
    remove,
    hydrated,
    isLoggedIn,
  };
}

function stripId<T extends { id: unknown }>(item: T): Omit<T, "id"> {
  const copy = { ...item };
  delete (copy as { id?: unknown }).id;
  return copy;
}
