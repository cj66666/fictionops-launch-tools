# Security Headers Hardening

Date: 2026-07-05

## Scope

Added conservative browser security headers for the local production preview and future public
deployment. This does not connect any external service or change user data handling.

## Implemented

- Updated `next.config.mjs`.
- Kept `poweredByHeader: false`.
- Added:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` restrictions for camera, microphone, geolocation, payment, USB,
    interest cohort, and browsing topics.
- Added `tests/securityHeaders.test.ts`.
- Added route verifier checks for the baseline security headers on `/`.

## Verification

Passed locally:

- `npm run lint`
- `npm test` - 12 files, 35 tests.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public`
- `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3102 npm run build`
- restarted local production preview at `http://127.0.0.1:3102`
- manual HTTP header check confirmed the configured headers on `/`
- `npm run verify:routes`
- `npm run verify:local-preview`

The current build still generates 30 routes, including dynamic `/feed.xml`.

## Human Gate

No public deployment, domain purchase, Search Console submission, email provider connection,
analytics installation, payment integration, posting, private outreach, Discord interaction,
or account integration was performed.
