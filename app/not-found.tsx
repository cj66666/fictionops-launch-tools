import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, SearchX } from "lucide-react";
import { PublicShell } from "@/components/PublicShell";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFoundPage() {
  return (
    <PublicShell>
      <main className="placeholderPage">
        <section className="placeholderPanel">
          <SearchX size={30} />
          <h1>Page not found.</h1>
          <p>
            This FictionOps page is not available. The free workbench, tool directory, and guide
            index are still available without logging in.
          </p>
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
