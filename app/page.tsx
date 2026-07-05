import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarRange,
  CheckCircle2,
  Database,
  FileText,
  Handshake,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { PublicShell } from "@/components/PublicShell";
import { getEmailCaptureConfig } from "@/lib/emailCapture";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSoftwareApplicationJsonLd, buildWebSiteJsonLd } from "@/lib/structuredData";

const trustItems = [
  "No Royal Road credentials",
  "No auto-posting",
  "No scraping required",
  "Source-linked rules"
];

const problemItems = [
  {
    title: "Launch plans live in scattered notes",
    body:
      "Cadence, stockpile, ads, swaps, and reader asks often sit in different apps until launch week."
  },
  {
    title: "Swap coordination gets fuzzy",
    body:
      "Dates, snippets, placement, genre fit, and follow-up status are easy to lose in Discord and DMs."
  },
  {
    title: "Patreon promises are made too early",
    body:
      "Advance chapters need a runway model before the public cadence and paid cadence collide."
  }
];

const featureItems = [
  {
    icon: CalendarRange,
    title: "Launch Plan",
    body: "Turn stockpile, cadence, swaps, ads, and Patreon readiness into a first-month checklist.",
    href: "/tools/royal-road-launch-plan"
  },
  {
    icon: Handshake,
    title: "Swap Tracker",
    body: "Track partner fit, dates, snippets, placement, status, and reliability without a spreadsheet.",
    href: "/tools/shoutout-swap-tracker"
  },
  {
    icon: BarChart3,
    title: "Patreon Runway",
    body: "Model conservative, base, and optimistic patron scenarios before announcing paid chapters.",
    href: "/tools/royal-road-patreon-calculator"
  },
  {
    icon: ShieldCheck,
    title: "Community Rules",
    body: "Keep Reddit, forum, and Discord guardrails visible before drafting any public post.",
    href: "/app#rules"
  },
  {
    icon: TrendingUp,
    title: "Rising Stars Watch",
    body: "Add watch tasks and stats review without pretending any ranking outcome is guaranteed.",
    href: "/guides/royal-road-rising-stars"
  }
];

const workflowSteps = [
  "Enter launch inputs once.",
  "Review warnings and source-linked guardrails.",
  "Export the plan or swap sheet into your own workflow."
];

const proItems = ["Saved plans", "Weekly reminders", "Swap CRM", "Benchmark history"];

export const metadata = buildPageMetadata({
  title: "Royal Road Launch Ops Without Login",
  description:
    "FictionOps helps Royal Road and web serial authors plan cadence, shoutout swaps, Patreon backlog, and community-safe posts without platform credentials.",
  path: "/"
});

export default function Home() {
  const emailCaptureConfig = getEmailCaptureConfig();

  return (
    <PublicShell>
      <JsonLd data={[buildWebSiteJsonLd(), buildSoftwareApplicationJsonLd()]} />
      <main className="marketingPage">
        <section className="marketingHero">
          <div className="heroCopy">
            <h1>Royal Road launch ops without login.</h1>
            <p>
              Plan cadence, shoutout swaps, Patreon backlog, and community-safe posts before launch
              week turns into a messy spreadsheet.
            </p>
            <div className="marketingCtas">
              <Link className="button primary large" href="/app">
                Open free tools
                <ArrowRight size={17} />
              </Link>
              {emailCaptureConfig.enabled ? (
                <Link className="button secondary large" href="/signup">
                  <Mail size={17} />
                  Get weekly checklist
                </Link>
              ) : (
                <Link className="button secondary large" href="/blog">
                  <BookOpen size={17} />
                  Read launch guides
                </Link>
              )}
            </div>
            <div className="trustRow siteTrustRow" aria-label="Trust and safety promises">
              {trustItems.map((item) => (
                <span key={item}>
                  <ShieldCheck size={13} />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="heroPreview" aria-label="FictionOps workspace preview">
            <Image
              alt="FictionOps launch workbench preview"
              height={900}
              priority
              src="/images/fictionops-workbench.png"
              width={1440}
            />
          </div>
        </section>

        <section className="problemBand">
          <div className="sectionIntro">
            <h2>The launch work is not just writing chapters.</h2>
            <p>
              FictionOps focuses on the operational layer around Royal Road and web serial launches:
              the parts authors usually track by hand.
            </p>
          </div>
          <div className="threeColumn">
            {problemItems.map((item) => (
              <article className="plainCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="featuresBand">
          <div className="sectionIntro narrow">
            <h2>Tools for the first month of launch operations.</h2>
            <p>
              Start free, keep everything local, and move exports into your own notes, calendar, or
              spreadsheet when you are ready.
            </p>
          </div>
          <div className="featureRail">
            {featureItems.map((item) => (
              <Link className="featureTile" href={item.href} key={item.title}>
                <item.icon size={21} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span>
                  View details
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="workflowBand">
          <div>
            <h2>From launch anxiety to a reviewable operating plan.</h2>
            <p>
              The product path stays narrow: plan the launch, track the outreach, review the
              numbers, and avoid platform-trust mistakes.
            </p>
          </div>
          <ol className="workflowSteps">
            {workflowSteps.map((step) => (
              <li key={step}>
                <CheckCircle2 size={18} />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="trustBand">
          <div className="trustStatement">
            <ShieldCheck size={25} />
            <h2>Built for author trust, not platform shortcuts.</h2>
            <p>
              FictionOps does not request Royal Road credentials, automate posts, send DMs, promise
              Rising Stars placement, or encourage engagement farming.
            </p>
          </div>
          <div className="trustGrid">
            <span>
              <LockKeyhole size={16} />
              No credential storage
            </span>
            <span>
              <Target size={16} />
              No ranking guarantees
            </span>
            <span>
              <FileText size={16} />
              Source-linked planning
            </span>
            <span>
              <Sparkles size={16} />
              No AI novel generation
            </span>
          </div>
        </section>

        <section className="proBand">
          <div>
            <h2>Free tools now. Pro later only if authors ask for it.</h2>
            <p>
              The paid hypothesis is operational memory, not writing automation: saved launch
              plans, reminders, swap CRM, benchmark history, and weekly reports.
            </p>
          </div>
          <div className="proList">
            {proItems.map((item) => (
              <span key={item}>
                <Database size={14} />
                {item}
              </span>
            ))}
          </div>
          <Link className="button secondary" href="/pricing">
            See pricing hypothesis
            <ArrowRight size={15} />
          </Link>
        </section>

        <section className="finalCta">
          <h2>Open the workbench and build the first version of your launch plan.</h2>
          <div className="marketingCtas">
            <Link className="button primary large" href="/app">
              Open free tools
              <ArrowRight size={17} />
            </Link>
            <Link className="button secondary large" href="/blog">
              Read the guides
            </Link>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
