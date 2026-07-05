import type { Metadata } from "next";
import { siteFeedPath, siteName, siteSocialImageAlt, siteSocialImagePath, siteUrl } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

function normalizePath(path: string) {
  if (!path || path === "/") return "";
  const prefixedPath = path.startsWith("/") ? path : `/${path}`;
  return prefixedPath.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  return `${siteUrl}${normalizePath(path)}`;
}

export function withSiteName(title: string) {
  return title.includes(siteName) ? title : `${title} - ${siteName}`;
}

export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = withSiteName(title);
  const image = {
    url: absoluteUrl(siteSocialImagePath),
    width: 1200,
    height: 630,
    alt: siteSocialImageAlt
  };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": absoluteUrl(siteFeedPath)
      }
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName,
      images: [image],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url]
    }
  };
}
