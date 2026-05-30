// Boletins oficiais — dados + tipos. Módulo SERVER-SAFE (sem "use client").
// Extraído de components/OfficialBulletins.tsx pra que código server-only
// (lib/report-data.ts → /api/export/full-report) importe o array BULLETINS
// sem recebê-lo como client-reference proxy — o que quebrava com
// 'BULLETINS.find is not a function' → 500 no export.

export type FreqColor = "live" | "monthly" | "quarterly" | "ondemand";

export type Bulletin = {
  key: string;
  country: string;
  flag: string;
  source: string;
  frequency: string;
  url: string;
  freqColor: FreqColor;
};

export type BulletinStatus = {
  key: string;
  url: string;
  hash: string | null;
  lastChangedAt: string | null;
  lastCheckedAt: string | null;
  lastStatus: string | null;
};

export type StatusFile = {
  lastRun: string | null;
  bulletins: BulletinStatus[];
};

export const BULLETINS: Bulletin[] = [
  // ===== AMÉRICA =====
  {
    key: "us",
    country: "Estados Unidos",
    flag: "🇺🇸",
    source: "Visa Bulletin · US Dept of State",
    frequency: "Mensal",
    url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
    freqColor: "monthly",
  },
  {
    key: "ca",
    country: "Canadá",
    flag: "🇨🇦",
    source: "IRCC · Express Entry Draws",
    frequency: "Quinzenal",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html",
    freqColor: "live",
  },
  {
    key: "br",
    country: "Brasil",
    flag: "🇧🇷",
    source: "Polícia Federal · Portal de Imigração",
    frequency: "Sob demanda",
    url: "https://www.gov.br/pf/pt-br/assuntos/imigracao/inicio",
    freqColor: "ondemand",
  },

  // ===== EUROPA (29) =====
  {
    key: "de",
    country: "Alemanha",
    flag: "🇩🇪",
    source: "BAMF · Bundesamt für Migration und Flüchtlinge",
    frequency: "Mensal",
    url: "https://www.bamf.de/EN/Themen/Statistik/Asylzahlen/asylzahlen-node.html",
    freqColor: "monthly",
  },
  {
    key: "at",
    country: "Áustria",
    flag: "🇦🇹",
    source: "BMI · Migration & Citizenship (migration.gv.at)",
    frequency: "Sob demanda",
    url: "https://www.migration.gv.at/en/",
    freqColor: "ondemand",
  },
  {
    key: "be",
    country: "Bélgica",
    flag: "🇧🇪",
    source: "Office des Étrangers · IBZ",
    frequency: "Sob demanda",
    url: "https://dofi.ibz.be/en",
    freqColor: "ondemand",
  },
  {
    key: "bg",
    country: "Bulgária",
    flag: "🇧🇬",
    source: "Agência Estatal para Refugiados",
    frequency: "Sob demanda",
    url: "https://aref.government.bg/?explnum=21",
    freqColor: "ondemand",
  },
  {
    key: "cy",
    country: "Chipre",
    flag: "🇨🇾",
    source: "Ministério do Interior · Civil Registry & Migration",
    frequency: "Sob demanda",
    url: "https://www.moi.gov.cy/",
    freqColor: "ondemand",
  },
  {
    key: "hr",
    country: "Croácia",
    flag: "🇭🇷",
    source: "MUP · Ministério Interior Croácia",
    frequency: "Sob demanda",
    url: "https://mup.gov.hr/",
    freqColor: "ondemand",
  },
  {
    key: "dk",
    country: "Dinamarca",
    flag: "🇩🇰",
    source: "New to Denmark · SIRI/Immigration",
    frequency: "Sob demanda",
    url: "https://www.nyidanmark.dk/en-GB",
    freqColor: "ondemand",
  },
  {
    key: "sk",
    country: "Eslováquia",
    flag: "🇸🇰",
    source: "Ministerstvo Vnútra SR",
    frequency: "Sob demanda",
    url: "https://www.minv.sk/",
    freqColor: "ondemand",
  },
  {
    key: "si",
    country: "Eslovênia",
    flag: "🇸🇮",
    source: "Portal Oficial Governo Esloveno",
    frequency: "Sob demanda",
    url: "https://www.gov.si/en/",
    freqColor: "ondemand",
  },
  {
    key: "es",
    country: "Espanha",
    flag: "🇪🇸",
    source: "Ministerio de Inclusión · Migraciones",
    frequency: "Sob demanda",
    url: "https://www.inclusion.gob.es/web/migraciones",
    freqColor: "ondemand",
  },
  {
    key: "ee",
    country: "Estônia",
    flag: "🇪🇪",
    source: "Polícia e Guarda de Fronteira Estoniana",
    frequency: "Sob demanda",
    url: "https://www.politsei.ee/en",
    freqColor: "ondemand",
  },
  {
    key: "fi",
    country: "Finlândia",
    flag: "🇫🇮",
    source: "Migri · Finnish Immigration Service",
    frequency: "Sob demanda",
    url: "https://migri.fi/en/home",
    freqColor: "ondemand",
  },
  {
    key: "fr",
    country: "França",
    flag: "🇫🇷",
    source: "DGEF · L'actu immigration (Ministère de l'Intérieur)",
    frequency: "Mensal",
    url: "https://www.immigration.interieur.gouv.fr/actualites",
    freqColor: "monthly",
  },
  {
    key: "gr",
    country: "Grécia",
    flag: "🇬🇷",
    source: "Ministry of Migration and Asylum",
    frequency: "Sob demanda",
    url: "https://migration.gov.gr/en/",
    freqColor: "ondemand",
  },
  {
    key: "nl",
    country: "Holanda",
    flag: "🇳🇱",
    source: "IND · Immigration and Naturalisation Service",
    frequency: "Sob demanda",
    url: "https://ind.nl/en",
    freqColor: "ondemand",
  },
  {
    key: "hu",
    country: "Hungria",
    flag: "🇭🇺",
    source: "OIF · National Directorate-General Aliens Policing",
    frequency: "Sob demanda",
    url: "https://oif.gov.hu/",
    freqColor: "ondemand",
  },
  {
    key: "ie",
    country: "Irlanda",
    flag: "🇮🇪",
    source: "Irish Immigration · Department of Justice",
    frequency: "Sob demanda",
    url: "https://www.irishimmigration.ie/",
    freqColor: "ondemand",
  },
  {
    key: "is",
    country: "Islândia",
    flag: "🇮🇸",
    source: "Útlendingastofnun · Directorate of Immigration",
    frequency: "Sob demanda",
    url: "https://utl.is/index.php/en/",
    freqColor: "ondemand",
  },
  {
    key: "it",
    country: "Itália",
    flag: "🇮🇹",
    source: "Polizia di Stato · Permesso di Soggiorno",
    frequency: "Sob demanda",
    url: "https://questure.poliziadistato.it/stranieri/",
    freqColor: "ondemand",
  },
  {
    key: "lv",
    country: "Letônia",
    flag: "🇱🇻",
    source: "PMLP · Office of Citizenship and Migration",
    frequency: "Sob demanda",
    url: "https://www.pmlp.gov.lv/en",
    freqColor: "ondemand",
  },
  {
    key: "lt",
    country: "Lituânia",
    flag: "🇱🇹",
    source: "Migration Department Lithuania",
    frequency: "Sob demanda",
    url: "https://migracija.lt/en/",
    freqColor: "ondemand",
  },
  {
    key: "lu",
    country: "Luxemburgo",
    flag: "🇱🇺",
    source: "Guichet.lu · Portal Cidadão Imigração",
    frequency: "Sob demanda",
    url: "https://guichet.public.lu/en/citoyens/immigration.html",
    freqColor: "ondemand",
  },
  {
    key: "mt",
    country: "Malta",
    flag: "🇲🇹",
    source: "Identità Malta · Identity Agency",
    frequency: "Sob demanda",
    url: "https://www.identita.gov.mt/",
    freqColor: "ondemand",
  },
  {
    key: "no",
    country: "Noruega",
    flag: "🇳🇴",
    source: "UDI · Norwegian Directorate of Immigration",
    frequency: "Sob demanda",
    url: "https://www.udi.no/en/",
    freqColor: "ondemand",
  },
  {
    key: "pl",
    country: "Polônia",
    flag: "🇵🇱",
    source: "UDSC · Office for Foreigners",
    frequency: "Sob demanda",
    url: "https://www.gov.pl/web/udsc-en",
    freqColor: "ondemand",
  },
  {
    key: "pt",
    country: "Portugal",
    flag: "🇵🇹",
    source: "AIMA · Agência para Integração, Migrações e Asilo",
    frequency: "Sob demanda",
    url: "https://aima.gov.pt/pt",
    freqColor: "ondemand",
  },
  {
    key: "uk",
    country: "Reino Unido",
    flag: "🇬🇧",
    source: "Home Office · Migration Statistics",
    frequency: "Mensal + Trimestral",
    url: "https://www.gov.uk/government/collections/migration-statistics",
    freqColor: "monthly",
  },
  {
    key: "cz",
    country: "Tchéquia",
    flag: "🇨🇿",
    source: "Ministerstvo Vnitra ČR",
    frequency: "Sob demanda",
    url: "https://www.mvcr.cz/mvcren/",
    freqColor: "ondemand",
  },
  {
    key: "ro",
    country: "Romênia",
    flag: "🇷🇴",
    source: "IGI · Inspectoratul General pentru Imigrări",
    frequency: "Sob demanda",
    url: "https://igi.mai.gov.ro/en",
    freqColor: "ondemand",
  },
  {
    key: "ru",
    country: "Rússia",
    flag: "🇷🇺",
    source: "KDMID · Departamento Consular MID (visa & migração)",
    frequency: "Sob demanda",
    url: "https://www.kdmid.ru/",
    freqColor: "ondemand",
  },
  {
    key: "se",
    country: "Suécia",
    flag: "🇸🇪",
    source: "Migrationsverket · Swedish Migration Agency",
    frequency: "Sob demanda",
    url: "https://www.migrationsverket.se/English.html",
    freqColor: "ondemand",
  },
  {
    key: "ch",
    country: "Suíça",
    flag: "🇨🇭",
    source: "SEM · State Secretariat for Migration",
    frequency: "Sob demanda",
    url: "https://www.sem.admin.ch/sem/en/home.html",
    freqColor: "ondemand",
  },

  // ===== ORIENTE MÉDIO =====
  {
    key: "ae",
    country: "Emirados Árabes",
    flag: "🇦🇪",
    source: "ICP · Federal Authority for Identity & Citizenship",
    frequency: "Sob demanda",
    url: "https://icp.gov.ae/en/",
    freqColor: "ondemand",
  },

  // ===== ÁSIA-PACÍFICO =====
  {
    key: "au",
    country: "Austrália",
    flag: "🇦🇺",
    source: "Home Affairs · SkillSelect Invitation Rounds",
    frequency: "Trimestral",
    url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect/invitation-rounds",
    freqColor: "quarterly",
  },
  {
    key: "cn",
    country: "China",
    flag: "🇨🇳",
    source: "NIA · National Immigration Administration",
    frequency: "Sob demanda",
    url: "https://en.nia.gov.cn/",
    freqColor: "ondemand",
  },
  {
    key: "jp",
    country: "Japão",
    flag: "🇯🇵",
    source: "ISA · Immigration Services Agency Japan",
    frequency: "Sob demanda",
    url: "https://www.moj.go.jp/isa/index.html",
    freqColor: "ondemand",
  },
  {
    key: "nz",
    country: "Nova Zelândia",
    flag: "🇳🇿",
    source: "Immigration New Zealand · INZ",
    frequency: "Sob demanda",
    url: "https://www.immigration.govt.nz/",
    freqColor: "ondemand",
  },
];
