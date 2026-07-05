# MVP Spec

Project: Royal Road Author Launch Ops

Status: Draft, ready for user confirmation before coding.

## Positioning

A lightweight launch operations toolkit for Royal Road authors: plan the first 30 days, coordinate shoutout swaps, understand Rising Stars constraints, and prepare Patreon/backlog monetization without pretending to automate writing or game the platform.

## Primary User

Royal Road authors launching or relaunching a LitRPG / Progression Fantasy / serial fiction story.

## Core Job

Help an author answer:

- What should I do before launch?
- How many chapters/words should I prepare?
- What shoutout swaps should I line up?
- What communities can I post in without breaking rules?
- When does Patreon/backlog setup make sense?
- Are my early stats directionally healthy?

## Free MVP Features

### 1. Launch Plan Generator

Inputs:

- launch date
- current word count
- stockpiled chapters
- release cadence
- genre/tags
- whether Patreon/backlog exists
- planned ads/shoutouts

Outputs:

- Day -14 to Day +30 checklist
- chapter dump recommendation
- daily/weekly cadence reminder
- Rising Stars watch checkpoints
- community posting guardrails

Acceptance criteria:

- User can generate a plan without signup.
- Plan is copyable/exportable as Markdown.
- Plan includes warnings when word count/chapter stockpile is weak.
- Plan never claims guaranteed Rising Stars placement.

### 2. Shoutout Swap Tracker

Fields:

- author
- story
- RR link
- genre fit
- follower tier
- contact channel
- agreed date
- chapter/location
- shoutout code/snippet
- status
- reliability notes

Acceptance criteria:

- User can add/edit/delete rows locally.
- User can export CSV.
- Tool includes a "swap-ready" checklist.
- Tool includes ethical guidance: genuine fit, no spam, no fake reviews.

### 3. Patreon / Backlog Calculator

Inputs:

- RR followers
- expected conversion rate
- monthly tier prices
- advance chapters available
- release cadence

Outputs:

- revenue scenarios
- backlog runway
- warning if advance-chapter promise is unsustainable
- CTA placement checklist

Acceptance criteria:

- Shows conservative/base/optimistic scenarios.
- Makes conversion assumptions editable.
- Does not imply guaranteed income.

### 4. Community Rules Checklist

Communities:

- r/royalroad
- r/litrpg
- r/ProgressionFantasy
- r/writing
- r/selfpublish
- RR forums
- Discord communities

Acceptance criteria:

- Each community has "allowed / risky / do not do" guidance.
- Includes source links and last-reviewed date.
- Flags posting, market research, AI, surveys, and promotion frequency.

## SEO Page Set

Initial 10 pages:

1. Royal Road Shoutout Swaps: Practical Tracker and Checklist
2. Royal Road Rising Stars Metrics: What to Track Before Launch
3. Royal Road Follower Benchmark: How to Interpret Early Stats
4. Royal Road Launch Plan: First 30 Days Checklist
5. Royal Road to Patreon Conversion Calculator
6. Royal Road Genre Rising Stars: How to Check Tag Lists
7. Web Novel Launch Plan for LitRPG Authors
8. Royal Road Author Discords: Where Writers Network
9. Royal Road Cover Art Checklist
10. Royal Road vs Scribble Hub: Where to Post a Web Novel

## Non-Goals

- AI novel generation
- automatic fake engagement
- automated review swaps
- automated RR login or credential storage
- high-frequency RR scraping
- public launch before community trust is built

## Paid Hypotheses

Do not build paid features until validation.

Candidate Pro features:

- saved launch plans
- recurring reminders
- swap CRM with email/calendar reminders
- weekly story report
- benchmark comparisons
- Patreon/backlog planning history

## Confirmation Required Before Coding

The plan recommends finishing research before coding. The next code step should start only after the user confirms this MVP direction.
