// Gera os ícones do Watch Tower.
//
// MODO 1 (placeholder · padrão): desenha um "olho que vigia" em SVG na
//   identidade WiseHub (fundo #0F0C1E, azul #7BA0FF) e rasteriza com sharp.
// MODO 2 (logo com respiro): `node scripts/gen-pwa-icons.mjs caminho.png`
//   compõe o logo sobre o fundo da marca (#0F0C1E), com margem — bom pra
//   logos transparentes/recortados que não têm fundo próprio.
// MODO 3 (brasão full-bleed): `node scripts/gen-pwa-icons.mjs caminho.png --full`
//   usa a arte INTEIRA (que já tem fundo + moldura próprios, ex.: o brasão
//   oficial olho/globo/headset) sem margem nenhuma. Além dos ícones PWA,
//   gera o brasão in-app (public/brand/watchtower-icon.png) e o favicon.
//
// Saída: public/icons/{icon-192,icon-512,icon-maskable-512,apple-touch-icon,icon}.png
//   + (MODO 3) public/brand/watchtower-icon.png + src/app/favicon.ico
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ICONS_OUT = path.resolve("public/icons");
const BRAND_OUT = path.resolve("public/brand");
const FAVICON = path.resolve("src/app/favicon.ico");
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

// Empacota uma lista de PNGs num container .ico (o formato ICO aceita payload
// PNG desde o Windows Vista; navegadores modernos leem sem problema).
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // tipo: 1 = ícone
  header.writeUInt16LE(entries.length, 4);
  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + 16 * entries.length;
  const blobs = [];
  entries.forEach((e, i) => {
    const d = dir.subarray(i * 16, i * 16 + 16);
    d.writeUInt8(e.size >= 256 ? 0 : e.size, 0); // largura (0 = 256)
    d.writeUInt8(e.size >= 256 ? 0 : e.size, 1); // altura
    d.writeUInt8(0, 2);          // cores na paleta
    d.writeUInt8(0, 3);          // reservado
    d.writeUInt16LE(1, 4);       // planos
    d.writeUInt16LE(32, 6);      // bits por pixel
    d.writeUInt32LE(e.buffer.length, 8);
    d.writeUInt32LE(offset, 12);
    offset += e.buffer.length;
    blobs.push(e.buffer);
  });
  return Buffer.concat([header, dir, ...blobs]);
}

// Retorna um sharp 512x512 da arte base, conforme o modo.
async function base512(srcArg, full) {
  if (!srcArg) return sharp(Buffer.from(eyeSvg)).resize(512, 512);
  if (full) {
    // Brasão full-bleed: a arte já é quadrada e tem fundo próprio.
    return sharp(srcArg).resize(512, 512, { fit: "cover" });
  }
  // Logo recortado: encaixa sobre o fundo da marca, com respiro.
  const logo = await sharp(srcArg).resize(384, 384, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  return sharp({ create: { width: 512, height: 512, channels: 4, background: BG } })
    .composite([{ input: logo, gravity: "center" }]);
}

async function main() {
  const srcArg = process.argv[2];
  const full = process.argv.includes("--full");
  await mkdir(ICONS_OUT, { recursive: true });

  const png512 = await (await base512(srcArg, full)).png().toBuffer();
  await sharp(png512).toFile(path.join(ICONS_OUT, "icon-512.png"));
  await sharp(png512).resize(192, 192).toFile(path.join(ICONS_OUT, "icon-192.png"));
  await sharp(png512).toFile(path.join(ICONS_OUT, "icon-maskable-512.png")); // full-bleed = safe
  await sharp(png512).resize(180, 180).toFile(path.join(ICONS_OUT, "apple-touch-icon.png"));
  await sharp(png512).toFile(path.join(ICONS_OUT, "icon.png")); // genérico p/ notificação

  if (full && srcArg) {
    // Brasão in-app (Header, telas de auth, allowlist) — full-bleed, 512.
    await mkdir(BRAND_OUT, { recursive: true });
    await sharp(png512).toFile(path.join(BRAND_OUT, "watchtower-icon.png"));

    // Favicon multi-tamanho (16/32/48) embutindo PNGs no container .ico.
    const favSizes = [16, 32, 48];
    const favPngs = await Promise.all(
      favSizes.map(async (size) => ({ size, buffer: await sharp(png512).resize(size, size).png().toBuffer() }))
    );
    await writeFile(FAVICON, buildIco(favPngs));
  }

  console.log(srcArg ? `✓ ícones gerados do brasão (${full ? "full-bleed" : "com respiro"}): ${srcArg}` : "✓ ícones placeholder (olho) gerados");
  console.log(`  → ${ICONS_OUT}`);
  if (full && srcArg) {
    console.log(`  → ${path.join(BRAND_OUT, "watchtower-icon.png")}`);
    console.log(`  → ${FAVICON}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
