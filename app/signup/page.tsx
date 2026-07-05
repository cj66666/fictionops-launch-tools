import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { getEmailCaptureConfig } from "@/lib/emailCapture";
import { buildPageMetadata } from "@/lib/metadata";

const emailCaptureConfig = getEmailCaptureConfig();

const signupMetadata = buildPageMetadata({
  title: "Sign Up",
  description:
    emailCaptureConfig.enabled
      ? "Join the FictionOps checklist and Pro waitlist through the approved email provider."
      : "Join the FictionOps checklist and Pro waitlist preview. Real email capture is not connected until approved.",
  path: "/signup"
});

export const metadata = {
  ...signupMetadata,
  robots: {
    index: false,
    follow: true
  }
};

export default function SignupPage() {
  return (
    <PublicShell>
      <main className="placeholderPage">
        <section className="placeholderPanel">
          <Mail size={30} />
          <h1>Checklist and Pro waitlist preview.</h1>
          <p>
            {emailCaptureConfig.enabled
              ? "The checklist form is configured for the approved email provider. It only asks for an email address and does not create an account."
              : "Real email capture is not connected yet. The current signup preview runs locally and does not send, store, or subscribe an email address."}
          </p>
          <div className="trustGrid compactTrust">
            <span>
              <ShieldCheck size={16} />
              {emailCaptureConfig.enabled ? "Email provider configured" : "No email is sent"}
            </span>
            <span>
              <ShieldCheck size={16} />
              No account is created
            </span>
            <span>
              <ShieldCheck size={16} />
              {emailCaptureConfig.enabled ? "No platform credentials" : "No provider is connected"}
            </span>
          </div>
          <div className="marketingCtas">
            <Link className="button primary large" href="/app#updates">
              Preview local signup
              <ArrowRight size={17} />
            </Link>
            <Link className="button secondary large" href="/pricing">
              See Pro hypothesis
            </Link>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
