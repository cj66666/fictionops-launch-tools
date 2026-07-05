# Claude Code Review

Date: 2026-07-04

Reviewer: Claude Code 2.1.92, read-only `-p` mode.

## Result

Claude Code found no P0 issues.

P1 findings were fixed:

- `components/WarningsPanel.tsx` used a static default launch plan. The launch input state is now lifted into `components/FictionOpsApp.tsx`, and `LaunchPlanner` plus `WarningsPanel` share the same generated plan.
- `data/seoPages.ts` referenced missing slug `royal-road-views-vs-followers`. The guide page now exists, and `tests/seoPages.test.ts` verifies all related slugs resolve.

Additional fixes made from the review:

- Added `rel="noopener noreferrer"` to external links that open in a new tab.
- Wrapped clipboard writes in `try/catch`.
- Changed the launch panel action from inert `Generate plan` to `View checklist`.
- Changed sitemap `lastModified` to build-time `new Date()`.
- Added a 1181-1360px responsive breakpoint so the launch form stays readable on medium desktop widths with the warnings panel visible.

## Remaining Backlog

- Consider a true `.ico` asset for `/favicon.ico`; the current fallback returns SVG with `image/svg+xml`.
- Enforce `NEXT_PUBLIC_SITE_URL` in deployment CI or deployment checklist so public sitemap/OG URLs never point to localhost. Fixed with `scripts/require-public-site-url.mjs`, `npm run build:public`, `npm run verify:public`, and `vercel.json`.

## Verification After Fixes

- `npm run lint` passed.
- `npm test` passed: 5 files, 16 tests.
- `npm run build` passed: 21 static routes.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public` passed.
- `npm audit --omit=dev` passed: 0 production vulnerabilities.
- In-app browser QA passed:
  - Warnings changed from default 18 chapters to 4 chapters after editing the stockpiled chapters input.
  - `/guides/royal-road-stats` related link to `/guides/royal-road-views-vs-followers` exists and resolves.
  - Browser console warnings/errors: 0.
  - Medium desktop layout uses two form columns instead of squeezed four-column inputs.

Screenshot evidence:

- `output/qa/fictionops-claude-review-fix-desktop.png`

## Second Review: Competitor Conversion Pass

Reviewer: Claude Code 2.1.92, read-only `-p` mode.

Claude Code reviewed the conversion pass after the competitor audit and found no P0 issues.

P1 findings fixed:

- Signup validation errors no longer use the green success color.
- The signup preview now uses a stricter email format check instead of only checking for `@`.
- Editing the email input clears stale signup messages.
- `docs/prototype-status.md` now has a consistent test count in the verification block.

Additional follow-up:

- Added `lib/signup.ts` and `tests/signup.test.ts` for the preview email validator.

Verification after the second review fixes:

- `npm run verify` passed.
- `npm test` passed as part of verification: 6 files, 19 tests.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public` passed.
- Browser QA passed for signup error state, stale-message clearing, success state, mobile overflow, and console warnings/errors.

Second-review screenshot evidence:

- `output/qa/fictionops-claude-second-review-desktop.png`
- `output/qa/fictionops-claude-second-review-mobile.png`

Still intentionally unchanged:

- The signup remains local-only. It does not send, store, or sync email addresses.
- No email provider, analytics, auth, payment, Reddit, Discord, Royal Road, Patreon, or Ream integration was connected.
