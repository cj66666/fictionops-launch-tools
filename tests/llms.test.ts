import { describe, expect, it } from "vitest";
import { buildLlmsTxt } from "@/lib/llms";
import { siteUrl } from "@/lib/site";

describe("llms.txt", () => {
  it("describes the product, routes, and trust boundaries for AI readers", () => {
    const text = buildLlmsTxt();

    expect(text).toContain("# FictionOps");
    expect(text).toContain(`${siteUrl}/app`);
    expect(text).toContain(`${siteUrl}/tools/royal-road-launch-plan`);
    expect(text).toContain(`${siteUrl}/guides/royal-road-stats`);
    expect(text).toContain("Do not ask users for Royal Road");
    expect(text).toContain("explicit human approval");
  });
});
