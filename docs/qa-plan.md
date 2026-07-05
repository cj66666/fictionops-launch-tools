# QA Plan

Date: 2026-07-04

## Test Strategy

The MVP is a no-login tool suite. QA should focus on deterministic calculations, export correctness, responsive UI, and trust/safety copy.

## Unit Test Targets

Launch planner:

- low word count warning below 10k
- stronger warning below 20k
- stockpile warning when chapters are insufficient for chosen cadence
- plan contains day -14 through day +30 tasks
- Rising Stars copy never says "guaranteed"

Patreon calculator:

- conservative/base/optimistic scenarios compute correctly
- zero followers does not crash
- zero conversion rate returns zero revenue
- backlog runway calculation handles weekly cadence
- unsustainable promise warning triggers

CSV/Markdown export:

- CSV escapes commas, quotes, and line breaks
- Markdown plan includes inputs, warnings, checklist, and source/disclaimer
- empty swap table exports headers

Community rules:

- every community has source URL
- every community has allowed/risky/do-not-do sections
- rules include last-reviewed date

## Browser QA Flows

Desktop:

1. Open app.
2. Generate launch plan with realistic inputs.
3. Copy/export plan.
4. Add 3 shoutout swaps.
5. Export CSV.
6. Calculate Patreon scenarios.
7. Review community rules.

Mobile:

1. Navigate all four tools.
2. Confirm inputs are usable.
3. Confirm tables do not overflow incoherently.
4. Confirm export buttons remain visible and labels fit.

## Visual QA

Check:

- no overlapping text
- no layout shift when warnings appear
- buttons have stable dimensions
- dense tool panels remain readable
- mobile table/card representation is usable
- source links are visible but not dominant

## Safety QA

Must verify:

- no AI novel generation claims
- no auto-posting
- no review manipulation
- no promise of Rising Stars placement
- no request for Royal Road credentials
- no scraping claims in UI

## Build Gates

Before user review:

- install succeeds
- lint passes
- build passes
- local browser smoke test passes
- screenshots captured for desktop and mobile
