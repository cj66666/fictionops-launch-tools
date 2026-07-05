import { describe, expect, it } from "vitest";
import { communityRules } from "@/data/communityRules";

describe("communityRules", () => {
  it("has source URLs and reviewed dates for every community", () => {
    for (const rule of communityRules) {
      expect(rule.url).toMatch(/^https:\/\//);
      expect(rule.lastReviewed).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("has allowed, risky, and do-not-do sections for every community", () => {
    for (const rule of communityRules) {
      expect(rule.allowed.length).toBeGreaterThan(0);
      expect(rule.risky.length).toBeGreaterThan(0);
      expect(rule.doNotDo.length).toBeGreaterThan(0);
    }
  });
});
