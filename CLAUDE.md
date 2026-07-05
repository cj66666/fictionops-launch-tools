# Project Context

Project: English web novel author tools

Working directory: `D:\项目\02-重点项目\英文小说网站`

## Positioning

Build tools for real English web novel authors, especially Royal Road / LitRPG / Progression Fantasy authors. The current wedge is launch operations:

- Royal Road launch planning
- shoutout swap tracking
- Rising Stars readiness and monitoring
- stats benchmarks
- Patreon/backlog planning
- community posting compliance

## Product Rules

- Serve real authors; do not build bulk novel generation or spam automation.
- Do not claim to reverse-engineer or guarantee Royal Road Rising Stars placement.
- Do not store Royal Road, Reddit, Discord, Patreon, or email credentials.
- Do not automate posting, private messaging, review swaps, or engagement farming.
- Treat community trust as a product constraint.

## Data Rules

- Start with user-entered data and public source links.
- Avoid aggressive scraping.
- If public Royal Road pages are fetched later, use low-rate, cached, robots-aware requests with a kill switch.
- Never require users to provide Royal Road login credentials.

## Current Research Artifacts

- `output/royalroad-public-info-2026-07-04.md`
- `output/reddit-discord-research-2026-07-04.md`
- `docs/week1-research-synthesis-2026-07-04.md`
- `docs/technical-feasibility-2026-07-04.md`
- `docs/mvp-spec.md`
- `docs/seed-author-leads-2026-07-04.md`
- `docs/outreach-drafts-2026-07-04.md`
- `docs/domain-shortlist-2026-07-04.md`
- `docs/prd.md`
- `docs/implementation-plan.md`
- `docs/qa-plan.md`
- `docs/seo-content-plan.md`
- `docs/data-model.md`
- `docs/community-rules-matrix.md`
- `docs/tool-copy.md`
- `docs/execution-status.md`
- `docs/prototype-status.md`

## Human Gates

Ask before:

- posting on Reddit, Royal Road forums, or Discord
- sending private messages to authors
- joining Discord servers
- buying a domain
- deploying publicly
- connecting production analytics, email, Stripe, Patreon, or other external accounts

## Current Recommended MVP

Free no-login tool suite:

1. Launch Plan Generator
2. Shoutout Swap Tracker
3. Patreon / Backlog Calculator
4. Community Rules Checklist

Local prototype status:

- Implemented as a Next.js no-login MVP.
- Production preview: `http://127.0.0.1:3102`
- QA record: `docs/prototype-status.md`

Next steps require human approval when they involve public deployment, domain purchase, posting, outreach, or external account integrations.
