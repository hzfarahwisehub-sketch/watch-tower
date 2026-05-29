/**
 * Renderiza o relatório completo em Markdown a partir do ReportData.
 * Mantém o mesmo formato detalhado país a país do export original (.md).
 */

import {
  type ReportData,
  fmtDate,
  relativeAge,
  statusLabel,
  bulletinStatusLabel,
  slug,
  flagEmoji,
  categoryEmoji,
  categoryName,
} from "@/lib/report-data";

export function renderMarkdown(data: ReportData): string {
  const { generatedAtStr, stats, countries } = data;
  const lines: string[] = [];

  lines.push(`# WiseHub Watch Tower · Relatório Completo`);
  lines.push(``);
  lines.push(`**Gerado em:** ${generatedAtStr} (BRT)`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);
  lines.push(`## Sumário executivo`);
  lines.push(``);
  lines.push(`| Métrica | Valor |`);
  lines.push(`|---|---|`);
  lines.push(`| 🌎 Países monitorados | **${stats.totalCountries}** |`);
  lines.push(`| 📜 Boletins oficiais via cron | **${stats.totalBulletins}** |`);
  lines.push(`| ✦ Boletins com mudança na última varredura | **${stats.bulletinChanged}** |`);
  lines.push(`| ⚠ Boletins em erro | **${stats.bulletinErrors}** |`);
  lines.push(`| 📡 Feeds RSS curados (Centros de Informação) | **${stats.totalRssFeeds}** |`);
  lines.push(`| 📰 Manchetes ao vivo capturadas neste relatório | **${stats.totalHeadlines}** |`);
  lines.push(`| 🤖 Última varredura do cron | **${stats.lastRun ? fmtDate(stats.lastRun, { full: true }) : "—"}** |`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);
  lines.push(`## Índice por país`);
  lines.push(``);
  for (const c of countries) {
    lines.push(`- [${flagEmoji(c.code)} ${c.name}](#${slug(c.name)})`);
  }
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  for (const c of countries) {
    lines.push(`## ${flagEmoji(c.code)} ${c.name}`);
    lines.push(``);
    lines.push(`**Autoridade:** ${c.authority}  `);
    lines.push(`**Status interno (dashboard):** ${statusLabel(c.status)}  `);
    lines.push(`**Coordenadas:** ${c.coords[0].toFixed(2)}, ${c.coords[1].toFixed(2)}`);
    lines.push(``);

    if (c.summary) {
      lines.push(`### 📋 Panorama`);
      lines.push(``);
      lines.push(c.summary);
      lines.push(``);
    }

    if (c.bulletin) {
      const b = c.bulletin;
      lines.push(`### 📜 Boletim oficial monitorado`);
      lines.push(``);
      lines.push(`- **Fonte:** ${b.source}`);
      lines.push(`- **Frequência declarada:** ${b.frequency}`);
      lines.push(`- **URL pública:** ${b.url}`);
      if (b.lastStatus || b.lastCheckedAt || b.lastChangedAt || b.hash) {
        lines.push(`- **Status última varredura:** ${bulletinStatusLabel(b.lastStatus)}`);
        lines.push(`- **Última varredura:** ${fmtDate(b.lastCheckedAt, { full: true })} (${relativeAge(b.lastCheckedAt)})`);
        lines.push(`- **Última mudança detectada:** ${fmtDate(b.lastChangedAt, { full: true })} (${relativeAge(b.lastChangedAt)})`);
        if (b.hash) lines.push(`- **Hash atual (SHA-256, 16 chars):** \`${b.hash.slice(0, 16)}…\``);
      } else {
        lines.push(`- _Sem dados de status (bulletin não monitorado ainda)._`);
      }
      lines.push(``);
    }

    if (c.events.length > 0) {
      lines.push(`### 📜 Marcos editoriais (${c.events.length})`);
      lines.push(``);
      lines.push(`> _Contexto histórico selecionado pela equipe WiseHub._`);
      lines.push(``);
      c.events.forEach((ev, i) => {
        lines.push(`**${i + 1}. ${ev.title}**`);
        lines.push(``);
        lines.push(ev.desc);
        lines.push(``);
        lines.push(`_Fonte: ${ev.src}_`);
        lines.push(``);
      });
    }

    if (c.headlines.length > 0) {
      const sorted = c.headlines;
      lines.push(`### 📡 Atividade ao vivo · ${sorted.length} manchete${sorted.length !== 1 ? "s" : ""} via RSS`);
      lines.push(``);
      sorted.slice(0, 12).forEach((h) => {
        const when = h.pubDate ? ` _(${fmtDate(h.pubDate, { full: true })})_` : "";
        lines.push(`- **${h.source}**${when}: [${h.title}](${h.link})`);
      });
      lines.push(``);
    } else {
      lines.push(`### 📡 Atividade ao vivo`);
      lines.push(``);
      lines.push(`_Sem manchetes RSS disponíveis no momento (feed pode estar offline ou fora de horário comercial)._`);
      lines.push(``);
    }

    if (c.sources.length > 0) {
      lines.push(`### 🌐 Centros de Informação (${c.sources.length} fonte${c.sources.length !== 1 ? "s" : ""})`);
      lines.push(``);
      const byCategory = new Map<string, typeof c.sources>();
      for (const s of c.sources) {
        const arr = byCategory.get(s.category) ?? [];
        arr.push(s);
        byCategory.set(s.category, arr);
      }
      for (const [cat, srcs] of byCategory) {
        lines.push(`**${categoryEmoji(cat)} ${categoryName(cat)}** (${srcs.length})`);
        lines.push(``);
        for (const src of srcs) {
          const rssFlag = src.rss ? " · 🟢 RSS ao vivo" : "";
          const noteSuffix = src.note ? ` — _${src.note}_` : "";
          lines.push(`- [${src.name}](${src.url}) (${src.language.toUpperCase()})${rssFlag}${noteSuffix}`);
        }
        lines.push(``);
      }
    }

    lines.push(`---`);
    lines.push(``);
  }

  lines.push(``);
  lines.push(`## Fim do relatório`);
  lines.push(``);
  lines.push(`Gerado automaticamente pelo Watch Tower em ${generatedAtStr}.`);
  lines.push(``);
  lines.push(`Próxima geração: cache invalida em 30 minutos a partir desta geração.`);
  lines.push(``);
  lines.push(`© WiseHub US LLC · Watch Tower v2 · Friday`);

  return lines.join("\n");
}
