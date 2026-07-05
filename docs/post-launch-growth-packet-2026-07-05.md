# Post-Launch Growth Packet - 2026-07-05

This packet prepares the next growth actions after the public site launch.

No action in this file has been executed unless explicitly stated. Search Console,
analytics, email capture, community posting, private outreach, payments, and account
systems still require explicit approval.

## Current Public State

- Public site: `https://fictionops.com`
- Workbench: `https://fictionops.com/app`
- Sitemap: `https://fictionops.com/sitemap.xml`
- Robots: `https://fictionops.com/robots.txt`
- RSS: `https://fictionops.com/feed.xml`
- LLMs text: `https://fictionops.com/llms.txt`
- Public route verifier passed against `https://fictionops.com`.
- Public browser QA completed for desktop homepage and mobile workbench.

## Recommended Next Sequence

1. Search Console submission.
2. Analytics decision.
3. Email capture decision.
4. First no-link workflow research post.
5. Feedback triage and first public iteration.

## Search Console Packet

Approval needed:

```text
Approve Search Console submission for https://fictionops.com.
```

Execution after approval:

1. Add `https://fictionops.com` as a URL-prefix property, or domain property if DNS verification is preferred.
2. Verify ownership using the method chosen in Search Console.
3. Submit sitemap:

```text
https://fictionops.com/sitemap.xml
```

4. Record the verification method and submission status in `docs/`.

Do not submit before approval.

Implementation readiness:

- The site supports optional Google verification metadata through
  `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- After Google provides the verification token, add it to Vercel and redeploy before clicking
  verify in Search Console.

## Analytics Packet

Recommended first choice: Vercel Analytics, because the site is already on Vercel.

Alternative choices:

- Umami
- Plausible
- none

Approval needed:

```text
Approve analytics.
Provider: Vercel Analytics / Umami / Plausible / none
```

Rules:

- No ad pixels.
- No session replay.
- No Royal Road account data.
- Update privacy copy before enabling analytics.
- Re-run public route verification after implementation.

## Email Capture Packet

Recommended first choice: Buttondown.

Alternative: MailerLite.

Current state:

- Signup/checklist flow is local-only.
- No email is submitted or stored.
- Email remains the one review-identified soft-launch gap that still requires human approval.

Approval needed:

```text
Approve email capture.
Provider: Buttondown / MailerLite
List name:
```

Rules:

- Store only email address and source tag.
- No Royal Road username, story URL, credentials, or private account data.
- Update privacy copy before activation.
- Verify empty, invalid, success, and provider-failure states.

## First Community Research Post

Recommended first channel: `r/royalroad`.

Post type:

- workflow research
- no link
- no product mention beyond "trying to map the workflow" if needed
- no DMs
- no promotional follow-up without approval

Approval needed:

```text
Approve first research post.
Platform: r/royalroad
Account:
Title: Authors: how do you plan your first 30 days on Royal Road?
Body:
I've been trying to understand how Royal Road authors plan a launch without turning it into a giant spreadsheet.

For people who have launched or are preparing to launch:

- How many chapters/words did you stockpile before day one?
- Did you plan shoutout swaps in advance, or figure them out after posting?
- Do you track followers/views/comments over time, and if so where?
- What did you wish you had checked before launch?

Not selling anything. I'm trying to map the workflow and common failure points. Happy to share a summary afterward.
```

## First Feedback Loop

After any approved post or public feedback:

1. Capture comments and issues into Feishu.
2. Convert feedback into one of:
   - bug
   - copy concern
   - feature request
   - trust/safety concern
   - unclear positioning
3. Prioritize changes that improve launch trust, tool clarity, or signup conversion.
4. Do not build Pro/payment features until there is concrete waitlist or interview evidence.

## Not Approved Yet

- Search Console submission.
- Analytics.
- Email provider connection.
- Reddit/Royal Road/Discord posting.
- Private outreach.
- Payment or account system.
