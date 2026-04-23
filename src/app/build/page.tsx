import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Build",
  description: "Hologram is open source, Apache 2.0. Fork it, audit it, build on it. Components: VS Agent, Generic AI Agent, Messaging App, Dashboard, Verana Network.",
  path: "/build",
});

export default function BuildPage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Open source &amp; developers</span>
          <h1 className="font-display h-display mt-3">Built in <span className="gradient-text">the Open.</span></h1>
          <p className="mt-5 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Every component is open source. Apache 2.0. Fork it, audit it, build on it.</p>
          <p className="mt-4 text-sm text-neutral-500 max-w-2xl mx-auto">Hologram Agentic AI is not a black box. The entire stack, from the messaging app to the trust resolution engine to the AI agent framework, is open source and freely available.</p>
        </div>
      </section>

      {/* ============== COMPONENT GRID ============== */}
      <section className="py-16 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Component grid</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">Seven components, each independently useful.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Hologram Messaging App */}
            <article className="card rounded-2xl p-6 reveal">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="3" /><path d="M11 18h2" /></svg></div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-semibold">Production</span>
              </div>
              <h3 className="font-display text-lg font-bold mt-4">Hologram Messaging App</h3>
              <p className="mt-2 text-sm text-neutral-500">Verifiable User Agent for iOS, Android, Huawei. The end-user surface.</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" />TypeScript</span>
                <span>·</span><span>Apache 2.0</span>
              </div>
            </article>

            {/* Hologram Dashboard */}
            <article className="card rounded-2xl p-6 reveal">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></svg></div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 font-semibold">WIP · private beta</span>
              </div>
              <h3 className="font-display text-lg font-bold mt-4">Hologram Dashboard</h3>
              <p className="mt-2 text-sm text-neutral-500">Operator console to deploy, supervise, and audit agent fleets. The corporate surface.</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" />Next.js</span>
                <span>·</span><span><Link href="/app#dashboard" className="underline decoration-dotted hover:text-neutral-900 dark:hover:text-white">Learn more</Link></span>
              </div>
            </article>

            {/* VS Agent */}
            <article className="card rounded-2xl p-6 reveal">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 9l3 3-3 3M13 15h4" /></svg></div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-semibold">Production</span>
              </div>
              <h3 className="font-display text-lg font-bold mt-4">VS Agent</h3>
              <p className="mt-2 text-sm text-neutral-500">DIDComm agent with credential management and DID lifecycle.</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" />TypeScript</span>
                <span>·</span><span>Credo-ts</span>
              </div>
            </article>

            {/* Generic AI Agent */}
            <article className="card rounded-2xl p-6 reveal">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 11-14 0 7 7 0 0114 0zM12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1" /></svg></div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-semibold">Production</span>
              </div>
              <h3 className="font-display text-lg font-bold mt-4">Generic AI Agent</h3>
              <p className="mt-2 text-sm text-neutral-500">Modular LLM agent: MCP, RAG, RBAC, approvals, multi-language, connection-policy engine.</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" />TypeScript</span>
                <span>·</span><span>NestJS</span>
              </div>
            </article>

            {/* Verana Network */}
            <article className="card rounded-2xl p-6 reveal">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /><circle cx="12" cy="12" r="9" /></svg></div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 font-semibold">Testnet live</span>
              </div>
              <h3 className="font-display text-lg font-bold mt-4">Verana Network</h3>
              <p className="mt-2 text-sm text-neutral-500">Verifiable Public Registry, trust registries, credential schemas.</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-400" />Cosmos SDK</span>
                <span>·</span><span>Go</span>
              </div>
            </article>

            {/* Verifiable Trust Spec */}
            <article className="card rounded-2xl p-6 reveal">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" /><path d="M8 7h8M8 11h8M8 15h5" /></svg></div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-semibold">v4</span>
              </div>
              <h3 className="font-display text-lg font-bold mt-4">Verifiable Trust Spec</h3>
              <p className="mt-2 text-sm text-neutral-500">The open specification defining the trust layer.</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
                <span>Spec</span><span>·</span><span><a href="https://verana-labs.github.io/verifiable-trust-spec/" className="underline decoration-dotted">Read ↗</a></span>
              </div>
            </article>

            {/* Hologram SDK */}
            <article className="card rounded-2xl p-6 reveal">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6" /></svg></div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-semibold">Production</span>
              </div>
              <h3 className="font-display text-lg font-bold mt-4">Hologram SDK</h3>
              <p className="mt-2 text-sm text-neutral-500">Build custom Verifiable Services from scratch.</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" />TypeScript</span>
                <span>·</span><span>REST + gRPC</span>
              </div>
            </article>
          </div>

          {/* Architecture diagram */}
          <div className="mt-14 card rounded-2xl p-8 reveal">
            <h3 className="font-display text-2xl font-bold text-center">How it fits together</h3>
            <div className="mt-8 grid md:grid-cols-5 gap-4 items-start">
              <div className="md:col-span-5 flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-brand-500/20 to-blue-500/20 border border-brand-500/30 text-sm font-semibold">Verana Network · Verifiable Public Registry</div>
              </div>
              <div className="md:col-span-5 h-6 flex justify-center"><div className="w-px h-full bg-neutral-300 dark:bg-white/20" /></div>
              <div className="card rounded-xl p-4 text-center">
                <div className="font-semibold text-sm">VS Agent</div>
                <div className="text-xs text-neutral-500 mt-1">DIDComm + credentials</div>
              </div>
              <div className="card rounded-xl p-4 text-center border-brand-500/40">
                <div className="font-semibold text-sm">AI Agent</div>
                <div className="text-xs text-neutral-500 mt-1">LLM + policy engine</div>
              </div>
              <div className="card rounded-xl p-4 text-center">
                <div className="font-semibold text-sm">MCP servers</div>
                <div className="text-xs text-neutral-500 mt-1">CRM · ERP · banks · RAG</div>
              </div>
              <div className="card rounded-xl p-4 text-center">
                <div className="font-semibold text-sm">SDK</div>
                <div className="text-xs text-neutral-500 mt-1">custom services</div>
              </div>
              <div className="card rounded-xl p-4 text-center">
                <div className="font-semibold text-sm">Audit log</div>
                <div className="text-xs text-neutral-500 mt-1">OTel · SIEM export</div>
              </div>
              <div className="md:col-span-5 h-6 flex justify-center"><div className="w-px h-full bg-neutral-300 dark:bg-white/20" /></div>
              <div className="md:col-span-5 grid md:grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-sm font-semibold text-center">Hologram Messaging App · Verifiable User Agent</div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2">End users</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-brand-500/20 border border-amber-500/40 text-sm font-semibold text-center">
                    Hologram Dashboard · Operator Console <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300 font-semibold tracking-widest">WIP</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2">Corporate operators</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 reveal">
            <a href="https://github.com/2060-io" className="px-7 py-3.5 rounded-xl text-base font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition inline-flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 011.2-3.2c-.1-.3-.5-1.5.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2a4.7 4.7 0 011.2 3.2c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3" /></svg>
              Explore on GitHub
            </a>
            <a href="https://docs.hologram.zone" className="px-7 py-3.5 rounded-xl text-base font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">Read the Docs ↗</a>
            <a href="https://discord.gg/pFk6XdC28E" className="px-7 py-3.5 rounded-xl text-base font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">Join Discord ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
