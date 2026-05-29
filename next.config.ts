import type { NextConfig } from "next";

// Headers de segurança aplicados a todas as respostas. App de uso interno,
// sem CSP estrita (a UI usa muito style inline) — clickjacking coberto por
// X-Frame-Options. HSTS força HTTPS; nosniff evita MIME-sniffing; Permissions
// trava APIs que o app não usa (câmera/mic/geo).
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // O service worker NÃO pode ficar preso no cache do browser, senão o
        // PWA não recebe updates. Sempre revalida (no-cache permite 304).
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, must-revalidate" },
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
        ],
      },
    ];
  },
};

export default nextConfig;
