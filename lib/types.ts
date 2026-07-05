export type LaunchPlanInput = {
  storyTitle: string;
  launchDate: string;
  currentWordCount: number;
  stockpiledChapters: number;
  averageWordsPerChapter: number;
  publicChaptersPerWeek: number;
  primaryGenre: string;
  tags: string[];
  plannedShoutouts: number;
  plannedAds: number;
  hasPatreon: boolean;
  advanceChapters: number;
};

export type LaunchTask = {
  dayOffset: number;
  title: string;
  category: "content" | "community" | "analytics" | "monetization" | "admin";
  priority: "must" | "should" | "optional";
  rationale: string;
};

export type LaunchPlanOutput = {
  readinessScore: number;
  warnings: string[];
  nextActions: string[];
  checklist: LaunchTask[];
  markdown: string;
};

export type SwapStatus =
  | "prospect"
  | "contacted"
  | "agreed"
  | "scheduled"
  | "posted"
  | "confirmed"
  | "stale";

export type SwapRecord = {
  id: string;
  author: string;
  story: string;
  royalRoadUrl: string;
  genreFit: string;
  followerTier: string;
  contactChannel: string;
  agreedDate: string;
  insertionLocation: string;
  snippet: string;
  status: SwapStatus;
  notes: string;
};

export type PatreonInput = {
  followers: number;
  conversionRates: {
    conservative: number;
    base: number;
    optimistic: number;
  };
  tiers: Array<{
    name: string;
    price: number;
    share: number;
  }>;
  advanceChapters: number;
  publicChaptersPerWeek: number;
  paidChaptersPerWeek: number;
};

export type PatreonScenario = {
  label: "Conservative" | "Base" | "Optimistic";
  conversionRate: number;
  patrons: number;
  monthlyRevenue: number;
};

export type PatreonOutput = {
  scenarios: PatreonScenario[];
  weightedAverageTier: number;
  backlogRunwayWeeks: number;
  warnings: string[];
};

export type CommunityRule = {
  community: string;
  url: string;
  lastReviewed: string;
  allowed: string[];
  risky: string[];
  doNotDo: string[];
  notes: string[];
};

export type SeoPage = {
  slug: string;
  type: "tool" | "guide";
  title: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  primaryKeyword: string;
  intent: string;
  cta: string;
  ctaHref?: string;
  sources: string[];
  related: string[];
  contentSections?: Array<{
    title: string;
    body: string;
    bullets?: string[];
  }>;
  proofPoints?: Array<{
    label: string;
    value: string;
    note: string;
  }>;
  trustNotes?: string[];
};
