import { describe, expect, it } from "vitest";
import { findSeoPage, seoPages } from "@/data/seoPages";

describe("seo pages", () => {
  it("keeps related links resolvable", () => {
    const slugs = new Set(seoPages.map((page) => page.slug));
    const missing = seoPages.flatMap((page) =>
      page.related.filter((related) => !slugs.has(related)).map((related) => `${page.slug} -> ${related}`)
    );

    expect(missing).toEqual([]);
  });

  it("finds pages by slug and type", () => {
    expect(findSeoPage("royal-road-views-vs-followers", "guide")?.title).toBe(
      "Royal Road Views vs Followers"
    );
    expect(findSeoPage("royal-road-views-vs-followers", "tool")).toBeUndefined();
  });

  it("packages the Patreon calculator as an acquisition page", () => {
    const page = findSeoPage("royal-road-patreon-calculator", "tool");

    expect(page?.ctaHref).toBe("/app#patreon");
    expect(page?.proofPoints?.length).toBeGreaterThanOrEqual(3);
    expect(page?.contentSections?.some((section) => section.title === "How to read the result")).toBe(true);
    expect(page?.trustNotes).toContain("No Patreon login is required.");
  });

  it("has structured content for every SEO page", () => {
    for (const page of seoPages) {
      expect(page.ctaHref).toMatch(/^\/(#|app#|tools|guides)?/);
      expect(page.contentSections?.length).toBeGreaterThanOrEqual(2);
    }
  });
});
