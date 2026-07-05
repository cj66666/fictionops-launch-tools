# Post-Launch Growth Packet - 2026-07-05

This packet prepares and records the next growth actions after the public site launch.

Search Console, analytics, email capture, community posting, private outreach, payments,
and account systems require explicit approval before execution. Items below are marked
when executed.

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
2. Analytics decision. Completed with Vercel Analytics on 2026-07-05.
3. Email capture decision.
4. First no-link workflow research post.
5. Feedback triage and first public iteration.

## Bing / IndexNow Packet

Bing Webmaster Tools still needs browser/account access for dashboard import and reporting.
IndexNow can be executed without the dashboard as a search-engine notification path.

Executed readiness:

- IndexNow key file: `https://fictionops.com/cf75c61bc21243e88f63089c89aeedde.txt`
- Local file: `public/cf75c61bc21243e88f63089c89aeedde.txt`
- Submit script: `npm run submit:indexnow`
- Source of URLs: `https://fictionops.com/sitemap.xml`
- Production deployment: `dpl_HtbP7YgSF7RM8F39uchHysVbq28X`
- Submission result on 2026-07-05: 20 sitemap URLs submitted to `https://www.bing.com/indexnow`;
  Bing returned HTTP `202 Accepted`.

The IndexNow protocol requires a UTF-8 key file hosted on the same host, then a POST request
containing `host`, `key`, `keyLocation`, and `urlList`. Bing's public documentation describes
this as a way to submit changed URLs after hosting the API key.

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
- Use the existing provider-ready analytics configuration:
  - `NEXT_PUBLIC_ANALYTICS_PROVIDER`
  - `NEXT_PUBLIC_ANALYTICS_DOMAIN`
  - `NEXT_PUBLIC_UMAMI_WEBSITE_ID`
  - `NEXT_PUBLIC_UMAMI_HOST_URL`
- Privacy copy is already conditional and will show analytics-provider language when configured.
- Re-run public route verification after enabling a provider.

Executed:

- Provider: Vercel Analytics.
- Vercel env: `NEXT_PUBLIC_ANALYTICS_PROVIDER=vercel` in Production and Preview.
- Production deployment: `dpl_AGQ3bFBTqMRuPiZr1XiDwgWpv6kx`.
- Alias: `https://fictionops.com`.
- Verification: public route verifier passed, homepage loads `/_vercel/insights/script.js`,
  privacy page names the approved `vercel` analytics provider.

Conversion event tracking prepared:

- Implementation record: `docs/conversion-event-tracking-2026-07-05.md`.
- Deploy approval packet: `docs/conversion-event-deploy-approval-2026-07-05.md`.
- Added official `@vercel/analytics` package for Vercel custom events.
- Events prepared: `cta_click`, `email_signup_submit`, `email_signup_invalid`, and
  `workbench_section_click`.
- Event properties avoid emails, Royal Road handles, story URLs, credentials, and private
  account data.
- Deployment status: implemented locally and verified; production deploy still requires
  approval because pushing code to `master` triggers the public Vercel deployment.

## Email Capture Packet

Recommended first choice: Buttondown.

Alternative: MailerLite.

Current state:

- Signup/checklist flow is provider-ready but disabled by default.
- No email is submitted or stored unless `NEXT_PUBLIC_EMAIL_FORM_ACTION` is configured after approval.
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
- Use the existing provider-ready form configuration:
  - `NEXT_PUBLIC_EMAIL_FORM_ACTION`
  - `NEXT_PUBLIC_EMAIL_FORM_METHOD`
  - `NEXT_PUBLIC_EMAIL_FIELD_NAME`
  - `NEXT_PUBLIC_EMAIL_SOURCE_FIELD_NAME`
  - `NEXT_PUBLIC_EMAIL_SOURCE_VALUE`
  - `NEXT_PUBLIC_EMAIL_EXTRA_HIDDEN_FIELDS`
- Privacy copy is already conditional and will show provider language when the form action is configured.
- Verify empty, invalid, successful subscription, and provider-failure states after the provider is connected.

Buttondown-ready settings:

```text
NEXT_PUBLIC_EMAIL_FORM_ACTION=https://buttondown.com/api/emails/embed-subscribe/<buttondown-username>
NEXT_PUBLIC_EMAIL_FORM_METHOD=post
NEXT_PUBLIC_EMAIL_FIELD_NAME=email
NEXT_PUBLIC_EMAIL_SOURCE_FIELD_NAME=metadata__source
NEXT_PUBLIC_EMAIL_SOURCE_VALUE=fictionops-weekly-checklist
NEXT_PUBLIC_EMAIL_EXTRA_HIDDEN_FIELDS=embed=1
```

