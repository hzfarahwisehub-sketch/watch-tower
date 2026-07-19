/**
 * TTS da Watch Tower — dá VOZ nomeada ao painel (Wise/Friday Brain) usando o edge-tts
 * grátis (Antônio/Francisca/Thalita). Protegida pelo middleware (só founders logados).
 *
 * GET  -> lista as vozes disponíveis (pro seletor do painel).
 * POST { text, voice } -> MP3 (audio/mpeg). Falha graciosa: 502 se a síntese cair, e o
 *   cliente (FridayEyeReactive) volta pra voz genérica do navegador.
 */
import { NextResponse } from "next/server";
import { synthesize, isEdgeVoice, EDGE_VOICES } from "@/lib/edge-tts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 20;

export async function GET() {
  return NextResponse.json({ voices: EDGE_VOICES });
}

export async function POST(req: Request) {
  let body: { text?: unknown; voice?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "json inválido" }, { status: 400 });
  }
  const text = String(body.text ?? "").slice(0, 1200).trim();
  const voice = String(body.voice ?? "");
  if (!text) return NextResponse.json({ error: "texto vazio" }, { status: 400 });
  if (!isEdgeVoice(voice)) return NextResponse.json({ error: "voz não permitida" }, { status: 400 });

  try {
    const mp3 = await synthesize(voice, text);
    return new NextResponse(new Uint8Array(mp3), {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": String(mp3.length),
        // mesmo texto+voz = mesmo áudio; cache privado por 1h alivia re-sínteses.
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch (e) {
    return NextResponse.json(
      { error: "falha na síntese", detail: e instanceof Error ? e.message : String(e) },
      { status: 502 },
    );
  }
}
