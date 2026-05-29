/**
 * GET /api/export/full-report?format=md|docx|pdf
 *
 * Compila TUDO que o Watch Tower monitora num único documento, país por país,
 * detalhado nos mínimos detalhes. Pra que admins (sócios) baixem, usem como
 * material de referência e — no caso do Word — editem livremente.
 *
 * Formatos:
 *  - md   (padrão) → Markdown (text/markdown)
 *  - docx          → Word editável (OOXML)
 *  - pdf           → PDF pra leitura/compartilhamento
 *
 * A coleta de dados (leitura do bulletins-status.json + busca de ~32 feeds RSS)
 * é cara, então fica em cache de 30min em memória do Node runtime e é
 * compartilhada pelos três formatos. Acesso: admin-only (middleware já garante).
 */

import { NextResponse, type NextRequest } from "next/server";
import { gatherReportData, type ReportData } from "@/lib/report-data";
import { renderMarkdown } from "@/lib/report-markdown";
import { renderDocx } from "@/lib/report-docx";
import { renderPdf } from "@/lib/report-pdf";
import { requireSession, requireAdmin } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CACHE_TTL_MS = 30 * 60 * 1000;
let cache: { generatedAt: number; data: ReportData } | null = null;

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
  const adminErr = requireAdmin(result.session);
  if (adminErr) return adminErr;

  const raw = (req.nextUrl.searchParams.get("format") ?? "md").toLowerCase();
  const format: Format = raw === "docx" || raw === "pdf" ? raw : "md";
  const meta = FORMAT_META[format];

  // Coleta (compartilhada entre formatos) com cache de 30min
  let cacheState: "HIT" | "MISS" = "HIT";
  if (!cache || Date.now() - cache.generatedAt >= CACHE_TTL_MS) {
    const data = await gatherReportData();
    cache = { generatedAt: Date.now(), data };
    cacheState = "MISS";
  }
  const data = cache.data;

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
      "X-Generated-At": new Date(cache.generatedAt).toISOString(),
      "Cache-Control": "private, max-age=300",
      "Content-Disposition": `attachment; filename="watch-tower-relatorio-${dateStamp()}.${meta.ext}"`,
    },
  });
}
