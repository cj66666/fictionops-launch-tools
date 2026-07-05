import { FictionOpsApp } from "@/components/FictionOpsApp";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Free Royal Road Launch Tools",
  description:
    "Use the FictionOps no-login workbench for Royal Road launch planning, shoutout swaps, Patreon runway, and community rules.",
  path: "/app"
});

export default function AppPage() {
  return <FictionOpsApp />;
}
