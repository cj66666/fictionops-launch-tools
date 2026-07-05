import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { buildPageMetadata } from "@/lib/metadata";

const loginMetadata = buildPageMetadata({
  title: "Login",
  description:
    "FictionOps accounts are not live yet. Use the free no-login tools while saved plans remain in validation.",
  path: "/login"
});

export const metadata = {
  ...loginMetadata,
  robots: {
    index: false,
    follow: true
  }
};

export default function LoginPage() {
  return (
    <PublicShell>
      <main className="placeholderPage">
        <section className="placeholderPanel">
          <LockKeyhole size={30} />
          <h1>Accounts are not live yet.</h1>
          <p>
            Use the free tools without logging in. Saved plans, reminders, and account storage are
            planned only after validation and explicit approval.
          </p>
          <div className="marketingCtas">
            <Link className="button primary large" href="/app">
              Open free tools
              <ArrowRight size={17} />
            </Link>
            <Link className="button secondary large" href="/signup">
              Join waitlist preview
            </Link>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
