"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analyticsEvents";

type TrackedLinkProps = {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  eventName: string;
  eventProps?: Record<string, string>;
  href: string;
};

export function TrackedLink({
  ariaLabel,
  children,
  className,
  eventName,
  eventProps,
  href
}: TrackedLinkProps) {
  return (
    <Link
      aria-label={ariaLabel}
      className={className}
      href={href}
      onClick={() => trackEvent(eventName, { href, ...(eventProps ?? {}) })}
    >
      {children}
    </Link>
  );
}
