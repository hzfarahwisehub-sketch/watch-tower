import type { MetadataRoute } from "next";

// Web App Manifest do Watch Tower (PWA). Next.js serve isso em
// /manifest.webmanifest e injeta o <link rel="manifest"> automaticamente.
// Identidade: fundo #0F0C1E, azul WiseHub #7BA0FF. display=standalone pra
// abrir sem barra do navegador quando instalado.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WiseHub Watch Tower",
    short_name: "Watch Tower",
    description: "Monitoramento Global de Imigração — WiseHub",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0F0C1E",
    theme_color: "#0F0C1E",
    lang: "pt-BR",
    dir: "ltr",
    categories: ["productivity", "business", "news"],
    orientation: "any",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
