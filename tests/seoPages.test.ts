import { describe, expect, it } from "vitest";
import { findSeoPage, seoPages } from "@/data/seoPages";

function seoPageWordCount(page: (typeof seoPages)[number]) {
  const content = [
    page.title,
    page.description,
    page.intent,
    ...(page.contentSections ?? []).flatMap((section) => [section.title, section.body, ...(section.bullets ?? [])])
  ].join(" ");

  return content.match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)?/g)?.length ?? 0;
}

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
      "Royal Road Average Views: Views vs Followers"
    );
    expect(findSeoPage("royal-road-views-vs-followers", "tool")).toBeUndefined();
  });

  it("packages the Patreon calculator as an acquisition page", () => {
    const page = findSeoPage("royal-road-patreon-calculator", "tool");

    expect(page?.ctaHref).toBe("/app#patreon");
    expect(page?.proofPoints?.length).toBeGreaterThanOrEqual(3);
    expect(page?.contentSections?.some((section) => section.title === "How to read the result")).toBe(true);
    expect(page?.contentSections?.some((section) => section.title === "What it deliberately does not benchmark")).toBe(true);
    expect(page?.trustNotes).toContain("No Patreon login is required.");
  });

  it("does not route Patreon calculator visitors to a direct competitor", () => {
    const page = findSeoPage("royal-road-patreon-calculator", "tool");

    expect(page?.sources.some((source) => source.includes("chapterchronicles.com"))).toBe(false);
  });

  it("aligns the second-week pages with validated search intent", () => {
    expect(findSeoPage("royal-road-launch-plan", "tool")?.primaryKeyword).toBe(
      "royal road launch checklist"
    );
    expect(findSeoPage("shoutout-swap-tracker", "tool")?.primaryKeyword).toBe(
      "royal road shoutout swap tracker"
    );
    expect(findSeoPage("royal-road-views-vs-followers", "guide")?.primaryKeyword).toBe(
      "royal road average views"
    );
    expect(findSeoPage("royal-road-rising-stars", "guide")?.primaryKeyword).toBe(
      "royal road rising stars readiness checklist"
    );
  });

  it("has structured content for every SEO page", () => {
    for (const page of seoPages) {
      expect(page.ctaHref).toMatch(/^\/(#|app#|tools|guides)?/);
      expect(page.contentSections?.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("keeps guide pages substantive enough for public launch", () => {
    const thinGuides = seoPages
      .filter((page) => page.type === "guide")
      .map((page) => ({ slug: page.slug, words: seoPageWordCount(page) }))
      .filter((page) => page.words < 650);

    expect(thinGuides).toEqual([]);
  });
});
