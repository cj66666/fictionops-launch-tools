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
  const followers = nonNegativeFinite(input.followers);
  const advanceChapters = nonNegativeFinite(input.advanceChapters);
  const publicChaptersPerWeek = nonNegativeFinite(input.publicChaptersPerWeek);
  const paidChaptersPerWeek = nonNegativeFinite(input.paidChaptersPerWeek);
  const conversionRates = {
    conservative: nonNegativeFinite(input.conversionRates.conservative),
    base: nonNegativeFinite(input.conversionRates.base),
    optimistic: nonNegativeFinite(input.conversionRates.optimistic)
  };

  const weightedAverageTier = input.tiers.reduce(
    (sum, tier) => sum + nonNegativeFinite(tier.price) * nonNegativeFinite(tier.share),
    0
  );

  const scenarios: PatreonScenario[] = [
    {
      label: "Conservative",
      conversionRate: conversionRates.conservative,
      patrons: estimatePatrons(followers, conversionRates.conservative),
      monthlyRevenue:
        estimatePatrons(followers, conversionRates.conservative) * weightedAverageTier
    },
    {
      label: "Base",
      conversionRate: conversionRates.base,
      patrons: estimatePatrons(followers, conversionRates.base),
      monthlyRevenue: estimatePatrons(followers, conversionRates.base) * weightedAverageTier
    },
    {
      label: "Optimistic",
      conversionRate: conversionRates.optimistic,
      patrons: estimatePatrons(followers, conversionRates.optimistic),
      monthlyRevenue:
        estimatePatrons(followers, conversionRates.optimistic) * weightedAverageTier
    }
  ];

  const weeklyBurn = Math.max(0, paidChaptersPerWeek - publicChaptersPerWeek);
  const backlogRunwayWeeks = weeklyBurn === 0 ? Infinity : advanceChapters / weeklyBurn;
  const warnings: string[] = [];

  if (followers < 500) {
    warnings.push("Follower base is still early. Use Patreon planning cautiously.");
  }

  if (advanceChapters < 5) {
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
  return Math.max(0, Math.round(nonNegativeFinite(followers) * nonNegativeFinite(rate)));
}

function nonNegativeFinite(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}
