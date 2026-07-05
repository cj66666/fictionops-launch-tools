import { describe, expect, it } from "vitest";
import { buildRssFeed } from "@/lib/feed";
import { siteUrl } from "@/lib/site";

describe("RSS feed", () => {
  it("builds an RSS feed for guide pages", () => {
    const feed = buildRssFeed();

    expect(feed).toContain('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">');
    expect(feed).toContain("<title>FictionOps Guides</title>");
    expect(feed).toContain("<language>en</language>");
    expect(feed).toContain('rel="self" type="application/rss+xml"');
    expect(feed).toContain(`${siteUrl}/guides/royal-road-stats`);
    expect(feed).toContain("Royal Road Stats Explained");
  });

  it("escapes XML-sensitive characters", () => {
    const feed = buildRssFeed();

    expect(feed).not.toContain(" & ");
  });
});
