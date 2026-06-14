// Dicionário de strings da UI (PT-BR + EN).
//
// Modelo incremental: chave -> string. t(chave) devolve a string do locale atual,
// com fallback pro PT-BR e, em último caso, pra própria chave. Componentes que
// ainda NÃO foram migrados continuam com texto PT hardcoded (mostram PT em
// qualquer idioma) — o app nunca quebra, só fica parcialmente traduzido até a
// cobertura crescer. Placeholders no formato {nome} são trocados em runtime.

import type { Locale } from "./config";

import map from "./messages/map";
import sidebar from "./messages/sidebar";
import bench from "./messages/bench";
import live from "./messages/live";
import info from "./messages/info";
import feed from "./messages/feed";
import bulletins from "./messages/bulletins";
import daily from "./messages/daily";
import suggest from "./messages/suggest";
import exportbtn from "./messages/exportbtn";
import alerts from "./messages/alerts";
import detail from "./messages/detail";
import settings from "./messages/settings";
import push from "./messages/push";
import zoom from "./messages/zoom";
import windowmgr from "./messages/windowmgr";
import pwd from "./messages/pwd";
import janela from "./messages/janela";
import authSignin from "./messages/authSignin";
import authSetpw from "./messages/authSetpw";
import authReset from "./messages/authReset";
import authVerify from "./messages/authVerify";
import authError from "./messages/authError";
import admin from "./messages/admin";
import dash from "./messages/dash";
import registry from "./messages/registry";
import rsstr from "./messages/rsstr";

type Dict = Record<string, string>;

const pt: Dict = {
  // ---- Header ----
  "header.subtitle": "Monitoramento Global de Imigração",
  "header.live.now": "atualizado agora",
  "header.live.one": "atualizado há 1min",
  "header.live.many": "atualizado há {n}min",
  "header.live.short.now": "ao vivo",
  "header.live.short.many": "{n}min",
  "header.refresh.toast": "Dados atualizados das 8 fontes oficiais",
  "header.theme.title": "Alternar tema",
  "header.refresh.title": "Atualizar agora",
  "header.lock.locked.title": "Layout travado · clica pra destravar",
  "header.lock.free.title": "Layout livre · clica pra travar",
  "header.lock.unlocked.toast": "🔓 Layout destravado · caixas podem ser movidas e redimensionadas",
  "header.lock.locked.toast": "🔒 Layout travado · caixas fixas no lugar",
  "header.alarm.muted.title": "Alarme mudo · clica pra ajustar",
  "header.alarm.title": "Alarme · {n}% · clica pra ajustar",
  "header.alarm.heading": "🔔 Alarme",
  "header.alarm.muted": "Mudo",
  "header.alarm.mute": "Mudo",
  "header.alarm.test": "Testar 🔔",
  "header.alarm.desc": "Toca um plin leve quando chega solicitação nova ou boletim novo.",
  "header.settings.title": "Configurações · cor + fonte",
  "header.notifications.title": "Notificações",
  "header.notifications.toast": "3 alertas críticos · 2 novas mudanças aguardando",
  "header.signin": "Entrar",
  "header.role.master": "Admin master",
  "header.role.editor": "Editor",
  "header.allowlist": "🔐 Allowlist · gerenciar acesso",
  "header.signout": "↩ Sair",
  "header.lang.title": "Mudar idioma · PT/EN",

  // ---- KPIs ----
  "kpi.countries.label": "Países",
  "kpi.countries.trend": "{n} fontes oficiais",
  "kpi.changes.label": "Mudanças",
  "kpi.changes.trend": "últimos 7 dias",
  "kpi.alerts.label": "Alertas",
  "kpi.alerts.trend.some": "nas últimas 24h",
  "kpi.alerts.trend.none": "nada nas 24h",
  "kpi.hot.label": "Quentes",
  "kpi.hot.trend": "mudanças em 48h",
  "kpi.updated.label": "Atualização",
  "kpi.updated.trend": "última varredura",
  "kpi.sources.label": "Fontes",
  "kpi.sources.trend.errors": "{n} c/ erro",
  "kpi.sources.trend.ok": "todas ativas",

  // ---- comuns ----
  "common.loading": "Carregando…",
  "common.rel.now": "agora",
  "common.rel.min": "{n}min",
  "common.rel.hour": "{n}h",
  "common.rel.day": "{n}d",
  "common.dash": "—",
};

