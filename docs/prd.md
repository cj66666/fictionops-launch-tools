# PRD: Royal Road Author Launch Ops

Status: Pre-code product package

Date: 2026-07-04

## 1. Product Summary

Royal Road Author Launch Ops is a no-login toolkit for web serial authors who are preparing a Royal Road launch. It turns scattered advice about chapter stockpiles, Rising Stars, shoutout swaps, Patreon/backlog planning, and community rules into a practical 30-day operating plan.

The first product must feel like an author workbench, not an AI writing product and not a marketing landing page.

## 2. Target User

Primary:

- Royal Road authors launching or relaunching a LitRPG / Progression Fantasy / fantasy serial.
- New or mid-tier authors who are anxious about visibility and do not yet have a mature launch workflow.

Secondary:

- Authors already posting on Royal Road who want better tracking for shoutout swaps, stats, and Patreon readiness.
- Readers/authors researching how Royal Road launch mechanics work.

## 3. Problem

Authors can find scattered advice, but execution is fragmented:

- launch schedule lives in notes
- shoutout swaps happen in Discord/DMs and are tracked in spreadsheets
- Rising Stars advice is opaque and often contradictory
- Patreon/backlog planning is guesswork
- Reddit and forum rules vary by community
- Royal Road analytics show numbers, but not always what to do next

## 4. Product Promise

Plan your Royal Road launch without a messy spreadsheet.

## 5. Non-Negotiables

- No AI novel generation.
- No fake engagement, review swap automation, or spam workflow.
- No Royal Road credential handling.
- No guarantee of Rising Stars placement.
- No public posting or account action without human approval.
- No high-frequency scraping in v1.

## 6. MVP Scope

### 6.1 Launch Plan Generator

Inputs:

- launch date
- current word count
- stockpiled chapters
- average words per chapter
- target release cadence
- primary genre
- tags
- planned shoutouts
- planned ads
- Patreon/backlog readiness

Outputs:

- day -14 to day +30 checklist
- launch readiness score
- word count and stockpile warnings
- chapter dump/cadence guidance
- Rising Stars watch tasks
- community posting guardrails
- copyable Markdown plan

Acceptance criteria:

- Works without signup.
- All recommendations are framed as guidance, not guarantees.
- User can copy/export the plan.
- Warnings trigger for low stockpile, low word count, unsustainable cadence, no swap plan, or premature Patreon promise.

### 6.2 Shoutout Swap Tracker

Fields:

- author
- story
- Royal Road link
- genre/tags
- follower tier
- contact channel
- agreed date
- insertion chapter/location
- snippet/code
- status
- reliability notes

Outputs:

- table of swaps
- missing-info warnings
- CSV export
- copyable shoutout snippet
- "swap-ready" checklist

Acceptance criteria:

- Add/edit/delete rows locally.
- Export CSV.
- Status values include: prospect, contacted, agreed, scheduled, posted, confirmed, stale.
- Guidance discourages spam, fake reviews, and irrelevant swaps.

### 6.3 Patreon / Backlog Calculator

Inputs:

- current followers
- conversion assumptions
- tier prices
- advance chapters available
- release cadence
- planned public chapters per week

Outputs:

- conservative/base/optimistic revenue scenarios
- backlog runway in weeks
- warnings when promises exceed writing capacity
- suggested CTA checklist

Acceptance criteria:

- Assumptions are editable.
- Does not imply guaranteed income.
- Highlights when advance chapters will run out.

### 6.4 Community Rules Checklist

Communities:

- r/royalroad
- r/litrpg
- r/ProgressionFantasy
- r/writing
- r/selfpublish
- Royal Road forums
- Discord communities

Outputs:

- allowed / risky / do not do
- promotion frequency notes
- market research / survey / AI / self-promo risk flags
- source links and last-reviewed dates

Acceptance criteria:

- Each rule item links to source.
- Copy makes clear that rules may change and should be checked before posting.
- No auto-posting.

## 7. First Screen

The first screen should be the actual tool, not a marketing hero.

Recommended layout:

- left rail: Launch Plan, Swaps, Patreon, Community Rules
- main workspace: selected tool
- right panel: warnings, next actions, export
- compact header: product name, no-login/save-local note

## 8. Success Metrics

Pre-launch prototype:

- all four tools usable locally
- no critical UX dead ends
- plan export works
- CSV export works
- calculator scenarios match test cases
- community rules display source links

Soft launch:

- 50+ email signups or 10+ concrete feedback replies
- at least 5 authors say the tool is useful or ask for saved plans/reminders
- no negative trust feedback about AI spam or platform abuse

## 9. Future Pro Hypotheses

Only build after validation:

- saved launch plans
- reminder emails
- swap CRM with recurring reminders
- weekly story reports
- benchmark comparisons
- Patreon/backlog history
- public launch reports

## 10. Open Questions

- Brand/domain: `fictionops.com`, `seriallaunchpad.com`, `chapterops.com`, or another name.
- Email provider: Buttondown vs MailerLite.
- Whether to add account/saved plans in v1 or keep v1 fully local.
- Whether to publish under an author/reader persona or neutral tool-builder persona.
