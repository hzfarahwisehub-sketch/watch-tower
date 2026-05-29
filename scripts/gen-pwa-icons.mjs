// Gera os ícones PWA do Watch Tower.
//
// MODO 1 (placeholder · padrão): desenha um "olho que vigia" em SVG na
//   identidade WiseHub (fundo #0F0C1E, azul #7BA0FF) e rasteriza com sharp.
// MODO 2 (logo real): passe o caminho de um PNG/SVG quadrado como arg:
//   `node scripts/gen-pwa-icons.mjs caminho/do/olho.png`
//   — ele compõe sobre o fundo da marca e gera todos os tamanhos.
//
// Saída: public/icons/{icon-192,icon-512,icon-maskable-512,apple-touch-icon}.png
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve("public/icons");
const BG = "#0F0C1E";          // fundo da marca
const BG2 = "#15123083";       // glow interno
const BLUE = "#7BA0FF";
const BLUE_DEEP = "#1F55FF";

// SVG do olho placeholder (512x512, full-bleed pra servir de maskable também).
const eyeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <radialGradient id="glow" cx="50%" cy="46%" r="60%">
      <stop offset="0%" stop-color="#26307a"/>
      <stop offset="55%" stop-color="${BG2}"/>
      <stop offset="100%" stop-color="${BG}"/>
    </radialGradient>
    <linearGradient id="iris" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BLUE}"/>
      <stop offset="100%" stop-color="${BLUE_DEEP}"/>
    </linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
  </defs>
  <rect width="512" height="512" fill="${BG}"/>
  <rect width="512" height="512" fill="url(#glow)"/>
  <!-- almond do olho -->
  <path d="M64 256 C 160 150, 352 150, 448 256 C 352 362, 160 362, 64 256 Z"
        fill="none" stroke="${BLUE}" stroke-width="16" opacity="0.95"/>
  <path d="M96 256 C 176 176, 336 176, 416 256 C 336 336, 176 336, 96 256 Z"
        fill="#0c0a1a" opacity="0.6"/>
  <!-- iris -->
  <circle cx="256" cy="256" r="74" fill="url(#iris)"/>
  <circle cx="256" cy="256" r="74" fill="none" stroke="#aab9ff" stroke-width="3" opacity="0.7"/>
  <!-- pupila -->
  <circle cx="256" cy="256" r="32" fill="#06060f"/>
  <!-- brilho -->
  <circle cx="232" cy="232" r="13" fill="#ffffff" opacity="0.9"/>
  <circle cx="285" cy="280" r="6" fill="#ffffff" opacity="0.5"/>
</svg>`;

async function baseImage(srcArg) {
  if (srcArg) {
    // Logo real: encaixa sobre o fundo da marca, com respiro.
    const logo = await sharp(srcArg).resize(384, 384, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    return sharp({ create: { width: 512, height: 512, channels: 4, background: BG } })
      .composite([{ input: logo, gravity: "center" }]);
  }
  // Placeholder do olho.
  return sharp(Buffer.from(eyeSvg));
}

async function main() {
  const srcArg = process.argv[2];
  await mkdir(OUT, { recursive: true });

  const png512 = await (await baseImage(srcArg)).resize(512, 512).png().toBuffer();
  await sharp(png512).toFile(path.join(OUT, "icon-512.png"));
  await sharp(png512).resize(192, 192).toFile(path.join(OUT, "icon-192.png"));
  await sharp(png512).toFile(path.join(OUT, "icon-maskable-512.png")); // full-bleed = safe
  await sharp(png512).resize(180, 180).toFile(path.join(OUT, "apple-touch-icon.png"));
  await sharp(png512).resize(512, 512).toFile(path.join(OUT, "icon.png")); // genérico p/ notificação

  console.log(srcArg ? `✓ ícones gerados do logo: ${srcArg}` : "✓ ícones placeholder (olho) gerados");
  console.log(`  → ${OUT}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
