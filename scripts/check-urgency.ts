/**
 * check-urgency — blindagem da triagem de urgência das peças editoriais.
 *
 * O PROBLEMA QUE ESTE SCRIPT EXISTE PRA IMPEDIR (2026-07-20): o sistema de
 * urgência (selo 🔴 URGENTE + bloco PRIORIDADE do REPAVET) foi publicado no
 * commit b4a6d79, mas quem escreve conteúdo novo todo dia é a rotina
 * `watch-tower-editorial-diario`. Se essa rotina criar peça SEM o campo
 * `urgency`, a peça entra sem classificação, nunca aparece no bloco PRIORIDADE
 * e o sistema morre por inanição EM SILÊNCIO: nada quebra, nada alerta, o
 * relatório sai bonito e vazio de prioridade. Hoje só funciona porque o acervo
 * foi triado à mão.
 *
 * O que ele faz: varre o editorial MESCLADO (`getEditorial`, que é exatamente o
 * que o REPAVET renderiza: RONDA_PIECES por cima de EDITORIAL) e exige que toda
 * peça do DIA da rodada carregue `urgency: "urgent" | "normal"`. Peça antiga
 * (publishedAt de outro dia) e peça legada (sem publishedAt) não entram na
 * conta: a dívida do acervo não é problema da rodada de hoje.
 *
 * Exit code 1 = a rodada NÃO pode publicar. É esse código que o PASSO 4 da
 * rotina usa como gate.
 *
 * Uso:
 *   node --import tsx scripts/check-urgency.ts                          # dia = hoje (BRT)
 *   node --import tsx scripts/check-urgency.ts 2026-07-20               # dia explícito
 *   node --import tsx scripts/check-urgency.ts 2026-07-20 --esperado=12 # + confere a CONTAGEM
 *
 * `--esperado=N` fecha o buraco do "zero silencioso": sem ele, uma peça salva
 * com publishedAt errado (ou não salva) faz o gate ver zero peça nova e passar
 * feliz, exatamente o falso OK que esta blindagem existe pra impedir. Com ele, a
 * rotina DECLARA quantas peças escreveu e o gate confere. Divergiu, falha.
 */
import { EDITORIAL, getEditorial } from "../src/lib/editorial";
import type { CountryEditorial, PieceUrgency } from "../src/lib/editorial";
import { RONDA_PIECES } from "../src/lib/editorial-ronda";

/** Dia da rodada em ISO (YYYY-MM-DD), fuso de Brasília (o do documento). */
function hojeISO(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" });
}

/**
 * Data REAL, não só "quatro dígitos, dois, dois". `2026-13-99` casa com o regex
 * de formato e passaria batido, deixando o gate procurar peça num dia que não
 * existe e devolver OK com zero peça: um falso verde por causa de um typo.
 */
