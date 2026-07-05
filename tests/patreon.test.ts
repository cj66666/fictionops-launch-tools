import { describe, expect, it } from "vitest";
import { calculatePatreon, defaultPatreonInput } from "@/lib/patreon";

describe("calculatePatreon", () => {
  it("computes conservative, base, and optimistic scenarios", () => {
    const result = calculatePatreon(defaultPatreonInput);

    expect(result.scenarios).toHaveLength(3);
    expect(result.scenarios[0].patrons).toBe(9);
    expect(result.scenarios[1].patrons).toBe(26);
    expect(result.scenarios[2].patrons).toBe(51);
  });

  it("handles zero followers", () => {
    const result = calculatePatreon({ ...defaultPatreonInput, followers: 0 });

    expect(result.scenarios.every((scenario) => scenario.patrons === 0)).toBe(true);
  });

  it("handles zero conversion rate", () => {
    const result = calculatePatreon({
      ...defaultPatreonInput,
      conversionRates: { conservative: 0, base: 0, optimistic: 0 }
    });

    expect(result.scenarios.every((scenario) => scenario.monthlyRevenue === 0)).toBe(true);
  });

  it("calculates finite backlog runway when paid cadence exceeds public cadence", () => {
    const result = calculatePatreon({
      ...defaultPatreonInput,
      advanceChapters: 12,
      publicChaptersPerWeek: 3,
      paidChaptersPerWeek: 5
    });

    expect(result.backlogRunwayWeeks).toBe(6);
  });

  it("warns when backlog runway is thin", () => {
    const result = calculatePatreon({
      ...defaultPatreonInput,
      advanceChapters: 4,
      publicChaptersPerWeek: 3,
      paidChaptersPerWeek: 5
    });

    expect(result.warnings.some((warning) => warning.includes("Backlog runway"))).toBe(true);
  });

  it("treats NaN inputs as zero instead of leaking NaN into output", () => {
    const result = calculatePatreon({
      ...defaultPatreonInput,
      followers: Number.NaN,
      advanceChapters: Number.NaN,
      publicChaptersPerWeek: Number.NaN,
      paidChaptersPerWeek: 5,
      conversionRates: {
        conservative: Number.NaN,
        base: Number.NaN,
        optimistic: Number.NaN
      }
    });

    expect(result.scenarios.every((scenario) => scenario.patrons === 0)).toBe(true);
    expect(result.scenarios.every((scenario) => scenario.monthlyRevenue === 0)).toBe(true);
    expect(result.backlogRunwayWeeks).toBe(0);
    expect(result.warnings).toContain("Follower base is still early. Use Patreon planning cautiously.");
    expect(result.warnings).toContain("Advance chapter buffer is thin for a paid promise.");
  });
});
