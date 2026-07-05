import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PublicShell } from "@/components/PublicShell";
import { findSeoPage, seoPages } from "@/data/seoPages";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd, buildSoftwareApplicationJsonLd } from "@/lib/structuredData";

export function generateStaticParams() {
  return seoPages.filter((page) => page.type === "tool").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findSeoPage(slug, "tool");
  if (!page) return {};
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/tools/${page.slug}`
  });
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findSeoPage(slug, "tool");
  if (!page) notFound();

  return (
    <PublicShell>
      <JsonLd
        data={[
          buildSoftwareApplicationJsonLd(page),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: page.title, path: `/tools/${page.slug}` }
          ])
        ]}
      />
      <main className="contentPage">
        <Link href="/tools" className="backLink">
          Tools
        </Link>
        <article className="contentArticle">
          <h1>{page.title}</h1>
          <p className="lede">{page.description}</p>
          <section>
            <h2>Use this when</h2>
            <p>
              {page.intent} Use it to make launch work explicit before you publish, coordinate
              swaps, or ask a community for feedback.
            </p>
          </section>
          {page.proofPoints?.length ? (
            <section>
              <h2>What you get</h2>
              <div className="proofGrid">
                {page.proofPoints.map((point) => (
                  <div className="proofCard" key={point.label}>
                    <span>{point.label}</span>
                    <strong>{point.value}</strong>
                    <p>{point.note}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
          {page.contentSections?.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          <section>
            <h2>What it will not do</h2>
            <p>
              It does not promise ranking outcomes, automate posting, store platform credentials, or
              replace checking the current rules of each community.
            </p>
          </section>
          {page.trustNotes?.length ? (
            <section>
              <h2>Trust boundaries</h2>
              <ul className="trustList">
                {page.trustNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          ) : null}
          <section>
            <h2>Sources</h2>
            <ul>
              {page.sources.map((source) => (
                <li key={source}>
                  <a href={source} rel="noopener noreferrer" target="_blank">
                    {source}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Related</h2>
            <ul>
              {page.related.map((related) => {
                const relatedPage = seoPages.find((item) => item.slug === related);
                return (
                  <li key={related}>
                    <Link href={`/${relatedPage?.type === "guide" ? "guides" : "tools"}/${related}`}>
                      {relatedPage?.title ?? related}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <h2>Next action</h2>
            <Link className="button primary" href={page.ctaHref ?? "/"}>
              {page.cta}
            </Link>
          </section>
        </article>
      </main>
    </PublicShell>
  );
}
