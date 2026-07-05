import { describe, expect, it } from "vitest";
import { sampleSwaps } from "@/data/swaps";

describe("sample swaps", () => {
  it("does not seed clickable fake Royal Road story URLs", () => {
    expect(sampleSwaps.map((swap) => swap.royalRoadUrl)).toEqual(["", ""]);
  });
});
