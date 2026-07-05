# Product Logic Hardening - 2026-07-05

Purpose: close the product-review findings before the soft-launch freeze.

## Fixed

### CSV Formula Injection

CSV export now neutralizes spreadsheet formula cells by prefixing a single quote when a cell
starts with:

- `=`
- `+`
- `-`
- `@`
- tab / carriage return
- whitespace followed by one of the formula operators above

This protects swap snippets, notes, author names, and contact fields copied from external
authors before a user opens the exported CSV in Excel or similar spreadsheet apps.

### Patreon NaN Guard

Patreon calculator inputs and core calculation now coerce non-finite values to `0`, then clamp
negative values to `0`. This prevents `NaN` patrons, `NaN` revenue, and warning suppression when a
number input is temporarily empty or invalid.

### CSV Import Confirmation

CSV import now asks for browser confirmation before replacing existing swap records. Canceling the
prompt keeps the current records and shows a non-destructive status message.

### localStorage Write Failure

Swap Tracker now catches `localStorage.setItem` failures and tells the user to export CSV before
leaving if the browser cannot save changes.

### Patreon Assumption Copy

The calculator now states that the default `1% / 3% / 6%` conversion rates are conservative
full-follower planning assumptions, not benchmarks from already-monetized survivor samples.

## Already Resolved Before This Pass

- Fake seeded Royal Road story URLs were removed from sample swaps.
- `icon.png` and `apple-icon.png` already exist in `public/` and are wired into metadata.

## Verification

- `npm run lint`
- `npm test` - 17 files / 59 tests passed.
- `npm run build`
- `NEXT_PUBLIC_SITE_URL=https://fictionops.com npm run verify:routes`

## Deployment Status

Implemented and verified locally. Not deployed yet. Production deployment still requires explicit
approval because pushing `master` triggers Vercel.
