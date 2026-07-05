import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarRange,
  FileText,
  Handshake,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { seoPages } from "@/data/seoPages";
import { buildPageMetadata } from "@/lib/metadata";

const appTools = [
  {
    title: "Community Rules Checklist",
    description:
      "Review Reddit, Royal Road forum, and Discord guardrails before drafting public posts.",
    href: "/app#rules",
    icon: ShieldCheck
  },
  {
    title: "Rising Stars Watch Tasks",
    description:
      "Add stats review tasks and ranking-surface checks without making ranking promises.",
    href: "/guides/royal-road-rising-stars",
    icon: TrendingUp
  }
];

export const metadata = buildPageMetadata({
  title: "Royal Road Author Tools",
  description:
    "Browse FictionOps tools for Royal Road launch planning, shoutout swaps, Patreon runway, community rules, and launch stats.",
  path: "/tools"
});

export default function ToolsIndexPage() {
  const toolPages = seoPages.filter((page) => page.type === "tool");

  return (
    <PublicShell>
      <main className="directoryPage">
        <section className="directoryHero">
          <h1>Tools for Royal Road launch operations.</h1>
          <p>
            Use the workbench directly or open a focused tool page first. Everything here stays
            no-login until a real integration is explicitly approved.
          </p>
          <div className="marketingCtas">
            <Link className="button primary large" href="/app">
              Open free workbench
              <ArrowRight size={17} />
            </Link>
            <Link className="button secondary large" href="/features">
              Compare features
            </Link>
          </div>
        </section>

        <section className="directoryGrid">
          {toolPages.map((page) => {
            const Icon =
              page.slug === "royal-road-launch-plan"
                ? CalendarRange
                : page.slug === "shoutout-swap-tracker"
                  ? Handshake
                  : BarChart3;
            return (
              <Link className="directoryCard" href={`/tools/${page.slug}`} key={page.slug}>
                <Icon size={22} />
                <h2>{page.title}</h2>
                <p>{page.description}</p>
                <span>
                  Open tool page
                  <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
          {appTools.map((tool) => (
            <Link className="directoryCard" href={tool.href} key={tool.title}>
              <tool.icon size={22} />
              <h2>{tool.title}</h2>
              <p>{tool.description}</p>
              <span>
                Open
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </section>

        <section className="contentBand">
          <FileText size={24} />
          <div>
            <h2>Need the full operating view?</h2>
            <p>
              The `/app` workbench combines launch planning, warnings, swaps, Patreon runway, and
              community rules on one screen for repeated use.
            </p>
          </div>
          <Link className="button primary" href="/app">
            Open `/app`
          </Link>
        </section>
      </main>
    </PublicShell>
  );
}
