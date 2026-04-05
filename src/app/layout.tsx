import type { Metadata, Viewport } from "next";
import { Nunito, Caveat } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-caveat",
});

export const viewport: Viewport = {
  themeColor: "#f3e8fa",
};

export const metadata: Metadata = {
  title: "Květinka pro Míru",
  description:
    "Všechno nejlepší k svátku, Míro! Vygeneruj si svou unikátní květinu.",
  applicationName: "Květinka pro Míru",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Pro Míru",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${nunito.variable} ${caveat.variable}`}>
      <body className="font-[family-name:var(--font-nunito)] min-h-dvh">{children}</body>
    </html>
  );
}
