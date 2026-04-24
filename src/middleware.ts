import { NextRequest, NextResponse } from "next/server";

/**
 * Service-invitation query-param redirect.
 *
 * vs-agent (and the Hologram messaging surface) hand users a bare URL of the
 * form `https://hologram.zone/?oob=<base64url>` or `?_oob=…` or `?_url=…`.
 * Those carry a DIDComm out-of-band invitation that the user needs to accept
 * on their mobile device. This middleware funnels every such request to the
 * dedicated `/invitation` landing page, preserving the query string verbatim
 * so the client page can still decode the payload and render the QR + deep
 * link.
 *
 * Mirrors the behaviour of the old Hugo site's baseof.html:
 *   https://github.com/2060-io/hologram.zone-website (pre-Next.js)
 */
export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Already on the invitation page (or a sub-path of it) — do nothing, or we
  // would loop. Direct entry via a QR scan hits this branch.
  if (pathname === "/invitation" || pathname.startsWith("/invitation/")) {
    return NextResponse.next();
  }

  const hasInvitation =
    searchParams.has("oob") ||
    searchParams.has("_oob") ||
    searchParams.has("_url");

  if (!hasInvitation) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/invitation";
  // `url.searchParams` already carries the original query because we cloned
  // nextUrl, so no manual preservation is needed.
  return NextResponse.redirect(url);
}

/**
 * Run on every request except Next.js internals, API routes, and anything
 * that looks like a static file (a dot in the last segment — e.g. *.png,
 * *.css, *.js, *.ico).
 */
export const config = {
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
