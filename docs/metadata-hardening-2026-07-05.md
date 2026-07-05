# Metadata Hardening

Date: 2026-07-05

## Scope

Harden public metadata before any launch approval or deployment.

## Implemented

- Added `lib/metadata.ts` for shared canonical URL, OpenGraph, and Twitter metadata.
- Added canonical, OpenGraph URL, and Twitter card metadata to:
  - `/`
  - `/tools/[slug]`
  - `/guides/[slug]`
  - `/feedback`
  - `/privacy`
  - `/terms`
- Added `tests/metadata.test.ts`.
- Strengthened `npm run verify:routes` so it now checks:
  - canonical URLs on HTML pages
  - OpenGraph URLs on HTML pages
  - sitemap URLs for the tested origin
  - robots sitemap URL for the tested origin
- Updated `README.md` to build the local production preview with
  `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3102` before route verification.

## Verification

Passed locally:

- `npm run verify`
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public`
- `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3102 npm run build`
- Restarted production preview at `http://127.0.0.1:3102`.
- `npm run verify:routes`

Current automated suite:

- 8 test files.
- 26 tests.
- 22 static routes.

Manual HTTP metadata spot checks:

- `/tools/royal-road-launch-plan` returns canonical and `og:url` as
  `http://127.0.0.1:3102/tools/royal-road-launch-plan`.
- `/robots.txt` returns `Sitemap: http://127.0.0.1:3102/sitemap.xml`.
- `/sitemap.xml` includes `http://127.0.0.1:3102/feedback` and
  `http://127.0.0.1:3102/tools/royal-road-patreon-calculator`.

## Human Gate

No public deployment, domain purchase, Search Console submission, email provider connection,
analytics installation, payment integration, posting, or outreach was performed.
