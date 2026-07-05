import { describe, expect, it } from "vitest";
import { analyticsCspSources, analyticsEventsEnabled, getAnalyticsConfig } from "@/lib/analytics";

describe("getAnalyticsConfig", () => {
  it("keeps analytics disabled without an approved provider", () => {
    expect(getAnalyticsConfig({}).enabled).toBe(false);
  });

  it("enables Vercel Analytics from provider config", () => {
    const config = getAnalyticsConfig({ NEXT_PUBLIC_ANALYTICS_PROVIDER: "vercel" });

    expect(config.enabled).toBe(true);
    expect(config.provider).toBe("vercel");
    expect(config.scriptSrc).toBe("/_vercel/insights/script.js");
  });

  it("requires a domain before enabling Plausible", () => {
    expect(getAnalyticsConfig({ NEXT_PUBLIC_ANALYTICS_PROVIDER: "plausible" }).enabled).toBe(false);

    const config = getAnalyticsConfig({
      NEXT_PUBLIC_ANALYTICS_PROVIDER: "plausible",
      NEXT_PUBLIC_ANALYTICS_DOMAIN: "fictionops.com"
    });

    expect(config.enabled).toBe(true);
    expect(config.scriptSrc).toBe("https://plausible.io/js/script.js");
    expect(config.domain).toBe("fictionops.com");
  });

  it("requires a website id before enabling Umami", () => {
    expect(getAnalyticsConfig({ NEXT_PUBLIC_ANALYTICS_PROVIDER: "umami" }).enabled).toBe(false);

    const config = getAnalyticsConfig({
      NEXT_PUBLIC_ANALYTICS_PROVIDER: "umami",
      NEXT_PUBLIC_UMAMI_WEBSITE_ID: "site-id",
      NEXT_PUBLIC_UMAMI_HOST_URL: "https://analytics.example.com/"
    });

    expect(config.enabled).toBe(true);
    expect(config.scriptSrc).toBe("https://analytics.example.com/script.js");
    expect(config.websiteId).toBe("site-id");
  });

  it("derives CSP sources for enabled providers", () => {
    expect(analyticsCspSources(getAnalyticsConfig({}))).toEqual({ scriptSrc: "", connectSrc: "" });
    expect(
      analyticsCspSources(
        getAnalyticsConfig({
          NEXT_PUBLIC_ANALYTICS_PROVIDER: "plausible",
          NEXT_PUBLIC_ANALYTICS_DOMAIN: "fictionops.com"
        })
      )
    ).toEqual({ scriptSrc: "https://plausible.io", connectSrc: "https://plausible.io" });
  });

  it("enables custom events only when analytics is active", () => {
    expect(analyticsEventsEnabled(getAnalyticsConfig({}))).toBe(false);
    expect(
      analyticsEventsEnabled(getAnalyticsConfig({ NEXT_PUBLIC_ANALYTICS_PROVIDER: "vercel" }))
    ).toBe(true);
  });
});
