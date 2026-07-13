import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import { ToastProvider } from "@/components/ToastProvider";
import { SettingsProvider } from "@/components/SettingsProvider";
import { LayoutModeProvider } from "@/components/LayoutMode";
import { UndoProvider } from "@/components/UndoProvider";
import { NavPerf } from "@/components/NavPerf";
import { AuthSessionProvider } from "@/components/AuthSessionProvider";
import { PwaBootstrap } from "@/components/PwaBootstrap";
import { VdsStatusBadge } from "@/components/VdsStatusBadge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WiseHub Watch Tower",
  description: "Monitoramento Global de Imigração — WiseHub",
  applicationName: "Watch Tower",
  // iOS standalone: faz o app abrir em tela cheia quando adicionado à tela inicial.
  appleWebApp: {
    capable: true,
    title: "Watch Tower",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/icons/icon-192.png",
    shortcut: "/icons/icon-192.png",
    apple: "/icons/apple-touch-icon.png",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0F0C1E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" className={inter.variable}>
      <body data-theme="dark" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
        <AuthSessionProvider>
          <LocaleProvider>
            <ThemeProvider>
              <SettingsProvider>
                <ToastProvider>
                  <UndoProvider>
                    <LayoutModeProvider>
                      {children}
                      <NavPerf />
                      <PwaBootstrap />
                      <VdsStatusBadge />
                    </LayoutModeProvider>
                  </UndoProvider>
                </ToastProvider>
              </SettingsProvider>
            </ThemeProvider>
          </LocaleProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
