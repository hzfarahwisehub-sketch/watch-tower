/**
 * GET /api/export/full-report?format=md|docx|pdf
 *
 * Compila TUDO que o Watch Tower monitora num único documento, país por país,
 * detalhado nos mínimos detalhes. Qualquer usuário logado e na allowlist
 * (sócios e colaboradores) pode baixar, usar como referência e, no caso do
 * Word, editar livremente.
 *
 * Formatos:
 *  - md   (padrão) → Markdown (text/markdown)
 *  - docx          → Word editável (OOXML)
 *  - pdf           → PDF pra leitura/compartilhamento
 *
 * A coleta de dados (leitura do bulletins-status.json + busca de ~32 feeds RSS)
 * é cara, então fica em cache de 30min em memória do Node runtime e é
 * compartilhada pelos três formatos. Acesso: qualquer usuário logado e na
 * allowlist (login garantido por requireSession + middleware).
 */

import { NextResponse, type NextRequest } from "next/server";
import { gatherReportData, type ReportData } from "@/lib/report-data";
import { renderMarkdown } from "@/lib/report-markdown";
import { renderDocx } from "@/lib/report-docx";
import { renderPdf } from "@/lib/report-pdf";
import { requireSession } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CACHE_TTL_MS = 30 * 60 * 1000;
// Cache por idioma — as manchetes saem traduzidas pro idioma pedido.
const cache: Partial<Record<"pt" | "en", { generatedAt: number; data: ReportData }>> = {};

type Format = "md" | "docx" | "pdf";

const FORMAT_META: Record<Format, { contentType: string; ext: string }> = {
  md: { contentType: "text/markdown; charset=utf-8", ext: "md" },
  docx: {
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ext: "docx",
  },
  pdf: { contentType: "application/pdf", ext: "pdf" },
};

function dateStamp(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export async function GET(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const raw = (req.nextUrl.searchParams.get("format") ?? "md").toLowerCase();
  const format: Format = raw === "docx" || raw === "pdf" ? raw : "md";
  const meta = FORMAT_META[format];
  const lang: "pt" | "en" = req.nextUrl.searchParams.get("lang") === "en" ? "en" : "pt";

  // Coleta (compartilhada entre formatos) com cache de 30min, por idioma
  let cacheState: "HIT" | "MISS" = "HIT";
  let slot = cache[lang];
  if (!slot || Date.now() - slot.generatedAt >= CACHE_TTL_MS) {
    const data = await gatherReportData(lang);
    slot = { generatedAt: Date.now(), data };
    cache[lang] = slot;
    cacheState = "MISS";
  }
  const data = slot.data;

  // Renderiza o formato pedido
  let body: string | Uint8Array;
  if (format === "docx") body = await renderDocx(data);
  else if (format === "pdf") body = await renderPdf(data);
  else body = renderMarkdown(data);

  // Binário (docx/pdf): copia pra um Uint8Array com ArrayBuffer dedicado e
  // entrega via Blob — satisfaz o BodyInit do tipo Response sem casts.
  let responseBody: BodyInit;
  if (typeof body === "string") {
    responseBody = body;
  } else {
    const bytes = new Uint8Array(body.byteLength);
    bytes.set(body);
    responseBody = new Blob([bytes], { type: meta.contentType });
  }

  return new NextResponse(responseBody, {
    headers: {
      "Content-Type": meta.contentType,
      "X-Cache": cacheState,
      "X-Generated-At": new Date(slot.generatedAt).toISOString(),
      "Cache-Control": "private, max-age=300",
      "Content-Disposition": `attachment; filename="watch-tower-relatorio-${dateStamp()}.${meta.ext}"`,
    },
  });
}
