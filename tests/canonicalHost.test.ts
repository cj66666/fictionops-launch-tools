import { describe, expect, it } from "vitest";
import { canonicalHostRedirectUrl } from "@/lib/canonicalHost";

describe("canonicalHostRedirectUrl", () => {
  it("redirects www FictionOps URLs to the apex canonical host", () => {
    const redirectUrl = canonicalHostRedirectUrl(
      "https://www.fictionops.com/guides/royal-road-stats?ref=test",
      "www.fictionops.com"
    );

    expect(redirectUrl?.toString()).toBe("https://fictionops.com/guides/royal-road-stats?ref=test");
  });

  it("does not redirect the apex canonical host", () => {
    expect(canonicalHostRedirectUrl("https://fictionops.com/app", "fictionops.com")).toBeNull();
  });

  it("does not redirect local preview hosts", () => {
    expect(canonicalHostRedirectUrl("http://127.0.0.1:3102/app", "127.0.0.1:3102")).toBeNull();
  });

  it("drops non-standard ports when redirecting to the public canonical host", () => {
    const redirectUrl = canonicalHostRedirectUrl(
      "http://www.fictionops.com:3112/app",
      "www.fictionops.com:3112"
    );

    expect(redirectUrl?.toString()).toBe("https://fictionops.com/app");
  });
});
