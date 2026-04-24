import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Agents",
  description: "Personal and corporate AI agents that accept inbound connections only from verified parties. One agent, many gates, all proven.",
  path: "/agents",
});

export default function AgentsPage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Agents</span>
          <h1 className="font-display h-display mt-3">One agent. <span className="gradient-text">Many gates. All proven.</span></h1>
          <p className="mt-5 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Agents that accept inbound connections only from parties they can verify. Personal, corporate, or specialist, built on the same trust layer.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="#personal"  className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition">Personal agents</a>
            <a href="#corporate" className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition">Corporate agents</a>
            <a href="#audit"     className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition">Audit &amp; Observability</a>
          </div>
        </div>
      </section>

      {/* ============== PERSONAL ============== */}
      <section id="personal" className="py-24 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
          <div className="reveal">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Personal</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">Your Agent. <span className="gradient-text">Your Gate.</span></h2>
            <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400">A personal agent that represents you across the network, and decides who is allowed to reach you.</p>

            <div className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>Your Personal AI Agent is not a chatbot you open. It is a <strong className="text-neutral-900 dark:text-white">network node</strong> that runs on your behalf, continuously. It has its own DID, its own Verifiable Credentials, and its own inbox. <strong className="text-neutral-900 dark:text-white">It answers only to parties that can prove who they are.</strong></p>
            </div>

            <h3 className="mt-8 font-display text-xl font-semibold">Who is allowed to connect</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </span>
                <div><strong className="text-neutral-900 dark:text-white">You.</strong> Always. Your agent knows your avatar credential and your recovery key. Nothing happens without you.</div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="4" /><path d="M17 11a3 3 0 100-6" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /></svg>
                </span>
                <div><strong className="text-neutral-900 dark:text-white">Your friends.</strong> Humans who present their own avatar or digital-ID credentials and are on your allowlist. Both sides know who they are talking to.</div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 10h.01M16 10h.01" /></svg>
                </span>
                <div><strong className="text-neutral-900 dark:text-white">Your friends&#39; agents.</strong> Autonomous software acting on their behalf, presenting the same credential chain. Agents negotiate with yours directly (scheduling, splitting a bill) without routing everything through a human.</div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14" /></svg>
                </span>
                <div><strong className="text-neutral-900 dark:text-white">Corporate agents you opted into.</strong> Your bank, your airline, your employer, your doctor&#39;s office. Each one presents its Organisation and Service credentials, plus a specific Relationship credential you approved once. You approve the relationship; your agent enforces its scope from then on.</div>
              </li>
            </ul>

            <div className="mt-6 card rounded-xl p-5 border-l-4 border-l-brand-500">
              <p className="font-semibold text-neutral-900 dark:text-white">Everything else? <span className="text-brand-600 dark:text-brand-400">Your policy decides.</span></p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">You set the default for anyone outside the list above. Four presets, one click to switch:</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2.5 text-sm">
                <li className="flex gap-2.5 items-start"><span className="shrink-0 mt-0.5 w-6 h-6 rounded-md bg-red-500/15 text-red-600 dark:text-red-300 flex items-center justify-center font-bold text-xs">✕</span><span><strong className="text-neutral-900 dark:text-white">Block all.</strong> Silent. No reply, no log, no acknowledgment.</span></li>
                <li className="flex gap-2.5 items-start"><span className="shrink-0 mt-0.5 w-6 h-6 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold text-xs">◮</span><span><strong className="text-neutral-900 dark:text-white">Block unknown agents.</strong> Humans may still request a connection.</span></li>
                <li className="flex gap-2.5 items-start"><span className="shrink-0 mt-0.5 w-6 h-6 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold text-xs">◮</span><span><strong className="text-neutral-900 dark:text-white">Block unknown humans.</strong> Only verified agents may request.</span></li>
                <li className="flex gap-2.5 items-start"><span className="shrink-0 mt-0.5 w-6 h-6 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">✓</span><span><strong className="text-neutral-900 dark:text-white">Queue for review.</strong> Receive requests and accept or refuse them on your own time.</span></li>
              </ul>
              <p className="mt-4 text-xs text-neutral-500">Default for new agents: <strong className="text-neutral-700 dark:text-neutral-300">Queue for review</strong>. Change anytime. Every decision is logged for you.</p>
            </div>

            <h3 className="mt-10 font-display text-xl font-semibold">What your agent does for you</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex gap-3"><span className="text-brand-500 mt-1">▸</span><span><strong className="text-neutral-900 dark:text-white">Acts on your behalf.</strong> Books flights, pays bills, schedules meetings, files documents.</span></li>
              <li className="flex gap-3"><span className="text-brand-500 mt-1">▸</span><span><strong className="text-neutral-900 dark:text-white">Guards your inbox.</strong> Every inbound connection is trust-resolved before the agent decides to engage.</span></li>
              <li className="flex gap-3"><span className="text-brand-500 mt-1">▸</span><span><strong className="text-neutral-900 dark:text-white">Protects your data.</strong> Selective disclosure. Prove you are over eighteen without revealing your birthdate.</span></li>
              <li className="flex gap-3"><span className="text-brand-500 mt-1">▸</span><span><strong className="text-neutral-900 dark:text-white">Remembers everything.</strong> Persistent memory. Your preferences, history, contacts, under your control.</span></li>
              <li className="flex gap-3"><span className="text-brand-500 mt-1">▸</span><span><strong className="text-neutral-900 dark:text-white">Connects to your tools.</strong> Banking, calendar, email, smart home via MCP servers. Add capabilities without writing code.</span></li>
            </ul>

            <Link href="/pricing" className="inline-flex mt-8 px-7 py-3.5 rounded-xl text-base font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition">Get Your Free Agent</Link>
          </div>

          {/* Personal agent as gatekeeper illustration */}
          <div className="relative reveal">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,.35),transparent_60%)]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-brand-500 via-blue-500 to-cyan-400 shadow-2xl shadow-brand-500/30 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="9" /></svg>
                </div>

                <div className="absolute left-0 top-4 card rounded-xl p-3 text-xs w-44 border-emerald-500/40">
                  <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-[10px]">✔</span><div className="flex-1"><div className="font-semibold">Maria (friend)</div><div className="text-neutral-500">avatar ✔ · allowlisted</div></div></div>
                </div>
                <div className="absolute right-0 top-8 card rounded-xl p-3 text-xs w-44 border-emerald-500/40">
                  <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-[10px]">✔</span><div className="flex-1"><div className="font-semibold">Maria&#39;s agent</div><div className="text-neutral-500">scheduling · auto</div></div></div>
                </div>
                <div className="absolute left-2 bottom-6 card rounded-xl p-3 text-xs w-48 border-cyan-500/40">
                  <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center text-[10px]">◼</span><div className="flex-1"><div className="font-semibold">Acme Bank</div><div className="text-neutral-500">Relationship: 2024-11-12</div></div></div>
                </div>
                <div className="absolute right-2 bottom-2 card rounded-xl p-3 text-xs w-44 border-red-500/40">
                  <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-[10px]">✕</span><div className="flex-1"><div className="font-semibold">Unknown sender</div><div className="text-neutral-500">no proof · blocked</div></div></div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-2 text-[11px] text-center">
                <div className="card rounded-lg p-2"><div className="w-6 h-6 mx-auto rounded bg-blue-500/20 flex items-center justify-center">📅</div><div className="mt-1">calendar</div></div>
                <div className="card rounded-lg p-2"><div className="w-6 h-6 mx-auto rounded bg-emerald-500/20 flex items-center justify-center">€</div><div className="mt-1">banking</div></div>
                <div className="card rounded-lg p-2"><div className="w-6 h-6 mx-auto rounded bg-amber-500/20 flex items-center justify-center">✉</div><div className="mt-1">email</div></div>
                <div className="card rounded-lg p-2"><div className="w-6 h-6 mx-auto rounded bg-brand-500/20 flex items-center justify-center">⌂</div><div className="mt-1">home</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CORPORATE ============== */}
      <section id="corporate" className="py-24 border-t border-neutral-200 dark:border-white/10 bg-neutral-50/70 dark:bg-white/[.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">For Business</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">One Agent. <span className="gradient-text">Many Gates. All Proven.</span></h2>
            <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400">Deploy corporate agents that accept verifiable connections from many parties at once: employees, customers, partners, auditors, other organisations&#39; agents. Each one served a different surface, based on its credentials.</p>
          </div>

          <div className="mt-14 grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 reveal space-y-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>A corporate agent is not a customer-support chatbot bolted to your website. It is a <strong className="text-neutral-900 dark:text-white">Verifiable Service</strong>: a node on the agentic network that speaks to many parties in parallel, exposes a different capability surface to each, and proves everything it does.</p>
              <p className="text-neutral-900 dark:text-white font-semibold">Same agent. Many doors. Each one opens on credentials.</p>
            </div>

            <ul className="lg:col-span-3 space-y-3 reveal">
              <li className="card rounded-xl p-5 border-l-4 border-l-emerald-500">
                <div className="flex items-start gap-3">
                  <div className="font-semibold w-36 shrink-0">Customers</div>
                  <div className="text-sm text-neutral-500 flex-1"><span className="text-emerald-600 dark:text-emerald-400">Customer / KYC credential</span> → product catalogue, order history, support tickets, scoped refunds.</div>
                </div>
              </li>
              <li className="card rounded-xl p-5 border-l-4 border-l-blue-500">
                <div className="flex items-start gap-3">
                  <div className="font-semibold w-36 shrink-0">Employees</div>
                  <div className="text-sm text-neutral-500 flex-1"><span className="text-blue-600 dark:text-blue-400">Organisation + Role credentials</span> issued by your IAM → internal tools, CRM lookups, approval workflows, full-document RAG, admin consoles.</div>
                </div>
              </li>
              <li className="card rounded-xl p-5 border-l-4 border-l-brand-500">
                <div className="flex items-start gap-3">
                  <div className="font-semibold w-36 shrink-0">Partner agents</div>
                  <div className="text-sm text-neutral-500 flex-1"><span className="text-brand-600 dark:text-brand-400">Partner-Org + current master-agreement credential</span> → pricing APIs, inventory checks, negotiated transactions, delegated actions within a scoped envelope.</div>
                </div>
              </li>
              <li className="card rounded-xl p-5 border-l-4 border-l-amber-500">
                <div className="flex items-start gap-3">
                  <div className="font-semibold w-36 shrink-0">Auditors</div>
                  <div className="text-sm text-neutral-500 flex-1"><span className="text-amber-600 dark:text-amber-400">Authority credential</span> → read-only transcript access, audit-log export, policy-version inspection.</div>
                </div>
              </li>
              <li className="card rounded-xl p-5 border-l-4 border-l-neutral-400">
                <div className="flex items-start gap-3">
                  <div className="font-semibold w-36 shrink-0">Anonymous public</div>
                  <div className="text-sm text-neutral-500 flex-1">No credential → marketing-bot surface only. Everything sensitive is hidden, and no private data is logged.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-12 card rounded-2xl p-8 reveal">
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Corporate agents also connect outward</div>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">Your corporate agents connect to <em>other</em> corporate agents, under the same rules. Your procurement agent negotiates with a supplier&#39;s agent by exchanging credentials. Your compliance agent consults with a third-party KYC provider&#39;s agent by exchanging credentials. Every outbound connection carries your organisation&#39;s proof-of-trust; every inbound response is verified in return. <strong className="text-neutral-900 dark:text-white">You are a first-class participant in the network, not a client of it.</strong></p>
          </div>

          {/* Corporate agent stack */}
          <div className="mt-16 reveal">
            <div className="text-center">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">The corporate agent stack</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2">Deploy a hierarchy of specialised agents under your trust anchor</h3>
            </div>

            <div className="mt-8 card rounded-2xl p-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-br from-brand-500 to-blue-500 text-white shadow-lg shadow-brand-500/30">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14" /></svg>
                  <span className="font-semibold">Acme Corp · Trust Anchor</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/20">✓ verified</span>
                </div>
              </div>
              <div className="mt-6 h-8 flex items-center justify-center"><div className="w-px h-full bg-neutral-300 dark:bg-white/20" /></div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { label: "Customer Support", cls: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300", path: "M3 10v4a2 2 0 002 2h1v3l3-3h10a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2z" },
                  { label: "Financial Ops",    cls: "bg-blue-500/15 text-blue-600 dark:text-blue-300",          path: "M4 19V5m0 0h16v14H4zM8 15l3-3 3 3 5-5" },
                  { label: "HR Onboarding",    cls: "bg-amber-500/15 text-amber-600 dark:text-amber-300",       path: "M9 8 a4 4 0 100 0 M17 11 a3 3 0 100-6 M3 20 c0-3.3 2.7-6 6-6 s6 2.7 6 6" },
                  { label: "Compliance",       cls: "bg-brand-500/15 text-brand-600 dark:text-brand-300",       path: "M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" },
                  { label: "Procurement",      cls: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-300",          path: "M4 7V4h16v3M4 7l2 13h12l2-13M4 7h16" },
                ].map((t) => (
                  <div key={t.label} className="card rounded-xl p-4 text-center">
                    <div className={`w-9 h-9 rounded-lg ${t.cls} flex items-center justify-center mx-auto mb-2`}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={t.path} /></svg>
                    </div>
                    <div className="font-semibold text-sm">{t.label}</div>
                    <div className="text-[10px] text-emerald-500 mt-1">✔ verified</div>
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-xs text-neutral-500">audit log: 14,293 connections · 12,901 allowed · 1,392 refused · 0 slashing events · trust deposit $176K · ★★★★★</p>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="card rounded-xl p-5"><div className="font-semibold">Your corporation as trust anchor</div><div className="text-sm text-neutral-500 mt-2">Register on Verana. Obtain Organisation and Service credentials. Create your Trust Registry with custom credential schemas.</div></li>
              <li className="card rounded-xl p-5"><div className="font-semibold">Agent hierarchy</div><div className="text-sm text-neutral-500 mt-2">Deploy specialised agents under your umbrella. Each inherits your trust chain.</div></li>
              <li className="card rounded-xl p-5"><div className="font-semibold">Enterprise authentication</div><div className="text-sm text-neutral-500 mt-2">Employees authenticate with Verifiable Credentials issued by your IAM. RBAC at the tool level. Step-up approval workflows.</div></li>
              <li className="card rounded-xl p-5"><div className="font-semibold">Any LLM, any tool</div><div className="text-sm text-neutral-500 mt-2">OpenAI, Mistral, Kimi, Anthropic, or self-hosted. Integrate CRM, ERP, GitHub, banks, Salesforce via MCP.</div></li>
              <li className="card rounded-xl p-5"><div className="font-semibold">Domain knowledge</div><div className="text-sm text-neutral-500 mt-2">Feed your agent corporate documentation via RAG. It answers from your knowledge base, not hallucinated guesses.</div></li>
              <li className="card rounded-xl p-5"><div className="font-semibold">Multi-language</div><div className="text-sm text-neutral-500 mt-2">English, Spanish, French, Portuguese, any language you decide. Automatic detection.</div></li>
              <li className="card rounded-xl p-5 sm:col-span-2 lg:col-span-3"><div className="font-semibold">Production-ready</div><div className="text-sm text-neutral-500 mt-2">Helm charts, Kubernetes-native, horizontal scaling, monitoring. Deploy the full stack with one command.</div></li>
            </ul>
          </div>

          <div className="mt-12 card card-glow rounded-2xl p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6 reveal">
            <div className="flex-1">
              <div className="font-display text-2xl sm:text-3xl font-bold">Deploy a corporate AI agent in 5 minutes.</div>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">Define your Agent Pack in YAML. Declare your connection policy. Point a Helm chart at it. Your agent is live: verifiable, credential-gated, governed.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://2060.io/contact" className="px-6 py-3 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition">Talk to Us</a>
              <a href="https://docs.hologram.zone" className="px-6 py-3 rounded-xl text-sm font-semibold border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition">Read the Docs</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============== AUDIT & OBSERVABILITY ============== */}
      <section id="audit" className="py-24 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Audit &amp; Observability</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">Every Connection, Logged. <span className="gradient-text">Every Interaction, Replayable.</span></h2>
            <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400">Agents that act autonomously must leave an evidentiary trail. Hologram agents do, by construction.</p>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">Deploying an autonomous agent means delegating authority. Deploying one you cannot audit means delegating <em>unknowable</em> authority. Hologram closes that gap.</p>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
            {/* Dashboard mock */}
            <div className="reveal space-y-5">
              <h3 className="font-display text-xl font-semibold">Operator dashboard</h3>
              <div className="card rounded-2xl p-5 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-neutral-200 dark:border-white/10 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500">Connections / hour</div>
                  <div className="font-display text-2xl font-bold mt-1">1,284</div>
                  <svg viewBox="0 0 120 30" className="mt-2 w-full h-8 text-emerald-500"><polyline fill="none" stroke="currentColor" strokeWidth="1.5" points="0,22 10,18 20,24 30,14 40,20 50,10 60,16 70,6 80,14 90,8 100,12 110,4 120,10" /></svg>
                </div>
                <div className="rounded-xl border border-neutral-200 dark:border-white/10 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500">Policy hits</div>
                  <div className="relative mt-2 h-14 w-14">
                    <svg viewBox="0 0 36 36" className="w-14 h-14 -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-neutral-200 dark:text-white/10" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22c55e" strokeWidth="3.5" strokeDasharray="62 100" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeDasharray="22 100" strokeDashoffset="-62" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#ef4444" strokeWidth="3.5" strokeDasharray="16 100" strokeDashoffset="-84" />
                    </svg>
                  </div>
                  <div className="mt-2 text-[10px] text-neutral-500 flex flex-col gap-0.5">
                    <span><span className="inline-block w-2 h-2 bg-emerald-500 rounded-full align-middle" /> allow 62%</span>
                    <span><span className="inline-block w-2 h-2 bg-amber-500 rounded-full align-middle" /> scoped 22%</span>
                    <span><span className="inline-block w-2 h-2 bg-red-500 rounded-full align-middle" /> deny 16%</span>
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 dark:border-white/10 p-4 col-span-2">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500">Top credentials presented</div>
                  <ul className="mt-3 space-y-1.5 text-xs">
                    {[
                      ["Customer",    "bg-brand-500",   "78%"],
                      ["Employee",    "bg-blue-500",    "14%"],
                      ["Partner-Org", "bg-emerald-500", "6%"],
                      ["Authority",   "bg-amber-500",   "2%"],
                    ].map(([label, cls, pct]) => (
                      <li key={label} className="flex items-center gap-2">
                        <span className="w-24 text-neutral-500">{label}</span>
                        <div className="flex-1 h-1.5 bg-neutral-200 dark:bg-white/10 rounded"><div className={`h-full ${cls} rounded`} style={{ width: pct }} /></div>
                        <span className="text-neutral-500 w-10 text-right">{pct}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-neutral-200 dark:border-white/10 p-4 col-span-2">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500">Recent anomalies</div>
                  <ul className="mt-2 text-xs text-neutral-500 space-y-1 font-mono">
                    <li className="flex items-center gap-2"><span className="text-emerald-500">●</span>10:14 · connection refused · did:webvh:unk.123 · no Org credential</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-500">●</span>10:21 · policy v4.2.1 applied · by sre@acme</li>
                    <li className="flex items-center gap-2"><span className="text-red-500">●</span>10:37 · burst from 1 DID · rate-limited, 47 attempts denied</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-500">●</span>10:44 · step-up cleared · initiate_wire · manager_approval_cred</li>
                  </ul>
                </div>
              </div>
              <div className="card rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
                <span className="uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold shrink-0">Public reputation (Verana VPR)</span>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-neutral-500">
                  <span>14,293 served</span>
                  <span className="text-emerald-500">12,901 accepted</span>
                  <span className="text-red-500">1,392 refused</span>
                  <span>0 slashing</span>
                  <span>$176K deposit</span>
                  <span className="text-amber-500">★★★★★</span>
                </div>
              </div>
            </div>

            {/* Incident replay */}
            <div className="reveal space-y-5">
              <h3 className="font-display text-xl font-semibold">Incident replay · connection #8a3f…b2c7</h3>
              <ol className="space-y-3 text-sm">
                <li className="card rounded-xl p-4 flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center font-semibold text-xs">1</span>
                  <div className="flex-1">
                    <div className="font-semibold">Credential presented</div>
                    <div className="text-xs text-neutral-500 mt-1">Customer#8172 · issued by Acme Corp · valid</div>
                    <div className="text-[10px] text-emerald-500 mt-1 font-mono">hash 0x4e1c…9ab2</div>
                  </div>
                  <span className="text-emerald-500">✔</span>
                </li>
                <li className="card rounded-xl p-4 flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center font-semibold text-xs">2</span>
                  <div className="flex-1">
                    <div className="font-semibold">Trust chain resolved</div>
                    <div className="text-xs text-neutral-500 mt-1">3 hops · issuer → trust registry → Verana VPR</div>
                    <div className="text-[10px] text-emerald-500 mt-1 font-mono">hash 0x73aa…c1e5</div>
                  </div>
                  <span className="text-emerald-500">✔</span>
                </li>
                <li className="card rounded-xl p-4 flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center font-semibold text-xs">3</span>
                  <div className="flex-1">
                    <div className="font-semibold">Policy evaluated</div>
                    <div className="text-xs text-neutral-500 mt-1">v4.2.1 · matched clause <span className="font-mono">customer_default</span></div>
                    <div className="text-[10px] text-emerald-500 mt-1 font-mono">hash 0x91d0…77f4</div>
                  </div>
                  <span className="text-emerald-500">✔</span>
                </li>
                <li className="card rounded-xl p-4 flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center font-semibold text-xs">4</span>
                  <div className="flex-1">
                    <div className="font-semibold">Tool invoked</div>
                    <div className="text-xs text-neutral-500 mt-1"><span className="font-mono">lookup(order_id=#8172)</span> → 200 OK · 128 bytes</div>
                    <div className="text-[10px] text-emerald-500 mt-1 font-mono">hash 0x0aa4…ffb1</div>
                  </div>
                  <span className="text-emerald-500">✔</span>
                </li>
                <li className="card rounded-xl p-4 flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-semibold text-xs">✔</span>
                  <div className="flex-1">
                    <div className="font-semibold">Response returned</div>
                    <div className="text-xs text-neutral-500 mt-1">Connection closed · audit entry appended</div>
                    <div className="text-[10px] text-emerald-500 mt-1 font-mono">block 0x9a3f…b2c7 · 2026-04-23T10:44:12Z</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-5 reveal">
            <div className="card rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">What is captured</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex gap-2"><span className="text-emerald-500">✔</span>Every connection attempt, credential set, trust-chain resolution, policy match and decision.</li>
                <li className="flex gap-2"><span className="text-emerald-500">✔</span>Every tool invocation, arguments and return.</li>
                <li className="flex gap-2"><span className="text-emerald-500">✔</span>Every approval, with approver, credential, timestamp, policy version.</li>
                <li className="flex gap-2"><span className="text-emerald-500">✔</span>Every credential update: revocations, new issuances, schema changes.</li>
              </ul>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Where it lives</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li><strong className="text-neutral-900 dark:text-white">Private log, operator-owned.</strong> Append-only, tamper-evident. OpenTelemetry-compatible, exportable to SIEM (Elastic, Splunk, Datadog). Encrypted at rest, keyed to your organisation.</li>
                <li><strong className="text-neutral-900 dark:text-white">Public reputation, Verana-anchored.</strong> Aggregate counters (served, accepted, refused, slashing, deposit) anchored on-chain. Anyone can audit the summary; only the operator can read the content.</li>
              </ul>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">What you can do with it</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li><strong className="text-neutral-900 dark:text-white">Real-time observability.</strong> Dashboards of connection rates, credentials, policy hits, anomaly alerts.</li>
                <li><strong className="text-neutral-900 dark:text-white">Incident response.</strong> Replay any connection end-to-end, with the credential state, policy version and tool trace.</li>
                <li><strong className="text-neutral-900 dark:text-white">Regulatory evidence.</strong> Tamper-evident exports for EU AI Act, eIDAS 2.0, KYC, AML, HIPAA, without exposing conversation content.</li>
                <li><strong className="text-neutral-900 dark:text-white">Ongoing governance.</strong> Policy is a versioned, signed artifact. Every change attributable to a named approver.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 card card-glow rounded-2xl p-8 reveal">
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Observability for personal agents, too</div>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">The same guarantees apply to personal agents, at a scope appropriate for an individual. You can see who tried to reach your agent today, which connections were accepted, which were refused and why, and which of your tools were used on your behalf while you were away. <strong className="text-neutral-900 dark:text-white">You own the log.</strong></p>
            <p className="mt-4 text-lg font-semibold"><span className="gradient-text">Autonomy without observability is a liability. Hologram makes observability the default.</span></p>
          </div>
        </div>
      </section>
    </>
  );
}
