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

const FREE_FEATURES = [
  "1 personal AI agent",
  "Hologram Messaging App: unlimited, end-to-end encrypted",
  "Credential wallet: receive, store, present credentials",
  "Authenticate with Avatar & Passport",
  "Trust resolution and Proof of Trust for all connections",
  "Free basic LLM tier (enough for most tasks)",
  "Basic context size",
  "Up to 5 MCP integrations (calendar, email, contacts, social networks…)",
  "Hosted on Hologram Agentic Cloud",
];

const PRO_FEATURES = [
  "Up to 5 personal agents",
  "More LLM credits, more LLM models",
  "Higher context size",
  "Image generation",
  "Voice notes",
  "Unlimited MCP server connections (including premium connectors)",
  "RAG: feed your agent documents, knowledge bases, notes",
  "Persistent conversation memory (unlimited)",
  "Priority hosting on Hologram Agentic Cloud",
];

const BUSINESS_FEATURES = [
  "Unlimited agents under your corporation's trust anchor",
  "Any LLM, including self-hosted, air-gapped deployments",
  "Full RBAC with approval workflows and connection-policy authoring tools",
  "Enterprise IAM integration for employee credential issuance",
  "Custom Trust Registry and credential schemas on the Verana network",
  "MCP integration at scale: CRM, ERP, financial APIs, internal tools",
  "RAG with corporate documentation",
  "White-label Hologram app option",
  "Dedicated Kubernetes namespace or on-prem deployment",
  "Audit log export to your SIEM",
  "24/7 support with dedicated engineering",
  "SLA up to 99.99%",
];

