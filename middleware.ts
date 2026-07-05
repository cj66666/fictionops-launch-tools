import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { canonicalHostRedirectUrl } from "@/lib/canonicalHost";

export function middleware(request: NextRequest) {
  const redirectUrl = canonicalHostRedirectUrl(request.url, request.headers.get("host"));

  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

