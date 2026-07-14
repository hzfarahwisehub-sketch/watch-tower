/**
 * Renderiza o relatório completo em Markdown a partir do ReportData.
 *
 * Estrutura (decidida com o Hammis em 2026-05-31):
 *   1. Sumário + Legenda (onde postar cada coisa)
 *   2. PARTE 1 · TUDO PRA POSTAR  → todo o conteúdo curado, em sequência, por
 *      destino (Comunidade → aba do país → Blog), com títulos grandes e cor.
 *   3. PARTE 2 · FONTES E MATERIAIS → fontes oficiais por país, pra anexar a
 *      cada post como embasamento.
 *   4. PARTE 3 · DADOS TÉCNICOS → tudo que a WiseHub monitora, detalhado.
 *
 * Markdown não tem cor de fonte, então usamos bolinhas coloridas (🔵🟢🟠) como
 * proxy da legenda; PDF e Word aplicam a cor de verdade.
 */

import {
  type ReportData,
  type ReportCountry,
  fmtDate,
  relativeAge,
  statusLabel,
  bulletinStatusLabel,
  slug,
  flagEmoji,
  categoryEmoji,
  categoryName,
  publicAssetUrl,
  provenance,
} from "@/lib/report-data";
import {
  DESTINATIONS,
  buildPostables,
  consolidatedSources,
  totalPostables,
  type PostablePiece,
} from "@/lib/editorial";

/**
 * Selo de proveniência de uma fonte, pronto pra texto Markdown: mostra o SITE
 * visível (ex.: "canada.ca") e, se for governo/órgão público, o selo
 * "✓ fonte oficial"; senão marca como "referência". Prova que a notícia saiu
 * de fonte conhecida e confirmada. Vazio se a URL for inválida.
 */
function provenanceTag(url?: string | null): string {
  const { site, official } = provenance(url);
  if (!site) return "";
  return official ? `(${site} · ✓ fonte oficial)` : `(${site} · referência)`;
}

function sourcesInline(sources?: PostablePiece["sources"]): string {
  if (!sources?.length) return "";
  return sources
    .map((s) => {
      const tag = provenanceTag(s.url);
      return `[${s.label}](${s.url})${tag ? ` ${tag}` : ""}`;
    })
    .join(" · ");
}

