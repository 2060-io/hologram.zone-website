"use client";

import { useCallback, useState } from "react";

/* -------------------------------------------------------------------------- */
/*  Demo data                                                                 */
/*                                                                            */
/*  Descriptions, endpoints and logos mirror the Verifiable Services          */
/*  playground (hologram-verifiable-services/playground/app/page.tsx).        */
/*  If you change anything here, consider keeping the playground in sync.     */
/* -------------------------------------------------------------------------- */

type Demo = {
  id: string;
  title: string;
  /** One-line subtitle shown below the title. */
  tagline?: string;
  /** Badge text + color classes. */
  badge: {
    label: string;
    className: string;
  };
  /** Card hero artwork. Either an image URL, or a custom node for demos
   *  that don't have a playground icon yet (the X Agent). */
  art:
    | { kind: "photo"; src: string; alt: string; gradient: string }
    | { kind: "logo"; src: string; alt: string; gradient: string }
    | { kind: "node"; node: React.ReactNode; gradient: string };
  description: React.ReactNode;
  /** Public URL of the deployed Verifiable Service.
   *  `{endpoint}/qr` serves the DIDComm invitation QR.
   *  `{endpoint}/invitation` is the mobile-friendly landing page that
   *  triggers the Hologram Messaging deep-link. */
  endpoint?: string;
  /** For demos that can't be tried directly (e.g. the X Agent), the
   *  primary CTA becomes a deploy-it-yourself link. */
  deployYourOwn?: { href: string; label: string };
  githubUrl: string;
  /** When true, the card spans both columns on md+. */
  wide?: boolean;
};

