import type { MetadataRoute } from "next";
import { seoPages } from "@/data/seoPages";
import { siteUrl } from "@/lib/site";

const publicRoutes = [
  { path: "/app", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/tools", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/features", changeFrequency: "monthly" as const, priority: 0.75 },
  { path: "/pricing", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.75 },
  { path: "/feedback", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.2 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = seoPages.map((page) => ({
    url: `${siteUrl}/${page.type === "guide" ? "guides" : "tools"}/${page.slug}`,
    lastModified: new Date(page.updatedAt ?? page.publishedAt ?? now),
    changeFrequency: "weekly" as const,
    priority: page.type === "tool" ? 0.8 : 0.7
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    ...pages,
    ...publicRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority
    }))
  ];
}
