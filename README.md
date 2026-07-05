# FictionOps Launch Tools

Local no-login MVP for Royal Road and web serial author launch operations.

## Routes

- `/` - public marketing landing page.
- `/app` - no-login tool workbench.
- `/tools` - tool directory.
- `/features` - feature overview.
- `/pricing` - Free + Pro waitlist hypothesis, no real payment.
- `/blog` - guides index.
- `/login` and `/signup` - placeholders until auth/email are approved.

Placeholder auth pages are reachable from navigation but intentionally excluded from the sitemap
and marked `noindex` until real account/email behavior is approved.

## Run Locally

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3100
```

Production preview:

```powershell
$env:NEXT_PUBLIC_SITE_URL="http://127.0.0.1:3102"
npm run build
npm run start -- --hostname 127.0.0.1 --port 3102
```

## Verify

```bash
npm run lint
npm test
npm run build
npm audit --omit=dev
```

One-command local verification:

```bash
npm run verify
```

Full local production preview preflight:

```bash
npm run verify:local-preview
```

This runs lint, tests, production audit, a local-origin production build, a temporary
`next start`, and route/metadata checks. If `127.0.0.1:3102` is already in use, it picks the
next free local port for that temporary check.

Route-level launch readiness check, against the local production preview by default:

```bash
npm run verify:routes
```

Build the local preview with `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3102` before running this
check so canonical, OpenGraph, Twitter image, RSS feed, sitemap, and robots URLs match the tested origin.

For the selected final domain:

```bash
npm run verify:routes -- --origin=https://fictionops.com
```

## Deployment Notes

Set `NEXT_PUBLIC_SITE_URL` to the final public origin before deployment so metadata,
social preview image URLs, `/feed.xml`, `/sitemap.xml`, and `/robots.txt` use the correct URLs.

The public build command is guarded:

```bash
NEXT_PUBLIC_SITE_URL=https://fictionops.com npm run build:public
```

On Vercel, `vercel.json` uses `npm run build:public`, so the build will fail if the public
origin is missing or points to localhost.

Do not deploy publicly, buy a domain, connect analytics/email/payment tools, or post launch
links into communities without explicit human approval.
