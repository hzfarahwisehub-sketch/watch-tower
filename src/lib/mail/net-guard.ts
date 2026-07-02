// Anti-SSRF pras contas PESSOAIS (host controlado pelo usuário). O endpoint já
// é protegido por login+allowlist (só a equipe entra), mas honramos a promessa
// de bloquear faixas privadas: resolvemos o hostname e recusamos se QUALQUER IP
// resolvido cair em loopback/privado/link-local/CGNAT/reservado. Só bloqueia
// quando confirma IP privado; falha de DNS deixa o connect IMAP lidar (não é
// nosso papel derrubar por resolução instável).
import dns from "dns/promises";
import net from "net";

function isPrivateV4(ip: string): boolean {
  const p = ip.split(".").map(Number);
  if (p.length !== 4 || p.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return true;
  const [a, b] = p;
  if (a === 10) return true; // 10.0.0.0/8
  if (a === 127) return true; // loopback
  if (a === 0) return true; // 0.0.0.0/8
  if (a === 169 && b === 254) return true; // link-local
  if (a === 172 && b >= 16 && b <= 31) return true; // 172.16.0.0/12
  if (a === 192 && b === 168) return true; // 192.168.0.0/16
  if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT 100.64.0.0/10
  if (a === 192 && b === 0) return true; // 192.0.0.0/24 (IETF) e 192.0.2.0/24 (TEST-NET-1)
  if (a >= 224) return true; // multicast + reservado (224+)
  return false;
}

function isPrivateV6(ip: string): boolean {
  const norm = ip.toLowerCase().split("%")[0];
  if (norm === "::1" || norm === "::") return true; // loopback / unspecified
  if (norm.startsWith("fe80")) return true; // link-local
  if (norm.startsWith("fc") || norm.startsWith("fd")) return true; // ULA fc00::/7
  // IPv4 mapeado (::ffff:a.b.c.d)
  const m = norm.match(/::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  if (m) return isPrivateV4(m[1]);
  return false;
}

function isPrivateIp(ip: string): boolean {
  const type = net.isIP(ip);
  if (type === 4) return isPrivateV4(ip);
  if (type === 6) return isPrivateV6(ip);
  return true; // não parece IP → trata como suspeito
}

/**
 * Lança se o host resolver pra algum IP privado/loopback/reservado. Retorna
 * normalmente quando todos os IPs são públicos OU quando o DNS não resolve
 * (deixa o connect falhar por conta própria).
 */
export async function assertPublicHost(host: string): Promise<void> {
  // literal já barrado antes por HOST_RE; por garantia, valida direto
  if (net.isIP(host)) {
    if (isPrivateIp(host)) throw new Error("host_private");
    return;
  }
  let addrs: string[] = [];
  try {
    const results = await dns.lookup(host, { all: true });
    addrs = results.map((r) => r.address);
  } catch {
    return; // DNS instável → não é nosso papel bloquear
  }
  if (addrs.length === 0) return;
  if (addrs.some(isPrivateIp)) throw new Error("host_private");
}
