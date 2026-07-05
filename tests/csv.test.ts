import { describe, expect, it } from "vitest";
import { toCsv } from "@/lib/csv";
import type { SwapRecord } from "@/lib/types";

describe("toCsv", () => {
  it("exports headers for empty swap table", () => {
    expect(toCsv([])).toContain("Author,Story,Royal Road URL");
  });

  it("escapes commas, quotes, and line breaks", () => {
    const record: SwapRecord = {
      id: "1",
      author: 'A "Quoted" Author',
      story: "Comma, Story",
      royalRoadUrl: "https://example.com",
      genreFit: "Progression",
      followerTier: "500-1k",
      contactChannel: "Discord",
      agreedDate: "2026-07-20",
      insertionLocation: "Chapter 5",
      snippet: "Line one\nLine two",
      status: "agreed",
      notes: ""
    };

    const csv = toCsv([record]);

    expect(csv).toContain('"A ""Quoted"" Author"');
    expect(csv).toContain('"Comma, Story"');
    expect(csv).toContain('"Line one\nLine two"');
  });
});
