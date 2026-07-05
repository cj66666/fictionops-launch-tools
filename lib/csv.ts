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

const swapCsvKeyMap: Array<keyof Omit<SwapRecord, "id">> = [
  "author",
  "story",
  "royalRoadUrl",
  "genreFit",
  "followerTier",
  "contactChannel",
  "agreedDate",
  "insertionLocation",
  "snippet",
  "status",
  "notes"
];

const validSwapStatuses = new Set([
  "prospect",
  "contacted",
  "agreed",
  "scheduled",
  "posted",
  "confirmed",
  "stale"
]);

export function fromCsv(csv: string): SwapRecord[] {
  const rows = parseCsvRows(csv).filter((row) => row.some((cell) => cell.trim()));
  if (rows.length <= 1) return [];

  const headers = rows[0].map((header) => header.trim());
  const headerMatches = swapCsvHeaders.every((header, index) => headers[index] === header);
  if (!headerMatches) {
    throw new Error("CSV headers do not match the shoutout swap export format.");
  }

  return rows.slice(1).map((row, rowIndex) => {
    const record = Object.fromEntries(
      swapCsvKeyMap.map((key, index) => [key, row[index]?.trim() ?? ""])
    ) as Omit<SwapRecord, "id">;

    if (!validSwapStatuses.has(record.status)) {
      record.status = "prospect";
    }

    return {
      ...record,
      id: `imported-swap-${Date.now()}-${rowIndex}`
    };
  });
}

function parseCsvRows(csv: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < csv.length; index += 1) {
    const char = csv[index];
    const next = csv[index + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell);
  rows.push(row);
  return rows;
}

function escapeCsvCell(value: string) {
  if (!/[",\n\r]/.test(value)) return value;
  return `"${value.replace(/"/g, '""')}"`;
}
