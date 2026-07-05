import { seoPages } from "@/data/seoPages";
import { absoluteUrl } from "@/lib/metadata";
import { siteDescription, siteFeedPath, siteName } from "@/lib/site";

const feedUpdatedAt = "2026-07-05T00:00:00.000Z";
const fallbackPublishedAt = "2026-07-05";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildRssFeed() {
  const guideItems = seoPages.filter((page) => page.type === "guide");
  const itemXml = guideItems
    .map((page) => {
      const url = absoluteUrl(`/guides/${page.slug}`);
      const publishedAt = page.publishedAt ?? fallbackPublishedAt;
      return [
        "<item>",
        `<title>${escapeXml(page.title)}</title>`,
        `<link>${escapeXml(url)}</link>`,
        `<guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `<description>${escapeXml(page.description)}</description>`,
        `<pubDate>${new Date(publishedAt).toUTCString()}</pubDate>`,
        "</item>"
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    `<title>${escapeXml(`${siteName} Guides`)}</title>`,
    `<link>${escapeXml(absoluteUrl("/blog"))}</link>`,
    `<description>${escapeXml(siteDescription)}</description>`,
    "<language>en</language>",
    `<atom:link href="${escapeXml(absoluteUrl(siteFeedPath))}" rel="self" type="application/rss+xml"/>`,
    `<lastBuildDate>${new Date(feedUpdatedAt).toUTCString()}</lastBuildDate>`,
    itemXml,
    "</channel>",
    "</rss>"
  ].join("\n");
}