/** Uma peça pronta pra postar. */
function pieceMd(p: PostablePiece, dot: string, tag: string): string[] {
  const lines: string[] = [];
  lines.push(`### ${dot} ${flagEmoji(p.countryCode)} ${p.countryName} · ${p.title}`);
  lines.push(``);
  lines.push(`**[${tag}]**`);
  lines.push(``);
  if (p.standfirst) {
    lines.push(`_${p.standfirst}_`);
    lines.push(``);
  }
  lines.push(p.body);
  lines.push(``);
  if (p.keyFacts?.length) {
    lines.push(`**Dados-chave:**`);
    lines.push(``);
    p.keyFacts.forEach((f) => lines.push(`- ${f}`));
    lines.push(``);
  }
  if (p.cta) {
    lines.push(`👉 ${p.cta}`);
    lines.push(``);
  }
  if (p.tags?.length) {
    lines.push(`Tags: ${p.tags.map((t) => `\`${t}\``).join(" ")}`);
    lines.push(``);
  }
  if (p.sources?.length) {
    lines.push(`📎 **Fontes pra inserir no post:** ${sourcesInline(p.sources)}`);
    lines.push(``);
  }
  return lines;
}

/** Bloco de dados técnicos de um país. */
function technicalMd(c: ReportCountry): string[] {
  const lines: string[] = [];
  lines.push(`## ${flagEmoji(c.code)} ${c.name}`);
  lines.push(``);
  if (c.imageUrl) {
    lines.push(`![${c.name}](${publicAssetUrl(c.imageUrl)})`);
    lines.push(``);
  }
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

  if (c.labor) {
    const L = c.labor;
    lines.push(`### 💼 Mercado de Trabalho`);
    lines.push(``);
    lines.push(L.overview);
    lines.push(``);
    if (L.hotSectors.length) { lines.push(`**Setores em alta:** ${L.hotSectors.join(" · ")}`); lines.push(``); }
    if (L.coolingSectors?.length) { lines.push(`**Setores em baixa:** ${L.coolingSectors.join(" · ")}`); lines.push(``); }
    if (L.inDemandRoles.length) {
      lines.push(`**Profissões em demanda:**`);
      lines.push(``);
      L.inDemandRoles.forEach((r) => lines.push(`- **${r.role}**${r.note ? `: ${r.note}` : ""}`));
      lines.push(``);
    }
    if (L.byQualification?.length) {
      lines.push(`**Por formação:**`);
      lines.push(``);
      L.byQualification.forEach((q) => lines.push(`- **${q.area}:** ${q.advice}`));
      lines.push(``);
    }
    if (L.salaries?.length) {
      lines.push(`**Faixas salariais:**`);
      lines.push(``);
      L.salaries.forEach((s) => {
        const srcTag = s.source ? provenanceTag(s.source.url) : "";
        const srcTxt = s.source ? ` ([${s.source.label}](${s.source.url})${srcTag ? ` ${srcTag}` : ""})` : "";
        lines.push(`- ${s.role}: ${s.range}${srcTxt}`);
      });
      lines.push(``);
    }
    if (L.foreignerRules) { lines.push(`**Regras pra estrangeiro:** ${L.foreignerRules}`); lines.push(``); }
    if (L.opportunityWindows?.length) {
      lines.push(`**Janelas de oportunidade:**`);
      lines.push(``);
      L.opportunityWindows.forEach((w) => lines.push(`- ${w}`));
      lines.push(``);
    }
    if (L.jobBoards.length) {
      lines.push(`**Onde se candidatar:** ${L.jobBoards.map((bd) => `[${bd.label}](${bd.url})`).join(" · ")}`);
      lines.push(``);
    }
  }

  if (c.bulletin) {
    const b = c.bulletin;
    lines.push(`### 📜 Boletim oficial monitorado`);
    lines.push(``);
    const bTag = provenanceTag(b.url);
    lines.push(`- **Fonte:** ${b.source}${bTag ? ` ${bTag}` : ""}`);
    lines.push(`- **Frequência declarada:** ${b.frequency}`);
    lines.push(`- **URL pública:** [${b.url}](${b.url})`);
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
      const hTag = provenanceTag(h.link);
      lines.push(`- **${h.source}**${when}: [${h.title}](${h.link})${hTag ? ` ${hTag}` : ""}`);
      if (h.image) {
        lines.push(`  - 🖼 Imagem da notícia: [${h.image}](${h.image})`);
      } else {
        lines.push(`  - 🖼 _Imagem desta notícia não encontrada._`);
      }
      if (h.community && h.checagem) {
        const ck = h.checagem;
        lines.push(`  - 🏘 _Fonte de comunidade (não-oficial)_ · ${ck.rotulo}`);
        if (ck.nota) lines.push(`  - 🔎 ${ck.nota}`);
        if (ck.fontesCitadas.length) {
          const refs = ck.fontesCitadas
            .map((f) => `${f.oficial ? "✓ " : ""}${f.url ? `[${f.nome}](${f.url})` : f.nome}`)
            .join(" · ");
          lines.push(`  - 📎 Fontes que a matéria usou de referência: ${refs}`);
        }
      }
    });
    lines.push(``);
  } else {
    lines.push(`### 📡 Atividade ao vivo`);
    lines.push(``);
    lines.push(`**SEM NOTÍCIAS** · nenhuma manchete nova nos feeds monitorados.`);
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
        const srcTag = provenanceTag(src.url);
        lines.push(`- [${src.name}](${src.url})${srcTag ? ` ${srcTag}` : ""} (${src.language.toUpperCase()})${rssFlag}${noteSuffix}`);
      }
      lines.push(``);
    }
  }

  lines.push(`---`);
  lines.push(``);
  return lines;
}

