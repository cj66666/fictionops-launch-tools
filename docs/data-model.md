# Data Model Draft

Date: 2026-07-04

Status: for local/no-login MVP first. Database schema is optional and should wait until saved plans are validated.

## Local Types

### LaunchPlanInput

```ts
type LaunchPlanInput = {
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
```

### LaunchPlanOutput

```ts
type LaunchPlanOutput = {
  readinessScore: number;
  warnings: string[];
  checklist: LaunchTask[];
  markdown: string;
};
```

### LaunchTask

```ts
type LaunchTask = {
  dayOffset: number;
  title: string;
  category: "content" | "community" | "analytics" | "monetization" | "admin";
  priority: "must" | "should" | "optional";
  rationale: string;
};
```

### SwapRecord

```ts
type SwapRecord = {
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
  status: "prospect" | "contacted" | "agreed" | "scheduled" | "posted" | "confirmed" | "stale";
  notes: string;
};
```

### PatreonInput

```ts
type PatreonInput = {
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
```

### CommunityRule

```ts
type CommunityRule = {
  community: string;
  url: string;
  lastReviewed: string;
  allowed: string[];
  risky: string[];
  doNotDo: string[];
  notes: string[];
};
```

## Future Database Tables

Only add after saved accounts are validated:

- users
- projects
- launch_plans
- swap_records
- stats_snapshots
- reminders
- email_subscribers

## Privacy Rules

- Do not store platform credentials.
- Do not store private Discord/Reddit/Royal Road messages.
- Export/delete should be available before accounts are added.
