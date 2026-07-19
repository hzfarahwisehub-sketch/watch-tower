/**
 * Camada de PRONÚNCIA da voz (Watch Tower). Reescreve o texto ANTES de mandar pro TTS
 * (edge-tts / speechSynthesis) pra voz pt-BR ler certo siglas, nomes próprios, números,
 * símbolos e datas — em vez de "comer" palavra ou soletrar errado.
 *
 * Por que reescrever texto e não usar SSML <say-as>: o edge-tts DESCARTA/HTML-escapa
 * qualquer SSML custom (só aceita um <voice><prosody>), e <say-as interpret-as="characters">
 * é bugado em pt-BR até no Azure. Então a pronúncia vem 100% desta reescrita. Fonte do spec:
 * workflow multi-agente (inventário dos 41 países + pesquisa edge-tts + verificação adversarial),
 * 2026-07-19. O MESMO spec vale no app friday-cloud (pronounce.py) — manter os dois em sync.
 *
 * ORDEM É LEI: nomes próprios (específico→genérico) → siglas conhecidas → regras de número/
 * símbolo/data → fallback genérico de soletração. Trocar a ordem reintroduz os bugs que a
 * verificação matou (ex.: 'Wise' comendo o 'WiseHub', '€500k' virando '500 euros ka').
 */

