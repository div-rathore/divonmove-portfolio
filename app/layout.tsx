import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
  Syne,
} from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://divyanshurathore.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "divonmove | Fitness, Running & Lifestyle Creator",
    template: "%s | divonmove",
  },
  description:
    "Explore divonmove's (Divyanshu Rathore) fitness and lifestyle content, brand collaborations, campaign results, and partnership opportunities.",
  keywords: [
    "divonmove",
    "Divyanshu Rathore",
    "Fitness Creator India",
    "Running Creator India",
    "HYROX Athlete India",
    "Hybrid Athlete Content Creator",
    "Brand Collaborations Fitness",
    "Creator Media Kit",
  ],
  authors: [{ name: "divonmove" }],
  creator: "divonmove",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "divonmove — Creator Portfolio & Media Kit",
    title: "divonmove | Fitness, Running & Lifestyle Creator",
    description:
      "Explore divonmove's fitness and lifestyle content, brand collaborations, campaign results, and partnership opportunities.",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "divonmove — Fitness, Running, HYROX & Lifestyle Creator Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "divonmove | Fitness, Running & Lifestyle Creator",
    description:
      "Explore divonmove's fitness and lifestyle content, brand collaborations, campaign results, and partnership opportunities.",
    images: ["/images/og-cover.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#F7F5F0] text-[#141311] antialiased selection:bg-[#141311] selection:text-[#F7F5F0]">
        {children}
      </body>
    </html>
  );
}

