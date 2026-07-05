import type { SwapRecord } from "./types";

export const swapCsvHeaders = [
  "Author",
  "Story",
  "Royal Road URL",
  "Genre fit",
  "Follower tier",
  "Contact channel",
  "Agreed date",
  "Insertion location",
  "Snippet",
  "Status",
  "Notes"
];

export function toCsv(records: SwapRecord[]) {
  const rows = records.map((record) => [
    record.author,
    record.story,
    record.royalRoadUrl,
    record.genreFit,
    record.followerTier,
    record.contactChannel,
    record.agreedDate,
    record.insertionLocation,
    record.snippet,
    record.status,
    record.notes
  ]);

  return [swapCsvHeaders, ...rows].map((row) => row.map(escapeCsvCell).join(",")).join("\n");
}

function escapeCsvCell(value: string) {
  if (!/[",\n\r]/.test(value)) return value;
  return `"${value.replace(/"/g, '""')}"`;
}
