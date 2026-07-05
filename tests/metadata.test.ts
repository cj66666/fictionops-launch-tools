import { describe, expect, it } from "vitest";
import { absoluteUrl, buildPageMetadata, withSiteName } from "@/lib/metadata";
import { siteFeedPath, siteName, siteSocialImagePath, siteUrl } from "@/lib/site";

describe("metadata helpers", () => {
  it("builds stable absolute URLs without trailing slashes", () => {
    expect(absoluteUrl("/")).toBe(siteUrl);
    expect(absoluteUrl("/feedback/")).toBe(`${siteUrl}/feedback`);
    expect(absoluteUrl("tools/royal-road-launch-plan")).toBe(
      `${siteUrl}/tools/royal-road-launch-plan`
    );
  });

  it("adds canonical and social metadata for public pages", () => {
    const metadata = buildPageMetadata({
      title: "Feedback Kit",
      description: "Collect structured feedback without connecting accounts.",
      path: "/feedback"
    });

    expect(metadata.alternates?.canonical).toBe(`${siteUrl}/feedback`);
    expect(metadata.alternates?.types).toEqual({
      "application/rss+xml": `${siteUrl}${siteFeedPath}`
    });
    expect(metadata.openGraph?.url).toBe(`${siteUrl}/feedback`);
    expect(metadata.openGraph?.title).toBe(`Feedback Kit - ${siteName}`);
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        url: `${siteUrl}${siteSocialImagePath}`,
        width: 1200,
        height: 630
      })
    ]);
    expect(metadata.twitter?.card).toBe("summary_large_image");
    expect(metadata.twitter?.images).toEqual([`${siteUrl}${siteSocialImagePath}`]);
  });

  it("does not duplicate the site name in social titles", () => {
    expect(withSiteName(`Launch Tools - ${siteName}`)).toBe(`Launch Tools - ${siteName}`);
  });
});
