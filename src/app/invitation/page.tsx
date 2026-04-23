import { Suspense } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import ServiceInvitation from "./ServiceInvitation";

/**
 * Landing page for Hologram service invitations that arrive via
 *   hologram.zone/?oob=<base64url>   (redirected here by src/middleware.ts)
 *   hologram.zone/?_oob=<base64url>
 *   hologram.zone/?_url=<base64url>
 *   hologram.zone/invitation?oob=…   (direct entry via QR scan)
 *
 * The page itself is almost entirely client-rendered: it needs the user's
 * query string, user-agent, and origin to decode the OOB payload, pick the
 * right presentation (QR vs mobile deep link), and trigger the DIDComm
 * redirect on phones. Wrapped in Suspense because useSearchParams() forces
 * the client subtree to render dynamically.
 */
export const metadata = {
  ...buildPageMetadata({
    title: "Service Invitation",
    description:
      "You've been invited to connect to a verifiable service. Scan to continue on your phone or open directly in Hologram.",
    path: "/invitation",
  }),
  // This URL is useless without its query string, so keep it out of search
  // engines. Crawlers that land here should not index or follow anything.
  robots: { index: false, follow: false },
};

export default function InvitationPage() {
  return (
    <Suspense fallback={null}>
      <ServiceInvitation />
    </Suspense>
  );
}
