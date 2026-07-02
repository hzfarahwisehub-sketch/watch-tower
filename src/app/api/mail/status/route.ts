/**
 * GET /api/mail/status — contadores reais do Inbox (Fase 3).
 *
 * Fundadores veem: caixas CORPORATIVAS + a PESSOAL deles + suas self-service.
 * Não-fundadores (Igor & cia): lista VAZIA — nenhuma caixa, nada pra clicar.
 *
 * Senhas @wisehubnow.com são resolvidas por candidatas (Tradeiros*#2026 /
 * Wisehub2026$) e cacheadas. Cache de status 5min por conta; ?refresh=1 força.
 */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/api-helpers";
import { staticDescriptorsFor, type AccountDescriptor } from "@/lib/mail/accounts";
import { webmailUrlFor } from "@/lib/mail/config";
import { decryptSecret, mailCryptoReady } from "@/lib/mail/crypto";
import {
  checkAccountCached,
  resolveWorkingPassword,
  bustPasswordCache,
  type RawAccountStatus,
} from "@/lib/mail/imap";
import { rateAllow } from "@/lib/mail/ratelimit";
import type { MailAccountStatus, MailStatusResponse } from "@/lib/mail/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  if (!rateAllow(`mail-status:${session.userId}`, 30, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const force = new URL(req.url).searchParams.get("refresh") === "1";

  // corporativas + pessoal do fundador (vazio pra não-fundador)
  const descriptors: AccountDescriptor[] = staticDescriptorsFor(session.email);

  // self-service do próprio usuário (se o banco cair, o resto sobrevive)
  let personalDbDown = false;
  try {
    const rows = await prisma.mailAccount.findMany({
      where: { ownerEmail: session.email },
      orderBy: { createdAt: "asc" },
    });
    for (const row of rows) {
      let candidates: string[] = [];
      if (mailCryptoReady()) {
        try {
          candidates = [decryptSecret(row.encPassword)];
        } catch {
          candidates = [];
        }
      }
      descriptors.push({
        id: `p_${row.id}`,
        address: row.address,
        icon: (row.address[0] || "@").toUpperCase(),
        kind: "self",
        base: { address: row.address, host: row.host, port: row.port, guardHost: true },
        candidates,
        webmailUrl: webmailUrlFor(row.address),
      });
    }
  } catch {
    personalDbDown = true;
  }

  const checkedAt = new Date().toISOString();
  const accounts: MailAccountStatus[] = await Promise.all(
    descriptors.map(async (d): Promise<MailAccountStatus> => {
      const uiKind = d.kind === "corporate" ? "shared" : "personal";
      const empty = {
        unseen: 0,
        total: 0,
        lastSubject: null,
        lastFrom: null,
        lastDate: null,
      };
      // sem candidata nenhuma → "off" (falta senha no servidor, ex.: app password
      // do Gmail ainda não fornecida)
      if (d.candidates.length === 0) {
        return { id: d.id, address: d.address, kind: uiKind, icon: d.icon, state: "off", ...empty, webmailUrl: d.webmailUrl, checkedAt };
      }
      const pw = await resolveWorkingPassword(d.base, d.candidates, force).catch(() => null);
      if (!pw) {
        // candidatas existem mas nenhuma autentica → aguardando credencial
        return { id: d.id, address: d.address, kind: uiKind, icon: d.icon, state: "pending", ...empty, webmailUrl: d.webmailUrl, checkedAt };
      }
      const raw: RawAccountStatus = await checkAccountCached({ ...d.base, password: pw }, force);
      // senha resolvida mas o status deu auth-fail → mudou; esquece pra
      // re-resolver na próxima e auto-curar.
      if (raw.state === "pending") bustPasswordCache(d.address);
      return {
        id: d.id,
        address: d.address,
        kind: uiKind,
        icon: d.icon,
        state: raw.state,
        unseen: raw.unseen,
        total: raw.total,
        lastSubject: raw.lastSubject,
        lastFrom: raw.lastFrom,
        lastDate: raw.lastDate,
        webmailUrl: d.webmailUrl,
        checkedAt,
      };
    }),
  );

  const body: MailStatusResponse = { accounts, checkedAt };
  if (personalDbDown) body.personalDbDown = true;
  return NextResponse.json(body);
}
