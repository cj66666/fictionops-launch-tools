"use client";

import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { Download, Plus, Trash2, Upload } from "lucide-react";
import { sampleSwaps } from "@/data/swaps";
import { downloadText } from "@/lib/download";
import { fromCsv, toCsv } from "@/lib/csv";
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

const storageKey = "fictionops.shoutoutSwaps.v1";

export function SwapTracker() {
  const [records, setRecords] = useState<SwapRecord[]>(sampleSwaps);
  const [isHydrated, setIsHydrated] = useState(false);
  const [importMessage, setImportMessage] = useState("");
  const importInputRef = useRef<HTMLInputElement>(null);
  const missingCount = useMemo(
    () => records.filter((record) => !record.author || !record.story || !record.agreedDate).length,
    [records]
  );

  useEffect(() => {
    try {
      const storedRecords = window.localStorage.getItem(storageKey);
      if (storedRecords) {
        const parsedRecords = JSON.parse(storedRecords) as SwapRecord[];
        if (Array.isArray(parsedRecords)) {
          setRecords(parsedRecords);
        }
      }
    } catch {
      setImportMessage("Saved swaps could not be loaded. The sample tracker is still usable.");
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(storageKey, JSON.stringify(records));
  }, [isHydrated, records]);

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

  function importCsv(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const importedRecords = fromCsv(String(reader.result ?? ""));
        setRecords(importedRecords);
        setImportMessage(`Imported ${importedRecords.length} swaps. Saved in this browser.`);
      } catch (error) {
        setImportMessage(error instanceof Error ? error.message : "CSV import failed.");
      } finally {
        event.target.value = "";
      }
    };
    reader.readAsText(file);
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
          <button className="button secondary" onClick={() => importInputRef.current?.click()}>
            <Upload size={16} />
            Import
          </button>
          <input
            ref={importInputRef}
            className="hiddenFileInput"
            type="file"
            accept=".csv,text/csv"
            aria-label="Import shoutout swaps CSV"
            onChange={importCsv}
          />
        </>
      }
    >
      <div className="swapSummary">
        <Pill tone={records.length > 0 ? "good" : "warn"}>{records.length} partners</Pill>
        <Pill tone={missingCount === 0 ? "good" : "warn"}>{missingCount} missing essentials</Pill>
        <Pill tone="good">saved locally</Pill>
        <span>Fit first. No fake reviews, irrelevant recs, or mass outreach.</span>
      </div>
      {importMessage ? <p className="inlineNote">{importMessage}</p> : null}
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
