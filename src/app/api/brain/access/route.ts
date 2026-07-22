/**
 * GET /api/brain/access?perfil=friday|wise
 *
 * Ponte curta entre a sessao ja autenticada do Watch Tower e o painel
 * Friday/Wise. O segredo compartilhado fica apenas nos dois servidores; o
 * navegador recebe um token assinado, de uso unico e com validade de 45s.
 */
import { createHmac, randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { isFounder } from "@/lib/mail/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const OWNER_EMAIL = "hzfarah.wisehub@gmail.com";
const DEFAULT_BRAIN_URL = "https://wise.wisehubnow.online";
const TOKEN_TTL_SECONDS = 45;

type BrainProfile = "friday" | "wise";
type BrainLayout = "clean" | "sentient" | "classic";
type BrainIntent = "connect" | "login" | "logout";

function requestedProfile(req: Request, email: string): BrainProfile {
  const requested = new URL(req.url).searchParams.get("perfil")?.toLowerCase();
  if (email.toLowerCase() !== OWNER_EMAIL) return "wise";
  return requested === "wise" ? "wise" : "friday";
}

function requestedLayout(req: Request, profile: BrainProfile): BrainLayout {
  const requested = new URL(req.url).searchParams.get("layout")?.toLowerCase();
  if (requested === "sentient") return "sentient";
  if (requested === "classic" && profile === "friday") return "classic";
  return "clean";
}

function requestedIntent(req: Request): BrainIntent {
  const requested = new URL(req.url).searchParams.get("intent")?.toLowerCase();
  if (requested === "logout") return "logout";
  if (requested === "login") return "login";
  return "connect";
}

function brainUrl(pathname: string): URL {
  const configured = process.env.WT_BRAIN_URL?.trim() || DEFAULT_BRAIN_URL;
  const origin = new URL(configured);
  return new URL(pathname, `${origin.origin}/`);
}

function signAccess(email: string, profile: BrainProfile, secret: string): string {
  const now = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(JSON.stringify({
    v: 1,
    iss: "watch-tower",
    aud: "friday-cloud",
    sub: email.toLowerCase(),
    profile,
    iat: now,
    exp: now + TOKEN_TTL_SECONDS,
    nonce: randomBytes(18).toString("base64url"),
  })).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

function redirectNoStore(target: URL): NextResponse {
  const response = NextResponse.redirect(target);
  response.headers.set("Cache-Control", "no-store, max-age=0");
  response.headers.set("Referrer-Policy", "no-referrer");
  return response;
}

function addSafeContext(target: URL, profile: BrainProfile, layout: BrainLayout, embedded: boolean) {
  target.searchParams.set("perfil", profile);
  target.searchParams.set("layout", layout);
  if (embedded) target.searchParams.set("embed", "1");
  target.searchParams.set("return_to", "watchtower");
}

export async function GET(req: Request) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;

  const email = gate.session.email.toLowerCase();
  if (!isFounder(email)) {
    return NextResponse.json({ error: "founders_only" }, { status: 403 });
  }

  const profile = requestedProfile(req, email);
  const layout = requestedLayout(req, profile);
  const embedded = new URL(req.url).searchParams.get("embed") === "1";
  const intent = requestedIntent(req);
  const secret = process.env.WT_BRAIN_SSO_SECRET?.trim();

  // Desconectar um app nunca encerra a sessão da Watch Tower e nunca toca no
  // cookie do outro perfil. O Friday Cloud devolve o login dentro do iframe.
  if (intent === "logout") {
    const target = brainUrl("/logout");
    addSafeContext(target, profile, layout, embedded);
    return redirectNoStore(target);
  }

  // Fallback seguro durante rollout: abre o login certo, sem tentar reutilizar
  // outro segredo nem expor uma configuracao parcial como se fosse SSO valido.
  if (!secret || intent === "login") {
    const target = brainUrl("/login");
    addSafeContext(target, profile, layout, embedded);
    return redirectNoStore(target);
  }

  const target = brainUrl("/sso");
  target.searchParams.set("token", signAccess(email, profile, secret));
  addSafeContext(target, profile, layout, embedded);
  return redirectNoStore(target);
}
