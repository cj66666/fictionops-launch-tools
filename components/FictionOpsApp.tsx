"use client";

import Link from "next/link";
import { type FormEvent, useMemo, useState } from "react";
import {
  BarChart3,
  Bell,
  CalendarRange,
  Database,
  Download,
  FileText,
  Handshake,
  Mail,
  ShieldCheck
} from "lucide-react";
import { defaultLaunchInput, generateLaunchPlan } from "@/lib/launchPlan";
import { isValidPreviewEmail, type SignupMessageTone } from "@/lib/signup";
import { CommunityRules } from "./CommunityRules";
import { LaunchPlanner } from "./LaunchPlanner";
import { PatreonCalculator } from "./PatreonCalculator";
import { SwapTracker } from "./SwapTracker";
import { WarningsPanel } from "./WarningsPanel";

const navItems = [
  { id: "launch", label: "Launch Plan", icon: CalendarRange },
  { id: "swaps", label: "Swaps", icon: Handshake },
  { id: "patreon", label: "Patreon", icon: BarChart3 },
  { id: "rules", label: "Rules", icon: ShieldCheck }
];

const trustItems = [
  "No Royal Road credentials",
  "No auto-posting",
  "No scraping required",
  "Source-linked rules"
];

const proItems = [
  "Saved launch plans",
  "Weekly reminders",
  "Swap CRM",
  "Benchmark history"
];

export function FictionOpsApp() {
  const [launchInput, setLaunchInput] = useState(defaultLaunchInput);
  const launchPlan = useMemo(() => generateLaunchPlan(launchInput), [launchInput]);
  const [activeSection, setActiveSection] = useState("launch");
  const [email, setEmail] = useState("");
  const [signupMessage, setSignupMessage] = useState<{
    text: string;
    tone: SignupMessageTone;
  } | null>(null);

  function jumpTo(id: string) {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function previewSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValidPreviewEmail(email)) {
      setSignupMessage({
        text: "Enter a valid email to preview the update signup.",
        tone: "error"
      });
      return;
    }
    setSignupMessage({
      text: "Preview saved in this browser session. No email was sent or stored.",
      tone: "success"
    });
  }

  return (
    <>
      <a className="skipLink" href="#app-workspace">
        Skip to workbench
      </a>
      <main className="appShell" id="app-workspace" tabIndex={-1}>
      <aside className="sidebar">
        <div className="brandBlock">
          <div className="brandMark">F</div>
          <div>
            <strong>FictionOps</strong>
            <span>Author launch tools</span>
          </div>
        </div>
        <nav>
          {navItems.map((item) => (
            <button
              aria-current={activeSection === item.id ? "true" : undefined}
              className={activeSection === item.id ? "selected" : undefined}
              key={item.id}
              onClick={() => jumpTo(item.id)}
              type="button"
            >
              <item.icon size={17} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="sidebarNote">
          <strong>No login</strong>
          <span>Local exports only. No auto-posting or platform credentials.</span>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <h1>Royal Road launch ops without login.</h1>
            <p>
              Plan cadence, swaps, Patreon backlog, and community-safe posts without platform
              credentials or auto-posting.
            </p>
            <div className="trustRow" aria-label="Trust and safety promises">
              {trustItems.map((item) => (
                <span key={item}>
                  <ShieldCheck size={13} />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="heroActions">
            <button className="button primary" onClick={() => jumpTo("updates")} type="button">
              <Mail size={16} />
              Get weekly checklist
            </button>
            <Link className="button secondary" href="/tools">
              <FileText size={16} />
              Tool directory
            </Link>
          </div>
        </header>

        <div className="workspaceGrid">
          <section id="launch" className="mainColumn">
            <LaunchPlanner input={launchInput} onInputChange={setLaunchInput} plan={launchPlan} />
          </section>
          <aside className="rightColumn">
            <WarningsPanel plan={launchPlan} />
            <section id="updates" className="conversionPanel">
              <div className="conversionHeader">
                <Mail size={17} />
                <div>
                  <h2>Weekly launch checklist</h2>
                  <p>Waitlist preview for benchmark updates, reminders, and release checklists.</p>
                </div>
              </div>
              <form className="signupForm" onSubmit={previewSignup}>
                <label className="field">
                  <span>Email</span>
                  <input
                    autoComplete="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setSignupMessage(null);
                    }}
                    placeholder="author@example.com"
                    type="email"
                    value={email}
                  />
                </label>
                <button className="button full" type="submit">
                  <Bell size={15} />
                  Preview signup
                </button>
              </form>
              {signupMessage ? (
                <p className={`signupMessage ${signupMessage.tone}`}>{signupMessage.text}</p>
              ) : null}
              <div className="sampleOutputs">
                <strong>Sample outputs</strong>
                <span>Launch checklist</span>
                <span>Swap sheet</span>
                <span>Patreon runway</span>
              </div>
            </section>
          </aside>
        </div>

        <section id="swaps" className="stackSection">
          <SwapTracker />
        </section>

        <div className="bottomGrid">
          <section id="patreon">
            <PatreonCalculator />
          </section>
          <section id="rules">
            <CommunityRules />
          </section>
        </div>

        <section className="proTeaser" aria-label="Future Pro direction">
          <div>
            <h2>Free tools now. Pro later only if authors ask for it.</h2>
            <p>
              The paid path stays author-ops focused: saved plans, reminders, swap coordination,
              weekly reports, and benchmark history. No bulk fiction generation, no engagement
              farming.
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
        </section>

        <footer className="footer">
          <span>Source-linked planning, not ranking promises.</span>
          <Link href="/guides/royal-road-rising-stars">Rising Stars guide</Link>
          <Link href="/guides/royal-road-author-discords">Author Discords</Link>
          <Link href="/guides/royal-road-stats">Stats explained</Link>
          <Link href="/feedback">Feedback kit</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/">Public site</Link>
          <button
            className="button ghost"
            onClick={() => window.print()}
            type="button"
          >
            <Download size={15} />
            Print
          </button>
        </footer>
      </section>
      </main>
    </>
  );
}
