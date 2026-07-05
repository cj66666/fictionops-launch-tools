"use client";

import { useState } from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { communityRules } from "@/data/communityRules";
import { Panel, Pill } from "./ui";

export function CommunityRules() {
  const [selected, setSelected] = useState(communityRules[0].community);
  const rule = communityRules.find((item) => item.community === selected) ?? communityRules[0];

  return (
    <Panel
      title="Community rules"
      subtitle="Promotion, market research, AI, and survey rules vary sharply by community."
    >
      <div className="rulesLayout">
        <div className="ruleList" role="tablist" aria-label="Communities">
          {communityRules.map((item) => (
            <button
              key={item.community}
              className={item.community === selected ? "selected" : ""}
              onClick={() => setSelected(item.community)}
              type="button"
            >
              <ShieldCheck size={15} />
              {item.community}
            </button>
          ))}
        </div>
        <div className="ruleDetail">
          <div className="ruleTitle">
            <div>
              <h3>{rule.community}</h3>
              <span>Last reviewed {rule.lastReviewed}</span>
            </div>
            <a href={rule.url} rel="noopener noreferrer" target="_blank">
              Source <ExternalLink size={13} />
            </a>
          </div>
          <RuleSection title="Allowed" items={rule.allowed} tone="good" />
          <RuleSection title="Risky" items={rule.risky} tone="warn" />
          <RuleSection title="Do not do" items={rule.doNotDo} tone="danger" />
          <div className="ruleNotes">
            {rule.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

function RuleSection({
  title,
  items,
  tone
}: {
  title: string;
  items: string[];
  tone: "good" | "warn" | "danger";
}) {
  return (
    <div className="ruleSection">
      <Pill tone={tone}>{title}</Pill>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
