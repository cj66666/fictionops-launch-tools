import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PublicShell } from "@/components/PublicShell";
import { findSeoPage, seoPages } from "@/data/seoPages";
import { buildPageMetadata } from "@/lib/metadata";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/structuredData";

export function generateStaticParams() {
  return seoPages.filter((page) => page.type === "guide").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findSeoPage(slug, "guide");
  if (!page) return {};
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/guides/${page.slug}`
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findSeoPage(slug, "guide");
  if (!page) notFound();

  return (
    <PublicShell>
      <JsonLd
        data={[
          buildArticleJsonLd(page),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: page.title, path: `/guides/${page.slug}` }
          ])
        ]}
      />
      <main className="contentPage">
        <Link href="/blog" className="backLink">
          Blog
        </Link>
        <article className="contentArticle">
          <h1>{page.title}</h1>
          <p className="lede">{page.description}</p>
          <section>
            <h2>Practical angle</h2>
            <p>
              Focus on concrete author operations: launch cadence, reader trust, community rules,
              and evidence-backed planning. Avoid claims that imply ranking outcomes or platform
              manipulation.
            </p>
          </section>
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
          <Link className="button primary" href={page.ctaHref ?? "/"}>
            {page.cta}
          </Link>
        </article>
      </main>
    </PublicShell>
  );
}
