"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { CalendarDays, ClipboardCopy, Download, Wand2 } from "lucide-react";
import { addDays, dayLabel } from "@/lib/date";
import { copyText, downloadText } from "@/lib/download";
import type { LaunchPlanInput, LaunchPlanOutput } from "@/lib/types";
import { Field, Panel, Pill } from "./ui";

type LaunchPlannerProps = {
  input: LaunchPlanInput;
  onInputChange: Dispatch<SetStateAction<LaunchPlanInput>>;
  plan: LaunchPlanOutput;
};

export function LaunchPlanner({ input, onInputChange, plan }: LaunchPlannerProps) {
  const [copied, setCopied] = useState(false);

  function update<K extends keyof LaunchPlanInput>(key: K, value: LaunchPlanInput[K]) {
    onInputChange((current) => ({ ...current, [key]: value }));
  }

  async function copyPlan() {
    const ok = await copyText(plan.markdown);
    setCopied(ok);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function focusChecklist() {
    document.getElementById("launch-checklist")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  return (
    <Panel
      title="Launch Plan"
      subtitle="Generate a first 30-day operating checklist from your current launch inputs."
      actions={
        <>
          <button className="button secondary" onClick={copyPlan}>
            <ClipboardCopy size={16} />
            {copied ? "Copied" : "Copy plan"}
          </button>
          <button
            className="button primary"
            onClick={() => downloadText("royal-road-launch-plan.md", plan.markdown)}
          >
            <Download size={16} />
            Export plan
          </button>
        </>
      }
      className="launchPanel"
    >
      <div className="launchGrid">
        <div className="formGrid">
          <Field label="Story title">
            <input
              value={input.storyTitle}
              onChange={(event) => update("storyTitle", event.target.value)}
            />
          </Field>
          <Field label="Launch date">
            <input
              type="date"
              value={input.launchDate}
              onChange={(event) => update("launchDate", event.target.value)}
            />
          </Field>
          <Field label="Current words">
            <input
              type="number"
              min={0}
              value={input.currentWordCount}
              onChange={(event) => update("currentWordCount", Number(event.target.value))}
            />
          </Field>
          <Field label="Stockpiled chapters">
            <input
              type="number"
              min={0}
              value={input.stockpiledChapters}
              onChange={(event) => update("stockpiledChapters", Number(event.target.value))}
            />
          </Field>
          <Field label="Average words / chapter">
            <input
              type="number"
              min={0}
              value={input.averageWordsPerChapter}
              onChange={(event) => update("averageWordsPerChapter", Number(event.target.value))}
            />
          </Field>
          <Field label="Cadence">
            <div className="segmented">
              {[3, 5, 7].map((cadence) => (
                <button
                  key={cadence}
                  className={input.publicChaptersPerWeek === cadence ? "selected" : ""}
                  onClick={() => update("publicChaptersPerWeek", cadence)}
                  type="button"
                >
                  {cadence}/wk
                </button>
              ))}
            </div>
          </Field>
          <Field label="Primary genre">
            <input
              value={input.primaryGenre}
              onChange={(event) => update("primaryGenre", event.target.value)}
            />
          </Field>
          <Field label="Tags">
            <input
              value={input.tags.join(", ")}
              onChange={(event) =>
                update(
                  "tags",
                  event.target.value
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter(Boolean)
                )
              }
            />
          </Field>
          <Field label="Planned shoutouts">
            <input
              type="number"
              min={0}
              value={input.plannedShoutouts}
              onChange={(event) => update("plannedShoutouts", Number(event.target.value))}
            />
          </Field>
          <Field label="Planned ads">
            <input
              type="number"
              min={0}
              value={input.plannedAds}
              onChange={(event) => update("plannedAds", Number(event.target.value))}
            />
          </Field>
        </div>

        <div className="readinessPanel">
          <div className="readinessGauge">
            <span>Readiness</span>
            <strong>{plan.readinessScore}</strong>
          </div>
          <button className="button full" onClick={focusChecklist}>
            <Wand2 size={16} />
            View checklist
          </button>
          <div className="sourceLine">
            <CalendarDays size={14} />
            Plan window: {addDays(input.launchDate, -14)} to {addDays(input.launchDate, 30)}
          </div>
          <div className="miniStack">
            <Pill tone={input.currentWordCount >= 20000 ? "good" : "warn"}>
              {input.currentWordCount.toLocaleString()} words
            </Pill>
            <Pill tone={input.stockpiledChapters >= input.publicChaptersPerWeek * 4 ? "good" : "warn"}>
              {input.stockpiledChapters} chapters
            </Pill>
            <Pill tone={input.plannedShoutouts > 0 ? "good" : "neutral"}>
              {input.plannedShoutouts} swaps
            </Pill>
          </div>
        </div>
      </div>

      <div id="launch-checklist" className="timeline" aria-label="Launch checklist timeline">
        {plan.checklist.map((task) => (
          <div className="timelineRow" key={`${task.dayOffset}-${task.title}`}>
            <div className="timeCell">
              <strong>{dayLabel(task.dayOffset)}</strong>
              <span>{addDays(input.launchDate, task.dayOffset)}</span>
            </div>
            <div className="taskCell">
              <div>
                <h3>{task.title}</h3>
                <p>{task.rationale}</p>
              </div>
              <Pill tone={task.priority === "must" ? "blue" : task.priority === "should" ? "neutral" : "good"}>
                {task.priority}
              </Pill>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
