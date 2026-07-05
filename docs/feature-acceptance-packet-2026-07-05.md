# Feature Acceptance Packet - 2026-07-05

Purpose: give the human reviewer a concrete local acceptance checklist before any public launch approval.

This packet is for local feature acceptance only. It does not approve public deployment, domain purchase,
email capture, analytics, Search Console, posting, private outreach, Discord interaction, payments, or account integrations.

## Local Review URL

Production preview:

`http://127.0.0.1:3102`

If the server is not running, rebuild and start it with:

```powershell
$env:NEXT_PUBLIC_SITE_URL="http://127.0.0.1:3102"
npm run build
npm run start -- --hostname 127.0.0.1 --port 3102
```

## Acceptance Summary

Accept the local prototype only if these statements are true:

- The public homepage clearly explains FictionOps as Royal Road / web serial launch operations, not generic AI writing.
- The free workbench at `/app` is usable without login.
- Launch plan, shoutout swaps, Patreon runway, and community rules all work with local user-entered data.
- Export/copy actions are available for launch plans, swaps, and feedback prompts.
- The site does not ask for Royal Road credentials.
- The site does not auto-post, send messages, store emails, or claim ranking/income guarantees.
- Desktop and mobile layouts are readable with no obvious overlapping text or horizontal overflow.
- Login/signup pages make clear that real accounts and email capture are not live yet.

## Pages To Review

Open these routes:

- `/` - marketing landing page
- `/app` - no-login workbench
- `/tools` - tool directory
- `/tools/royal-road-launch-plan`
- `/tools/shoutout-swap-tracker`
- `/tools/royal-road-patreon-calculator`
- `/features`
- `/pricing`
- `/blog`
- `/feedback`
- `/privacy`
- `/terms`
- `/login`
- `/signup`
- `/missing-launch-route`

## Tool Acceptance Checklist

### Launch Plan

Review at `/app`.

Pass criteria:

- User can change story title, launch date, word count, stockpile chapters, cadence, genre, shoutouts, and ads.
- Readiness score updates from the inputs.
- Warnings change when weak stockpile or low word count inputs are used.
- Checklist includes pre-launch and post-launch tasks.
- Markdown export/copy is available.
- Copy avoids guaranteed Rising Stars placement.

### Shoutout Swap Tracker

Review at `/app`.

Pass criteria:

- User can add a swap row.
- Partner count changes after adding a row.
- CSV export is available.
- The swap-ready checklist discourages poor-fit or spammy swaps.
- The interface does not imply fake reviews or automated engagement.

### Patreon Runway

Review at `/app`.

Pass criteria:

- User can change followers, advance chapters, weekly public chapters, weekly paid chapters, and base conversion.
- Conservative, base, and optimistic scenario cards update.
- Backlog runway status updates.
- Unsustainable promises are warned about.
- Copy avoids guaranteed income claims.

### Community Rules

Review at `/app`.

Pass criteria:

- Community tabs are selectable.
- Each community shows source link, last-reviewed date, allowed/risky/do-not-do guidance, and best-use note.
- Rules cover Reddit, RR forums, and Discord author spaces.
- Copy discourages spam, promotion abuse, and AI/survey mistakes.

### Feedback Kit

Review at `/feedback`.

Pass criteria:

- Feedback questions are visible and copyable/selectable.
- Page explains that it is local-only and does not submit or store responses.
- Reviewer can use the packet without an account.

## Public Site Acceptance Checklist

### Home

Pass criteria:

- First screen states: `Royal Road launch ops without login.`
- Primary CTA opens free tools.
- Trust badges are visible.
- Product preview image renders.
- Feature sections lead to tool pages or the workbench.

### Pricing

Pass criteria:

- Free tools are clearly available now.
- Pro is framed as a waitlist/hypothesis, not an active paid plan.
- No Stripe, Patreon, Ream, or payment flow is active.
- Exclusions are clear: no AI novel generation, no auto-posting, no Royal Road credentials.

### Login / Signup

Pass criteria:

- Login page says accounts are not live yet.
- Signup page is checklist/waitlist preview only.
- No real email is submitted or stored.
- Pages are intentionally excluded from the sitemap and marked `noindex, follow`.

### 404

Pass criteria:

- Unknown routes show the branded not-found page.
- Recovery CTAs point to free tools and guides.

## Automated Evidence Already Collected

Latest local checks:

- `npm run verify:routes` passed on 2026-07-05.
- `npm run verify:local-preview` passed on 2026-07-05.
- Latest local test suite: 13 files, 37 tests.
- Latest build: 31 routes.

Browser evidence:

- `output/playwright/fictionops-home-desktop-2026-07-05.png`
- `output/playwright/fictionops-app-desktop-2026-07-05.png`
- `output/playwright/fictionops-404-desktop-2026-07-05.png`
- `output/playwright/fictionops-home-mobile-2026-07-05.png`
- `output/playwright/fictionops-app-mobile-2026-07-05.png`
- `output/playwright/fictionops-404-mobile-2026-07-05.png`

Code review evidence:

- `docs/claude-code-review-2026-07-04.md`
- `docs/claude-frontend-expansion-review-2026-07-05.md`
- `docs/claude-hardening-review-2026-07-05.md`

## Known Non-Launch Items

These are intentionally not active:

- Real accounts.
- Real email capture.
- Analytics.
- Search Console.
- Payments.
- Domain.
- Public hosting.
- Community posts.
- Private outreach.
- Discord interaction.

## Acceptance Decision

If the local prototype is accepted, the next decision is not a feature decision. It is a launch gate.

Use:

- `docs/launch-approval-packet-2026-07-04.md`
- `docs/public-launch-runbook-2026-07-05.md`

Approval must name the bundle and exact external actions.
