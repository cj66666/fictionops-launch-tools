import { describe, expect, it } from "vitest";

describe("security headers config", () => {
  it("sets conservative baseline browser security headers", async () => {
    const { default: nextConfig } = await import("../next.config.mjs");
    const headerRules = await nextConfig.headers();
    const allHeaders = headerRules.flatMap((rule) => rule.headers);

    expect(allHeaders).toEqual(
      expect.arrayContaining([
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
      ])
    );
    expect(allHeaders.find((header) => header.key === "Permissions-Policy")?.value).toContain(
      "geolocation=()"
    );
    expect(allHeaders.find((header) => header.key === "Permissions-Policy")?.value).not.toContain(
      "interest-cohort"
    );
    expect(
      allHeaders.find((header) => header.key === "Content-Security-Policy-Report-Only")?.value
    ).toContain("default-src 'self'");
    expect(
      allHeaders.find((header) => header.key === "Content-Security-Policy-Report-Only")?.value
    ).toContain("form-action 'self'");
    expect(
      allHeaders.find((header) => header.key === "Content-Security-Policy-Report-Only")?.value
    ).not.toContain("plausible.io");
    expect(headerRules.find((rule) => rule.source === "/:path(login|signup)")?.headers).toEqual([
      { key: "X-Robots-Tag", value: "noindex, follow" }
    ]);
  });
});