export default function PricingPage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Pricing</span>
          <h1 className="font-display h-display mt-3">Start Free. <span className="gradient-text">Scale When Ready.</span></h1>
          <p className="mt-5 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Your personal AI agent is free. Forever. Upgrade for power. Contact us for business.</p>
        </div>
      </section>

      {/* ============== TIER GRID ============== */}
      <section className="py-16 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cloud GA notice */}
          <div className="max-w-3xl mx-auto mb-10 reveal">
            <div className="card rounded-xl p-4 border-amber-500/40 bg-amber-500/5 flex items-start gap-3">
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
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* FREE */}
            <article className="card rounded-2xl p-8 flex flex-col reveal">
              <div className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Free</div>
              <div className="mt-2 flex items-baseline gap-1"><span className="font-display text-3xl font-bold">Coming soon.</span></div>
              <p className="mt-2 text-sm text-neutral-500">For everyone. Free, forever.</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-600 dark:text-neutral-400 flex-1">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-emerald-500">✔</span>{f}</li>
                ))}
              </ul>
              <div
                className="mt-8 w-full text-center px-5 py-3 rounded-xl text-sm font-semibold border border-neutral-300 dark:border-white/15 opacity-60 cursor-not-allowed select-none inline-flex items-center justify-center gap-2"
                aria-disabled="true"
                role="button"
                title="Available when Hologram Agentic Cloud launches"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                Cloud GA · Coming Soon
              </div>
              <p className="mt-3 text-xs text-neutral-500 text-center">Free signups open when Hologram Agentic Cloud ships. Your DID and data will always be yours: export anytime.</p>
            </article>

            {/* PRO */}
            <article className="card card-glow rounded-2xl p-8 flex flex-col relative reveal">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-500 to-blue-500 text-white text-[10px] font-semibold uppercase tracking-widest">Recommended</span>
              <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Pro</div>
              <div className="mt-2 flex items-baseline gap-1"><span className="font-display text-3xl font-bold">Coming soon.</span></div>
              <p className="mt-2 text-sm text-neutral-500">For power users and builders. Pricing revealed at Cloud GA.</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-neutral-500">Everything in Free, plus:</p>
              <ul className="mt-3 space-y-3 text-sm text-neutral-600 dark:text-neutral-400 flex-1">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-brand-500">◆</span>{f}</li>
                ))}
              </ul>
              <div
                className="mt-8 w-full text-center px-5 py-3 rounded-xl text-sm font-semibold bg-brand-600/50 text-white/90 opacity-80 cursor-not-allowed select-none inline-flex items-center justify-center gap-2"
                aria-disabled="true"
                role="button"
                title="Available when Hologram Agentic Cloud launches"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                Cloud GA · Coming Soon
              </div>
              <p className="mt-3 text-xs text-neutral-500 text-center">Pro plan launches with Hologram Agentic Cloud. Cancel anytime thereafter; all agents and credentials remain yours.</p>
            </article>

            {/* BUSINESS */}
            <article className="card rounded-2xl p-8 flex flex-col relative reveal border-amber-500/40">
              <div className="text-xs uppercase tracking-widest text-amber-500 font-semibold">Business</div>
              <div className="mt-2 flex items-baseline gap-1"><span className="font-display text-3xl font-bold">Let&#39;s talk.</span></div>
              <p className="mt-2 text-sm text-neutral-500">For organisations that need managed hosting, SLAs, and custom trust registries.</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-neutral-500">Everything in Pro, plus:</p>
              <ul className="mt-3 space-y-2.5 text-sm text-neutral-600 dark:text-neutral-400 flex-1">
                {BUSINESS_FEATURES.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-amber-500">★</span>{f}</li>
                ))}
              </ul>
              <a
                href="https://2060.io/contact"
                className="mt-8 w-full text-center px-5 py-3 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-neutral-900 transition"
              >
                Contact Us
              </a>
              <p className="mt-3 text-xs text-neutral-500 text-center">Open source. Self-hosted is always free. We are here when you need managed infrastructure.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============== SELF-HOST CTA ============== */}
      <section id="self-host" className="py-20 border-t border-neutral-200 dark:border-white/10 bg-neutral-50/60 dark:bg-white/[.015]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Don&#39;t want to wait?</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Deploy Your Own Agents Today.</h2>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Hologram is 100% open source under Apache 2.0. While we ready Hologram Agentic Cloud, you can already run the full stack yourself: Docker Compose for a single machine, Helm charts for Kubernetes, or fork the repos and build on top.</p>

          <ul className="mt-8 grid sm:grid-cols-3 gap-4 text-left text-sm text-neutral-600 dark:text-neutral-400">
            <li className="card rounded-xl p-4 flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 9h16M4 15h16M10 3l-2 18M16 3l-2 18" /></svg>
              </span>
              <div>
                <strong className="text-neutral-900 dark:text-white block">Docker Compose</strong>
                <span>Single-machine setup. Up and running in minutes.</span>
              </div>
            </li>
            <li className="card rounded-xl p-4 flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" /></svg>
              </span>
              <div>
                <strong className="text-neutral-900 dark:text-white block">Helm charts</strong>
                <span>Production Kubernetes with HA, auto-scaling, and ingress.</span>
              </div>
            </li>
            <li className="card rounded-xl p-4 flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6" /></svg>
              </span>
              <div>
                <strong className="text-neutral-900 dark:text-white block">SDK &amp; source</strong>
                <span>Build custom Verifiable Services on top of the open stack.</span>
              </div>
            </li>
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://docs.hologram.zone" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-xl text-base font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition inline-flex items-center gap-2">
              Read the Docs
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
            </a>
            <a href="https://github.com/2060-io" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-xl text-base font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition inline-flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 011.2-3.2c-.1-.3-.5-1.5.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2a4.7 4.7 0 011.2 3.2c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3" /></svg>
              Explore on GitHub
            </a>
            <a href="/build" className="px-7 py-3.5 rounded-xl text-base font-semibold text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition inline-flex items-center gap-1">See all components →</a>
          </div>
          <p className="mt-5 text-xs text-neutral-500">Apache 2.0 · Bring your own LLM · Self-hosted is free, forever.</p>
        </div>
      </section>
    </>
  );
}
