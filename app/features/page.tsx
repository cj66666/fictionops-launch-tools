import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarRange,
  FileText,
  Handshake,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { buildPageMetadata } from "@/lib/metadata";

const featureRows = [
  {
    icon: CalendarRange,
    title: "Launch plan generator",
    body:
      "Plan day -14 through day +30 with stockpile warnings, cadence review, swap reminders, and community-safe next actions."
  },
  {
    icon: Handshake,
    title: "Shoutout swap tracker",
    body:
      "Track story fit, contact channel, snippet, insertion location, status, and reliability notes with CSV export."
  },
  {
    icon: BarChart3,
    title: "Patreon runway calculator",
    body:
      "Estimate conservative, base, and optimistic patron scenarios and check whether advance chapters can survive the promised cadence."
  },
  {
    icon: ShieldCheck,
    title: "Community rules checklist",
    body:
      "Keep self-promo, survey, AI, and posting-risk notes visible before publishing anywhere."
  },
  {
    icon: TrendingUp,
    title: "Stats and Rising Stars watch",
    body:
      "Use stats as review signals for packaging and cadence without pretending FictionOps can guarantee ranking movement."
  },
  {
    icon: Bell,
    title: "Future reminders",
    body:
      "The Pro hypothesis is operational memory: saved plans, reminder emails, swap CRM, benchmark history, and weekly reports."
  }
];

export const metadata = buildPageMetadata({
  title: "Features",
  description:
    "See how FictionOps supports launch planning, swap coordination, Patreon runway modeling, community rules, and future saved workflows.",
  path: "/features"
});

export default function FeaturesPage() {
  return (
    <PublicShell>
      <main className="directoryPage">
        <section className="directoryHero">
          <h1>Author operations, not generic writing automation.</h1>
          <p>
            FictionOps is built around the operational work Royal Road authors do before and after
            launch: cadence, swaps, stats, community trust, and backlog promises.
          </p>
          <div className="marketingCtas">
            <Link className="button primary large" href="/app">
              Open free tools
              <ArrowRight size={17} />
            </Link>
            <Link className="button secondary large" href="/pricing">
              See Pro waitlist
            </Link>
          </div>
        </section>

        <section className="featureList">
          {featureRows.map((feature) => (
            <article className="featureRow" key={feature.title}>
              <feature.icon size={22} />
              <div>
                <h2>{feature.title}</h2>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="contentBand">
          <FileText size={24} />
          <div>
            <h2>Trust boundaries stay part of the product.</h2>
            <p>
              No Royal Road credentials, no auto-posting, no fake engagement workflows, no bulk
              fiction generation, and no ranking guarantees.
            </p>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