export function renderMarkdown(data: ReportData): string {
  const { generatedAtStr, stats, countries } = data;
  const lines: string[] = [];
  const postables = buildPostables(countries);
  const postCount = totalPostables(countries);
  const sourcesByCountry = consolidatedSources(countries);

  lines.push(`# WiseHub · Relatório Completo`);
  lines.push(``);
  lines.push(`**Gerado em:** ${generatedAtStr} (BRT)`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── Sumário ──
  lines.push(`## Sumário executivo`);
  lines.push(``);
  lines.push(`| Métrica | Valor |`);
  lines.push(`|---|---|`);
  lines.push(`| 📝 Peças prontas pra postar | **${postCount}** |`);
  lines.push(`| ✍️ Países com conteúdo editorial | **${stats.editorialCountries}** |`);
  lines.push(`| 🌎 Países monitorados | **${stats.totalCountries}** |`);
  lines.push(`| 📜 Boletins oficiais via cron | **${stats.totalBulletins}** |`);
  lines.push(`| ✦ Boletins com mudança na última varredura | **${stats.bulletinChanged}** |`);
  lines.push(`| 📡 Feeds RSS curados | **${stats.totalRssFeeds}** |`);
  lines.push(`| 📰 Manchetes ao vivo capturadas | **${stats.totalHeadlines}** |`);
  lines.push(`| 🤖 Última varredura do cron | **${stats.lastRun ? fmtDate(stats.lastRun, { full: true }) : "—"}** |`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── Legenda ──
  const COLOR_NAME: Record<string, string> = { community: "Azul", countryTab: "Verde", blog: "Laranja" };
  lines.push(`## 🧭 Como usar este documento`);
  lines.push(``);
  lines.push(`Este relatório está organizado em 3 partes, pra equipe achar tudo rápido:`);
  lines.push(``);
  lines.push(`1. **PARTE 1 · Tudo pra postar.** Todo o conteúdo já redigido e pronto pra publicar, separado pelo lugar onde vai. Cada peça vem com uma cor e uma etiqueta indicando o destino.`);
  lines.push(`2. **PARTE 2 · Fontes e materiais.** As fontes oficiais de cada país, pra anexar a cada post como embasamento.`);
  lines.push(`3. **PARTE 3 · Dados técnicos.** O monitoramento detalhado por país (boletins oficiais, mercado de trabalho, marcos e manchetes ao vivo), que embasa as Partes 1 e 2.`);
  lines.push(``);
  lines.push(`**As cores e as etiquetas indicam ONDE publicar cada peça:**`);
  lines.push(``);
  for (const d of DESTINATIONS) {
    lines.push(`- ${d.dot} **${COLOR_NAME[d.key] ?? ""} · ${d.tag}:** ${d.legend}`);
  }
  lines.push(``);
  lines.push(`> 📎 **Regra de ouro:** toda repostagem leva junto a fonte oficial correspondente. Ela aparece logo abaixo de cada peça e também reunida na Parte 2. É o que dá credibilidade e embasamento ao post.`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── PARTE 1 · TUDO PRA POSTAR ──
  lines.push(`# 🟦 PARTE 1 · TUDO PRA POSTAR`);
  lines.push(``);
  lines.push(`Sequência pronta pra publicar, separada por destino. Cada peça indica o lugar e traz as fontes pra anexar.`);
  lines.push(``);
  for (const { dest, pieces } of postables) {
    lines.push(`## ${dest.emoji} ${dest.dot} ${dest.label} (${pieces.length})`);
    lines.push(``);
    lines.push(`> _${dest.legend}_`);
    lines.push(``);
    if (pieces.length === 0) {
      lines.push(`_Nada nesta seção ainda._`);
      lines.push(``);
      continue;
    }
    pieces.forEach((p) => lines.push(...pieceMd(p, dest.dot, dest.tag)));
  }
  lines.push(`---`);
  lines.push(``);

  // ── PARTE 2 · FONTES E MATERIAIS ──
  lines.push(`# 🗂 PARTE 2 · FONTES E MATERIAIS`);
  lines.push(``);
  lines.push(`Fontes oficiais usadas no conteúdo acima, organizadas por país. Inclua a fonte correspondente em cada post pra servir de referência e embasamento.`);
  lines.push(``);
  if (sourcesByCountry.length === 0) {
    lines.push(`_Sem fontes editoriais ainda._`);
    lines.push(``);
  } else {
    for (const grp of sourcesByCountry) {
      lines.push(`### ${flagEmoji(grp.countryCode)} ${grp.countryName}`);
      lines.push(``);
      for (const s of grp.sources) {
        const tag = provenanceTag(s.url);
        lines.push(`- [${s.label}](${s.url})${tag ? ` ${tag}` : ""}`);
      }
      lines.push(``);
    }
  }
  lines.push(`---`);
  lines.push(``);

  // ── PARTE 3 · DADOS TÉCNICOS ──
  lines.push(`# 🔧 PARTE 3 · DADOS TÉCNICOS · monitoramento`);
  lines.push(``);
  lines.push(`Tudo que a WiseHub monitora, detalhado país a país: boletins oficiais, marcos editoriais, manchetes ao vivo e Centros de Informação. É a base factual que embasa o conteúdo das Partes 1 e 2.`);
  lines.push(``);
  lines.push(`### Índice por país`);
  lines.push(``);
  for (const c of countries) lines.push(`- [${flagEmoji(c.code)} ${c.name}](#${slug(c.name)})`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);
  for (const c of countries) lines.push(...technicalMd(c));

  lines.push(``);
  lines.push(`## Fim do relatório`);
  lines.push(``);
  lines.push(`Gerado automaticamente pela WiseHub em ${generatedAtStr}.`);
  lines.push(``);
  lines.push(`Conteúdo editorial curado pela Friday · próxima geração: cache invalida em 30 minutos.`);
  lines.push(``);
  lines.push(`© WiseHub US LLC · Friday`);

  return lines.join("\n");
}
