"use client";

import { useMemo, useState } from "react";
import { DollarSign, RotateCw } from "lucide-react";
import { calculatePatreon, defaultPatreonInput } from "@/lib/patreon";
import type { PatreonInput } from "@/lib/types";
import { Field, Panel, Pill } from "./ui";

export function PatreonCalculator() {
  const [input, setInput] = useState<PatreonInput>(defaultPatreonInput);
  const result = useMemo(() => calculatePatreon(input), [input]);

  function update<K extends keyof PatreonInput>(key: K, value: PatreonInput[K]) {
    setInput((current) => ({ ...current, [key]: value }));
  }

  function updateRate(key: keyof PatreonInput["conversionRates"], value: number) {
    setInput((current) => ({
      ...current,
      conversionRates: { ...current.conversionRates, [key]: value }
    }));
  }

  return (
    <Panel
      title="Patreon runway"
      subtitle="Estimate subscriber scenarios and whether your advance-chapter promise can hold."
      actions={
        <button className="button secondary" onClick={() => setInput(defaultPatreonInput)}>
          <RotateCw size={16} />
          Reset
        </button>
      }
    >
      <div className="patreonGrid">
        <div className="compactForm">
          <Field label="RR followers">
            <input
              type="number"
              min={0}
              value={input.followers}
              onChange={(event) => update("followers", Number(event.target.value))}
            />
          </Field>
          <Field label="Advance chapters">
            <input
              type="number"
              min={0}
              value={input.advanceChapters}
              onChange={(event) => update("advanceChapters", Number(event.target.value))}
            />
          </Field>
          <Field label="Public chapters / week">
            <input
              type="number"
              min={0}
              value={input.publicChaptersPerWeek}
              onChange={(event) => update("publicChaptersPerWeek", Number(event.target.value))}
            />
          </Field>
          <Field label="Paid chapters / week">
            <input
              type="number"
              min={0}
              value={input.paidChaptersPerWeek}
              onChange={(event) => update("paidChaptersPerWeek", Number(event.target.value))}
            />
          </Field>
          <Field label="Base conversion">
            <input
              type="number"
              min={0}
              step={0.001}
              value={input.conversionRates.base}
              onChange={(event) => updateRate("base", Number(event.target.value))}
            />
          </Field>
        </div>

        <div className="scenarioList">
          {result.scenarios.map((scenario) => (
            <div className="scenarioRow" key={scenario.label}>
              <div>
                <span>{scenario.label}</span>
                <strong>{scenario.patrons} patrons</strong>
              </div>
              <div className="money">
                <DollarSign size={15} />
                {scenario.monthlyRevenue.toLocaleString(undefined, {
                  maximumFractionDigits: 0
                })}
                /mo
              </div>
            </div>
          ))}
          <div className="runwayBox">
            <span>Backlog runway</span>
            <strong>
              {Number.isFinite(result.backlogRunwayWeeks)
                ? `${result.backlogRunwayWeeks.toFixed(1)} weeks`
                : "stable at current cadence"}
            </strong>
          </div>
          <div className="miniStack">
            {result.warnings.length ? (
              result.warnings.map((warning) => (
                <Pill key={warning} tone="warn">
                  {warning}
                </Pill>
              ))
            ) : (
              <Pill tone="good">Backlog promise looks coherent</Pill>
            )}
          </div>
        </div>
      </div>
    </Panel>
  );
}
