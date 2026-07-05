import Link from "next/link";
import { PublicShell } from "@/components/PublicShell";
import { buildPageMetadata } from "@/lib/metadata";
import { legalEffectiveDate, siteName } from "@/lib/site";

const description = `${siteName} terms for the no-login MVP.`;

export const metadata = buildPageMetadata({
  title: "Terms",
  description,
  path: "/terms"
});

export default function TermsPage() {
  return (
    <PublicShell>
      <main className="contentPage">
        <Link href="/" className="backLink">
          FictionOps
        </Link>
        <article className="contentArticle">
          <h1>Terms</h1>
          <p className="lede">Effective date: {legalEffectiveDate}</p>

          <section>
            <h2>Use of the tools</h2>
            <p>
              FictionOps provides planning checklists, calculators, and trackers for authors. The
              tools are informational and do not guarantee Royal Road ranking, traffic, revenue, or
              community approval.
            </p>
          </section>

          <section>
            <h2>Platform rules</h2>
            <p>
              Authors are responsible for checking and following the current rules of Royal Road,
              Reddit communities, Discord servers, Patreon, Ream, Amazon, and any other platform they
              use.
            </p>
          </section>

          <section>
            <h2>No automation promise</h2>
            <p>
              The MVP does not automate posting, private messages, review swaps, credential storage,
              scraping, or engagement farming. Any future integration must be approved separately and
              designed around platform trust.
            </p>
          </section>

          <section>
            <h2>User responsibility</h2>
            <p>
              Review exported plans before publishing or sending anything. Do not use the tools for
              spam, fake engagement, deceptive promotion, or violations of community norms.
            </p>
          </section>
        </article>
      </main>
    </PublicShell>
  );
}
