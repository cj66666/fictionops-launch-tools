# Conversion Event Deploy Approval - 2026-07-05

Purpose: approval packet for deploying local commit `61b5246` to production.

## What Will Deploy

Commit:

```text
61b5246 Track soft launch conversion events
```

Production effect:

- Push local `master` to GitHub.
- Vercel will build and deploy the new production version from GitHub.
- Public domain remains `https://fictionops.com`.

## Functional Change

Adds soft-launch event tracking for:

- homepage/header/footer CTA clicks into `/app`, `/signup`, `/blog`, and `/pricing`
- weekly checklist form submit attempts
- invalid weekly checklist form attempts
- workbench section navigation clicks

No UI copy or layout changes are intended.

## Privacy Boundary

Event properties intentionally exclude:

- email addresses
- Royal Road usernames
- story URLs
- platform credentials
- private account data

Allowed event properties are only:

- `href`
- `location`
- `target`
- `mode`
- `source`
- `section`

## Pre-Deploy Verification Already Passed

Local checks passed before this approval packet:

- `npm run lint`
- `npm test` - 16 files / 55 tests passed
- `npm run build`
- `npm audit --omit=dev` - 0 production vulnerabilities
- `npm run verify:routes`
- local production preview returned HTTP 200 for `/`, `/app`, and `/signup`

## Post-Deploy Verification Plan

After pushing and Vercel deploy completion:

1. Confirm production deployment URL and alias.
2. Check `https://fictionops.com/` returns HTTP 200.
3. Check `https://fictionops.com/app` returns HTTP 200.
4. Check `https://fictionops.com/signup` returns HTTP 200.
5. Confirm apex canonical still returns 200 and `www.fictionops.com` redirects to apex.
6. Confirm Vercel Analytics script is still present.
7. Confirm Buttondown form action is still present on `/signup`.
8. Run the live route verifier against `https://fictionops.com`.

## Required Approval

Deploy only after the user confirms:

```text
批准推送并部署 61b5246
```

## Execution Result

Executed after user approval on 2026-07-05.

- Approved deploy head: `806a913` (`Sharpen launch ops positioning`).
- GitHub push: `master` updated from `8232a81` to `806a913`.
- Vercel production deployment: `dpl_r1i2LCtt7f6obud4hTwii6kL9uqx`.
- Production URL: `https://fictionops-launch-tools-marft99d4-jingchens-projects-753863a8.vercel.app`.
- Alias: `https://fictionops.com`.
- Build command: `npm run build:public`.
- Build result: ready, 31 routes generated.

Post-deploy verification:

- `https://fictionops.com/` returned HTTP 200.
- `https://fictionops.com/app` returned HTTP 200.
- `https://fictionops.com/signup` returned HTTP 200.
- `https://www.fictionops.com/` returned 308 to `https://fictionops.com/`.
- Patreon calculator page no longer contains `chapterchronicles.com`.
- Patreon calculator page contains official Patreon pricing and paid-tier setup sources.
- Patreon calculator page contains the new benchmark-boundary copy.
- `/app` no longer contains fake `royalroad.com/fiction/example` URLs.
- `/app` still contains the Buttondown form action.
- Production JS chunks contain Vercel analytics code from the official package.
