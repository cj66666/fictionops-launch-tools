import type { PatreonInput, PatreonOutput, PatreonScenario } from "./types";

export const defaultPatreonInput: PatreonInput = {
  followers: 850,
  conversionRates: {
    conservative: 0.01,
    base: 0.03,
    optimistic: 0.06
  },
  tiers: [
    { name: "Supporter", price: 3, share: 0.35 },
    { name: "Advance Chapters", price: 5, share: 0.45 },
    { name: "Deep Archive", price: 10, share: 0.2 }
  ],
  advanceChapters: 12,
  publicChaptersPerWeek: 5,
  paidChaptersPerWeek: 5
};

export function calculatePatreon(input: PatreonInput): PatreonOutput {
  const weightedAverageTier = input.tiers.reduce(
    (sum, tier) => sum + Math.max(0, tier.price) * Math.max(0, tier.share),
    0
  );

  const scenarios: PatreonScenario[] = [
    {
      label: "Conservative",
      conversionRate: input.conversionRates.conservative,
      patrons: estimatePatrons(input.followers, input.conversionRates.conservative),
      monthlyRevenue:
        estimatePatrons(input.followers, input.conversionRates.conservative) * weightedAverageTier
    },
    {
      label: "Base",
      conversionRate: input.conversionRates.base,
      patrons: estimatePatrons(input.followers, input.conversionRates.base),
      monthlyRevenue: estimatePatrons(input.followers, input.conversionRates.base) * weightedAverageTier
    },
    {
      label: "Optimistic",
      conversionRate: input.conversionRates.optimistic,
      patrons: estimatePatrons(input.followers, input.conversionRates.optimistic),
      monthlyRevenue:
        estimatePatrons(input.followers, input.conversionRates.optimistic) * weightedAverageTier
    }
  ];

  const weeklyBurn = Math.max(0, input.paidChaptersPerWeek - input.publicChaptersPerWeek);
  const backlogRunwayWeeks = weeklyBurn === 0 ? Infinity : input.advanceChapters / weeklyBurn;
  const warnings: string[] = [];

  if (input.followers < 500) {
    warnings.push("Follower base is still early. Use Patreon planning cautiously.");
  }

  if (input.advanceChapters < 5) {
    warnings.push("Advance chapter buffer is thin for a paid promise.");
  }

  if (Number.isFinite(backlogRunwayWeeks) && backlogRunwayWeeks < 8) {
    warnings.push("Backlog runway is under eight weeks at this paid/public cadence.");
  }

  if (weightedAverageTier <= 0) {
    warnings.push("Tier prices or shares need values before revenue scenarios are meaningful.");
  }

  return {
    scenarios,
    weightedAverageTier,
    backlogRunwayWeeks,
    warnings
  };
}

function estimatePatrons(followers: number, rate: number) {
  return Math.max(0, Math.round(Math.max(0, followers) * Math.max(0, rate)));
}
