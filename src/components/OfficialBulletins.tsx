"use client";

type Bulletin = {
  country: string;
  flag: string;
  source: string;
  frequency: string;
  url: string;
  freqColor: "live" | "monthly" | "quarterly" | "ondemand";
};

const BULLETINS: Bulletin[] = [
  {
    country: "Estados Unidos",
    flag: "🇺🇸",
    source: "Visa Bulletin · US Dept of State",
    frequency: "Mensal",
    url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
    freqColor: "monthly",
  },
  {
    country: "Canadá",
    flag: "🇨🇦",
    source: "IRCC · Express Entry Draws",
    frequency: "Quinzenal",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html",
    freqColor: "live",
  },
  {
    country: "Reino Unido",
    flag: "🇬🇧",
    source: "Home Office · Migration Statistics",
    frequency: "Mensal + Trimestral",
    url: "https://www.gov.uk/government/collections/migration-statistics",
    freqColor: "monthly",
  },
  {
    country: "Portugal",
    flag: "🇵🇹",
    source: "AIMA · Agência para Integração, Migrações e Asilo",
    frequency: "Sob demanda",
    url: "https://aima.gov.pt/pt",
    freqColor: "ondemand",
  },
  {
    country: "Espanha",
    flag: "🇪🇸",
    source: "Ministerio de Inclusión · Migraciones",
    frequency: "Sob demanda",
    url: "https://www.inclusion.gob.es/web/migraciones",
    freqColor: "ondemand",
  },
  {
    country: "Itália",
    flag: "🇮🇹",
    source: "Polizia di Stato · Permesso di Soggiorno",
    frequency: "Sob demanda",
    url: "https://questure.poliziadistato.it/stranieri/",
    freqColor: "ondemand",
  },
  {
    country: "França",
    flag: "🇫🇷",
    source: "OFII · Office Français de l'Immigration",
    frequency: "Sob demanda",
    url: "https://www.ofii.fr/",
    freqColor: "ondemand",
  },
  {
    country: "Alemanha",
    flag: "🇩🇪",
    source: "BAMF · Bundesamt für Migration und Flüchtlinge",
    frequency: "Mensal",
    url: "https://www.bamf.de/EN/Themen/Statistik/Asylzahlen/asylzahlen-node.html",
    freqColor: "monthly",
  },
  {
    country: "Austrália",
    flag: "🇦🇺",
    source: "Home Affairs · SkillSelect Invitation Rounds",
    frequency: "Trimestral",
    url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect/invitation-rounds",
    freqColor: "quarterly",
  },
  {
    country: "Emirados Árabes",
    flag: "🇦🇪",
    source: "ICP · Federal Authority for Identity & Citizenship",
    frequency: "Sob demanda",
    url: "https://icp.gov.ae/en/",
    freqColor: "ondemand",
  },
  {
    country: "Brasil",
    flag: "🇧🇷",
    source: "Polícia Federal · Portal de Imigração",
    frequency: "Sob demanda",
    url: "https://www.gov.br/pf/pt-br/assuntos/imigracao/inicio",
    freqColor: "ondemand",
  },
];

const FREQ_STYLES = {
  live: {
    bg: "rgba(45,142,74,.15)",
    border: "rgba(45,142,74,.4)",
    color: "#5DD580",
    icon: "●",
  },
  monthly: {
    bg: "rgba(31,85,255,.15)",
    border: "rgba(31,85,255,.4)",
    color: "#7BA0FF",
    icon: "◐",
  },
  quarterly: {
    bg: "rgba(212,168,42,.15)",
    border: "rgba(212,168,42,.4)",
    color: "#E5C156",
    icon: "◇",
  },
  ondemand: {
    bg: "rgba(125,125,140,.18)",
    border: "rgba(125,125,140,.4)",
    color: "#A8A8B8",
    icon: "→",
  },
};

export function OfficialBulletins() {
  return (
    <section className="wt-card my-6 flex flex-col">
      <div
        className="flex items-center justify-between gap-3 px-5 py-4"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <h2
          className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          📜 Boletins Oficiais de Imigração
        </h2>
        <span
          className="text-[10.5px] font-semibold tracking-wider uppercase"
          style={{ color: "var(--text-3)" }}
        >
          {BULLETINS.length} jurisdições · fontes oficiais
        </span>
      </div>

      <div className="px-5 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
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
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4">
        {BULLETINS.map((b) => {
          const fs = FREQ_STYLES[b.freqColor];
          return (
            <a
              key={b.country}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 p-4 rounded-lg transition-all hover:scale-[1.02]"
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
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
                  className="text-[10px] tracking-wider uppercase font-semibold"
                  style={{ color: "var(--text-3)" }}
                >
                  Abrir boletim
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

      <div className="px-5 py-3" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-[10.5px]" style={{ color: "var(--text-3)" }}>
          Fontes governamentais oficiais das 11 jurisdições onde a WiseHub opera. Clique em qualquer card pra abrir o boletim no site da autoridade competente. Próxima fase: detecção automática de mudanças via cron diário + notificação no Watch Tower.
        </p>
      </div>
    </section>
  );
}
