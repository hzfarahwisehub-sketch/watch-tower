/**
 * Marca o documento como "navegando" (rolando/arrastando) por um curto período.
 * O CSS (`html[data-navigating]`) usa isso pra suspender efeitos caros
 * (backdrop-blur dos cards + mix-blend da marca d'água) enquanto há movimento,
 * deixando a navegação fluida. Tudo volta ao parar. Imagens e globo seguem
 * nítidos (são desenhados por cima, não passam pelos efeitos suspensos).
 */

let timer: ReturnType<typeof setTimeout> | null = null;

export function markNavigating(holdMs = 180): void {
  if (typeof document === "undefined") return;
  const el = document.documentElement;
  if (!el.hasAttribute("data-navigating")) el.setAttribute("data-navigating", "");
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    el.removeAttribute("data-navigating");
    timer = null;
  }, holdMs);
}
