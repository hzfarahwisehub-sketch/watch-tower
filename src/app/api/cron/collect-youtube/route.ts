import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCronSecret } from "@/lib/api-helpers";

export const runtime = "nodejs";

// Coletor diario do YouTube (olho de dados do Jarvis, conectado a central Watch Tower).
// Chamado pelo workflow collect-youtube.yml. Le os canais publicos via YouTube Data API v3
// (so leitura, gratis) e grava 1 snapshot por canal por dia (idempotente por upsert).
// Canais: env YOUTUBE_HANDLES (separados por virgula, sem @). Default: o canal atual.
const HANDLES = (process.env.YOUTUBE_HANDLES || "WISEHUB-f5y")
  .split(",")
  .map((h) => h.trim().replace(/^@/, ""))
  .filter(Boolean);

async function yt(path: string, params: Record<string, string>) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) throw new Error("YOUTUBE_API_KEY ausente no ambiente");
  const qs = new URLSearchParams({ ...params, key }).toString();
  const res = await fetch(`https://www.googleapis.com/youtube/v3/${path}?${qs}`);
  if (!res.ok) throw new Error(`YouTube API ${res.status}: ${await res.text()}`);
  return res.json();
}

export async function POST(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const day = new Date();
  day.setUTCHours(0, 0, 0, 0);

  const results: Array<Record<string, unknown>> = [];
  for (const handle of HANDLES) {
    try {
      const data = await yt("channels", { part: "snippet,statistics", forHandle: handle });
      const item = data.items?.[0];
      if (!item) {
        results.push({ handle, ok: false, error: "canal nao encontrado" });
        continue;
      }
      const st = item.statistics || {};
      const row = {
        channelId: item.id as string,
        channelName: (item.snippet?.title as string) ?? null,
        subscribers: parseInt(st.subscriberCount ?? "0", 10),
        views: parseInt(st.viewCount ?? "0", 10),
        videoCount: parseInt(st.videoCount ?? "0", 10),
      };
      await prisma.youTubeMetric.upsert({
        where: { channelId_date: { channelId: row.channelId, date: day } },
        update: row,
        create: { ...row, date: day },
      });
      results.push({ handle, ok: true, ...row });
    } catch (err) {
      results.push({ handle, ok: false, error: String(err) });
    }
  }

  return NextResponse.json({ ok: true, day: day.toISOString(), channels: results });
}
