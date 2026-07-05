import { describe, expect, it } from "vitest";
import { buildFeedbackBrief, feedbackBoundaries, feedbackQuestions } from "@/data/feedbackKit";

describe("feedback kit", () => {
  it("builds a copyable feedback brief from every question and boundary", () => {
    const brief = buildFeedbackBrief();

    for (const question of feedbackQuestions) {
      expect(brief).toContain(question);
    }

    for (const boundary of feedbackBoundaries) {
      expect(brief).toContain(boundary);
    }
  });

  it("keeps the feedback kit local-only", () => {
    const brief = buildFeedbackBrief().toLowerCase();

    expect(brief).toContain("no email is sent or stored");
    expect(brief).not.toContain("submit");
    expect(brief).not.toContain("subscribe");
  });
});
