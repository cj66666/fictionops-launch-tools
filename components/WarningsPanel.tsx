"use client";

import { AlertTriangle, CheckCircle2, ExternalLink } from "lucide-react";
import type { LaunchPlanOutput } from "@/lib/types";
import { Panel, Pill } from "./ui";

type WarningsPanelProps = {
  plan: LaunchPlanOutput;
};

export function WarningsPanel({ plan }: WarningsPanelProps) {
  return (
    <Panel title="Warnings" subtitle="Trust and readiness checks stay visible while planning.">
      <div className="warningList">
        {plan.warnings.map((warning) => (
          <div className="warningItem" key={warning}>
            <AlertTriangle size={16} />
            <span>{warning}</span>
          </div>
        ))}
        {plan.nextActions.map((action) => (
          <div className="successItem" key={action}>
            <CheckCircle2 size={16} />
            <span>{action}</span>
          </div>
        ))}
      </div>
      <div className="ruleBox">
        <div>
          <Pill tone="blue">No login</Pill>
          <Pill tone="neutral">No scraping</Pill>
        </div>
        <p>
          This is an operations checklist, not a ranking promise. Check current platform rules
          before posting anywhere.
        </p>
        <a
          href="https://www.royalroad.com/support/knowledgebase/78"
          rel="noopener noreferrer"
          target="_blank"
        >
          Royal Road ranking docs <ExternalLink size={13} />
        </a>
      </div>
    </Panel>
  );
}