Buttondown's docs show the embedded HTML form posting to
`https://buttondown.com/api/emails/embed-subscribe/YOUR-BUTTONDOWN-USERNAME`, using
`name="email"` for the subscriber email and `name="embed"` with value `1` for embedded forms.
Metadata fields use the `metadata__<key>` naming convention.

Executed:

- Provider: Buttondown.
- Buttondown username: `cj68681968`.
- Buttondown newsletter page: `https://buttondown.com/cj68681968`.
- Buttondown form action: `https://buttondown.com/api/emails/embed-subscribe/cj68681968`.
- Buttondown public settings updated:
  - Newsletter name: `FictionOps Weekly`
  - Author name: `FictionOps`
- Vercel env configured in Production and Preview:
  - `NEXT_PUBLIC_EMAIL_FORM_ACTION`
  - `NEXT_PUBLIC_EMAIL_FORM_METHOD`
  - `NEXT_PUBLIC_EMAIL_FIELD_NAME`
  - `NEXT_PUBLIC_EMAIL_SOURCE_FIELD_NAME`
  - `NEXT_PUBLIC_EMAIL_SOURCE_VALUE`
  - `NEXT_PUBLIC_EMAIL_EXTRA_HIDDEN_FIELDS`
- Production deployment: `dpl_J9cDtMspxM35894sfyB8TJHv3ehh`.
- Verification: public route verifier passed; `/signup` and `/app` contain the Buttondown
  action, `metadata__source`, and `embed=1`; `/privacy` says the weekly checklist submits
  to the approved email provider.

## First Community Research Post

Recommended first channel: `r/royalroad`.

Execution packet:

- `docs/community-research-post-2026-07-05.md`
- `data/community-feedback-template.csv`

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

Executed:

- Posted on 2026-07-05 14:55:54 +08:00 after user approval.
- Account: `u/Negative-Pea6372`.
- Flair: `Discussion`.
- URL: `https://www.reddit.com/r/royalroad/comments/1unv9oh/authors_how_do_you_plan_your_first_30_days_on/`.
- Outcome: submitted, then immediately removed by `r/royalroad` moderation.
- Feishu platform process record: `recvotMAThyqQr`.
- Follow-up decision: do not repost to `r/royalroad` without separate approval.

Next prepared route:

- `docs/royal-road-forum-research-post-2026-07-05.md`
- Recommended platform: Royal Road Forums.
- Recommended category: `Writing: Tips & Discussions`.
- Status: prepared and approved, but not posted because the user confirmed there is no
  registered Royal Road account. Treat this as an account availability blocker, not market
  feedback.

Royal Road forum execution attempt:

- Attempted on 2026-07-05 15:07:29 +08:00 after approval.
- Chrome had `https://www.royalroad.com/forums` open, but Royal Road showed no logged-in
  posting session.
- User confirmed: no Royal Road account is registered.
- Outcome: not posted.
- Feishu platform process record: `recvotPx6gkCYf`.
- Follow-up decision: pause Royal Road forum posting until an account exists and a new
  action-time confirmation is given.

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

## Post-Launch Audit Hardening

Executed on 2026-07-05 after the deployment audit.

- Confirmed the reported apex/www redirect loop was stale: production now keeps `fictionops.com`
  as canonical and redirects `www.fictionops.com` to apex.
- Fixed the middleware redirect helper so non-standard local/preview ports are stripped when
  redirecting to the public apex host.
- Updated the Report-Only CSP builder to dedupe repeated sources and include the Buttondown
  origin in `form-action` when `NEXT_PUBLIC_EMAIL_FORM_ACTION` is configured.
- Added public `icon.png` and `apple-icon.png` assets and wired them through app metadata.
- Added explicit noindex metadata to the branded not-found route.
- Production deployment: `dpl_3YLVxYad532iML11UmbV8ENVUmZC`.
- Git commit: `0b0211c` (`Harden launch redirects and headers`).
- Verification: `npm run lint`, `npm test` (16 files / 54 tests), public build, production
  route verifier, live icon checks, live Buttondown form check, and live CSP check all passed.

## Not Approved Yet

- Any additional Reddit/Royal Road/Discord posting beyond the already attempted Reddit post
  and the paused Royal Road forum attempt.
- Private outreach.
- Payment or account system.
