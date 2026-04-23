import Link from "next/link";
import type { Metadata } from "next";

const TITLE = "Agents";
const DESCRIPTION = "Personal and corporate AI agents that accept inbound connections only from verified parties. One agent, many gates, all proven.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/agents" },
  openGraph: { title: `${TITLE} · Hologram`, description: DESCRIPTION, url: "/agents" },
  twitter:   { title: `${TITLE} · Hologram`, description: DESCRIPTION },
};

const POLICY_PRESETS = [
  { name: "Open",       body: "Anyone can connect. Full tool set. For public-facing agents." },
  { name: "Verified",   body: "Only parties with a verifiable credential may connect. Default for personal agents." },
  { name: "Contextual", body: "Different tools for different trust levels: audit, customer, supervisor, auditor." },
  { name: "Locked",     body: "Owner only. Agent refuses anyone whose DID isn't on an explicit allow-list." },
];

export default function AgentsPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Agents</span>
          <h1 className="h-display-sm mt-4">One Agent. <span className="gradient-text">Many Gates.</span> All Proven.</h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            A Hologram agent doesn&#39;t have one password — it has a set of declarative policies that say who can connect, what tools they see, and when a step-up credential is required.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 reveal">
            <div className="card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold">Personal agents</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                Your personal Hologram agent runs on the Hologram Agentic Cloud (or self-hosted) and has a DID you own. It can triage your inbox, guard your calendar, negotiate with other agents on your behalf — but only after the counterparty proves who they are.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>✔ Self-custody keys stored in the Hologram Messaging App</li>
                <li>✔ MCP connections to your calendar, email, docs, and contacts</li>
                <li>✔ Memory and RAG corpora — all under your control</li>
                <li>✔ Export or delete everything at any time</li>
              </ul>
            </div>

            <div className="card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold">Corporate agents</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                Deploy a customer-service, sales, or compliance agent that answers to your organisation&#39;s DID, enforces your governance framework, and writes every trust decision to an auditable log.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>✔ Tool-level policy: expose lookups to customers, refunds to supervisors only</li>
                <li>✔ Step-up proofs required for sensitive actions (wire transfers, data exports)</li>
                <li>✔ Ecosystem Governance Framework (EGF) enforcement</li>
                <li>✔ Signed audit trail, resolvable end-to-end through the Verana VPR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-950/60 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Policy, Not Guesswork</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Pick a preset. Declare it once. It&#39;s enforced before connection.</h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 reveal">
            {POLICY_PRESETS.map((p) => (
              <div key={p.name} className="card rounded-2xl p-6">
                <h3 className="font-display font-semibold text-lg">{p.name}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="font-display text-3xl font-bold">Audit &amp; Observability</h2>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400">
            Every credential presented, every policy evaluated, and every tool call made by your agent is logged with a signature and timestamp. Export it to your SIEM, prove it to your regulator, or share it with the counterparty.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/demos" className="px-7 py-3.5 rounded-xl text-base font-semibold bg-brand-600 hover:bg-brand-500 text-white transition">See Live Demos</Link>
            <Link href="/pricing" className="px-7 py-3.5 rounded-xl text-base font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">Deploy Your Agent</Link>
          </div>
        </div>
      </section>
    </>
  );
}