const en: Dict = {
  // ---- Header ----
  "header.subtitle": "Global Immigration Monitoring",
  "header.live.now": "updated just now",
  "header.live.one": "updated 1min ago",
  "header.live.many": "updated {n}min ago",
  "header.live.short.now": "live",
  "header.live.short.many": "{n}min",
  "header.refresh.toast": "Data refreshed from the 8 official sources",
  "header.theme.title": "Toggle theme",
  "header.refresh.title": "Refresh now",
  "header.lock.locked.title": "Layout locked · click to unlock",
  "header.lock.free.title": "Layout free · click to lock",
  "header.lock.unlocked.toast": "🔓 Layout unlocked · boxes can be moved and resized",
  "header.lock.locked.toast": "🔒 Layout locked · boxes fixed in place",
  "header.alarm.muted.title": "Alarm muted · click to adjust",
  "header.alarm.title": "Alarm · {n}% · click to adjust",
  "header.alarm.heading": "🔔 Alarm",
  "header.alarm.muted": "Muted",
  "header.alarm.mute": "Mute",
  "header.alarm.test": "Test 🔔",
  "header.alarm.desc": "Plays a soft chime when a new request or bulletin arrives.",
  "header.settings.title": "Settings · color + font",
  "header.notifications.title": "Notifications",
  "header.notifications.toast": "3 critical alerts · 2 new changes pending",
  "header.signin": "Sign in",
  "header.role.master": "Master admin",
  "header.role.editor": "Editor",
  "header.allowlist": "🔐 Allowlist · manage access",
  "header.signout": "↩ Sign out",
  "header.lang.title": "Switch language · PT/EN",

  // ---- KPIs ----
  "kpi.countries.label": "Countries",
  "kpi.countries.trend": "{n} official sources",
  "kpi.changes.label": "Changes",
  "kpi.changes.trend": "last 7 days",
  "kpi.alerts.label": "Alerts",
  "kpi.alerts.trend.some": "in the last 24h",
  "kpi.alerts.trend.none": "nothing in 24h",
  "kpi.hot.label": "Hot",
  "kpi.hot.trend": "changes in 48h",
  "kpi.updated.label": "Updated",
  "kpi.updated.trend": "last scan",
  "kpi.sources.label": "Sources",
  "kpi.sources.trend.errors": "{n} with errors",
  "kpi.sources.trend.ok": "all active",

  // ---- comuns ----
  "common.loading": "Loading…",
  "common.rel.now": "now",
  "common.rel.min": "{n}min",
  "common.rel.hour": "{n}h",
  "common.rel.day": "{n}d",
  "common.dash": "—",
};

export const MESSAGES: Record<Locale, Dict> = {
  "pt-BR": Object.assign(
    {},
    pt,
    map.pt,
    sidebar.pt,
    bench.pt,
    live.pt,
    info.pt,
    feed.pt,
    bulletins.pt,
    daily.pt,
    suggest.pt,
    exportbtn.pt,
    alerts.pt,
    detail.pt,
    settings.pt,
    push.pt,
    zoom.pt,
    windowmgr.pt,
    pwd.pt,
    janela.pt,
    authSignin.pt,
    authSetpw.pt,
    authReset.pt,
    authVerify.pt,
    authError.pt,
    admin.pt,
    dash.pt,
    registry.pt,
    rsstr.pt,
  ),
  en: Object.assign(
    {},
    en,
    map.en,
    sidebar.en,
    bench.en,
    live.en,
    info.en,
    feed.en,
    bulletins.en,
    daily.en,
    suggest.en,
    exportbtn.en,
    alerts.en,
    detail.en,
    settings.en,
    push.en,
    zoom.en,
    windowmgr.en,
    pwd.en,
    janela.en,
    authSignin.en,
    authSetpw.en,
    authReset.en,
    authVerify.en,
    authError.en,
    admin.en,
    dash.en,
    registry.en,
    rsstr.en,
  ),
};
