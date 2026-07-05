# LLMs.txt Hardening

Date: 2026-07-05

## Scope

Added a local `llms.txt` route for AI/search-agent readability before public deployment.

## Implemented

- Added `lib/llms.ts`.
- Added `app/llms.txt/route.ts`.
- Added `tests/llms.test.ts`.
- Added route verifier coverage for `/llms.txt`.
- The file summarizes:
  - product positioning
  - primary public routes
  - tool pages
  - guide pages
  - trust boundaries
  - machine-readable routes

## Verification

Passed locally:

- `npm run lint`
- `npm test` - 13 files, 37 tests.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public`
- `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3102 npm run build`
- restarted local production preview at `http://127.0.0.1:3102`
- `/llms.txt` returned `200` with `text/plain; charset=utf-8`
- `npm run verify:routes`
- `npm run verify:local-preview`

The current build generates 31 routes, including dynamic `/feed.xml` and `/llms.txt`.

## Human Gate

No public deployment, domain purchase, Search Console submission, email provider connection,
analytics installation, payment integration, posting, private outreach, Discord interaction,
or account integration was performed.
