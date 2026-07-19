/**
 * Cliente MÍNIMO do edge-tts (Microsoft Edge "Read Aloud"), GRÁTIS — apesar do
 * sufixo "Neural" NÃO é a Azure paga. Fala as 3 vozes pt-BR que a Friday já usa no
 * painel de voz local. Só depende de `ws` + crypto nativo.
 *
 * Por que reimplementar em vez de usar o pacote `msedge-tts`: a v1 é bloqueada pela
 * Microsoft (protocolo antigo, sem o token Sec-MS-GEC) e TODA v2.x tem um
 * `preinstall: npx only-allow pnpm` que quebraria o `npm install` da Vercel. Aqui
 * espelhamos exatamente o handshake da v2 (token Sec-MS-GEC no esquema do Edge 143),
 * sem trazer o pacote. Provado sintetizando as 3 vozes antes de commitar.
 */
import WebSocket, { type RawData } from "ws";
import { createHash, randomUUID } from "crypto";

const TRUSTED = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const SEC_VER = "1-143.0.3650.96";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0";
const ORIGIN = "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold";
const WSS = "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1";

// FONTE DE VERDADE das vozes liberadas. Owner (Friday) e sócios (Wise) usam as mesmas
// 3 — as de personagem/premium ficam de fora (uso pessoal/copyright + API paga travada).
// O seletor do painel (FridayEyeReactive) espelha esta lista.
export const EDGE_VOICES = [
  { id: "pt-BR-FranciscaNeural", label: "Francisca", tag: "Friday · feminina" },
  { id: "pt-BR-ThalitaMultilingualNeural", label: "Thalita", tag: "Feminina · multilíngue" },
  { id: "pt-BR-AntonioNeural", label: "Antônio", tag: "Wise · masculina" },
] as const;

export type EdgeVoiceId = (typeof EDGE_VOICES)[number]["id"];
export const isEdgeVoice = (v: string): v is EdgeVoiceId => EDGE_VOICES.some((x) => x.id === v);

// Token anti-abuso do Edge: SHA-256 do (filetime arredondado a 5 min) + trusted token.
// windowsTicks é Number puro DE PROPÓSITO (perde precisão >2^53): é exatamente o que o
// msedge-tts v2 faz e o servidor da Microsoft valida com esse mesmo valor.
function secMsGec(): string {
  const ticks = Math.floor(Date.now() / 1000) + 11644473600;
  const rounded = ticks - (ticks % 300);
  const windowsTicks = rounded * 10000000;
  return createHash("sha256").update(`${windowsTicks}${TRUSTED}`).digest("hex").toUpperCase();
}
const noDash = () => randomUUID().replace(/-/g, "");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function toBuf(data: RawData): Buffer {
  if (Array.isArray(data)) return Buffer.concat(data);
  if (Buffer.isBuffer(data)) return data;
  return Buffer.from(data as ArrayBuffer);
}

/** Sintetiza `text` na `voice` e devolve o MP3 (24kHz mono). */
export function synthesize(
  voice: string,
  text: string,
  opts: { rate?: string; pitch?: string; volume?: string } = {},
): Promise<Buffer> {
  const { rate = "+0%", pitch = "+0Hz", volume = "+0%" } = opts;
  return new Promise((resolve, reject) => {
    const url = `${WSS}?TrustedClientToken=${TRUSTED}&Sec-MS-GEC=${secMsGec()}&Sec-MS-GEC-Version=${SEC_VER}&ConnectionId=${noDash()}`;
    const ws = new WebSocket(url, { headers: { "User-Agent": UA, Origin: ORIGIN } });
    const chunks: Buffer[] = [];
    let settled = false;
    const timer = setTimeout(() => finish(() => reject(new Error("edge-tts timeout"))), 15000);
    function finish(fn: () => void) {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try { ws.close(); } catch { /* noop */ }
      fn();
    }
    ws.on("open", () => {
      const ts = new Date().toString();
      ws.send(
        `X-Timestamp:${ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n` +
          `{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`,
      );
      // xml:lang tem que CASAR a locale da voz (pt-BR), não o en-US que o msedge-tts fixa:
      // nas vozes dedicadas é cosmético, mas na Thalita (multilíngue) o en-US puxa entonação
      // inglesa e faz ler sigla com nome de letra em inglês. Derivado do id (pt-BR-…).
      const lang = /^([a-z]{2}-[A-Z]{2})/.exec(voice)?.[1] ?? "pt-BR";
      const ssml =
        `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='${lang}'>` +
        `<voice name='${voice}'><prosody pitch='${pitch}' rate='${rate}' volume='${volume}'>${esc(text)}</prosody></voice></speak>`;
      ws.send(`X-RequestId:${noDash()}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${ts}Z\r\nPath:ssml\r\n\r\n${ssml}`);
    });
    ws.on("message", (data: RawData, isBinary: boolean) => {
      const b = toBuf(data);
      if (isBinary) {
        // frame binário: [2 bytes header-len][header ascii][áudio]
        const headerLen = b.readUInt16BE(0);
        if (b.subarray(2, 2 + headerLen).toString("ascii").includes("Path:audio")) {
          chunks.push(b.subarray(2 + headerLen));
        }
      } else if (b.toString().includes("Path:turn.end")) {
        const out = Buffer.concat(chunks);
        finish(() => (out.length ? resolve(out) : reject(new Error("edge-tts vazio"))));
      }
    });
    ws.on("error", (e) => finish(() => reject(e instanceof Error ? e : new Error(String(e)))));
  });
}
