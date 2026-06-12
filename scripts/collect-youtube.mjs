#!/usr/bin/env node
/**
 * collect-youtube.mjs — coletor diário do YouTube (olho de dados do Jarvis,
 * conectado à central Watch Tower).
 *
 * Lê os canais (env YOUTUBE_HANDLES, separados por vírgula, sem @; default
 * "WISEHUB-f5y") via YouTube Data API v3 com a YOUTUBE_API_KEY, e grava um
 * snapshot em public/youtube-status.json. SEM banco (mesmo padrão do
 * check-bulletins.mjs) — por isso não precisa de DATABASE_URL nem migração.
 *
 * Custo: $0 (Node nativo + cota pública da API ~9 unidades/canal).
 * Executado via GitHub Actions cron (.github/workflows/collect-youtube.yml).
 */

import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const STATUS_PATH = resolve(process.cwd(), "public/youtube-status.json");
const KEY = process.env.YOUTUBE_API_KEY;
const HANDLES = (process.env.YOUTUBE_HANDLES || "WISEHUB-f5y")
  .split(",")
  .map((h) => h.trim().replace(/^@/, ""))
  .filter(Boolean);

async function yt(path, params) {
  const qs = new URLSearchParams({ ...params, key: KEY }).toString();
  const res = await fetch(`https://www.googleapis.com/youtube/v3/${path}?${qs}`);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`YouTube API ${res.status}: ${body.slice(0, 200)}`);
  }
  return res.json();
}

async function collectOne(handle) {
  const data = await yt("channels", {
    part: "snippet,statistics,contentDetails",
    forHandle: handle,
  });
  const item = data.items?.[0];
  if (!item) return { handle, ok: false, error: "canal nao encontrado" };

  const sn = item.snippet || {};
  const st = item.statistics || {};
  const cd = item.contentDetails || {};
  const channel = {
    handle,
    ok: true,
    channelId: item.id,
    channelName: sn.title ?? null,
    country: sn.country ?? null,
    subscribers: parseInt(st.subscriberCount ?? "0", 10),
    views: parseInt(st.viewCount ?? "0", 10),
    videoCount: parseInt(st.videoCount ?? "0", 10),
    recentVideos: [],
  };

  const uploads = cd.relatedPlaylists?.uploads;
  if (uploads && channel.videoCount > 0) {
    try {
      const pl = await yt("playlistItems", {
        part: "contentDetails",
        playlistId: uploads,
        maxResults: "5",
      });
      const ids = (pl.items || []).map((it) => it.contentDetails?.videoId).filter(Boolean);
      if (ids.length) {
        const vi = await yt("videos", { part: "snippet,statistics", id: ids.join(",") });
        channel.recentVideos = (vi.items || []).map((v) => ({
          id: v.id,
          title: v.snippet?.title ?? "",
          publishedAt: v.snippet?.publishedAt ?? null,
          views: parseInt(v.statistics?.viewCount ?? "0", 10),
          likes: parseInt(v.statistics?.likeCount ?? "0", 10),
          comments: parseInt(v.statistics?.commentCount ?? "0", 10),
        }));
      }
    } catch {
      // canal sem vídeos listáveis ainda — segue só com as stats do canal
    }
  }

  return channel;
}

async function main() {
  if (!KEY) {
    console.error("[collect-youtube] YOUTUBE_API_KEY ausente no ambiente");
    process.exit(1);
  }

  const channels = [];
  for (const handle of HANDLES) {
    try {
      const c = await collectOne(handle);
      channels.push(c);
      console.log(
        c.ok
          ? `✓ ${handle} · ${c.channelName} · ${c.subscribers} inscritos · ${c.views} views · ${c.videoCount} vídeos`
          : `✗ ${handle} · ${c.error}`,
      );
    } catch (err) {
      channels.push({ handle, ok: false, error: String(err).slice(0, 200) });
      console.log(`✗ ${handle} · ${String(err).slice(0, 120)}`);
    }
  }

  const out = { lastRun: new Date().toISOString(), channels };
  await writeFile(STATUS_PATH, JSON.stringify(out, null, 2) + "\n", "utf-8");

  const okCount = channels.filter((c) => c.ok).length;
  console.log(`\n[collect-youtube] done · ${okCount}/${channels.length} canais OK`);
  if (okCount === 0) process.exit(1);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
