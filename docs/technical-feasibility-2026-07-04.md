# Technical Feasibility Notes

Date: 2026-07-04

## Decision

Start with a pure front-end / user-entered workflow MVP, then add conservative public-data integrations only where allowed and necessary.

Reason: the strongest near-term pain is launch operations, not exhaustive data scraping. A useful v1 can be built with checklists, calculators, templates, and user-entered data while avoiding Royal Road scraping risk.

## Royal Road Data Reality

Observed:

- Royal Road has official analytics for authors, including pageviews per chapter, ratings over time, follower history, favorite history, and review notifications under Author Premium.
- Reader Premium / Author Premium website prices are listed as $3.49 and $5.99 plus VAT on the website, with app pricing localized.
- Royal Road Rising Stars is official but algorithmic and changing. Official docs say it is based on multiple factors and rotates often.
- Public tracker projects exist, including a Rising Stars history tracker with hourly archives since 2023 and tools for current rankings, cohorts, alerts, analytics, and list checking.

Implications:

- Do not promise algorithm reverse engineering.
- Do not ship aggressive crawlers in v1.
- Do not collect or store a user's Royal Road login credentials.
- If user-specific stats are needed, prefer user input, manual CSV/paste, or browser-local export helpers before any server-side scraping.
- If public pages are read later, implement low-rate, robots-aware fetching, caching, and a kill switch.

## MVP Architecture

Recommended stack:

- Next.js
- Vercel
- Supabase, only if accounts/saved plans are needed
- Static JSON/MDX for rules, keyword pages, and calculators
- Buttondown or MailerLite for email after confirmation

v1 can be static/client-side:

- Launch plan generator
- Shoutout swap tracker
- Patreon/backlog calculator
- Community rules checklist
- SEO content pages

Add backend only when needed:

- saved plans
- email report scheduling
- account-specific historical stats
- team/collaboration features

## Data Policy

Allowed for v1:

- user-entered fiction URL, launch date, chapter count, word count, schedule, target communities
- manually pasted follower/view numbers
- public rule summaries with source links
- static templates and calculators

Avoid for v1:

- RR credential handling
- automated posting
- automated private messages
- high-frequency crawling
- anything framed as gaming the Rising Stars algorithm

## Feasibility Outcome

Data-heavy dashboard is feasible later, but the lowest-risk wedge is a no-login launch ops tool.

Build order:

1. Static launch planner.
2. Shoutout swap tracker.
3. Patreon/backlog calculator.
4. SEO pages for Rising Stars, shoutout swaps, Patreon conversion, and RR stats benchmarks.
5. Optional saved plans after real user demand.
