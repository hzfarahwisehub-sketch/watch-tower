/**
 * GET /api/vds-status
 *
 * Checagem REAL do servidor (VDS): faz um `SELECT 1` no PostgreSQL da VDS (que
 * hospeda o banco do Watch Tower). Se o banco responder em ate 4s, a VDS esta
 * online; qualquer erro/timeout = offline. Nao e cosmetico: reflete o estado
 * de verdade. Cache curto (15s) so pra nao martelar o banco a cada poll.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let cache: { online: boolean; latencyMs: number; at: number } | null = null;
const TTL_MS = 15_000;
const TIMEOUT_MS = 4_000;

const noStore = { "Cache-Control": "no-store" };

export async function GET() {
  if (cache && Date.now() - cache.at < TTL_MS) {
    return NextResponse.json(
      { online: cache.online, latencyMs: cache.latencyMs, cached: true, checkedAt: new Date(cache.at).toISOString() },
      { headers: noStore },
    );
  }

  const t0 = Date.now();
  let online = false;
  try {
    await Promise.race([
      prisma.$queryRaw`SELECT 1`,
      new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), TIMEOUT_MS)),
    ]);
    online = true;
  } catch {
    online = false;
  }
  const latencyMs = Date.now() - t0;
  cache = { online, latencyMs, at: Date.now() };

  return NextResponse.json({ online, latencyMs, checkedAt: new Date().toISOString() }, { headers: noStore });
}
