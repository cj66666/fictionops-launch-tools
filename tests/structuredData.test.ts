import { describe, expect, it } from "vitest";
import { findSeoPage } from "@/data/seoPages";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildSoftwareApplicationJsonLd,
  buildWebSiteJsonLd
} from "@/lib/structuredData";
import { siteName, siteUrl } from "@/lib/site";

describe("structured data helpers", () => {
  it("builds website JSON-LD with the configured origin", () => {
    expect(buildWebSiteJsonLd()).toEqual(
      expect.objectContaining({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: siteUrl
      })
    );
  });

  it("builds software application JSON-LD for tool pages", () => {
    const page = findSeoPage("royal-road-launch-plan", "tool");
    expect(page).toBeDefined();

    expect(buildSoftwareApplicationJsonLd(page)).toEqual(
      expect.objectContaining({
        "@type": "SoftwareApplication",
        name: "Royal Road Launch Plan",
        url: `${siteUrl}/tools/royal-road-launch-plan`,
        offers: expect.objectContaining({
          price: "0",
          priceCurrency: "USD"
        })
      })
    );
  });

  it("builds article and breadcrumb JSON-LD for guide pages", () => {
    const page = findSeoPage("royal-road-stats", "guide");
    expect(page).toBeDefined();

    expect(buildArticleJsonLd(page!)).toEqual(
      expect.objectContaining({
        "@type": "Article",
        headline: "Royal Road Stats Explained",
        url: `${siteUrl}/guides/royal-road-stats`,
        datePublished: "2026-07-04",
        dateModified: "2026-07-05"
      })
    );

    expect(
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: page!.title, path: `/guides/${page!.slug}` }
      ])
    ).toEqual(
      expect.objectContaining({
        "@type": "BreadcrumbList",
        itemListElement: expect.arrayContaining([
          expect.objectContaining({
            position: 3,
            item: `${siteUrl}/guides/royal-road-stats`
          })
        ])
      })
    );
  });
});
