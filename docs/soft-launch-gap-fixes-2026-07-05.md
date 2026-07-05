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
- Expanded the remaining thin guide pages beyond the public-launch content threshold:
  - `royal-road-genre-rising-stars`
  - `royal-road-views-vs-followers`
  - `royal-road-author-discords`
  - `royal-road-cover-checklist`
- Added a guide-depth test so guide pages cannot regress to outline-length content.
- Added disabled-by-default provider-ready email capture configuration:
  - `NEXT_PUBLIC_EMAIL_FORM_ACTION`
  - `NEXT_PUBLIC_EMAIL_FORM_METHOD`
  - `NEXT_PUBLIC_EMAIL_FIELD_NAME`
  - `NEXT_PUBLIC_EMAIL_SOURCE_FIELD_NAME`
  - `NEXT_PUBLIC_EMAIL_SOURCE_VALUE`
- Updated signup, privacy, and `llms.txt` copy so they reflect whether an approved provider is configured.
- Added optional Google Search Console verification metadata via:

```text
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
```

## Still Human-Gated

Email capture is provider-ready but still not connected. Connecting Buttondown or MailerLite requires
explicit approval, provider choice, and setting `NEXT_PUBLIC_EMAIL_FORM_ACTION`.

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
- Guide-depth deployment ID: `dpl_Eq35g6qqaVMP9FvQVpJCxquCA7KE`
- Guide-depth Vercel URL: `https://fictionops-launch-tools-fjd8whnro-jingchens-projects-753863a8.vercel.app`
- Guide-depth alias: `https://fictionops.com`

Public spot checks:

- `https://fictionops.com/guides/royal-road-rising-stars` returned 200.
- `https://fictionops.com/guides/royal-road-stats` returned 200.
- `https://fictionops.com/guides/royal-road-vs-scribblehub` returned 200.
- `https://fictionops.com/guides/web-novel-launch-plan` returned 200 and contains the expanded launch-plan sections.
- `https://fictionops.com/guides/royal-road-author-discords` returned 200 after guide-depth expansion.
- `https://fictionops.com/guides/royal-road-cover-checklist` returned 200 after guide-depth expansion.
- `https://fictionops.com/guides/royal-road-genre-rising-stars` returned 200 after guide-depth expansion.
- `https://fictionops.com/guides/royal-road-views-vs-followers` returned 200 after guide-depth expansion.
- `https://fictionops.com/app` returned 200.
- `node scripts/verify-launch-readiness.mjs --origin=https://fictionops.com` passed after the follow-up deployment.
- `node scripts/verify-launch-readiness.mjs --origin=https://fictionops.com` passed after the guide-depth deployment.

Public screenshot:

- `output/playwright/fictionops-soft-launch-fixes-app-mobile-2026-07-05.png`
