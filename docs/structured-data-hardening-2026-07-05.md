# Structured Data Hardening

Date: 2026-07-05

## Scope

Added JSON-LD structured data to the public site without connecting any external service.

## Implemented

- Added `components/JsonLd.tsx`.
- Added `lib/structuredData.ts`.
- Added `tests/structuredData.test.ts`.
- Homepage now emits:
  - `WebSite`
  - `SoftwareApplication`
- Tool detail pages now emit:
  - `SoftwareApplication`
  - `BreadcrumbList`
- Guide pages now emit:
  - `Article`
  - `BreadcrumbList`
- Route verifier now checks representative JSON-LD output on:
  - `/`
  - `/tools/royal-road-launch-plan`
  - `/guides/royal-road-stats`

## Verification

Passed locally:

- `npm run lint`
- `npm test` - 10 files, 31 tests.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public`
- `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3102 npm run build`
- restarted local production preview at `http://127.0.0.1:3102`
- `npm run verify:routes`
- `npm run verify:local-preview`

The full local preview preflight used temporary origin `http://127.0.0.1:3103` and passed
lint, tests, production audit, local-origin build, temporary production server startup, route
checks, metadata checks, social image checks, and representative JSON-LD checks.

## Human Gate

No public deployment, domain purchase, Search Console submission, email provider connection,
analytics installation, payment integration, posting, private outreach, Discord interaction,
or account integration was performed.
