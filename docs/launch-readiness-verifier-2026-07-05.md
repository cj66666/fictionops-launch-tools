# Launch Readiness Verifier

Date: 2026-07-05

## Scope

Add a reusable route-level launch readiness checker for local preview and future public deployments.

## Implemented

- Added `scripts/verify-launch-readiness.mjs`.
- Added `npm run verify:routes`.
- Documented usage in `README.md`.
- Added the route verifier to:
  - `docs/public-launch-gate.md`
  - `docs/launch-approval-packet-2026-07-04.md`
- Strengthened the checker after metadata hardening so it validates canonical URLs,
  OpenGraph URLs, sitemap origin, and robots sitemap origin.

## Behavior

Default origin:

```bash
npm run verify:routes
```

checks:

```text
http://127.0.0.1:3102
```

Public origin usage:

```bash
npm run verify:routes -- --origin=https://<approved-public-origin>
```

The checker performs read-only GET requests. It does not submit forms, post content, store data, or connect integrations.

For local preview, build with the tested origin before running the checker:

```powershell
$env:NEXT_PUBLIC_SITE_URL="http://127.0.0.1:3102"
npm run build
```

## Routes Checked

- `/`
- `/tools/royal-road-launch-plan`
- `/tools/shoutout-swap-tracker`
- `/tools/royal-road-patreon-calculator`
- `/guides/royal-road-stats`
- `/feedback`
- `/privacy`
- `/terms`
- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`

## Verification

- `npm run verify:routes` passed against `http://127.0.0.1:3102`.
- `npm run verify` passed.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public` passed.
- Final local-origin `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3102 npm run build` passed.
- Local production preview restarted on `http://127.0.0.1:3102`.
- Final `npm run verify:routes` passed after restart.
- Manual HTTP spot checks confirmed canonical, OpenGraph, sitemap, and robots URLs use
  `http://127.0.0.1:3102` in the current local preview.

Current automated suite:

- 8 test files.
- 26 tests.
- 22 static routes.
