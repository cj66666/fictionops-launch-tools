import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BookOpen, LogIn } from "lucide-react";

const navItems = [
  { href: "/tools", label: "Tools" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" }
];

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/app", label: "Free tools" },
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/feedback", label: "Feedback kit" }
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Guides" },
      { href: "/tools/royal-road-launch-plan", label: "Launch plan" },
      { href: "/guides/royal-road-stats", label: "Stats explained" },
      { href: "/guides/royal-road-rising-stars", label: "Rising Stars" }
    ]
  },
  {
    title: "Trust",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/login", label: "Login status" },
      { href: "/signup", label: "Waitlist" }
    ]
  }
];

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Link className="siteBrand" href="/">
        <span className="siteBrandMark">F</span>
        <span>FictionOps</span>
      </Link>
      <nav className="siteNav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="siteActions">
        <Link className="siteTextLink" href="/login">
          <LogIn size={15} />
          Log in
        </Link>
        <Link className="button primary" href="/signup">
          Sign up
          <ArrowRight size={15} />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterIntro">
        <Link className="siteBrand" href="/">
          <span className="siteBrandMark">F</span>
          <span>FictionOps</span>
        </Link>
        <p>
          No-login launch operations for Royal Road and web serial authors. Source-linked
          planning, not ranking promises.
        </p>
      </div>
      <div className="siteFooterLinks">
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="siteFooterBottom">
        <span>No Royal Road credentials. No auto-posting. No scraping required.</span>
        <Link href="/blog">
          <BookOpen size={14} />
          Read the guides
        </Link>
      </div>
    </footer>
  );
}

export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="siteShell">
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <div id="main-content" tabIndex={-1}>
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
