import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";

describe("public site routes", () => {
  it("keeps the marketing shell routes in the sitemap", () => {
    const urls = sitemap().map((entry) => new URL(entry.url).pathname);

    expect(urls).toEqual(
      expect.arrayContaining([
        "/",
        "/app",
        "/tools",
        "/features",
        "/pricing",
        "/blog",
        "/feedback",
        "/privacy",
        "/terms"
      ])
    );
  });

  it("keeps placeholder auth pages out of the sitemap", () => {
    const urls = sitemap().map((entry) => new URL(entry.url).pathname);

    expect(urls).not.toContain("/login");
    expect(urls).not.toContain("/signup");
  });

  it("keeps the RSS feed out of the sitemap while route checks cover it directly", () => {
    const urls = sitemap().map((entry) => new URL(entry.url).pathname);

    expect(urls).not.toContain("/feed.xml");
  });

  it("uses stable content dates for sitemap entries", () => {
    const launchPlan = sitemap().find((entry) => entry.url.endsWith("/tools/royal-road-launch-plan"));

    expect(launchPlan?.lastModified).toEqual(new Date("2026-07-13"));
  });
});
