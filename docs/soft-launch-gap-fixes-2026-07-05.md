# Soft Launch Gap Fixes - 2026-07-05

## Trigger

External review identified three pre-soft-launch gaps:

1. Core SEO guides were too thin.
2. Shoutout Swap Tracker did not persist data.
3. Email capture is not connected.

## Completed

- Added localStorage persistence for Shoutout Swap Tracker.
- Added CSV import for the existing shoutout swap CSV export format.
- Added CSV parser tests, including round-trip import/export and bad-header rejection.
- Expanded three high-intent guide pages:
  - `royal-road-rising-stars`
  - `royal-road-stats`
  - `royal-road-vs-scribblehub`
- Expanded the fourth launch-intent guide:
  - `web-novel-launch-plan`
- Added optional Google Search Console verification metadata via:

```text
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
```

## Still Human-Gated

Email capture is still not connected. Connecting Buttondown or MailerLite requires explicit approval,
provider choice, and privacy copy update.

## Verification

Commands passed:

- `npm test -- --run tests/csv.test.ts tests/seoPages.test.ts`
- `npm run lint`
- `npm run verify`
- `NEXT_PUBLIC_SITE_URL=https://fictionops.com npm run build:public`
- `node scripts/verify-launch-readiness.mjs --origin=https://fictionops.com`

Latest test count:

- 13 files
- 39 tests

## Deployment

Production deployments completed:

- Deployment ID: `dpl_28Xp1nLvhFAd4xw7dQ7yeDQKgGvx`
- Vercel URL: `https://fictionops-launch-tools-49kw6hnw4-jingchens-projects-753863a8.vercel.app`
- Alias: `https://fictionops.com`
- Follow-up deployment ID: `dpl_F5QcNc2qZ9pGuKdpa9fqzd3yDkq7`
- Follow-up Vercel URL: `https://fictionops-launch-tools-p7p68g03g-jingchens-projects-753863a8.vercel.app`
- Follow-up alias: `https://fictionops.com`

Public spot checks:

- `https://fictionops.com/guides/royal-road-rising-stars` returned 200.
- `https://fictionops.com/guides/royal-road-stats` returned 200.
- `https://fictionops.com/guides/royal-road-vs-scribblehub` returned 200.
- `https://fictionops.com/guides/web-novel-launch-plan` returned 200 and contains the expanded launch-plan sections.
- `https://fictionops.com/app` returned 200.
- `node scripts/verify-launch-readiness.mjs --origin=https://fictionops.com` passed after the follow-up deployment.

Public screenshot:

- `output/playwright/fictionops-soft-launch-fixes-app-mobile-2026-07-05.png`
