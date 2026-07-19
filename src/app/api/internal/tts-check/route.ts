/**
 * GET /api/internal/tts-check (Bearer CRON_SECRET) — health-check do edge-tts A PARTIR
 * DA VERCEL. Existe porque a /api/tts é protegida por sessão (não dá pra testar
 * headless) e a dúvida real é se o edge-tts responde do IP de datacenter da Vercel
 * (o Python local funciona do IP residencial). Sintetiza uma frase curta nas 3 vozes
 * e devolve os bytes. Sem input do request.
 */
import { NextResponse } from "next/server";
import { requireCronSecret } from "@/lib/api-helpers";
import { EDGE_VOICES, synthesize } from "@/lib/edge-tts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

export async function GET(req: Request) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const results: Array<{ voice: string; bytes: number; ok: boolean; error?: string }> = [];
  for (const v of EDGE_VOICES) {
    try {
      const mp3 = await synthesize(v.id, "Teste de voz da Friday na Watch Tower.");
      results.push({ voice: v.label, bytes: mp3.length, ok: mp3.length > 1000 });
    } catch (e) {
      results.push({ voice: v.label, bytes: 0, ok: false, error: e instanceof Error ? e.message : String(e) });
    }
  }
  return NextResponse.json({ ok: results.every((r) => r.ok), results });
}
