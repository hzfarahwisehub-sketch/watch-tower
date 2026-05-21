"use client";
import { useEffect, useState } from "react";

type FreqColor = "live" | "monthly" | "quarterly" | "ondemand";

type Bulletin = {
  key: string;
  country: string;
  flag: string;
  source: string;
  frequency: string;
  url: string;
  freqColor: FreqColor;
};

type BulletinStatus = {
  key: string;
  url: string;
  hash: string | null;
  lastChangedAt: string | null;
  lastCheckedAt: string | null;
  lastStatus: string | null;
};

type StatusFile = {
  lastRun: string | null;
  bulletins: BulletinStatus[];
};

const BULLETINS: Bulletin[] = [
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

const FREQ_STYLES: Record<FreqColor, { color: string; icon: string }> = {
  live:      { color: "#5DD580", icon: "●" },
  monthly:   { color: "#7BA0FF", icon: "◐" },
  quarterly: { color: "#E5C156", icon: "◇" },
  ondemand:  { color: "#A8A8B8", icon: "→" },
};

const CHANGED_WINDOW_DAYS = 7;

function fmtRelative(iso: string | null): string {
  if (!iso) return "—";
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - then);
  const hours = Math.floor(diff / 3_600_000);
  if (hours < 1) return "agora há pouco";
  if (hours < 24) return `há ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "ontem";
  if (days < 7) return `há ${days}d`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `há ${weeks}sem`;
  const months = Math.floor(days / 30);
  return `há ${months}mês`;
}

function fmtCheckedAt(iso: string | null): string {
  if (!iso) return "ainda não verificado";
  return `verificado ${fmtRelative(iso)}`;
}

function isRecentlyChanged(b: BulletinStatus | undefined): boolean {
  if (!b?.lastChangedAt || b.lastStatus !== "changed") return false;
  const diff = Date.now() - new Date(b.lastChangedAt).getTime();
  return diff < CHANGED_WINDOW_DAYS * 24 * 3_600_000;
}

export function OfficialBulletins() {
  const [statusByKey, setStatusByKey] = useState<Record<string, BulletinStatus>>({});
  const [lastRun, setLastRun] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/bulletins-status.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: StatusFile | null) => {
        if (!data) return;
        const map: Record<string, BulletinStatus> = {};
        for (const b of data.bulletins) map[b.key] = b;
        setStatusByKey(map);
        setLastRun(data.lastRun);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const recentChanges = BULLETINS.filter((b) => isRecentlyChanged(statusByKey[b.key])).length;

  return (
    <section className="wt-card flex flex-col h-full">
      <div
        className="flex items-center justify-between gap-3 px-7 py-5"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <h2
          className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          📜 Boletins Oficiais de Imigração
          {recentChanges > 0 && (
            <span
              className="px-2 py-0.5 rounded-full text-[10px] tracking-wider"
              style={{
                background: "rgba(45,142,74,.18)",
                border: "1px solid rgba(45,142,74,.4)",
                color: "#5DD580",
              }}
            >
              {recentChanges} ATUALIZADO{recentChanges > 1 ? "S" : ""}
            </span>
          )}
        </h2>
        <span
          className="text-[10.5px] font-semibold tracking-wider uppercase text-right"
          style={{ color: "var(--text-3)" }}
        >
          {BULLETINS.length} jurisdições · fontes oficiais
          <br />
          <span style={{ color: "var(--text-2)" }}>
            Última varredura: {loading ? "carregando…" : fmtRelative(lastRun)}
          </span>
        </span>
      </div>

      <div className="px-7 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="flex flex-wrap items-center gap-3 text-[10.5px]" style={{ color: "var(--text-3)" }}>
          <span className="flex items-center gap-1.5">
            <span style={{ color: FREQ_STYLES.live.color }}>●</span> Quinzenal
          </span>
          <span className="flex items-center gap-1.5">
            <span style={{ color: FREQ_STYLES.monthly.color }}>◐</span> Mensal
          </span>
          <span className="flex items-center gap-1.5">
            <span style={{ color: FREQ_STYLES.quarterly.color }}>◇</span> Trimestral
          </span>
          <span className="flex items-center gap-1.5">
            <span style={{ color: FREQ_STYLES.ondemand.color }}>→</span> Sob demanda
          </span>
          <span className="flex items-center gap-1.5 ml-auto">
            <span style={{ color: "#5DD580" }}>✦</span> Mudança detectada nos últimos {CHANGED_WINDOW_DAYS} dias
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 @2xl:grid-cols-4 gap-4 p-6">
        {BULLETINS.map((b) => {
          const fs = FREQ_STYLES[b.freqColor];
          const status = statusByKey[b.key];
          const changed = isRecentlyChanged(status);
          return (
            <a
              key={b.country}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-lg transition-all hover:scale-[1.02] relative"
              style={{
                background: "var(--bg2)",
                border: changed ? "1px solid rgba(45,142,74,.5)" : "1px solid var(--border)",
                boxShadow: changed ? "0 0 0 2px rgba(45,142,74,.12)" : undefined,
                textDecoration: "none",
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 24,
                paddingRight: 24,
              }}
            >
              {changed && (
                <span
                  className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider"
                  style={{
                    background: "#2D8E4A",
                    color: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,.3)",
                  }}
                >
                  ✦ NOVO
                </span>
              )}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-[26px] leading-none">{b.flag}</span>
                  <div className="flex flex-col">
                    <span
                      className="text-[13px] font-bold leading-tight"
                      style={{ color: "var(--text)" }}
                    >
                      {b.country}
                    </span>
                    <span
                      className="text-[9.5px] tracking-wider uppercase font-semibold mt-0.5"
                      style={{ color: fs.color }}
                    >
                      <span className="mr-1">{fs.icon}</span>
                      {b.frequency}
                    </span>
                  </div>
                </div>
                <span
                  className="text-[14px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--color-wh-blue-light)" }}
                >
                  ↗
                </span>
              </div>

              <p
                className="text-[11px] leading-snug mt-1 flex-1"
                style={{ color: "var(--text-2)" }}
              >
                {b.source}
              </p>

              <div
                className="flex items-center justify-between mt-1 pt-2"
                style={{ borderTop: "1px dashed var(--border)" }}
              >
                <span
                  className="text-[9.5px] tracking-wider uppercase"
                  style={{ color: changed ? "#5DD580" : "var(--text-3)" }}
                >
                  {changed
                    ? `mudança ${fmtRelative(status?.lastChangedAt ?? null)}`
                    : fmtCheckedAt(status?.lastCheckedAt ?? null)}
                </span>
                <span
                  className="text-[10.5px] font-bold transition-colors"
                  style={{ color: "var(--color-wh-blue-light)" }}
                >
                  →
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="px-7 py-4" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-[10.5px]" style={{ color: "var(--text-3)" }}>
          Fontes governamentais oficiais das {BULLETINS.length} jurisdições monitoradas (3 América · 32 Europa · 1 Oriente Médio · 4 Ásia-Pacífico/Oceania). Varredura automática diária às 08h00 BRT detecta mudanças no conteúdo de cada boletim. Cards com selo <span style={{ color: "#5DD580" }}>✦ NOVO</span> tiveram alteração nos últimos {CHANGED_WINDOW_DAYS} dias.
        </p>
      </div>
    </section>
  );
}
