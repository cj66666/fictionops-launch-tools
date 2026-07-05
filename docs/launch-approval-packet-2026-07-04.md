# Launch Approval Packet

Date: 2026-07-04

Purpose: make the next human approvals concrete. Nothing in this packet has been executed publicly.

Operational runbook after approval:

`docs/public-launch-runbook-2026-07-05.md`

## Current Local State

- Local production preview: `http://127.0.0.1:3102`
- App type: static/no-login Next.js MVP.
- Public marketing shell:
  - `/`
  - `/tools`
  - `/features`
  - `/pricing`
  - `/blog`
  - `/login`
  - `/signup`
- Tool workbench:
  - `/app`
- Implemented tools:
  - Launch Plan Generator
  - Shoutout Swap Tracker
  - Patreon / Backlog Calculator
  - Community Rules Checklist
- Implemented public-readiness routes:
  - `/sitemap.xml`
  - `/robots.txt`
  - `/manifest.webmanifest`
  - `/feedback`
  - `/feed.xml`
  - `/llms.txt`
  - `/privacy`
  - `/terms`
- Implemented public metadata:
  - canonical URLs
  - OpenGraph URLs
  - Twitter summary metadata
- Verification status:
  - `npm run verify` passed.
  - `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public` passed.
  - `npm run verify:routes` passed against the local production preview, including canonical, OpenGraph, sitemap, and robots URL checks.
  - `npm run verify:local-preview` passed as a local production preview preflight.
  - LLMs.txt hardening passed with 13 test files, 37 tests, and 31 build routes.
  - Claude Code frontend-expansion review fixes were applied and reverified.
- Browser QA passed on desktop/mobile.
- Vercel deployment is live at `https://fictionops-launch-tools.vercel.app`.
- `fictionops.com` and `www.fictionops.com` are attached to Vercel but require Cloudflare DNS changes before they resolve.

## Recommended Approval Sequence

Approve in this order to keep risk controlled:

1. Domain decision.
2. Public deployment target.
3. Email capture provider, or explicitly keep signup preview local-only.
4. Analytics provider, or explicitly launch without analytics.
5. Search Console submission.
6. First soft-launch channel and exact post text.
7. Any private outreach or Discord interaction.

## Decision 1: Domain

Selected target domain: `fictionops.com`.

Status: user confirmed `fictionops.com` is already purchased. No DNS change or public
deployment has been performed by Codex.

Fallback order:

1. `fictionops.com`
2. `seriallaunchpad.com`
3. `chapterops.com`
4. `novellaunchkit.com`
5. `webnovellaunch.com`

Reasoning:

- Avoids `RoyalRoad` in the root domain.
- Keeps room for launch, swaps, stats, Patreon/backlog, and future author ops.
- Matches the current product name.

Explicit human approval is still required before DNS changes or deployment.

## Decision 2: Public Deployment

Recommended target: Vercel.

