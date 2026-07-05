# Decisions

## 2026-07-04: Initial Wedge

Decision: prioritize a Royal Road launch operations toolkit over a generic AI writing tool.

Evidence:

- Reddit, Royal Road forum, and Discord/public directory research show repeated pain around shoutout swaps, Rising Stars, stats benchmarks, Patreon/backlog planning, and community rules.
- Competitors either focus on writing generation/organization, monetization platforms, or public rankings, leaving a gap for lightweight author ops.

Implications:

- No AI novel generation in v1.
- No aggressive Royal Road scraping in v1.
- Build free tools and SEO pages first.
- Ask for confirmation before posting, DM outreach, domain purchase, deployment, or account integrations.

## 2026-07-04: Technical Approach

Decision: start with a static/no-login MVP and user-entered data.

Evidence:

- Royal Road has premium analytics and public ranking surfaces, but direct user-specific data access is sensitive.
- The first useful product can be calculators, checklists, trackers, and exportable templates.

Implications:

- Next.js/Vercel is appropriate when coding starts.
- Supabase should be added only when saved plans or accounts become necessary.
- Email provider setup requires user confirmation.

## 2026-07-04: Human Gates

Decision: local prototype preparation can continue without external side effects, but the following require user approval:

- community posting
- private messages / interviews
- Discord joining or interaction
- domain purchase
- public deployment
- email, analytics, Stripe, Patreon, Ream, or other production integrations

Implication:

Before those actions, prepare drafts and checklists locally, then ask the user to approve exact text and target platform.

## 2026-07-04: Local Prototype Completed

Decision: the first prototype remains a local, no-login operating bench rather than a deployed SaaS.

Evidence:

- Four MVP tools are implemented in Next.js.
- Local verification passed lint, unit tests, production build, production audit, and desktop/mobile browser QA.
- Open Design / Pencil was unavailable because no `.pen` file was open locally, so implementation used the generated concept screenshot as the design reference.

Implications:

- The prototype can be reviewed at `http://127.0.0.1:3102`.
- Public launch work now moves to separate human gates: domain, deployment, posting, outreach, and integrations.

## 2026-07-05: Public Site Layer

Decision: move the working tool suite from `/` to `/app` and make `/` a public marketing
landing page.

Evidence:

- Competitor review showed FictionOps had useful tools but lacked a normal public product shell:
  marketing home, Tools, Features, Pricing, Blog, Login, Sign up, public navigation, and footer.
- The user provided `docs/frontend-site-expansion-plan-2026-07-04.md` and 20 reference screenshots.

Implications:

- `/app` is the no-login tool workbench.
- `/` explains the product value and sends users into `/app`.
- `/tools`, `/features`, `/pricing`, `/blog`, `/login`, and `/signup` are static public pages.
- Pricing, login, and signup remain placeholders/waitlist previews until auth, email, and payment
  integrations are explicitly approved.
