// Mapa key→nome PT-BR das jurisdições monitoradas. Versão server-safe (sem
// "use client") usada pelas notificações push de boletins. Espelha a lista
// canônica de OfficialBulletins.tsx — manter em sincronia se entrar país novo.
export const BULLETIN_COUNTRY_NAMES: Record<string, string> = {
  us: "Estados Unidos",
  ca: "Canadá",
  br: "Brasil",
  de: "Alemanha",
  at: "Áustria",
  be: "Bélgica",
  bg: "Bulgária",
  cy: "Chipre",
  hr: "Croácia",
  dk: "Dinamarca",
  sk: "Eslováquia",
  si: "Eslovênia",
  es: "Espanha",
  ee: "Estônia",
  fi: "Finlândia",
  fr: "França",
  gr: "Grécia",
  nl: "Holanda",
  hu: "Hungria",
  ie: "Irlanda",
  is: "Islândia",
  it: "Itália",
  lv: "Letônia",
  lt: "Lituânia",
  lu: "Luxemburgo",
  mt: "Malta",
  no: "Noruega",
  pl: "Polônia",
  pt: "Portugal",
  uk: "Reino Unido",
  cz: "Tchéquia",
  ro: "Romênia",
  ru: "Rússia",
  se: "Suécia",
  ch: "Suíça",
  ae: "Emirados Árabes",
  au: "Austrália",
  cn: "China",
  jp: "Japão",
  nz: "Nova Zelândia",
};

/** Constrói um rótulo legível ("Brasil, Portugal e Espanha") a partir das keys. */
export function bulletinLabel(keys: string[]): string {
  const names = keys.map((k) => BULLETIN_COUNTRY_NAMES[k.toLowerCase()] ?? k.toUpperCase());
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} e ${names[1]}`;
  return `${names.slice(0, -1).join(", ")} e ${names[names.length - 1]}`;
}
