import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { BRAND, SITE } from "@/lib/constants";
import "./globals.css";

/** Tiêu đề / display */
const displayFont = Montserrat({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
});

/** Phụ đề / body — Gilroy */
const bodyFont = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cogioithienan.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} | ${SITE.slogan}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: siteUrl,
    siteName: SITE.name,
    images: [{ url: BRAND.cover, width: 1200, height: 630, alt: SITE.name }],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [BRAND.cover],
  },
  icons: {
    icon: BRAND.avatar,
    apple: BRAND.avatar,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd />
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}
