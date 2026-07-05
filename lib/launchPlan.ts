import { addDays, dayLabel } from "./date";
import type { LaunchPlanInput, LaunchPlanOutput, LaunchTask } from "./types";

export const defaultLaunchInput: LaunchPlanInput = {
  storyTitle: "Arcane Ledger",
  launchDate: "2026-07-20",
  currentWordCount: 24000,
  stockpiledChapters: 18,
  averageWordsPerChapter: 2200,
  publicChaptersPerWeek: 5,
  primaryGenre: "Progression Fantasy",
  tags: ["LitRPG", "Magic", "Adventure"],
  plannedShoutouts: 3,
  plannedAds: 0,
  hasPatreon: false,
  advanceChapters: 0
};

const baseTasks: LaunchTask[] = [
  {
    dayOffset: -14,
    title: "Lock the first-week chapter queue",
    category: "content",
    priority: "must",
    rationale:
      "A launch cadence is only credible if the first week is already written and scheduled."
  },
  {
    dayOffset: -12,
    title: "Prepare cover, blurb, tags, and content warnings",
    category: "admin",
    priority: "must",
    rationale:
      "These shape conversion before readers ever reach chapter one."
  },
  {
    dayOffset: -10,
    title: "Shortlist relevant shoutout partners",
    category: "community",
    priority: "should",
    rationale:
      "Good swaps need genre fit and timing; cold scrambling after launch is weaker."
  },
  {
    dayOffset: -7,
    title: "Create your launch tracking baseline",
    category: "analytics",
    priority: "must",
    rationale:
      "Record initial chapters, words, update cadence, planned swaps, and promotion dates."
  },
  {
    dayOffset: -3,
    title: "Check community rules before drafting posts",
    category: "community",
    priority: "must",
    rationale:
      "Reddit, forums, and Discord servers treat promotion and research differently."
  },
  {
    dayOffset: 0,
    title: "Publish launch batch and record first snapshot",
    category: "content",
    priority: "must",
    rationale:
      "Capture the initial state so later movement has context."
  },
  {
    dayOffset: 2,
    title: "Review early conversion signals",
    category: "analytics",
    priority: "should",
    rationale:
      "Views without follows, favorites, or comments may point to cover/blurb/early chapter friction."
  },
  {
    dayOffset: 7,
    title: "Run first weekly launch review",
    category: "analytics",
    priority: "must",
    rationale:
      "Compare cadence, reader response, and swap execution before changing strategy."
  },
  {
    dayOffset: 14,
    title: "Re-check Rising Stars and genre/tag lists",
    category: "analytics",
    priority: "should",
    rationale:
      "Track visibility as a watch item, not as a promise."
  },
  {
    dayOffset: 21,
    title: "Evaluate Patreon/backlog readiness",
    category: "monetization",
    priority: "optional",
    rationale:
      "Advance chapters need a sustainable buffer before being promised."
  },
  {
    dayOffset: 30,
    title: "Decide the next operating loop",
    category: "admin",
    priority: "must",
    rationale:
      "Keep, change, or stop tactics based on evidence rather than daily anxiety."
  }
];

export function generateLaunchPlan(input: LaunchPlanInput): LaunchPlanOutput {
  const warnings: string[] = [];
  const nextActions: string[] = [];
  let score = 100;

  if (input.currentWordCount < 10000) {
    warnings.push(
      "Current words are below 10k. Many launch discussions treat early word count as a momentum constraint."
    );
    score -= 22;
    nextActions.push("Prepare more chapters before treating this as a full launch.");
  } else if (input.currentWordCount < 20000) {
    warnings.push(
      "Current words are below 20k. Treat launch expectations conservatively until the archive feels substantial."
    );
    score -= 12;
  }

  const firstMonthNeed = Math.ceil(input.publicChaptersPerWeek * 4.3);
  if (input.stockpiledChapters < firstMonthNeed) {
    warnings.push(
      `Stockpile covers ${input.stockpiledChapters} chapters, but this cadence needs about ${firstMonthNeed} chapters for the first month.`
    );
    score -= 18;
    nextActions.push("Either lower cadence or build a larger chapter buffer.");
  }

  if (input.publicChaptersPerWeek > 7) {
    warnings.push("Public cadence is above daily. Check whether this is sustainable.");
    score -= 10;
  }

  if (input.plannedShoutouts === 0) {
    warnings.push("No shoutout swaps are planned. That leaves launch visibility mostly to organic discovery.");
    score -= 10;
    nextActions.push("Create a shortlist of genre-fit swap partners.");
  }

  if (input.hasPatreon && input.advanceChapters < input.publicChaptersPerWeek * 2) {
    warnings.push(
      "Patreon is enabled, but advance chapters look thin for a paid backlog promise."
    );
    score -= 12;
  }

  if (input.averageWordsPerChapter < 1200) {
    warnings.push("Average chapter length is short. Make sure readers know the cadence and format.");
    score -= 6;
  }

  if (input.plannedAds > 0) {
    nextActions.push("Tag ad dates in the tracker so ad-driven movement is not confused with organic lift.");
  }

  if (warnings.length === 0) {
    nextActions.push("Your launch inputs are coherent. Keep the plan stable and review weekly.");
  }

  const checklist = decorateTasks(baseTasks, input);
  const readinessScore = Math.max(0, Math.min(100, score));

  return {
    readinessScore,
    warnings,
    nextActions,
    checklist,
    markdown: buildLaunchMarkdown(input, readinessScore, warnings, nextActions, checklist)
  };
}

function decorateTasks(tasks: LaunchTask[], input: LaunchPlanInput) {
  const extras: LaunchTask[] = [];

  if (input.plannedShoutouts > 0) {
    extras.push({
      dayOffset: -5,
      title: `Confirm ${input.plannedShoutouts} shoutout swap dates`,
      category: "community",
      priority: "must",
      rationale:
        "Agreed dates, insertion locations, and snippets prevent last-minute confusion."
    });
  }

  if (input.hasPatreon) {
    extras.push({
      dayOffset: -6,
      title: "Audit Patreon tiers and advance-chapter runway",
      category: "monetization",
      priority: "should",
      rationale:
        "Paid readers need a clear promise that the author can sustain."
    });
  }

  return [...tasks, ...extras].sort((a, b) => a.dayOffset - b.dayOffset);
}

export function buildLaunchMarkdown(
  input: LaunchPlanInput,
  readinessScore: number,
  warnings: string[],
  nextActions: string[],
  checklist: LaunchTask[]
) {
  const warningText = warnings.length
    ? warnings.map((warning) => `- ${warning}`).join("\n")
    : "- No major readiness warnings.";

  const actionText = nextActions.map((action) => `- ${action}`).join("\n");

  const tasks = checklist
    .map(
      (task) =>
        `- [ ] ${dayLabel(task.dayOffset)} (${addDays(input.launchDate, task.dayOffset)}): ${task.title} - ${task.rationale}`
    )
    .join("\n");

  return `# ${input.storyTitle || "Royal Road Launch Plan"}

Launch date: ${input.launchDate}
Genre: ${input.primaryGenre}
Tags: ${input.tags.join(", ") || "None"}
Readiness: ${readinessScore}/100

## Warnings

${warningText}

## Next Actions

${actionText}

## Checklist

${tasks}

## Notes

This plan is an operations checklist, not a ranking promise. Check current Royal Road, Reddit, forum, and Discord rules before posting anywhere.`;
}
