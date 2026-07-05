import { describe, expect, it } from "vitest";
import { defaultLaunchInput, generateLaunchPlan } from "@/lib/launchPlan";

describe("generateLaunchPlan", () => {
  it("warns below 10k words", () => {
    const plan = generateLaunchPlan({ ...defaultLaunchInput, currentWordCount: 8000 });

    expect(plan.warnings.some((warning) => warning.includes("below 10k"))).toBe(true);
    expect(plan.readinessScore).toBeLessThan(100);
  });

  it("warns below 20k words", () => {
    const plan = generateLaunchPlan({ ...defaultLaunchInput, currentWordCount: 15000 });

    expect(plan.warnings.some((warning) => warning.includes("below 20k"))).toBe(true);
  });

  it("warns when stockpile cannot cover cadence", () => {
    const plan = generateLaunchPlan({
      ...defaultLaunchInput,
      publicChaptersPerWeek: 7,
      stockpiledChapters: 4
    });

    expect(plan.warnings.some((warning) => warning.includes("Stockpile covers"))).toBe(true);
  });

  it("includes day -14, day 0, and day +30 tasks", () => {
    const plan = generateLaunchPlan(defaultLaunchInput);
    const offsets = plan.checklist.map((task) => task.dayOffset);

    expect(offsets).toContain(-14);
    expect(offsets).toContain(0);
    expect(offsets).toContain(30);
  });

  it("does not use guaranteed Rising Stars language", () => {
    const plan = generateLaunchPlan(defaultLaunchInput);

    expect(plan.markdown.toLowerCase()).not.toContain("guaranteed");
  });
});
