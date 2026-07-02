// Rate limit leve em memória (janela deslizante) pras rotas /api/mail/*.
// Em serverless cada instância tem o seu — é uma contenção de abuso por
// sessão, não um limitador global exato (suficiente pro uso interno).

const buckets = new Map<string, number[]>();
const MAX_KEYS = 5000;

export function rateAllow(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const prev = buckets.get(key) ?? [];
  const fresh = prev.filter((t) => now - t < windowMs);
  if (fresh.length >= max) {
    buckets.set(key, fresh);
    return false;
  }
  fresh.push(now);
  if (!buckets.has(key) && buckets.size >= MAX_KEYS) buckets.clear();
  buckets.set(key, fresh);
  return true;
}
