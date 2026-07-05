import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, XCircle } from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { buildPageMetadata } from "@/lib/metadata";

const freeItems = [
  "No-login launch plan generator",
  "Shoutout swap tracker with CSV export",
  "Patreon runway calculator",
  "Community rules checklist",
  "Structured guides and tool pages"
];

const proItems = [
  "Saved launch plans",
  "Weekly launch reminders",
  "Swap CRM and follow-up queue",
  "Benchmark history",
  "Email reports after real provider approval"
];

const exclusions = [
  "No AI novel generation",
  "No Royal Road credential storage",
  "No auto-posting or DMs",
  "No engagement farming",
  "No ranking guarantees"
];

export const metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "FictionOps pricing hypothesis: free no-login tools now, Pro waitlist later for saved launch plans, reminders, swap CRM, and benchmark history.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <PublicShell>
      <main className="pricingPage">
        <section className="directoryHero">
          <h1>Free tools now. Pro only after validation.</h1>
          <p>
            FictionOps is not charging today. This page explains the pricing hypothesis so authors
            can react before we build accounts, payments, or saved data.
          </p>
        </section>

        <section className="pricingGrid">
          <article className="pricingPlan">
            <div>
              <h2>Free</h2>
              <p>No account required</p>
            </div>
            <strong>$0</strong>
            <ul>
              {freeItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <Link className="button primary" href="/app">
              Open free tools
              <ArrowRight size={15} />
            </Link>
          </article>

          <article className="pricingPlan emphasized">
            <div>
              <h2>Pro waitlist</h2>
              <p>Not live yet</p>
            </div>
            <strong>Later</strong>
            <ul>
              {proItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <Link className="button secondary" href="/signup">
              Join waitlist preview
              <ArrowRight size={15} />
            </Link>
          </article>
        </section>

        <section className="exclusionBand">
          <div>
            <ShieldCheck size={24} />
            <h2>What FictionOps will not sell</h2>
          </div>
          <div className="exclusionGrid">
            {exclusions.map((item) => (
              <span key={item}>
                <XCircle size={15} />
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