const DEMOS: Demo[] = [
  {
    id: "avatar",
    title: "Avatar",
    tagline: "Your Digital Identity",
    badge: {
      label: "Human Credential Issuer",
      className:
        "bg-brand-500/15 text-brand-700 dark:text-brand-300 ring-1 ring-brand-500/30",
    },
    art: {
      kind: "photo",
      src: "https://2060.io/images/avatar.jpg",
      alt: "Avatar service",
      gradient:
        "bg-gradient-to-br from-brand-500/30 via-blue-500/20 to-cyan-500/20",
    },
    description: (
      <>
        A <strong className="text-neutral-900 dark:text-white">DIDComm chatbot</strong>{" "}
        that issues verifiable credentials to users through conversational
        interactions. Connect with Hologram Messaging, follow the guided
        flow, and receive a W3C Verifiable Credential backed by the Verana
        Trust Registry. Your credential proves attributes about you and can
        be verified by any party.
      </>
    ),
    endpoint: "https://avatar.vs.hologram.zone",
    githubUrl: "https://github.com/2060-io/hologram-verifiable-services",
  },
  {
    id: "passport",
    title: "Passport",
    tagline: "Government Digital ID",
    badge: {
      label: "Human Credential Issuer",
      className:
        "bg-brand-500/15 text-brand-700 dark:text-brand-300 ring-1 ring-brand-500/30",
    },
    art: {
      kind: "photo",
      src: "/images/passport.jpg",
      alt: "Passport issuer",
      gradient:
        "bg-gradient-to-br from-emerald-500/25 via-blue-500/15 to-brand-500/15",
    },
    description: (
      <>
        A credential issuer that reads{" "}
        <strong className="text-neutral-900 dark:text-white">NFC data</strong>{" "}
        from government-issued identity documents (passports, ID cards) and
        verifies the holder&apos;s identity via a liveness check with video
        call and gesture detection. Once verified, it issues a passport
        credential as a W3C Verifiable Credential backed by the Verana Trust
        Registry.
      </>
    ),
    endpoint: "https://passport.vs.hologram.zone",
    githubUrl: "https://github.com/2060-io/hologram-verifiable-services",
  },
  {
    id: "github-agent",
    title: "GitHub Agent",
    tagline: "AI assistant over MCP",
    badge: {
      label: "Community Service",
      className:
        "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 ring-1 ring-cyan-500/30",
    },
    art: {
      kind: "logo",
      src: "/images/github.svg",
      alt: "GitHub",
      gradient:
        "bg-gradient-to-br from-neutral-800 via-neutral-900 to-black",
    },
    description: (
      <>
        An AI-powered GitHub assistant that uses the{" "}
        <strong className="text-neutral-900 dark:text-white">Model Context Protocol (MCP)</strong>{" "}
        to interact with GitHub on your behalf. Search repositories, browse
        issues and pull requests, explore code, and manage your projects —
        all through an encrypted DIDComm chat in Hologram Messaging. To get
        started: first authenticate using the credential you received from
        the Avatar service, then open the contextual menu, select{" "}
        <em>MCP Server Config</em>, and enter your GitHub Personal Access
        Token. Once configured, the agent can access GitHub tools on your
        behalf.
      </>
    ),
    endpoint: "https://github-agent.vs.hologram.zone",
    githubUrl: "https://github.com/2060-io/hologram-verifiable-services",
  },
  {
    id: "wise-agent",
    title: "Wise Agent",
    tagline: "AI assistant over MCP",
    badge: {
      label: "Community Service",
      className:
        "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 ring-1 ring-cyan-500/30",
    },
    art: {
      kind: "logo",
      src: "/images/wise.svg",
      alt: "Wise",
      gradient:
        "bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-blue-500/20",
    },
    description: (
      <>
        An AI-powered Wise assistant that uses the{" "}
        <strong className="text-neutral-900 dark:text-white">Model Context Protocol (MCP)</strong>{" "}
        to interact with your Wise account. Check balances, view exchange
        rates, list transfers, send money, create invoices, and manage
        recipients — all through an encrypted DIDComm chat in Hologram
        Messaging. To get started: first authenticate using the credential
        you received from the Avatar service, then open the contextual menu,
        select <em>MCP Server Config</em>, and enter your Wise API Token.
        Once configured, the agent can access Wise tools on your behalf.
      </>
    ),
    endpoint: "https://wise-agent.vs.hologram.zone",
    githubUrl: "https://github.com/2060-io/hologram-verifiable-services",
  },
  {
    id: "x-agent",
    title: "X (Twitter) Agent",
    tagline: "Compose · Draw · Publish",
    badge: {
      label: "Personal or Corporate Service",
      className:
        "bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30",
    },
    art: {
      kind: "node",
      gradient:
        "bg-gradient-to-br from-amber-400/30 via-pink-500/25 to-brand-500/30",
      node: (
        <div className="relative flex items-center gap-4">
          <svg
            className="w-12 h-12 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2H21l-6.54 7.47L22 22h-6.828l-5.34-6.982L3.6 22H1l7.02-8.02L1 2h7.005l4.833 6.39L18.244 2zm-2.39 18h1.64L6.22 4H4.47l11.383 16z" />
          </svg>
          <div className="text-white font-display text-xl font-bold">
            Compose. Draw. Publish.
          </div>
        </div>
      ),
    },
    description: (
      <>
        <strong className="text-neutral-900 dark:text-white">
          Compose, publish, and manage your social media with an AI that can
          draw.
        </strong>{" "}
        Draft tweets, search posts, manage your timeline, and generate images
        for your posts on the fly. The agent writes, you review and approve
        before anything goes live. Voice notes welcome: just talk, and the
        agent transcribes and acts.
        <br />
        <br />
        Because each instance is tied to a specific X/Twitter account, there
        is no shared demo — you deploy your own, linked to your own handle.
        See the documentation to get started.
        <br />
        <br />
        Once deployed, you decide{" "}
        <strong className="text-neutral-900 dark:text-white">
          who is allowed to post in the name of the account
        </strong>
        . The Agent Pack policy binds posting rights to verifiable credentials,
        so a personal handle can stay personal, and a corporate handle can
        grant publishing authority to a credential-gated team — only holders
        of the credentials you approve can draft and publish, and every action
        is attributable.
      </>
    ),
    deployYourOwn: {
      href: "https://docs.hologram.zone",
      label: "Deploy Your Own",
    },
    githubUrl: "https://github.com/2060-io/x-autonomous-mcp",
    wide: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  Device detection                                                          */
/*                                                                            */
/*  Phones → redirect straight to `${endpoint}/invitation`, which triggers    */
/*  the Hologram Messaging deep-link on the user's device.                    */
/*  Tablets + desktops → show a QR code inline; the user scans it with        */
/*  Hologram Messaging on their phone.                                        */
/*                                                                            */
/*  The regex matches true phone UAs only:                                    */
/*    - iPhone / iPod                                                         */
/*    - Android phones (the "Mobile" token; Android tablets omit it)          */
/*    - BlackBerry, IEMobile, Opera Mini                                      */
/*  Deliberately not matched:                                                 */
/*    - iPad — on iPadOS 13+ reports as "Macintosh"                           */
/*    - Android tablets — UA has "Android" but no "Mobile"                    */
/* -------------------------------------------------------------------------- */

const PHONE_UA_RE =
  /(iPhone|iPod|Android.*Mobile|IEMobile|BlackBerry|Opera Mini)/i;

function isPhone(): boolean {
  if (typeof navigator === "undefined") return false;
  return PHONE_UA_RE.test(navigator.userAgent);
}

/* -------------------------------------------------------------------------- */
/*  DemoGrid — holds the "which QR is open" state so only one QR shows        */
/*  at a time across every card.                                              */
/* -------------------------------------------------------------------------- */

export default function DemoGrid() {
  const [openQrId, setOpenQrId] = useState<string | null>(null);

  const handleTryIt = useCallback((demo: Demo) => {
    if (!demo.endpoint) return;
    // Phones: send the user straight to the service's invitation page,
    // which triggers the Hologram Messaging deep-link.
    if (isPhone()) {
      window.location.href = `${demo.endpoint}/invitation`;
      return;
    }
    // Tablets / desktops: toggle the inline QR. Opening one QR closes
    // any other currently-open QR (single-open invariant).
    setOpenQrId((current) => (current === demo.id ? null : demo.id));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
      {DEMOS.map((demo, i) => (
        <DemoCard
          key={demo.id}
          demo={demo}
          index={i}
          isQrOpen={openQrId === demo.id}
          onTryIt={() => handleTryIt(demo)}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Single demo card                                                          */
/* -------------------------------------------------------------------------- */

function DemoCard({
  demo,
  index,
  isQrOpen,
  onTryIt,
}: {
  demo: Demo;
  index: number;
  isQrOpen: boolean;
  onTryIt: () => void;
}) {
  return (
    <article
      className={`card rounded-2xl p-6 reveal flex flex-col min-w-0 ${
        demo.wide ? "md:col-span-2" : ""
      }`}
    >
      {/* Hero artwork */}
      <div
        className={`h-40 rounded-xl ${demo.art.gradient} flex items-center justify-center mb-5 relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-grid opacity-40" />
        {demo.art.kind === "photo" && (
          <img
            src={demo.art.src}
            alt={demo.art.alt}
            className="relative w-24 h-24 rounded-2xl object-cover shadow-xl ring-1 ring-white/30"
            loading="lazy"
          />
        )}
        {demo.art.kind === "logo" && (
          <img
            src={demo.art.src}
            alt={demo.art.alt}
            // Same 96×96 footprint as photo icons; `bg-white` keeps
            // dark marks (GitHub) visible on dark gradients; `p-2`
            // gives 80px of logo inside a 96px box, so the rendered
            // mass matches the photo cards visually.
            className="relative w-24 h-24 rounded-2xl object-contain bg-white p-2 shadow-xl ring-1 ring-white/30"
            loading="lazy"
          />
        )}
        {demo.art.kind === "node" && demo.art.node}
        <span
          className={`absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${demo.badge.className}`}
        >
          {demo.badge.label}
        </span>
      </div>

      {/* Meta + title */}
      <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
        Demo {index + 1}
      </div>
      <h2 className="font-display text-2xl font-bold mt-1">
        {demo.title}
        {demo.tagline && (
          <span className="text-neutral-500 dark:text-neutral-400 font-normal">
            {" · "}
            {demo.tagline}
          </span>
        )}
      </h2>

      {/* Description */}
      <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {demo.description}
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {demo.endpoint ? (
          <button
            type="button"
            onClick={onTryIt}
            aria-expanded={isQrOpen}
            aria-controls={`qr-${demo.id}`}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              isQrOpen
                ? "bg-neutral-900 text-white hover:bg-neutral-800"
                : "bg-brand-600 hover:bg-brand-500 text-white"
            }`}
          >
            {isQrOpen ? "Hide QR" : "Try It"}
          </button>
        ) : demo.deployYourOwn ? (
          <a
            href={demo.deployYourOwn.href}
            target="_blank"
            rel="noreferrer noopener"
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition"
          >
            {demo.deployYourOwn.label} ↗
          </a>
        ) : null}
        <a
          href={demo.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="px-4 py-2 rounded-lg text-sm font-semibold border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition"
        >
          GitHub ↗
        </a>
      </div>

      {/* QR panel — only rendered for demos with an endpoint, only shown
          on tablet/desktop after the user clicks "Try It". */}
      {isQrOpen && demo.endpoint && (
        <div
          id={`qr-${demo.id}`}
          className="mt-5 border-t border-neutral-200 dark:border-white/10 pt-5"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white rounded-2xl p-3 shadow-sm">
              <img
                src={`${demo.endpoint}/qr`}
                alt={`QR code to connect with ${demo.title}`}
                width={220}
                height={220}
                className="block w-[220px] h-[220px]"
              />
            </div>
            <p className="text-xs text-neutral-500 text-center max-w-xs">
              Scan with{" "}
              <strong className="text-neutral-700 dark:text-neutral-200">
                Hologram Messaging
              </strong>{" "}
              to connect with {demo.title}.
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
