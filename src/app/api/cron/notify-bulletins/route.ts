import { NextRequest, NextResponse } from "next/server";
import { requireCronSecret } from "@/lib/api-helpers";
import { bulletinLabel } from "@/lib/bulletin-names";
import { sendPushToAll } from "@/lib/push";

export const runtime = "nodejs";

// Chamado pelo workflow check-bulletins.yml DEPOIS de detectar mudança(s).
// Recebe as keys que mudaram e dispara um push pra todos os inscritos.
// Body: { changed: "us,br" }  ou  { changed: ["us","br"] }
export async function POST(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const body = await req.json().catch(() => ({}));
  const raw = (body as { changed?: unknown }).changed;
  const keys: string[] = Array.isArray(raw)
    ? raw.map((k) => String(k))
    : typeof raw === "string"
      ? raw.split(",").map((s) => s.trim()).filter(Boolean)
      : [];

  if (keys.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, note: "no_changes" });
  }

  const label = bulletinLabel(keys);
  const plural = keys.length > 1;
  const out = await sendPushToAll({
    title: plural ? "📋 Boletins de imigração atualizados" : "📋 Boletim de imigração atualizado",
    body: `Mudança detectada: ${label}. Toque pra ver os detalhes.`,
    url: "/",
    tag: "wt-bulletin",
  });

  return NextResponse.json({ ok: true, keys, ...out });
}