Required environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://fictionops.com
```

Pre-deploy commands:

```bash
npm run verify
npm run verify:local-preview
NEXT_PUBLIC_SITE_URL=https://fictionops.com npm run build:public
```

Post-deploy checks:

- `/`
- `/app`
- `/tools`
- `/features`
- `/pricing`
- `/blog`
- `/login`
- `/signup`
- `/tools/royal-road-launch-plan`
- `/tools/shoutout-swap-tracker`
- `/tools/royal-road-patreon-calculator`
- `/guides/royal-road-stats`
- `/feedback`
- `/feed.xml`
- `/llms.txt`
- `/sitemap.xml`
- `/robots.txt`
- `/privacy`
- `/terms`

Route-level post-deploy command:

```bash
npm run verify:routes -- --origin=https://fictionops.com
```

This check validates route text, canonical URLs, OpenGraph URLs, sitemap URLs, robots sitemap URL, and core static routes against the approved origin.

Human approval required before deploying to any public host.

## Decision 3: Email Capture

Current state: local-only preview. It validates email format in the browser, then states that no email was sent or stored.

Recommendation for first public launch: keep local-only unless the domain is deployed and privacy copy is updated in the same change.

If activating real capture:

- Buttondown is the simplest fit for a weekly checklist/newsletter.
- MailerLite is better if forms, landing pages, and automations matter immediately.

Required before activation:

- User approves provider.
- Public endpoint or embed is implemented.
- Privacy page is updated.
- Browser QA verifies the form state.

Human approval required before connecting any email provider or storing emails.

## Decision 4: Analytics

Recommendation for first launch: either launch without analytics for the first feedback pass, or use a privacy-light analytics tool after explicit approval.

Acceptable candidates:

- Vercel Analytics for lowest setup friction.
- Umami if self-hosted / privacy-first tracking is preferred.
- Plausible if paid managed analytics is acceptable.

Human approval required before adding analytics.

## Decision 5: Search Console

Only submit after a public URL exists and the sitemap resolves on that URL.

Required checks before submission:

- `NEXT_PUBLIC_SITE_URL` uses the approved public origin.
- `/sitemap.xml` returns public URLs.
- `/robots.txt` references the public sitemap.
- Key HTML pages return canonical and OpenGraph URLs on the approved public origin.

Human approval required before Search Console submission.

## Decision 6: First Soft-Launch Channel

Recommended first public-feedback path:

1. Royal Road forum workflow question, no link.
2. r/royalroad discussion post, no link.
3. If those are received well, a later feedback post with the tool link.

Reasoning:

- The community is sensitive to promotion.
- The current plan's safest path is workflow research first, then tool feedback.
- Direct product links should wait until the account has trust and the post is explicitly approved.

## Exact Draft: Royal Road Forum

Title:

```text
How do you track launch tasks and shoutout swaps?
```

Body:

```text
For authors who have launched on RR recently: how are you tracking the practical side of launch?

I'm thinking about things like:

- launch chapter schedule
- shoutout swap dates and snippets
- review/comment asks
- ad dates
- Rising Stars / genre list checks
- follower/view/comment changes
- Patreon or backlog readiness

Do you use a spreadsheet, notes app, Discord messages, or just keep it in your head?

I'm not promoting a tool here. I want to understand the workflow before I build anything for myself.
```

Approval required before posting.

## Exact Draft: Reddit r/royalroad

Title:

```text
Authors: how do you plan your first 30 days on Royal Road?
```

Body:

```text
I've been trying to understand how Royal Road authors plan a launch without turning it into a giant spreadsheet.

For people who have launched or are preparing to launch:

- How many chapters/words did you stockpile before day one?
- Did you plan shoutout swaps in advance, or figure them out after posting?
- Do you track followers/views/comments over time, and if so where?
- What did you wish you had checked before launch?

Not selling anything. I'm trying to map the workflow and common failure points. Happy to share a summary afterward.
```

Approval required before posting.

## Decision 7: Private Outreach

Recommended status: do not start until after at least one public discussion post has comments.

Candidate public leads are recorded in:

- `docs/seed-author-leads-2026-07-04.md`

Approval required before any private message, follow, interview request, Discord join, or Discord interaction.

## What I Need From You To Proceed Publicly

Reply with explicit approval for one of these exact bundles:

### Bundle A: Deploy Only

- Choose domain or approve a Vercel preview URL.
- Deploy publicly.
- Keep email preview local-only.
- No analytics.
- No posting/outreach.

### Bundle B: Deploy + Basic Capture

- Choose domain or approve a Vercel preview URL.
- Deploy publicly.
- Connect Buttondown or MailerLite.
- Update privacy page.
- No posting/outreach yet.

### Bundle C: Research Post Only

- No public deployment.
- Post one approved workflow question.
- No links.
- No private outreach.

### Bundle D: Full Soft Launch

- Domain/deploy.
- Decide email and analytics.
- Submit sitemap.
- Publish one approved soft-launch post.

Anything outside these bundles should be approved as a specific action with the exact platform, account, text, link, and data involved.
