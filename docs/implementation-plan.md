# Implementation Plan

Status: Ready for local prototype after user confirmation

Date: 2026-07-04

## Recommended Stack

- Next.js app
- TypeScript
- React client components for calculators and local table state
- CSS modules or Tailwind, depending on project bootstrap preference
- No database in v1
- Local browser state only, with CSV/Markdown export

## Phase A: Local Prototype

Goal: build the usable first-screen tool suite locally.

Tasks:

1. Bootstrap app shell.
2. Create structured data files:
   - community rules
   - launch checklist rules
   - default conversion assumptions
   - SEO page metadata
3. Build Launch Plan Generator.
4. Build Shoutout Swap Tracker.
5. Build Patreon / Backlog Calculator.
6. Build Community Rules Checklist.
7. Build export utilities:
   - Markdown plan export
   - CSV swap export
8. Add source links and disclaimers.
9. Add responsive layout.
10. Run lint/build and browser QA.

Definition of done:

- `npm run build` passes.
- The app runs locally.
- All four tools can be used without signup.
- No external writes or account integrations.
- Desktop and mobile screenshots show non-overlapping UI.

## Phase B: SEO Content Shell

Goal: create the initial SEO content structure without publishing.

Pages:

1. `/tools/royal-road-launch-plan`
2. `/tools/shoutout-swap-tracker`
3. `/tools/royal-road-patreon-calculator`
4. `/guides/royal-road-rising-stars`
5. `/guides/royal-road-genre-rising-stars`
6. `/guides/royal-road-stats`
7. `/guides/royal-road-vs-scribblehub`
8. `/guides/royal-road-author-discords`
9. `/guides/royal-road-cover-checklist`
10. `/guides/web-novel-launch-plan`

Definition of done:

- Pages render locally.
- Each page has title, description, source links, and internal links.
- No unsupported factual claims.
- No published deployment.

## Phase C: Validation Prep

Goal: prepare but do not perform human-gated actions.

Tasks:

- finalize discussion post drafts
- select 3 communities for first feedback
- prepare 5 author interview targets
- prepare feedback intake form or email CTA
- choose domain shortlist

Human gates:

- posting
- DM outreach
- Discord joining/interacting
- domain purchase
- email provider setup
- deployment

## Phase D: Public Launch

Requires user approval.

Tasks:

- buy domain
- connect Vercel
- add analytics
- add email capture
- publish
- submit to Search Console
- soft launch in approved communities

## Suggested File Structure

```text
app/
  page.tsx
  layout.tsx
  globals.css
  tools/
    royal-road-launch-plan/page.tsx
    shoutout-swap-tracker/page.tsx
    royal-road-patreon-calculator/page.tsx
  guides/
    royal-road-rising-stars/page.tsx
    royal-road-genre-rising-stars/page.tsx
    royal-road-stats/page.tsx
components/
  AppShell.tsx
  LaunchPlanner.tsx
  SwapTracker.tsx
  PatreonCalculator.tsx
  CommunityRules.tsx
  ExportButton.tsx
lib/
  launchPlan.ts
  patreon.ts
  csv.ts
  markdown.ts
data/
  communityRules.ts
  launchRules.ts
  seoPages.ts
```

## Engineering Notes

- Keep all calculations deterministic and unit-testable.
- Keep source data separate from UI.
- Avoid server actions until needed.
- Use local state first; add persistence only after validation.
- Keep UI dense and operational, not a marketing landing page.
