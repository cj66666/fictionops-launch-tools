import { describe, expect, it } from "vitest";
import { isValidPreviewEmail } from "@/lib/signup";

describe("isValidPreviewEmail", () => {
  it("accepts a normal email address", () => {
    expect(isValidPreviewEmail("author@example.com")).toBe(true);
  });

  it("trims surrounding whitespace", () => {
    expect(isValidPreviewEmail(" author@example.com ")).toBe(true);
  });

  it("rejects empty and malformed emails", () => {
    expect(isValidPreviewEmail("")).toBe(false);
    expect(isValidPreviewEmail("@")).toBe(false);
    expect(isValidPreviewEmail("@example.com")).toBe(false);
    expect(isValidPreviewEmail("author@example")).toBe(false);
  });
});
