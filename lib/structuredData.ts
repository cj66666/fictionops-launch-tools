import type { SeoPage } from "@/lib/types";
import { absoluteUrl } from "@/lib/metadata";
import { siteDescription, siteName, siteSocialImagePath } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

const publisher = {
  "@type": "Organization",
  name: siteName,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/favicon.svg")
};

const fallbackDate = "2026-07-05";

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: absoluteUrl("/"),
    description: siteDescription,
    publisher
  };
}

export function buildSoftwareApplicationJsonLd(page?: SeoPage) {
  const isToolPage = page?.type === "tool";
  const url = isToolPage ? absoluteUrl(`/tools/${page.slug}`) : absoluteUrl("/app");

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: isToolPage ? page.title : siteName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url,
    image: absoluteUrl(siteSocialImagePath),
    description: isToolPage ? page.description : siteDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    publisher
  };
}

export function buildArticleJsonLd(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    url: absoluteUrl(`/guides/${page.slug}`),
    image: absoluteUrl(siteSocialImagePath),
    datePublished: page.publishedAt ?? fallbackDate,
    dateModified: page.updatedAt ?? page.publishedAt ?? fallbackDate,
    author: publisher,
    publisher,
    mainEntityOfPage: absoluteUrl(`/guides/${page.slug}`)
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
