import Link from "next/link";
import { FeedbackKit } from "@/components/FeedbackKit";
import { PublicShell } from "@/components/PublicShell";
import { buildPageMetadata } from "@/lib/metadata";
import { siteName } from "@/lib/site";

const description = `${siteName} feedback questions for the no-login Royal Road launch tools.`;

export const metadata = buildPageMetadata({
  title: "Feedback Kit",
  description,
  path: "/feedback"
});

export default function FeedbackPage() {
  return (
    <PublicShell>
      <main className="contentPage">
        <Link href="/" className="backLink">
          FictionOps
        </Link>
        <article className="contentArticle">
          <h1>Feedback Kit</h1>
          <p className="lede">
            A local-only packet for early reviewers. It helps collect workflow feedback without
            sending forms, storing emails, or connecting accounts.
          </p>
          <FeedbackKit />
        </article>
      </main>
    </PublicShell>
  );
}
