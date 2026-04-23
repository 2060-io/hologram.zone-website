import Link from "next/link";
import type { Metadata } from "next";

const TITLE = "Pricing";
const DESCRIPTION = "Hologram pricing: Free personal AI agent, Pro for power users, Business for organisations. Start free. Scale when ready.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/pricing" },
  openGraph: { title: `${TITLE} · Hologram`, description: DESCRIPTION, url: "/pricing" },
  twitter:   { title: `${TITLE} · Hologram`, description: DESCRIPTION },
};

const FREE = [
  "One personal agent",
  "Authenticate with Avatar & Passport",
  "Free basic LLM tier (enough for most tasks)",
  "Basic context size",
  "Up to 5 MCP integrations (calendar, email, contacts, social networks…)",
  "Hosted on Hologram Agentic Cloud",
];

const PRO = [
  "Bring your own LLM key (OpenAI, Anthropic, Google, DeepSeek, Groq, self-hosted)",
  "Larger context window and longer responses",
  "Unlimited MCP server connections (including premium connectors)",
  "RAG: feed your agent documents, knowledge bases, notes",
  "Persistent conversation memory (unlimited)",
  "Priority hosting on Hologram Agentic Cloud",
];

const BUSINESS = [
  "Everything in Pro, plus:",
  "Corporate DID with your own domain",
  "Organisation-scoped trust registry",
  "Self-hosted or air-gapped LLM options",
  "Ecosystem Governance Framework (EGF) enforcement",
  "Signed audit exports and SIEM integration",
  "SLA, SAML SSO, dedicated support",
];

export default function PricingPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Pricing</span>
          <h1 className="font-display h-display-sm mt-4">Start free. <span className="gradient-text">Scale when ready.</span></h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            One personal agent is always free on Hologram Agentic Cloud. Upgrade when you need your own models, unlimited MCPs, persistent memory, or corporate-grade governance.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-xl p-4 border-amber-500/40 bg-amber-500/5 flex items-start gap-3 max-w-3xl mx-auto">
            <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              <strong className="text-neutral-900 dark:text-white">Hologram Agentic Cloud is coming soon.</strong>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                Free and Pro signups open at launch. Need it sooner?{" "}
                <a href="#self-host" className="underline decoration-dotted hover:text-neutral-900 dark:hover:text-white">Deploy the stack yourself today</a>{" "}
                or <a href="https://2060.io/contact" className="underline decoration-dotted hover:text-neutral-900 dark:hover:text-white">talk to our team</a>.
              </span>
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-5 items-stretch">
            {/* FREE */}
            <article className="card rounded-2xl p-7 flex flex-col">
              <h3 className="font-display text-xl font-bold">Free</h3>
              <p className="mt-4 text-3xl font-bold text-neutral-900 dark:text-white">Coming soon.</p>
              <p className="mt-1 text-sm text-neutral-500">One personal agent. Always free on Hologram Agentic Cloud.</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-300 flex-1">
                {FREE.map((f) => <li key={f} className="flex gap-2"><span className="text-emerald-500">✔</span>{f}</li>)}
              </ul>
              <div className="mt-8 w-full text-center px-5 py-3 rounded-xl text-sm font-semibold border border-neutral-300 dark:border-white/15 opacity-60 cursor-not-allowed select-none inline-flex items-center justify-center gap-2" aria-disabled="true" role="button" title="Available when Hologram Agentic Cloud launches">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                Cloud GA · Coming Soon
              </div>
              <p className="mt-3 text-xs text-neutral-500 text-center">Free signups open when Hologram Agentic Cloud ships. Your DID and data will always be yours: export anytime.</p>
            </article>

            {/* PRO */}
            <article className="card card-glow rounded-2xl p-7 flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-brand-600 text-white">Recommended</span>
              <h3 className="font-display text-xl font-bold">Pro</h3>
              <p className="mt-4 text-3xl font-bold text-neutral-900 dark:text-white">Coming soon.</p>
              <p className="mt-1 text-sm text-neutral-500">For power users who want their own models and unlimited integrations.</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-300 flex-1">
                {PRO.map((f) => <li key={f} className="flex gap-2"><span className="text-brand-500">◆</span>{f}</li>)}
              </ul>
              <div className="mt-8 w-full text-center px-5 py-3 rounded-xl text-sm font-semibold bg-brand-600/50 text-white/90 opacity-80 cursor-not-allowed select-none inline-flex items-center justify-center gap-2" aria-disabled="true" role="button" title="Available when Hologram Agentic Cloud launches">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                Cloud GA · Coming Soon
              </div>
              <p className="mt-3 text-xs text-neutral-500 text-center">Pro plan launches with Hologram Agentic Cloud. Cancel anytime thereafter; all agents and credentials remain yours.</p>
            </article>

            {/* BUSINESS */}
            <article className="card rounded-2xl p-7 flex flex-col">
              <h3 className="font-display text-xl font-bold">Business</h3>
              <p className="mt-4 text-3xl font-bold text-neutral-900 dark:text-white">Let&#39;s talk.</p>
              <p className="mt-1 text-sm text-neutral-500">Organisations running a fleet of agents under their own DID and governance.</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-300 flex-1">
                {BUSINESS.map((f) => <li key={f} className="flex gap-2"><span className="text-cyan-500">▲</span>{f}</li>)}
              </ul>
              <a
                href="https://2060.io/contact"
                className="mt-8 w-full text-center px-5 py-3 rounded-xl text-sm font-semibold border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition"
              >
                Contact Sales
              </a>
              <p className="mt-3 text-xs text-neutral-500 text-center">We&#39;ll tailor a deployment and pricing to your environment.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="self-host" className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Don&#39;t want to wait?</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Deploy Your Own Agents Today.</h2>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Hologram is 100% open source under Apache 2.0. While we ready Hologram Agentic Cloud, you can already run the full stack yourself: Docker Compose for a single machine, Helm charts for Kubernetes, or fork the repos and build on top.
          </p>
          <ul className="mt-8 grid sm:grid-cols-3 gap-4 text-left text-sm text-neutral-600 dark:text-neutral-400">
            <li className="card rounded-xl p-4 flex items-start gap-3"><span className="text-brand-500">1</span>Clone a Hologram Agent Pack.</li>
            <li className="card rounded-xl p-4 flex items-start gap-3"><span className="text-brand-500">2</span>Point it at your LLM and MCPs.</li>
            <li className="card rounded-xl p-4 flex items-start gap-3"><span className="text-brand-500">3</span>Resolve trust via the live Verana VPR.</li>
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://docs.hologram.zone" className="px-7 py-3.5 rounded-xl text-base font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition">
              Read the Docs ↗
            </a>
            <a href="https://github.com/2060-io" className="px-7 py-3.5 rounded-xl text-base font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">
              Open GitHub ↗
            </a>
            <Link href="/build" className="px-7 py-3.5 rounded-xl text-base font-semibold text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition inline-flex items-center gap-1">
              See all components →
            </Link>
          </div>
          <p className="mt-5 text-xs text-neutral-500">Apache 2.0 · Bring your own LLM · Self-hosted is free, forever.</p>
        </div>
      </section>
    </>
  );
}
