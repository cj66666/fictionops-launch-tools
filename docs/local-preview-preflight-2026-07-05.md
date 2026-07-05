# Local Preview Preflight

Date: 2026-07-05

## Scope

Add a single local command that simulates a production preview without deploying or touching
external accounts.

## Implemented

- Added `scripts/verify-local-preview.mjs`.
- Added `npm run verify:local-preview`.
- The script:
  - validates the preview origin is local-only
  - auto-picks a nearby free local port when the default preview port is already busy
  - runs `npm run lint`
  - runs `npm test`
  - runs `npm audit --omit=dev`
  - runs `npm run build` with `NEXT_PUBLIC_SITE_URL` set to the tested local origin
  - starts a temporary `next start`
  - runs `scripts/verify-launch-readiness.mjs --origin=<local-origin>`
  - stops only the temporary server it started

## Verification

Passed locally:

```bash
npm run verify:local-preview
```

The command used `http://127.0.0.1:3103` because the persistent local preview was already
using `http://127.0.0.1:3102`.

Verified coverage:

- 9 test files.
- 28 tests.
- 0 production audit vulnerabilities.
- 29 static routes.
- route text checks.
- canonical URL checks.
- OpenGraph URL checks.
- OpenGraph and Twitter image checks.
- social preview image resource check.
- representative JSON-LD checks.
- RSS feed route checks.
- baseline security header checks.
- branded 404 route checks.
- all-HTML security header checks.
- login/signup X-Robots-Tag checks.
- llms.txt route checks.
- sitemap origin checks.
- robots sitemap origin checks.

## Human Gate

No public deployment, domain purchase, Search Console submission, email provider connection,
analytics installation, payment integration, posting, or outreach was performed.
