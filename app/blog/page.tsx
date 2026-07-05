import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { seoPages } from "@/data/seoPages";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Blog and Guides",
  description:
    "Read FictionOps guides for Royal Road launch planning, Rising Stars, stats, shoutout swaps, Patreon runway, and author communities.",
  path: "/blog"
});

export default function BlogPage() {
  const guidePages = seoPages.filter((page) => page.type === "guide");
  const toolPages = seoPages.filter((page) => page.type === "tool");

  return (
    <PublicShell>
      <main className="directoryPage">
        <section className="directoryHero">
          <h1>Guides for Royal Road launch decisions.</h1>
          <p>
            Use these pages as a source-linked operating manual. The goal is practical launch
            judgment, not unsupported ranking promises.
          </p>
          <div className="marketingCtas">
            <Link className="button primary large" href="/app">
              Open tools
              <ArrowRight size={17} />
            </Link>
            <Link className="button secondary large" href="/tools">
              Browse tool pages
            </Link>
          </div>
        </section>

        <section className="blogSection">
          <h2>Guides</h2>
          <div className="directoryGrid">
            {guidePages.map((page) => (
              <Link className="directoryCard" href={`/guides/${page.slug}`} key={page.slug}>
                <BookOpen size={21} />
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <span>
                  Read guide
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="blogSection">
          <h2>Tool explainers</h2>
          <div className="directoryGrid compact">
            {toolPages.map((page) => (
              <Link className="directoryCard" href={`/tools/${page.slug}`} key={page.slug}>
                <FileText size={21} />
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <span>
                  Open explainer
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
