// Dados dos relógios mundiais (aba Relógios). Fuso IANA + capital + cidades por
// país, chaveado pelos códigos do COUNTRIES. A ORDEM e os nomes vêm do COUNTRIES
// (canônico: América, Europa, Ásia/Oceania); aqui mora só o que o mapa não tem:
// timezone, capital e as cidades de cada país (pros relógios internos).

export type ClockCity = { name: string; tz: string };
export type ClockInfo = { tz: string; capital: string; region: string; cities?: ClockCity[] };

const AMERICA = "América";
const EUROPA = "Europa";
const ASIA = "Ásia · Oceania";

export const WORLD_CLOCKS: Record<string, ClockInfo> = {
  // ===== AMÉRICA =====
  ca: { tz: "America/Toronto", capital: "Ottawa", region: AMERICA, cities: [
    { name: "Toronto", tz: "America/Toronto" }, { name: "Montreal", tz: "America/Toronto" },
    { name: "Calgary", tz: "America/Edmonton" }, { name: "Vancouver", tz: "America/Vancouver" } ] },
  us: { tz: "America/New_York", capital: "Washington", region: AMERICA, cities: [
    { name: "Nova York", tz: "America/New_York" }, { name: "Chicago", tz: "America/Chicago" },
    { name: "Denver", tz: "America/Denver" }, { name: "Los Angeles", tz: "America/Los_Angeles" } ] },
  br: { tz: "America/Sao_Paulo", capital: "Brasília", region: AMERICA, cities: [
    { name: "São Paulo", tz: "America/Sao_Paulo" }, { name: "Rio de Janeiro", tz: "America/Sao_Paulo" },
    { name: "Manaus", tz: "America/Manaus" }, { name: "Recife", tz: "America/Recife" } ] },

  // ===== EUROPA =====
  pt: { tz: "Europe/Lisbon", capital: "Lisboa", region: EUROPA, cities: [
    { name: "Lisboa", tz: "Europe/Lisbon" }, { name: "Porto", tz: "Europe/Lisbon" }, { name: "Funchal", tz: "Atlantic/Madeira" } ] },
  es: { tz: "Europe/Madrid", capital: "Madri", region: EUROPA, cities: [
    { name: "Madri", tz: "Europe/Madrid" }, { name: "Barcelona", tz: "Europe/Madrid" }, { name: "Las Palmas", tz: "Atlantic/Canary" } ] },
  uk: { tz: "Europe/London", capital: "Londres", region: EUROPA, cities: [
    { name: "Londres", tz: "Europe/London" }, { name: "Manchester", tz: "Europe/London" }, { name: "Edimburgo", tz: "Europe/London" } ] },
  de: { tz: "Europe/Berlin", capital: "Berlim", region: EUROPA, cities: [
    { name: "Berlim", tz: "Europe/Berlin" }, { name: "Munique", tz: "Europe/Berlin" }, { name: "Frankfurt", tz: "Europe/Berlin" } ] },
  fr: { tz: "Europe/Paris", capital: "Paris", region: EUROPA },
  it: { tz: "Europe/Rome", capital: "Roma", region: EUROPA, cities: [
    { name: "Roma", tz: "Europe/Rome" }, { name: "Milão", tz: "Europe/Rome" }, { name: "Nápoles", tz: "Europe/Rome" } ] },
  dk: { tz: "Europe/Copenhagen", capital: "Copenhague", region: EUROPA },
  pl: { tz: "Europe/Warsaw", capital: "Varsóvia", region: EUROPA },
  ie: { tz: "Europe/Dublin", capital: "Dublin", region: EUROPA },
  ch: { tz: "Europe/Zurich", capital: "Berna", region: EUROPA },
  at: { tz: "Europe/Vienna", capital: "Viena", region: EUROPA },
  be: { tz: "Europe/Brussels", capital: "Bruxelas", region: EUROPA },
  bg: { tz: "Europe/Sofia", capital: "Sófia", region: EUROPA },
  cy: { tz: "Asia/Nicosia", capital: "Nicósia", region: EUROPA },
  hr: { tz: "Europe/Zagreb", capital: "Zagreb", region: EUROPA },
  sk: { tz: "Europe/Bratislava", capital: "Bratislava", region: EUROPA },
  si: { tz: "Europe/Ljubljana", capital: "Liubliana", region: EUROPA },
  ee: { tz: "Europe/Tallinn", capital: "Tallinn", region: EUROPA },
  fi: { tz: "Europe/Helsinki", capital: "Helsinque", region: EUROPA },
  gr: { tz: "Europe/Athens", capital: "Atenas", region: EUROPA },
  nl: { tz: "Europe/Amsterdam", capital: "Amsterdã", region: EUROPA },
  hu: { tz: "Europe/Budapest", capital: "Budapeste", region: EUROPA },
  lv: { tz: "Europe/Riga", capital: "Riga", region: EUROPA },
  lt: { tz: "Europe/Vilnius", capital: "Vilnius", region: EUROPA },
  lu: { tz: "Europe/Luxembourg", capital: "Luxemburgo", region: EUROPA },
  mt: { tz: "Europe/Malta", capital: "Valeta", region: EUROPA },
  ro: { tz: "Europe/Bucharest", capital: "Bucareste", region: EUROPA },
  se: { tz: "Europe/Stockholm", capital: "Estocolmo", region: EUROPA },
  cz: { tz: "Europe/Prague", capital: "Praga", region: EUROPA },
  is: { tz: "Atlantic/Reykjavik", capital: "Reykjavík", region: EUROPA },
  no: { tz: "Europe/Oslo", capital: "Oslo", region: EUROPA, cities: [
    { name: "Oslo", tz: "Europe/Oslo" }, { name: "Bergen", tz: "Europe/Oslo" }, { name: "Tromsø", tz: "Europe/Oslo" } ] },
  ru: { tz: "Europe/Moscow", capital: "Moscou", region: EUROPA, cities: [
    { name: "Moscou", tz: "Europe/Moscow" }, { name: "São Petersburgo", tz: "Europe/Moscow" },
    { name: "Ecaterimburgo", tz: "Asia/Yekaterinburg" }, { name: "Novosibirsk", tz: "Asia/Novosibirsk" },
    { name: "Vladivostok", tz: "Asia/Vladivostok" } ] },

  // ===== ÁSIA · OCEANIA =====
  au: { tz: "Australia/Sydney", capital: "Canberra", region: ASIA, cities: [
    { name: "Sydney", tz: "Australia/Sydney" }, { name: "Brisbane", tz: "Australia/Brisbane" },
    { name: "Adelaide", tz: "Australia/Adelaide" }, { name: "Perth", tz: "Australia/Perth" } ] },
  nz: { tz: "Pacific/Auckland", capital: "Wellington", region: ASIA },
  cn: { tz: "Asia/Shanghai", capital: "Pequim", region: ASIA, cities: [
    { name: "Pequim", tz: "Asia/Shanghai" }, { name: "Xangai", tz: "Asia/Shanghai" }, { name: "Ürümqi", tz: "Asia/Urumqi" } ] },
  sg: { tz: "Asia/Singapore", capital: "Singapura", region: ASIA },
  jp: { tz: "Asia/Tokyo", capital: "Tóquio", region: ASIA, cities: [
    { name: "Tóquio", tz: "Asia/Tokyo" }, { name: "Osaka", tz: "Asia/Tokyo" } ] },
  ae: { tz: "Asia/Dubai", capital: "Abu Dhabi", region: ASIA, cities: [
    { name: "Abu Dhabi", tz: "Asia/Dubai" }, { name: "Dubai", tz: "Asia/Dubai" } ] },
};

/** Código de clima WMO (Open-Meteo) → ícone + rótulo PT. */
export function weatherMeta(code: number | null | undefined): { icon: string; label: string } {
  if (code == null) return { icon: "•", label: "—" };
  if (code === 0) return { icon: "☀️", label: "Ensolarado" };
  if (code === 1) return { icon: "🌤", label: "Predom. limpo" };
  if (code === 2) return { icon: "⛅", label: "Parc. nublado" };
  if (code === 3) return { icon: "☁️", label: "Nublado" };
  if (code === 45 || code === 48) return { icon: "🌫", label: "Névoa" };
  if (code >= 51 && code <= 57) return { icon: "🌦", label: "Garoa" };
  if (code >= 61 && code <= 67) return { icon: "🌧️", label: "Chuva" };
  if (code >= 71 && code <= 77) return { icon: "❄️", label: "Neve" };
  if (code >= 80 && code <= 82) return { icon: "🌦", label: "Pancadas" };
  if (code === 85 || code === 86) return { icon: "🌨", label: "Neve" };
  if (code >= 95) return { icon: "⛈️", label: "Tempestade" };
  return { icon: "•", label: "—" };
}
