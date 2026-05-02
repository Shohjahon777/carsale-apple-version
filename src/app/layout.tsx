import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://carsale.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
  },
  title: "Carsale — Automation for car dealerships",
  description:
    "One system for car dealers — sales, CRM, call center, pre-sale prep, and parts. Seven modules, one calm roof.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Carsale — Automation for car dealerships",
    description:
      "One system for car dealers — sales, CRM, call center, pre-sale prep, and parts. Seven modules, one calm roof.",
    url: "/",
    siteName: "Carsale",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carsale — Automation for car dealerships",
    description:
      "One system for car dealers — sales, CRM, call center, pre-sale prep, and parts. Seven modules, one calm roof.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body data-typo="grotesk" data-density="default" data-theme="light">
        {children}
      </body>
    </html>
  );
}
