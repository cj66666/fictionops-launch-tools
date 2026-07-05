# Public Launch Gate

Date: 2026-07-04

This file is the checkpoint before moving from local prototype to public launch.

Concrete approval options and exact draft copy are in `docs/launch-approval-packet-2026-07-04.md`.

## Current Status

- Local MVP built and verified.
- Production preview runs at `http://127.0.0.1:3102`.
- Public marketing shell exists at `/`; tool workbench exists at `/app`.
- No domain purchased.
- No public deployment performed.
- No external posting, DM outreach, Discord interaction, analytics, email, payments, or account integrations performed.

## Ready Before Approval

- Next.js production build passes.
- Sitemap route exists at `/sitemap.xml`.
- Robots route exists at `/robots.txt`.
- Web manifest exists at `/manifest.webmanifest`.
- Privacy page exists at `/privacy`.
- Terms page exists at `/terms`.
- Feedback kit exists at `/feedback`.
- Public site routes exist: `/app`, `/tools`, `/features`, `/pricing`, `/blog`, `/login`, `/signup`.
- Canonical, OpenGraph, Twitter, and shared social image metadata exist for public HTML routes.
- JSON-LD structured data exists on homepage, tool detail pages, and guide pages.
- RSS feed exists at `/feed.xml` and public pages expose RSS alternate metadata.
- Baseline browser security headers are configured and route-verified.
- Branded 404 page exists and is route-verified.
- Claude Code hardening review fixes are applied: RSS Atom metadata, Article dates, stable
  sitemap dates, HSTS, CSP report-only, X-Robots-Tag, and broader verifier header checks.
- `llms.txt` exists and is route-verified.
- Deployment environment variable documented: `NEXT_PUBLIC_SITE_URL`.
- Public build guard exists: `npm run build:public`.
- Vercel build command is configured to use the public build guard.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public` has been validated locally.
- `npm run verify` has been validated locally.
- `npm run verify:routes` exists and has passed locally for route, canonical, OpenGraph,
  Twitter image, social image resource, JSON-LD, RSS feed, security headers, branded 404,
  sitemap, and robots checks after a server is running.
- `npm run verify:local-preview` exists and has passed locally as a one-command production preview preflight.
- Latest llms.txt hardening passed with 13 test files, 37 tests, and 31 build routes.
- Latest browser QA after hardening captured desktop/mobile screenshots for `/`, `/app`, and branded 404.
- Claude Code frontend-expansion review fixes are applied: no visible internal SEO fields, noindex
  auth placeholders, skip links, focus rings, and stable Windows Vitest config.
- Launch approval packet exists.
- Feedback kit page exists for local-only reviewer questions.
- Local Git repository has been initialized and local-only artifacts are ignored.
- Plan completion audit exists at `docs/plan-completion-audit-2026-07-05.md`.
- Public launch runbook exists at `docs/public-launch-runbook-2026-07-05.md`.
- Feature acceptance packet exists at `docs/feature-acceptance-packet-2026-07-05.md`.

## Approval Needed

Ask for explicit approval before any of these actions:

- Pick and buy a domain.
- Deploy to Vercel, Cloudflare, Netlify, or another public host.
- Add analytics or email capture.
- Activate the weekly checklist signup with a real email provider.
- Submit to Google Search Console.
- Publish on Reddit, Royal Road, Discord, X, or any other community.
- Send private messages or interview requests.
- Join or interact inside Discord servers.

## Launch Day Checklist After Approval

1. Set the final domain or preview URL as `NEXT_PUBLIC_SITE_URL`.
2. Run `npm run verify`.
3. Optionally run `npm run verify:local-preview` for a local production preview preflight.
4. Run `npm run build:public` with the approved public origin.
5. Deploy from the verified build.
6. Confirm `/`, `/app`, `/tools`, `/features`, `/pricing`, `/blog`, `/login`, `/signup`, `/sitemap.xml`, `/robots.txt`, `/privacy`, `/terms`, and canonical/OG URLs on the public URL.
7. Run `npm run verify:routes -- --origin=<approved public origin>`.
8. Re-check console errors on desktop and mobile.
9. If email capture is approved, connect Buttondown/MailerLite and update privacy copy before launch.
10. Submit sitemap after Search Console approval.
11. Publish only the user-approved soft-launch copy.
