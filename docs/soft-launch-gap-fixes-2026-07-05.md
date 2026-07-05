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

Latest test count:

- 13 files
- 39 tests