function diaValido(s: string): boolean {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return false;
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const dt = new Date(Date.UTC(y, mo - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === mo - 1 && dt.getUTCDate() === d;
}

const args = process.argv.slice(2);
const argDia = args.find((a) => !a.startsWith("--"));
const argEsperado = args.find((a) => a.startsWith("--esperado="));

if (argDia && !diaValido(argDia)) {
  console.error(`check-urgency: dia inválido "${argDia}". Esperado uma data real no formato YYYY-MM-DD.`);
  process.exit(2);
}

let ESPERADO: number | null = null;
if (argEsperado) {
  const v = argEsperado.slice("--esperado=".length);
  if (!/^\d+$/.test(v)) {
    console.error(`check-urgency: --esperado inválido "${v}". Esperado um inteiro >= 0.`);
    process.exit(2);
  }
  ESPERADO = Number(v);
}

const DIA = argDia ?? hojeISO();

const VALIDOS: ReadonlyArray<string> = ["urgent", "normal"] satisfies PieceUrgency[];

type Achatada = { code: string; destino: string; titulo: string; urgency?: string };

/** Peças de um país COM publishedAt no dia da rodada (as que a rodada criou). */
function doDia(code: string, ed: CountryEditorial): Achatada[] {
  const out: Achatada[] = [];
  const push = (destino: string, titulo: string, publishedAt?: string, urgency?: string) => {
    if ((publishedAt ?? "").slice(0, 10) === DIA) out.push({ code, destino, titulo, urgency });
  };
  for (const p of ed.community ?? []) push("community", p.title, p.publishedAt, p.urgency);
  for (const a of ed.countryTab ?? []) push("countryTab", a.headline, a.publishedAt, a.urgency);
  for (const p of ed.blog ?? []) push("blog", p.headline, p.publishedAt, p.urgency);
  for (const p of ed.youtube ?? []) push("youtube", p.title, p.publishedAt, p.urgency);
  for (const p of ed.instagram ?? []) push("instagram", p.title, p.publishedAt, p.urgency);
  return out;
}

// Une os códigos dos dois arquivos: país que só existe na Ronda também conta.
const codigos = Array.from(new Set([...Object.keys(EDITORIAL), ...Object.keys(RONDA_PIECES)])).sort();

const novas: Achatada[] = [];
for (const code of codigos) {
  const ed = getEditorial(code, "pt-BR");
  if (ed) novas.push(...doDia(code, ed));
}

const semCampo = novas.filter((p) => p.urgency === undefined || p.urgency === null || p.urgency === "");
const invalidas = novas.filter((p) => p.urgency != null && p.urgency !== "" && !VALIDOS.includes(p.urgency));
const urgentes = novas.filter((p) => p.urgency === "urgent").length;
const normais = novas.filter((p) => p.urgency === "normal").length;

console.log(`check-urgency · dia ${DIA}`);
console.log(`  peças novas (publishedAt = ${DIA}): ${novas.length}`);
console.log(`  com urgency: ${novas.length - semCampo.length}  (urgent: ${urgentes} · normal: ${normais})`);
console.log(`  SEM urgency: ${semCampo.length}`);
if (invalidas.length) console.log(`  urgency INVÁLIDO: ${invalidas.length}`);
if (ESPERADO !== null) console.log(`  esperado pela rodada: ${ESPERADO}`);

// Contagem declarada x contagem encontrada. Roda ANTES da checagem de triagem
// porque uma divergência aqui significa que o gate está olhando pro conjunto
// errado de peças, e aí o veredito de triagem não vale nada.
if (ESPERADO !== null && novas.length !== ESPERADO) {
  console.error("");
  console.error(`FALHOU · a rodada declarou ${ESPERADO} peça(s) nova(s), o gate achou ${novas.length} com publishedAt = ${DIA}.`);
  console.error("Causa provável: peça salva com publishedAt errado, peça não salva, ou edição perdida.");
  console.error("A rodada NÃO pode publicar até a contagem bater.");
  process.exit(1);
}

if (semCampo.length === 0 && invalidas.length === 0) {
  if (novas.length === 0) {
    // Zero peça nova é resultado LEGÍTIMO (dia sem notícia relevante), mas não
    // pode passar calado: quem lê o log precisa saber que o gate rodou e viu
    // zero, e não que o gate deixou de rodar. Ausência de erro não é prova de
    // sucesso, então o número zero é dito em voz alta.
    console.log("OK · nenhuma peça nova hoje (dia sem notícia). Gate rodou e não achou peça pra triar.");
  } else {
    console.log("OK · toda peça nova está triada.");
  }
  process.exit(0);
}

console.error("");
console.error("FALHOU · peça nova sem triagem de urgência. A rodada NÃO pode publicar.");
for (const p of semCampo) console.error(`  [sem urgency] ${p.code} · ${p.destino} · ${p.titulo.slice(0, 90)}`);
for (const p of invalidas) console.error(`  [urgency inválido: ${String(p.urgency)}] ${p.code} · ${p.destino} · ${p.titulo.slice(0, 90)}`);
console.error("");
console.error('Conserte adicionando `urgency: "urgent"` ou `urgency: "normal"` em cada peça acima');
console.error("(critério canônico no PASSO 3 do SKILL.md da rotina e no docstring de RecencyMeta em src/lib/editorial.ts).");
process.exit(1);
