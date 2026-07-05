# Frontend Site Expansion Plan

Date: 2026-07-04

## Goal

Turn the current FictionOps tool-first prototype into a public-facing product site while keeping the existing no-login tool suite intact.

The next implementation should add the missing product website layer:

- Marketing home / introduction
- Features / tools overview
- Pricing / future Pro intent
- Blog / guides index
- Login / sign up placeholder flows
- Clear navigation between public pages and the working tool app

Do not connect real auth, payments, email capture, analytics, Stripe, Patreon, or production integrations without human approval.

## Reference Screenshots

Screenshots are stored under:

`output/competitor-reference-2026-07-04/`

Key references:

- `chapterchronicles-authors.png`: direct niche positioning, author-specific pain, repeated CTA, fiction-native feature sections.
- `chapterchronicles-pricing.png`: clear no-monthly-fee pricing, comparison table, FAQ, final CTA.
- `rising-stars-tracker.png`: compact data-product credibility, statistics-first hero, top navigation for data surfaces.
- `rrcompanion-home.png`: simple app-style dashboard positioning and account CTAs.
- `novelcrafter-home.png`: polished SaaS landing page with product promise, testimonials, education/resources, footer nav.
- `novelcrafter-pricing.png`: tier comparison, free trial CTA, detailed feature matrix.
- `sudowrite-home.png`: AI writing SaaS hero and repeated trial-oriented CTA.
- `campfire-home.png`: visual creative platform positioning with Write / Read / Publish segmentation.
- `worldanvil-pricing.png`: dense feature-rich pricing ladder and guild/community framing.
- `ream-authors.png`: author income narrative, emotional hero, simple three-step workflow, trust numbers.
- `patreon-pricing.png`: creator monetization, free-to-start framing, pricing plus feature blocks.
- `buttondown-pricing.png`: calculator-like pricing and simple signup CTA.
- `mailerlite-pricing.png`: acquisition stack: forms, automation, landing pages, paid newsletter features.
- `current-fictionops-home.png`: current tool-first app.
- `current-fictionops-patreon-tool-page.png`: current SEO acquisition page.
- `mobile-current-fictionops-home.png`, `mobile-chapterchronicles-authors.png`, `mobile-novelcrafter-home.png`, `mobile-ream-authors.png`: mobile layout references.

## Current Gap

Current FictionOps is useful once a user lands inside the tool, but it still lacks the normal public SaaS shell:

- No top-level marketing navigation for `Features`, `Pricing`, `Blog`, `Login`, `Sign up`.
- Home page is an app workspace, not an explanation-first landing page.
- Weekly checklist signup is only a local preview, not a real capture flow.
- Pricing is only a future Pro teaser, not a dedicated page that explains the paid hypothesis.
- Blog/guides exist as individual SEO pages, but there is no visible blog index or editorial surface.
- Login/sign up are not present, so users cannot understand whether accounts are planned or unavailable.

## Recommended Information Architecture

### Public Marketing Shell

Add a persistent public nav:

- FictionOps logo
- Tools
- Features
- Pricing
- Blog
- Log in
- Sign up / Get checklist

Keep the primary CTA as no-login until real auth is approved:

- Primary: `Open free tools`
- Secondary: `Get weekly checklist`

### Routes

Recommended routes:

- `/` marketing landing page
- `/app` current tool workspace
- `/tools` tools index
- `/tools/[slug]` existing SEO/tool pages
- `/features` feature overview
- `/pricing` future pricing / waitlist page
- `/blog` guide/blog index
- `/blog/[slug]` or continue using `/guides/[slug]`
- `/login` placeholder page
- `/signup` placeholder page

If scope must stay small, keep current `/` as the tool workspace and add only:

- `/pricing`
- `/blog`
- `/login`
- `/signup`

But the better public structure is to move the working app to `/app`.

## Page Plans

### 1. Marketing Home

Reference:

- Chapter Chronicles author page
- Novelcrafter home
- Ream author page

Sections:

1. Hero: `Royal Road launch ops without login.`
2. Subcopy: cadence, shoutout swaps, Patreon backlog, community-safe posts.
3. CTA row: `Open free tools`, `Get weekly checklist`.
4. Trust badges: no RR credentials, no auto-posting, no scraping required, source-linked rules.
5. Problem section: messy spreadsheets, scattered Discord swaps, unclear Rising Stars signals, Patreon planning guesswork.
6. Product preview: embedded screenshot/card of the current app workspace.
7. Feature bands: Launch Plan, Swap Tracker, Patreon Runway, Community Rules, Rising Stars Watch.
8. Safety/trust section: no ranking promises, no spam automation, no platform credential storage.
9. Future Pro teaser: saved plans, reminders, swap CRM, benchmark history.
10. Final CTA.

### 2. Pricing

Reference:

- Chapter Chronicles pricing
- Novelcrafter pricing
- Buttondown pricing

Do not sell paid plans yet. Use this as a pricing hypothesis / waitlist page.

Suggested structure:

- Free: current no-login tools, exports, checklist, calculators.
- Pro waitlist: saved launch plans, weekly reminders, swap CRM, benchmark history, email reports.
- Explicit exclusions: no AI novel generation, no auto-posting, no engagement farming, no Royal Road credentials.
- CTA: `Join Pro waitlist` / `Get weekly checklist`.

### 3. Blog / Guides

Reference:

- Novelcrafter resources/blog/course navigation
- Chapter Chronicles blog/resource footer

Create a visible index for existing guide content:

- Rising Stars guide
- Royal Road stats
- Royal Road author Discords
- Patreon calculator
- Views vs followers
- Shoutout swap checklist
- Community rules

Each card should show:

- title
- target reader problem
- tool CTA
- source-linked trust cue

### 4. Login / Sign Up

Keep placeholder pages until auth is approved.

Recommended copy:

- Login: `Accounts are not live yet. Use the free tools without logging in.`
- Signup: `Join the checklist / Pro waitlist. Real account storage is planned only after validation.`

Do not create fake auth forms that imply storage exists. If a form is shown, label it as waitlist/checklist capture and keep it local or disabled until integration approval.

### 5. Tools Index

Create a directory page that explains every tool:

- Royal Road Launch Plan
- Patreon Calculator
- Shoutout Swap Tracker
- Community Rules Checklist
- Rising Stars / Stats guides

This page should be more browsable than the current in-app sidebar.

## Implementation Order

1. Create screenshot-backed design brief from this document and the reference folder.
2. Add global public navigation and route shell.
3. Build `/pricing`, `/blog`, `/login`, `/signup` as static pages.
4. Decide whether to move the current tool app from `/` to `/app`.
5. Build marketing home after route decision.
6. Re-run lint, tests, build, and desktop/mobile Playwright screenshots.
7. Human review before any real signup/auth/payment/email integration.

## Non-Negotiables

- Do not ask for Royal Road credentials.
- Do not claim Rising Stars guarantees.
- Do not automate posting, DMs, reviews, swaps, or engagement.
- Do not connect real email, auth, analytics, Stripe, Patreon, or Ream without explicit approval.
- Keep the first screen useful for real Royal Road / web serial authors, not generic AI writing.