const WORD = "\\p{L}\\p{N}"; // "caractere de palavra" Unicode (letra ou número)
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Casa `word` só como token isolado (limite de palavra Unicode-aware, cobre espaços/hífens
// internos e caracteres acentuados/cirílicos, coisa que o \b ASCII do JS não faz direito).
function bounded(word: string, flags: string): RegExp {
  return new RegExp(`(?<![${WORD}])${escapeRe(word)}(?![${WORD}])`, flags + "u");
}

// NOMES PRÓPRIOS — case-INsensitive. ORDEM: mais específico primeiro (WiseHub antes de Wise;
// Skilled Workers antes de Skilled Worker). Respelling fonético pt-BR (H mudo→R gutural, etc.).
const NAME_MAP: Array<[string, string]> = [
  ["Hammis", "Rãmiss"], // CANÔNICO (já validado): 'Bom dia, Hammis.' — H mudo em pt-BR vira R gutural.
  ["WiseHub", "Uaiz Rabi"],
  ["WiseRank", "Uaiz Ranki"],
  ["Wise", "Uaiz"], // só depois de WiseHub/WiseRank.
  ["Watch Tower", "Uotch Tauer"],
  ["Friday", "Fraidei"],
  ["Golden Visa", "Gouden Viza"],
  ["Blue Card", "Blu Card"],
  ["Express Entry", "Ekispres Entri"],
  ["Home Office", "Roum Ofiss"],
  ["Chancenkarte", "Chanssen-Karte"],
  ["Extranjería", "Estranreria"], // grafia real do dado (com í); J espanhol = R gutural.
  ["Extranjeria", "Estranreria"],
  ["Skilled Workers", "Skild Uorkers"], // antes do singular.
  ["Skilled Worker", "Skild Uorker"],
  ["Startup", "Startap"],
  ["Healthcare", "Relf-ker"],
  ["fintech", "fintek"],
  ["high-tech", "rai-tek"],
  ["hightech", "rai-tek"],
  ["Working Holiday Visa", "Uorkin Ralidei Viza"],
  ["Digital Nomad Visa", "Dijital Nomad Viza"],
  ["Digital Nomad Permit", "Dijital Nomad Permit"],
  ["Passeport Talent", "Paspor Tala"],
  ["Green Stream", "Grin Strim"],
  ["Green List", "Grin List"],
  ["ONE Pass", "Uan Pass"],
  ["Z Visa", "Zi Viza"],
];

// SIGLAS conhecidas — case-SENSITIVE (a fonte oficial usa caixa-alta). Soletração usa nome de
// letra em pt-BR; algumas viram respell de palavra (AIMA→Áima) ou nome-de-letra com acento
// (H='agá', Q='quê', D='dê') porque sem acento a voz lê como preposição/conjunção.
const ACRONYM_MAP: Array<[string, string]> = [
  ["IRCC", "I R C C"], ["USCIS", "U S C I S"], ["CRS", "C R S"], ["PNP", "P N P"],
  ["DHS", "D H S"], ["OPT", "O P T"], ["STEM", "S T E M"], ["EB-5", "é-bê cinco"],
  ["H1B", "agá um bê"], ["D7", "dê sete"], ["D8", "dê oito"], ["Q1", "quê um"],
  ["CLT", "C L T"], ["EFTA", "E F T A"], ["EEE", "E E E"], ["AIMA", "Áima"],
  ["DRE", "D R E"], ["AICEP", "A I C E P"], ["BAMF", "B A M F"], ["BMI", "B M I"],
  ["DGEF", "D G E F"], ["MAECI", "M A E C I"], ["UDSC", "U D S C"], ["DOFI", "D O F I"],
  ["MVR", "M V R"], ["CRMD", "C R M D"], ["MUP", "M U P"], ["MV SR", "M V S R"],
  ["Govt SI", "governo S I"], ["IGI", "I G I"], ["IND", "I N D"], ["OIF", "O I F"],
  ["PMLP", "P M L P"], ["MV ČR", "M V C R"], ["Migration Dept", "departamento de migração"],
  ["Min Migration", "ministério da migração"], ["DHA", "D H A"], ["INZ", "I N Z"],
  ["ICP", "I C P"], ["DET", "D E T"], ["FTZ", "F T Z"], ["GTI", "G T I"],
  ["UDI", "U D I"], ["HQS", "agá quê esse"], ["ВКС", "vê cá esse"], ["MID", "M I D"],
  ["RVP", "R V P"], ["ISK", "coroas islandesas"], ["MPRP", "M P R P"], ["DAFT", "D A F T"],
];

// NÚMEROS / SÍMBOLOS / DATAS / URL — aplicadas NESTA ordem (moeda+k antes de moeda simples;
// datas antes do separador de milhar; siglas de 2-3 letras homógrafas de palavra ficam aqui,
// case-SENSITIVE via ausência de flag 'i', pra proteger 'eu'/'ia'/'siri'/'Isa'...).
const REGEX_RULES: Array<[RegExp, string]> = [
  [/\+(\d+)/g, "mais $1"],
  [/(\d+)\s*pts\b/g, "$1 pontos"],
  [/(\d[\d.,]*)\s*%/g, "$1 por cento"],
  [/€\s*([\d.,]+)\s*k\b/g, "$1 mil euros"],
  [/\$\s*([\d.,]+)\s*k\b/g, "$1 mil dólares"],
  [/€\s*([\d.,]+)/g, "$1 euros"],
  [/\$\s*([\d.,]+)/g, "$1 dólares"],
  [/\b(\d{1,2})\/jan\b/gi, "$1 de janeiro"],
  [/\b(\d{1,2})\/fev\b/gi, "$1 de fevereiro"],
  [/\b(\d{1,2})\/mar\b/gi, "$1 de março"],
  [/\b(\d{1,2})\/abr\b/gi, "$1 de abril"],
  [/\b(\d{1,2})\/mai\b/gi, "$1 de maio"],
  [/\b(\d{1,2})\/jun\b/gi, "$1 de junho"],
  [/\b(\d{1,2})\/jul\b/gi, "$1 de julho"],
  [/\b(\d{1,2})\/ago\b/gi, "$1 de agosto"],
  [/\b(\d{1,2})\/set\b/gi, "$1 de setembro"],
  [/\b(\d{1,2})\/out\b/gi, "$1 de outubro"],
  [/\b(\d{1,2})\/nov\b/gi, "$1 de novembro"],
  [/\b(\d{1,2})\/dez\b/gi, "$1 de dezembro"],
  [/\b(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)\/(\d{4})\b/g, "$1 de $2"],
  [/\b(\d+)k\b/g, "$1 mil"],
  [/GOV\.UK/gi, "gov ponto U K"],
  [/gov\.br/gi, "gov ponto bê-erre"],
  [/(?<!\d\.)\b(\d{1,3})\.(\d{3})\b(?!\.\d)/g, "$1$2"],
  [/\bIA\b/g, "I A"],
  [/\bUE\b/g, "U E"],
  [/\bEU\b/g, "U E"],
  [/\bPF\b/g, "P F"],
  [/\bPR\b/g, "P R"],
  [/\bMAE\b/g, "M A E"],
  [/\bSIRI\b/g, "S I R I"],
  [/\bISA\b/g, "I S A"],
  [/\bMOM\b/g, "M O M"],
  [/\bNIA\b/g, "N I A"],
  [/\bDoJ\b/g, "D O J"],
];

// Fallback: sigla DESCONHECIDA de 3-8 maiúsculas coladas → soletrar. Roda POR ÚLTIMO. Protegido
// por denylist de palavras pt-BR em caixa-alta e por exclusão de numerais romanos.
const GENERIC_RE = /(?<![\p{L}\p{N}])[A-ZÀ-ÖØ-Ý]{3,8}(?![\p{L}\p{N}])/gu;
const ROMAN_RE = /^[IVXLCDM]+$/;
const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const DENYLIST = new Set(
  [
    "VISTO", "VISTOS", "PRAZO", "PRAZOS", "RENDA", "TAXA", "TAXAS", "CUSTO", "CUSTOS",
    "VALOR", "VALORES", "SALARIO", "ANOS", "PAIS", "PARA", "COMO", "NOTA", "NOTAS",
    "VAGAS", "EMPREGO", "TRABALHO", "MORADIA", "SAUDE", "FAMILIA", "IDIOMA", "NIVEL",
    "TOTAL", "MINIMO", "MAXIMO", "ATENCAO", "IMPORTANTE", "NECESSARIO", "OBRIGATORIO",
    "DOCUMENTOS", "REQUISITOS", "BENEFICIOS", "NAO", "SEM",
  ].map((w) => stripAccents(w)),
);

// Mês abreviado + ano SEM dia ("jul/2026", "fev/2025" — 18x nos dados). Roda DEPOIS das
// regras dd/mmm/aaaa (que já viram "15 de julho de 2026") pra não estourar o dia.
const MESES: Record<string, string> = {
  jan: "janeiro", fev: "fevereiro", mar: "março", abr: "abril", mai: "maio", jun: "junho",
  jul: "julho", ago: "agosto", set: "setembro", out: "outubro", nov: "novembro", dez: "dezembro",
};
const MES_ANO_RE = /\b(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\/(\d{4})\b/gi;

/** Reescreve `input` pra pronúncia pt-BR correta. Idempotente-ish e seguro pra texto vazio. */
export function normalizeForSpeech(input: string): string {
  if (!input) return input;
  let t = input;
  for (const [from, to] of NAME_MAP) t = t.replace(bounded(from, "gi"), () => to);
  for (const [from, to] of ACRONYM_MAP) t = t.replace(bounded(from, "g"), () => to);
  for (const [re, rep] of REGEX_RULES) t = t.replace(re, rep);
  t = t.replace(MES_ANO_RE, (_m, mes: string, ano: string) => `${MESES[mes.toLowerCase()]} de ${ano}`);
  t = t.replace(GENERIC_RE, (m) => {
    const key = stripAccents(m).toUpperCase();
    if (DENYLIST.has(key) || ROMAN_RE.test(m)) return m;
    return m.split("").join(" ");
  });
  return t;
}
