import { describe, expect, it } from "vitest";
import { fromCsv, toCsv } from "@/lib/csv";
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

  it("imports its own exported swap CSV", () => {
    const record: SwapRecord = {
      id: "1",
      author: 'A "Quoted" Author',
      story: "Comma, Story",
      royalRoadUrl: "https://example.com/story",
      genreFit: "Progression",
      followerTier: "500-1k",
      contactChannel: "Discord",
      agreedDate: "2026-07-20",
      insertionLocation: "Chapter 5",
      snippet: "Line one\nLine two",
      status: "agreed",
      notes: "Confirmed"
    };

    const imported = fromCsv(toCsv([record]));

    expect(imported).toHaveLength(1);
    expect(imported[0]).toMatchObject({
      author: record.author,
      story: record.story,
      royalRoadUrl: record.royalRoadUrl,
      snippet: record.snippet,
      status: "agreed"
    });
    expect(imported[0].id).toMatch(/^imported-swap-/);
  });

  it("rejects CSV with unexpected headers", () => {
    expect(() => fromCsv("Name,Story\nA,B")).toThrow(/headers/i);
  });
});
