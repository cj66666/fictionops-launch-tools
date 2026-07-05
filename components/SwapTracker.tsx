"use client";

import { useMemo, useState } from "react";
import { Download, Plus, Trash2 } from "lucide-react";
import { sampleSwaps } from "@/data/swaps";
import { downloadText } from "@/lib/download";
import { toCsv } from "@/lib/csv";
import type { SwapRecord, SwapStatus } from "@/lib/types";
import { Field, Panel, Pill } from "./ui";

const statuses: SwapStatus[] = [
  "prospect",
  "contacted",
  "agreed",
  "scheduled",
  "posted",
  "confirmed",
  "stale"
];

const blankSwap: Omit<SwapRecord, "id"> = {
  author: "",
  story: "",
  royalRoadUrl: "",
  genreFit: "",
  followerTier: "",
  contactChannel: "",
  agreedDate: "",
  insertionLocation: "",
  snippet: "",
  status: "prospect",
  notes: ""
};

export function SwapTracker() {
  const [records, setRecords] = useState<SwapRecord[]>(sampleSwaps);
  const missingCount = useMemo(
    () => records.filter((record) => !record.author || !record.story || !record.agreedDate).length,
    [records]
  );

  function addRecord() {
    setRecords((current) => [
      ...current,
      {
        ...blankSwap,
        id: `swap-${Date.now()}`
      }
    ]);
  }

  function updateRecord<K extends keyof SwapRecord>(id: string, key: K, value: SwapRecord[K]) {
    setRecords((current) =>
      current.map((record) => (record.id === id ? { ...record, [key]: value } : record))
    );
  }

  function deleteRecord(id: string) {
    setRecords((current) => current.filter((record) => record.id !== id));
  }

  return (
    <Panel
      title="Shoutout swaps"
      subtitle="Track fit, snippets, dates, and confirmation status without losing the thread."
      actions={
        <>
          <button className="button secondary" onClick={addRecord}>
            <Plus size={16} />
            Add swap
          </button>
          <button
            className="button secondary"
            onClick={() => downloadText("shoutout-swaps.csv", toCsv(records), "text/csv;charset=utf-8")}
          >
            <Download size={16} />
            CSV
          </button>
        </>
      }
    >
      <div className="swapSummary">
        <Pill tone={records.length > 0 ? "good" : "warn"}>{records.length} partners</Pill>
        <Pill tone={missingCount === 0 ? "good" : "warn"}>{missingCount} missing essentials</Pill>
        <span>Fit first. No fake reviews, irrelevant recs, or mass outreach.</span>
      </div>
      <div className="tableShell">
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Story</th>
              <th>Fit</th>
              <th>Date</th>
              <th>Status</th>
              <th>Snippet</th>
              <th aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>
                  <input
                    aria-label="Author"
                    value={record.author}
                    onChange={(event) => updateRecord(record.id, "author", event.target.value)}
                  />
                </td>
                <td>
                  <input
                    aria-label="Story"
                    value={record.story}
                    onChange={(event) => updateRecord(record.id, "story", event.target.value)}
                  />
                </td>
                <td>
                  <input
                    aria-label="Genre fit"
                    value={record.genreFit}
                    onChange={(event) => updateRecord(record.id, "genreFit", event.target.value)}
                  />
                </td>
                <td>
                  <input
                    aria-label="Agreed date"
                    type="date"
                    value={record.agreedDate}
                    onChange={(event) => updateRecord(record.id, "agreedDate", event.target.value)}
                  />
                </td>
                <td>
                  <select
                    aria-label="Status"
                    value={record.status}
                    onChange={(event) =>
                      updateRecord(record.id, "status", event.target.value as SwapStatus)
                    }
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    aria-label="Snippet"
                    value={record.snippet}
                    onChange={(event) => updateRecord(record.id, "snippet", event.target.value)}
                  />
                </td>
                <td>
                  <button className="iconButton" onClick={() => deleteRecord(record.id)} aria-label="Delete swap">
                    <Trash2 size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="swapDetails">
        <Field label="Swap-ready checklist">
          <textarea
            readOnly
            value={`1. Story fit is obvious to readers\n2. Date and insertion chapter are agreed\n3. Snippet is approved\n4. Both sides can verify when posted\n5. No fake reviews or spam outreach`}
          />
        </Field>
      </div>
    </Panel>
  );
}
