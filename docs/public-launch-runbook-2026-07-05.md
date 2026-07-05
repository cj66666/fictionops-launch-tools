# Public Launch Runbook - 2026-07-05

This runbook is prepared only for after explicit human approval.

Do not execute any step that deploys, publishes, sends messages, purchases a domain,
stores emails, adds analytics, grants OAuth/API permissions, or changes account settings
without a matching approval.

## Current Local Baseline

- Local production preview: `http://127.0.0.1:3102`
- User-owned target domain: `fictionops.com`
- Latest local baseline commit: `022ef38` (`Record local launch baseline`)
- App: static/no-login Next.js public MVP
- Workbench route: `/app`
- Public shell routes: `/`, `/tools`, `/features`, `/pricing`, `/blog`, `/login`, `/signup`
- Public readiness routes: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/feed.xml`, `/llms.txt`, `/privacy`, `/terms`, `/feedback`

## Approval Bundles

### Bundle A: Deploy Only

Approved actions:

- Use an approved public origin.
- Deploy the current static MVP.
- Run public route verification.

Not approved:

- DNS/domain provider changes unless explicitly approved.
- Email capture.
- Analytics.
- Search Console.
- Community posting.
- Private outreach.

### Bundle B: Deploy + Basic Capture

Approved actions:

- Deploy the current MVP.
- Connect the approved email provider.
- Update privacy copy for email storage.
- Verify email form states.

Required approval details:

- Public origin.
- Provider: Buttondown or MailerLite.
- List/audience name.
- Whether to use embedded form or API endpoint.

Not approved unless separately named:

- Analytics.
- Search Console.
- Community posting.
- Private outreach.
- Payments.

### Bundle C: Research Post Only

Approved actions:

- Publish one approved workflow question with no product link.

Required approval details:

- Platform.
- Account.
- Exact final title.
- Exact final body.

Not approved:

- Tool links.
- DMs.
- Follow-up promotional posts.
- Discord joins or interactions.

### Bundle D: Full Soft Launch

Approved actions, only when explicitly named:

- Domain/deployment.
- Email capture or explicit no-email launch.
- Analytics or explicit no-analytics launch.
- Search Console.
- One approved public post.

Required approval details:

- Final origin.
- Email provider choice or `none`.
- Analytics provider choice or `none`.
- Search Console yes/no.
- Platform and exact post text.

## Deploy-Only Procedure

1. Confirm final origin:

```text
https://fictionops.com
```

2. Run local quality gate:

```bash
npm run verify
npm run verify:local-preview
```

3. Run guarded public build:

```bash
NEXT_PUBLIC_SITE_URL=https://fictionops.com npm run build:public
```

4. Deploy from the verified commit.

5. Verify public routes:

```bash
npm run verify:routes -- --origin=https://fictionops.com
```

6. Manually check in browser:

- `/`
- `/app`
- `/tools`
- `/features`
- `/pricing`
- `/blog`
- `/feedback`
- `/feed.xml`
- `/llms.txt`
- `/sitemap.xml`
- `/robots.txt`
- `/privacy`
- `/terms`
- `/missing-launch-route`

7. Capture desktop and mobile screenshots after deployment.

## Email Capture Procedure

Only run after explicit provider approval.

1. Confirm provider:

- Buttondown
- MailerLite

2. Confirm data stored:

- Email address.
- Optional source tag: `fictionops-public-launch`.
- No Royal Road username, credentials, story URL, or private account data.

3. Confirm the conditional privacy copy is acceptable for the chosen provider.

4. Configure the provider-ready signup form with environment variables:

```text
NEXT_PUBLIC_EMAIL_FORM_ACTION=
NEXT_PUBLIC_EMAIL_FORM_METHOD=post
NEXT_PUBLIC_EMAIL_FIELD_NAME=email
NEXT_PUBLIC_EMAIL_SOURCE_FIELD_NAME=metadata__source
NEXT_PUBLIC_EMAIL_SOURCE_VALUE=fictionops-weekly-checklist
NEXT_PUBLIC_EMAIL_EXTRA_HIDDEN_FIELDS=embed=1
```

The form remains local-only when `NEXT_PUBLIC_EMAIL_FORM_ACTION` is blank.

For Buttondown, use:

```text
NEXT_PUBLIC_EMAIL_FORM_ACTION=https://buttondown.com/api/emails/embed-subscribe/<buttondown-username>
```

Keep `NEXT_PUBLIC_EMAIL_FIELD_NAME=email`. Keep `NEXT_PUBLIC_EMAIL_EXTRA_HIDDEN_FIELDS=embed=1`
for the embedded form flag. Use `metadata__source` for the internal source marker.

5. Verify states:

- empty email validation
- invalid email validation
- successful subscription
- provider/network failure
- no horizontal mobile overflow

6. Re-run:

```bash
npm run lint
npm test
npm run build
npm run verify:routes -- --origin=https://fictionops.com
```

## Analytics Procedure

Only run after explicit provider approval.

Acceptable first-pass choices:

- Vercel Analytics
- Umami
- Plausible
- none

Rules:

- Do not add session replay.
- Do not add ad pixels.
- Do not collect Royal Road credentials or account data.
- Configure the provider-ready analytics layer only after approval:

```text
NEXT_PUBLIC_ANALYTICS_PROVIDER=
NEXT_PUBLIC_ANALYTICS_DOMAIN=fictionops.com
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
NEXT_PUBLIC_UMAMI_HOST_URL=
```

- Conditional privacy copy is already in place and changes when analytics is enabled.

Verification:

- Page renders without console errors.
- Analytics script is absent when provider is `none`.
- Analytics script is present only for the approved provider.

## Search Console Procedure

Only run after public deployment approval and public URL verification.

Prerequisites:

- `/sitemap.xml` returns approved public URLs.
- `/robots.txt` references the approved public sitemap.
- Canonical and OpenGraph URLs use the approved origin.
- `npm run verify:routes -- --origin=https://fictionops.com` passes.

Do not submit before the public origin is stable.

## Community Posting Procedure

Only run after exact platform/account/title/body approval.

Preferred first step:

- workflow research post
- no link
- no product name unless the approved copy includes it
- no claim of results, ranking guarantees, or platform endorsement

After posting:

- record URL
- monitor comments for 48 hours
- summarize feedback into Feishu and `docs/`
- do not DM commenters unless separately approved

## Rollback Plan

If public deployment has a critical issue:

1. Stop further posting/outreach.
2. Revert to the last known good deployment in the host dashboard.
3. Re-run public route verification.
4. Record the incident in `docs/`.
5. Ask for human priority only if the fix changes scope or public behavior materially.

## Human Approval Template

Use one of these exact forms:

```text
Approve Bundle A.
Origin: https://fictionops.com
Deploy target: Vercel
No email, no analytics, no posting.
```

```text
Approve Bundle B.
Origin: https://fictionops.com
Deploy target: Vercel
Email provider: Buttondown or MailerLite
Analytics: none
No posting.
```

```text
Approve Bundle C.
Platform:
Account:
Title:
Body:
No links.
```

```text
Approve Bundle D.
Origin:
Deploy target:
Email provider or none:
Analytics provider or none:
Search Console: yes/no
Platform:
Title:
Body:
```
