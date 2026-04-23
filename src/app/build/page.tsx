import type { Metadata } from "next";

const TITLE = "Build";
const DESCRIPTION = "Hologram is open source, Apache 2.0. Fork it, audit it, build on it. Components: VS Agent, Generic AI Agent, Messaging App, Dashboard, Verana Network.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/build" },
  openGraph: { title: `${TITLE} · Hologram`, description: DESCRIPTION, url: "/build" },
  twitter:   { title: `${TITLE} · Hologram`, description: DESCRIPTION },
};

const COMPONENTS = [
  { name: "VS Agent",          body: "The Verifiable Service agent: a Credo-TS-based runtime that presents credentials up-front, evaluates inbound credentials, and enforces tool-level policy." },
  { name: "Generic AI Agent",  body: "An LLM-backed agent runtime that consumes an Agent Pack YAML manifest (personality, LLM, MCP servers, policies) and runs on DIDComm." },
  { name: "Hologram Messaging App", body: "The self-custody mobile/desktop client where humans hold their DIDs, credentials, and conversations under their own keys." },
  { name: "Hologram Dashboard",     body: "The corporate control plane for deploying, supervising, and auditing an agent fleet across Hologram Agentic Cloud and self-hosted clusters." },
  { name: "Verana Network",         body: "The public Verifiable Public Registry (VPR) where DIDs, credential schemas, trust registries, and Ecosystem Governance Frameworks live." },
  { name: "Agent Pack SDK",         body: "A small YAML + helper library for declaring who can connect to your agent, which tools they see, and when a step-up proof is required." },
];

export default function BuildPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Build</span>
          <h1 className="h-display-sm mt-4">Open source. <span className="gradient-text">Auditable.</span> Yours.</h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            Every Hologram component is Apache 2.0. Fork it, audit it, build on it. Self-host the whole stack or use our managed Hologram Agentic Cloud — your DIDs and credentials are portable either way.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="https://github.com/2060-io" className="px-6 py-3 rounded-xl text-sm font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition">GitHub ↗</a>
            <a href="https://docs.hologram.zone" className="px-6 py-3 rounded-xl text-sm font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">Documentation ↗</a>
            <a href="https://discord.gg/pFk6XdC28E" className="px-6 py-3 rounded-xl text-sm font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">Discord ↗</a>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Component Grid</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">Six open-source building blocks that compose into the agentic network.</p>
          </div>
          <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
            {COMPONENTS.map((c) => (
              <li key={c.name} className="card rounded-2xl p-6">
                <h3 className="font-display font-semibold text-lg">{c.name}</h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-950/60 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <h2 className="font-display text-3xl font-bold text-center">Architecture at a glance</h2>
          <pre className="trust-flow card rounded-2xl p-6 mt-10 overflow-x-auto">{`┌──────────────────────────┐      ┌──────────────────────────┐
│  Hologram Messaging App  │      │   Hologram Dashboard     │
│  (humans, self-custody)  │      │   (corporate control)    │
└────────────┬─────────────┘      └────────────┬─────────────┘
             │  DIDComm                         │  DIDComm
             ▼                                  ▼
      ┌─────────────────────────────────────────────┐
      │   VS Agent   │   Generic AI Agent           │
      │   (policy)   │   (LLM + Agent Pack YAML)    │
      └────────────────────┬────────────────────────┘
                           │  verify
                           ▼
                 ┌──────────────────────┐
                 │   Verana Network     │
                 │   (public VPR)       │
                 └──────────────────────┘`}</pre>
        </div>
      </section>
    </>
  );
}
