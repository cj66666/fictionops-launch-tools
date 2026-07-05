import Link from "next/link";
import { PublicShell } from "@/components/PublicShell";
import { getEmailCaptureConfig } from "@/lib/emailCapture";
import { buildPageMetadata } from "@/lib/metadata";
import { legalEffectiveDate, siteName } from "@/lib/site";

const description = `${siteName} privacy notes for the no-login MVP.`;
const emailCaptureConfig = getEmailCaptureConfig();

export const metadata = buildPageMetadata({
  title: "Privacy",
  description,
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <PublicShell>
      <main className="contentPage">
        <Link href="/" className="backLink">
          FictionOps
        </Link>
        <article className="contentArticle">
          <h1>Privacy</h1>
          <p className="lede">Effective date: {legalEffectiveDate}</p>

          <section>
            <h2>No account required</h2>
            <p>
              The current FictionOps MVP does not require login, does not ask for platform
              credentials, and does not connect to Royal Road, Reddit, Discord, Patreon, Ream, or
              email accounts.
            </p>
          </section>

          <section>
            <h2>Local tool data</h2>
            <p>
              Launch inputs, swap notes, and calculator values are processed in the browser for the
              visible tool session. Exports are generated as local Markdown or CSV files.
            </p>
          </section>

          <section>
            <h2>Update signup preview</h2>
            {emailCaptureConfig.enabled ? (
              <p>
                The weekly checklist form submits the entered email address and a source tag to the
                approved email provider. It does not request Royal Road, Reddit, Discord, Patreon,
                Ream, or other platform credentials.
              </p>
            ) : (
              <p>
                The weekly checklist signup in this local MVP is a preview only. It does not send,
                store, or subscribe an email address until an email provider is separately approved
                and connected.
              </p>
            )}
          </section>

          <section>
            <h2>Feedback kit</h2>
            <p>
              The feedback kit is also local-only. It lets reviewers copy a text packet, but it does
              not submit forms, transmit feedback, or store responses.
            </p>
          </section>

          <section>
            <h2>Hosting logs</h2>
            <p>
              If the site is publicly deployed, the hosting provider may keep standard request logs
              such as IP address, browser, requested URL, and timestamp for security and operations.
            </p>
          </section>

          <section>
            <h2>Future changes</h2>
            <p>
              Saved plans, analytics, or paid features will require a separate product decision and
              an updated privacy policy before being enabled. Email signup also remains disabled
              unless this deployment is configured with an approved provider action.
            </p>
          </section>
        </article>
      </main>
    </PublicShell>
  );
}
