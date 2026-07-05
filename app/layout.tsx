import type { Metadata } from "next";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { absoluteUrl } from "@/lib/metadata";
import { getSearchVerification } from "@/lib/searchVerification";
import {
  siteDescription,
  siteFeedPath,
  siteName,
  siteSocialImageAlt,
  siteSocialImagePath,
  siteUrl
} from "@/lib/site";
import "./globals.css";

const socialImage = {
  url: absoluteUrl(siteSocialImagePath),
  width: 1200,
  height: 630,
  alt: siteSocialImageAlt
};

const searchVerification = getSearchVerification();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "FictionOps - Royal Road Launch Tools",
    template: `%s - ${siteName}`
  },
  description: siteDescription,
  alternates: {
    canonical: absoluteUrl("/"),
    types: {
      "application/rss+xml": absoluteUrl(siteFeedPath)
    }
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: "/apple-icon.png"
  },
  openGraph: {
    title: "FictionOps - Royal Road Launch Tools",
    description: siteDescription,
    url: absoluteUrl("/"),
    siteName,
    images: [socialImage],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FictionOps - Royal Road Launch Tools",
    description: siteDescription,
    images: [socialImage.url]
  },
  verification:
    searchVerification.google || searchVerification.other
      ? searchVerification
      : undefined
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
