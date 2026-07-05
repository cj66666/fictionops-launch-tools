# Claude Code Review: Frontend Site Expansion

Date: 2026-07-05

## Scope

Independent read-only Claude Code review of the frontend site expansion:

- `/` marketing landing page
- `/app` workbench migration
- `/tools`
- `/features`
- `/pricing`
- `/blog`
- `/login`
- `/signup`
- sitemap, route verifier, metadata, tests, and mobile layout

## Material Findings Fixed

- Homepage product preview image now reserves the same 16:10 ratio used by CSS to avoid layout
  shift.
- Tool and guide pages no longer render internal `Primary keyword` / `Intent` SEO planning fields
  in visible page content.
- Default local site URL now falls back to `http://127.0.0.1:3102` instead of
  `http://localhost:3000`.
- `/login` and `/signup` now emit `noindex, follow`.
- `/login` and `/signup` are kept out of `/sitemap.xml` while remaining reachable from public nav.
- Public shell and workbench now include skip links.
- Global `:focus-visible` styling was added for keyboard navigation.
- Workbench sidebar buttons now expose a selected state and `aria-current`.
- Vitest is configured to use a single-thread pool to avoid Windows fork worker `spawn UNKNOWN`
  failures observed during verification.

## Verification

Passed after fixes:

- `npm run lint`
- `npm test` - 9 files, 28 tests.
- `npm run verify:local-preview`
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public`
- `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3102 npm run build`
- restarted local production preview at `http://127.0.0.1:3102`
- `npm run verify:routes`

Additional HTTP checks:

- `/signup` includes `<meta name="robots" content="noindex, follow">`.
- `/sitemap.xml` does not include `/login` or `/signup`.
- `/sitemap.xml` includes `/app`.
- `/tools/royal-road-launch-plan` no longer contains visible `Primary keyword` or `Intent:`
  strings.

## Not Changed

- Real auth, email capture, analytics, payments, deployment, posting, and outreach remain
  human-gated and were not performed.
- Favicon format cleanup and stricter future production email validation remain lower-priority
  follow-ups before public launch.
