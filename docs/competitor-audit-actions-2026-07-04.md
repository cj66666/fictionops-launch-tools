# Competitor Audit Actions

Date: 2026-07-04

Input: Feishu competitor table audit plus grouped review of Royal Road direct ecosystem, writing tools, and subscription/email tools.

## Audit Signal

The local MVP was strong as a usable tool bench but weak as a public acquisition surface.

Key gaps identified:

- No subscription or retention entry.
- Weak first-screen conversion action.
- Trust promises were present but too quiet.
- No visible future paid path.
- Sample output packaging was light.
- Brand felt more like an internal dashboard than a public author product.

## Implemented

- Reworked first-screen copy to: `Royal Road launch ops without login.`
- Added primary CTA: `Get weekly checklist`.
- Added first-screen trust badges:
  - No Royal Road credentials.
  - No auto-posting.
  - No scraping required.
  - Source-linked rules.
- Added local-only weekly checklist signup preview.
- Added sample output chips: launch checklist, swap sheet, Patreon runway.
- Added future Pro teaser focused on saved plans, reminders, swap CRM, and benchmark history.
- Updated privacy page to clarify that the signup preview does not send or store email addresses.
- Fixed mobile horizontal overflow introduced by the new conversion strip.
- Packaged the Patreon calculator tool page as a stronger acquisition page with proof points, assumptions, result-reading guidance, trust boundaries, and a direct CTA.
- Added structured content across all initial SEO tool/guide pages so the site is less dependent on thin page shells.

## Still Human-Gated

The current signup is intentionally local-only. Activating real capture requires approval for:

- Email provider selection.
- Public form endpoint.
- Privacy policy update.
- Public deployment.

Candidate providers from the audit:

- Buttondown for simple newsletter capture.
- MailerLite for forms, landing pages, and automation.

## Verification

- `npm run lint` passed.
- `npm test` passed: 6 files, 21 tests.
- `npm run build` passed: 21 static routes.
- `npm audit --omit=dev` passed: 0 production vulnerabilities.
- Claude Code second review found no P0 issues; P1 signup validation/message-state issues were fixed.
- `npm run verify` passed after the second review fixes.
- `NEXT_PUBLIC_SITE_URL=https://fictionops.example.com npm run build:public` passed after the second review fixes.
- In-app browser QA:
  - Primary CTA visible.
  - Trust badges visible.
  - Signup preview accepts an email locally and states no email was sent or stored.
  - Empty email shows amber validation text.
  - Editing the email clears stale messages.
  - Console warnings/errors: 0.
  - Mobile scroll width equals client width after overflow fix.

Evidence screenshots:

- `output/qa/fictionops-conversion-desktop-final.png`
- `output/qa/fictionops-conversion-mobile-fixed-2.png`
- `output/qa/fictionops-claude-second-review-desktop.png`
- `output/qa/fictionops-claude-second-review-mobile.png`
- `output/qa/fictionops-patreon-seo-desktop.png`
- `output/qa/fictionops-patreon-seo-mobile.png`
- `output/qa/fictionops-seo-content-tool-desktop.png`
- `output/qa/fictionops-seo-content-guide-mobile.png`
