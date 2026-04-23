import Link from "next/link";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

const ECOSYSTEM = [
  { href: "https://verana.io",           alt: "Verana",              src: "/images/verana-logo-with-verana.svg", h: "h-10" },
  { href: "https://identity.foundation/", alt: "DIF",                 src: "/images/logo-dif.png",                h: "h-9"  },
  { href: "https://trustoverip.org/",    alt: "Trust Over IP",       src: "/images/logo-trust-over-ip.svg",      h: "h-9"  },
  { href: "https://openwallet.foundation/", alt: "OpenWallet Foundation", src: "/images/logo-open-wallet.svg",   h: "h-8"  },
  { href: "https://daiaa.org/",          alt: "DAIAA",               src: "/images/daiaa.avif",                  h: "h-10" },
];

const STANDARDS = ["DIDComm", "W3C VC", "DIDs", "MCP", "A2A", "OpenRouter", "Credo"];

export default function HomePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open Source · Apache 2.0 · Built on Verana Trust Network
            </div>
            <h1 className="font-display h-display mt-6">
              The Future Is a <span className="gradient-text">Network of Verified Agents</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto">
              Not one AI assistant per person. A network. Agents serving many humans. Agents talking to other agents. Every connection gated by cryptographic proof of who is on the other end, and what they are authorised to do.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/pricing" className="px-7 py-3.5 rounded-xl text-base font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition">Get Started Free</Link>
              <Link href="/demos"   className="px-7 py-3.5 rounded-xl text-base font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">See Live Demos</Link>
            </div>
          </div>

          {/* Trust graph */}
          <div className="mt-20 relative reveal">
            <div className="hidden lg:flex absolute left-0 top-0 flex-col gap-2 text-xs text-neutral-500 opacity-70">
              <span className="uppercase tracking-widest text-[10px]">yesterday</span>
              <div className="card rounded-lg p-3 flex items-center gap-2 w-44">
                <div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-white/10" />
                <span className="text-[11px]">one human ↔ one bot</span>
              </div>
            </div>
            <div className="hidden lg:flex absolute right-0 top-0 flex-col gap-2 text-xs items-end">
              <span className="uppercase tracking-widest text-[10px] text-brand-400">today</span>
              <span className="text-[11px] text-neutral-500">a network of verified agents ▾</span>
            </div>

            <svg viewBox="0 0 1200 380" className="w-full max-w-5xl mx-auto" aria-hidden="true">
              <defs>
                <radialGradient id="nodeGlow"   cx="50%" cy="50%" r="50%"><stop offset="0%"   stopColor="#a78bfa" stopOpacity=".85" /><stop offset="100%" stopColor="#a78bfa" stopOpacity="0" /></radialGradient>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%"><stop offset="0%"   stopColor="#60a5fa" stopOpacity=".9"  /><stop offset="100%" stopColor="#60a5fa" stopOpacity="0" /></radialGradient>
                <linearGradient id="thread-green" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#22c55e" stopOpacity=".15" /><stop offset="50%" stopColor="#22c55e" stopOpacity=".7"  /><stop offset="100%" stopColor="#22c55e" stopOpacity=".15" /></linearGradient>
                <linearGradient id="thread-amber" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f59e0b" stopOpacity=".15" /><stop offset="50%" stopColor="#f59e0b" stopOpacity=".55" /><stop offset="100%" stopColor="#f59e0b" stopOpacity=".15" /></linearGradient>
                <linearGradient id="thread-red"   x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ef4444" stopOpacity=".1"  /><stop offset="50%" stopColor="#ef4444" stopOpacity=".55" /><stop offset="100%" stopColor="#ef4444" stopOpacity="0"   /></linearGradient>
                <linearGradient id="thread-brand" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#a78bfa" stopOpacity=".15" /><stop offset="50%" stopColor="#60a5fa" stopOpacity=".7"  /><stop offset="100%" stopColor="#22d3ee" stopOpacity=".15" /></linearGradient>
              </defs>
              <g transform="translate(600 190)">
                <circle r="80" fill="url(#centerGlow)" />
                <circle r="32" fill="#60a5fa" />
                <circle r="32" fill="none" stroke="#bfdbfe" strokeWidth="2" />
                <g transform="translate(22 -22)">
                  <circle r="11" fill="#22c55e" />
                  <path d="M-4 1 l3 3 l6 -6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
              <g fill="none" stroke="url(#thread-green)" strokeWidth="1.6" className="thread">
                <path d="M180,80  L600,190" /><path d="M260,310 L600,190" /><path d="M1040,90 L600,190" /><path d="M960,310 L600,190" />
              </g>
              <g fill="none" stroke="url(#thread-brand)" strokeWidth="1.4" className="thread">
                <path d="M430,340 L600,190" /><path d="M820,60  L600,190" />
              </g>
              <g fill="none" stroke="url(#thread-amber)" strokeWidth="1.4" className="thread"><path d="M370,180 L600,190" /></g>
              <g fill="none" stroke="url(#thread-red)"   strokeWidth="1.3" className="thread-rev">
                <path d="M80,200  L530,190" /><path d="M1120,210 L670,190" />
              </g>
              <g><circle cx="180" cy="80" r="26" fill="url(#nodeGlow)" /><g transform="translate(180 80)"><circle r="10" fill="#a78bfa" /><circle cx="0" cy="-2" r="3" fill="#1e1b4b" /><path d="M-6 6 Q0 2 6 6" fill="#1e1b4b" /></g><circle cx="200" cy="60" r="6" fill="#22c55e" /></g>
              <g><circle cx="960" cy="310" r="26" fill="url(#nodeGlow)" /><g transform="translate(960 310)"><circle r="10" fill="#a78bfa" /><circle cx="0" cy="-2" r="3" fill="#1e1b4b" /><path d="M-6 6 Q0 2 6 6" fill="#1e1b4b" /></g><circle cx="980" cy="290" r="6" fill="#22c55e" /></g>
              <g><circle cx="1040" cy="90" r="26" fill="url(#nodeGlow)" /><rect x="1028" y="78"  width="24" height="24" rx="5" fill="#60a5fa" /><circle cx="1060" cy="70" r="6" fill="#22c55e" /></g>
              <g><circle cx="260" cy="310" r="26" fill="url(#nodeGlow)" /><rect x="248"  y="298" width="24" height="24" rx="5" fill="#60a5fa" /><circle cx="280" cy="290" r="6" fill="#22c55e" /></g>
              <g><circle cx="430" cy="340" r="22" fill="url(#nodeGlow)" /><rect x="420"  y="330" width="20" height="20" rx="3" fill="#22d3ee" /></g>
              <g><circle cx="820" cy="60"  r="22" fill="url(#nodeGlow)" /><rect x="810"  y="50"  width="20" height="20" rx="3" fill="#22d3ee" /></g>
              <g><circle cx="370" cy="180" r="18" fill="url(#nodeGlow)" /><circle cx="370" cy="180" r="6" fill="#f59e0b" /></g>
              <g opacity=".65"><circle cx="80"   cy="200" r="14" fill="#111827" stroke="#ef4444" strokeDasharray="2 3" /><text x="80"   y="204" textAnchor="middle" fontSize="10" fill="#ef4444" fontWeight="bold">?</text></g>
              <g opacity=".65"><circle cx="1120" cy="210" r="14" fill="#111827" stroke="#ef4444" strokeDasharray="2 3" /><text x="1120" y="214" textAnchor="middle" fontSize="10" fill="#ef4444" fontWeight="bold">?</text></g>
            </svg>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-neutral-500">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" />accepted</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500"   />scoped</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500"     />refused</span>
              <span className="flex items-center gap-1.5 text-brand-500 dark:text-brand-300">agent ↔ agent</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROBLEM ============== */}
      <section className="py-24 border-t border-neutral-200 dark:border-white/10 reveal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-center">Chatbots Were Built for One Human at a Time.</h2>
          <div className="mt-8 space-y-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>Every AI assistant you use today is designed for a single user. You log in. You chat. You log out. The agent has no way to know if you are the owner, an employee, a customer, a friend, or a bot pretending to be you.</p>
            <p>Now imagine AI agents that operate continuously. Your <strong className="text-neutral-900 dark:text-white">personal agent</strong> guarding your inbox while you sleep. Your company&#39;s <strong className="text-neutral-900 dark:text-white">customer-support agent</strong> talking to thousands of people in parallel. <strong className="text-neutral-900 dark:text-white">Specialist agents</strong> negotiating with other specialist agents to close a deal, book a flight, file a claim.</p>
            <p className="text-neutral-900 dark:text-white font-semibold">Each one has to answer the same questions, in real time, at machine speed:</p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
            <li className="card rounded-xl p-5">
              <div className="w-9 h-9 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <div className="font-semibold">Who is connecting?</div>
              <div className="text-neutral-500 mt-1">A human? Another agent? From which organisation?</div>
            </li>
            <li className="card rounded-xl p-5">
              <div className="w-9 h-9 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM17 11V7a5 5 0 00-10 0v4" /></svg>
              </div>
              <div className="font-semibold">What can they do?</div>
              <div className="text-neutral-500 mt-1">Read my calendar? Transfer funds? Call only public methods?</div>
            </li>
            <li className="card rounded-xl p-5">
              <div className="w-9 h-9 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" /></svg>
              </div>
              <div className="font-semibold">Do I trust them enough?</div>
              <div className="text-neutral-500 mt-1">At all? With this tool? Under this governance framework?</div>
            </li>
          </ul>
          <div className="mt-10 space-y-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>Passwords, OAuth tokens, and API keys were built for humans clicking buttons, not for autonomous agents answering those questions at machine speed. Most &quot;AI agent&quot; products quietly assume a single authenticated user and cannot answer them at all.</p>
            <p className="text-xl sm:text-2xl font-semibold pt-2 text-center"><span className="gradient-text">The agentic network needs a new primitive. We built it.</span></p>
          </div>
        </div>
      </section>

      {/* ============== PROOF OF TRUST ============== */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900/40 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">The Breakthrough</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">Proof of Trust</h2>
            <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400">Every connection to a Hologram agent begins with cryptographic proof. Humans see it visually. Other agents evaluate it directly. Either way, the agent decides before it engages.</p>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
            <ol className="space-y-5 reveal">
              {[
                ["Credentials are exchanged. The receiving agent goes first.", <>The receiving agent presents its own W3C Verifiable Credentials up-front: identity, operator, service, governance. A human reviews them as a Proof-of-Trust card. Another agent evaluates them programmatically. Only then is the connecting party asked to present <em>its</em> credentials in return.</>],
                ["Trust is resolved, end-to-end.",                             "Signatures are checked, issuers walked, trust registries traversed, all the way to a public, auditable Verifiable Public Registry on the Verana network. Every link of the chain is verified before the agent makes a decision."],
                ["The agent decides.",                                         "Accept the connection. Refuse it. Accept it with limited features. The policy is declared in the Agent Pack, enforced by the runtime, and applied before a single user-visible message is exchanged."],
              ].map(([title, body], i) => (
                <li key={i} className="card rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-xl bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center font-display font-bold">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold text-lg">{title}</h3>
                      <p className="mt-2 text-neutral-600 dark:text-neutral-400">{body}</p>
                    </div>
                  </div>
                </li>
              ))}
              <p className="text-center sm:text-left text-xl font-semibold pt-3">No blind trust. No hope. <span className="gradient-text">Cryptographic proof.</span></p>
            </ol>

            <div className="relative reveal">
              <div className="absolute -inset-10 hero-glow" />
              <div className="relative mx-auto w-full max-w-sm card rounded-[2.5rem] p-3">
                <div className="rounded-[2rem] overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                  <div className="h-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800/60"><span className="w-16 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" /></div>
                  <div className="p-5 space-y-4">
                    <div className="text-[10px] uppercase tracking-widest text-brand-500 dark:text-brand-300">For humans · glanceable</div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-blue-500 flex items-center justify-center text-white font-bold">A</div>
                      <div>
                        <div className="font-semibold">Acme Customer Support</div>
                        <div className="text-xs text-neutral-500">did:webvh:acme.example</div>
                      </div>
                      <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <svg className="w-4 h-4 check-pop" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
                        Verified
                      </span>
                    </div>
                    <div className="rounded-xl border border-neutral-200 dark:border-white/10 divide-y divide-neutral-200 dark:divide-white/10 text-sm">
                      <div className="flex items-center justify-between p-3"><span className="text-neutral-500">Operated by</span><span className="font-medium">Acme Corp</span></div>
                      <div className="flex items-center justify-between p-3"><span className="text-neutral-500">Governance</span><span className="font-medium">Financial Services EGF</span></div>
                      <div className="flex items-center justify-between p-3"><span className="text-neutral-500">Trust deposit</span><span className="font-medium">$176,327</span></div>
                      <div className="flex items-center justify-between p-3"><span className="text-neutral-500">Rating</span><span className="text-amber-500">★★★★★</span></div>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button type="button" className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm">Connect</button>
                      <button type="button" className="py-3 px-4 rounded-xl border border-neutral-200 dark:border-white/10 text-sm font-medium text-neutral-600 dark:text-neutral-400">Decline</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 card rounded-2xl p-5 overflow-hidden">
                <div className="text-[10px] uppercase tracking-widest text-cyan-500 dark:text-cyan-300 mb-3">For other agents · programmatic</div>
                <pre className="font-mono text-[12px] leading-relaxed overflow-x-auto text-neutral-700 dark:text-neutral-300">{`{
  "subject": "did:webvh:acme.example",
  "credentials": [
    { "type": "Organization",            "ok": true },
    { "type": "Service:CustomerSupport", "ok": true },
    { "type": "Governance:FinServEGF",   "ok": true }
  ],
  "policy": {
    "allow":  ["lookup", "get_statement"],
    "stepUp": ["initiate_wire"],
    "hidden": ["transfer_funds"]
  }
}`}</pre>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-4 reveal">
            <div className="card rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Customer-service agent</div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"><strong className="text-neutral-900 dark:text-white">Lookup</strong> to a verified customer, <strong className="text-neutral-900 dark:text-white">refund</strong> only to a verified supervisor, <strong className="text-neutral-900 dark:text-white">audit export</strong> only to a verified auditor.</p>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Personal agent</div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"><strong className="text-neutral-900 dark:text-white">Calendar</strong> to a verified friend, <strong className="text-neutral-900 dark:text-white">send-payment</strong> only to you, <strong className="text-neutral-900 dark:text-white">full-document RAG</strong> only to you.</p>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Partner-facing agent</div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"><strong className="text-neutral-900 dark:text-white">Pricing</strong> to verified partner organisations, <strong className="text-neutral-900 dark:text-white">private SKU list</strong> only to partners with a current master-agreement credential.</p>
            </div>
          </div>

          <div className="mt-10 reveal">
            <pre className="trust-flow card rounded-xl p-5 overflow-x-auto">{`Incoming connection ──▶ Agent receives credentials
         │
         ├─ Org Credential       ← issuer ← trust registry ← Verana VPR
         ├─ Role Credential      ← employer ← HR registry
         └─ Jurisdiction         ← state authority ← ...

Policy evaluation:
  ✓ Connection allowed
  ✓ Tools exposed:   [read_balance, list_transfers, get_statement]
  ✗ Tools hidden:    [transfer_funds, change_beneficiary, delete_account]
  ⚠ Tools requiring step-up proof: [initiate_wire → manager_approval_cred]

Response: Connected, with scoped access.   Audit record written.`}</pre>
          </div>
        </div>
      </section>

      {/* ============== FOUR PILLARS ============== */}
      <section className="py-24 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">The Four Pillars</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">What Makes Hologram Different</h2>
            <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400">Four principles. One infrastructure. A new standard for an agentic network.</p>
          </div>

          <div className="mt-16 space-y-16">
            {/* Pillar 1: Own */}
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Pillar 1 · Own
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold mt-3">Own Your Agents</h3>
                <div className="mt-5 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <p>Deploy anywhere. Your cloud, your datacenter, your laptop. No vendor lock-in. No platform tax. No gatekeeper between you and your agent.</p>
                  <p>Every agent is defined by a single YAML manifest, its <strong className="text-neutral-900 dark:text-white">Agent Pack</strong>, that captures personality, language, LLM, tools, authentication, and access control. Change your LLM provider in one line. Add a new tool by declaring an MCP server. Deploy with Helm. Scale with Kubernetes.</p>
                  <p>Choose your LLM: OpenAI, Anthropic, Ollama, DeepSeek, Groq, or any OpenAI-compatible API. Run it locally for full data sovereignty. Run it in the cloud for scale. Your choice.</p>
                  <p className="text-neutral-900 dark:text-white font-semibold">Your infrastructure. Your data. Your rules.</p>
                </div>
              </div>
              <div className="card rounded-2xl p-5 text-sm">
                <div className="flex items-center justify-between mb-3 text-xs text-neutral-500">
                  <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /></div>
                  <span className="font-mono">agent-pack.yaml</span>
                </div>
                <pre className="font-mono leading-relaxed text-[13px] overflow-x-auto">{`name: acme-support-agent
personality:
  style: professional-friendly
  language: [en, es]
llm:
  provider: openai
  model: gpt-5.4-mini
mcp_servers:
  - name: crm
    url: https://mcp.acme.com/crm
  - name: github
    url: https://mcp.github.com
policy:
  accept:
    - { credential: Customer, tools: [lookup, order_history] }
    - { credential: Employee, tools: ["*"], stepUp: [refund] }
    - { credential: Auditor,  tools: [audit_export] }
deployment:
  replicas: 3
  autoscale: true`}</pre>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">Deploy anywhere:
                  <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-white/5">AWS</span>
                  <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-white/5">GCP</span>
                  <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-white/5">Azure</span>
                  <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-white/5">On-prem</span>
                  <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-white/5">Laptop</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: Verify */}
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div className="lg:order-2">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Pillar 2 · Verify
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold mt-3">Verify Every Connection, In Both Directions</h3>
                <div className="mt-5 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <p>Every Hologram agent is identified by a <strong className="text-neutral-900 dark:text-white">Decentralized Identifier (DID)</strong> and holds <strong className="text-neutral-900 dark:text-white">W3C Verifiable Credentials</strong> proving who operates it, what it does, and who governs it. That is table stakes.</p>
                  <p className="text-neutral-900 dark:text-white font-semibold">The hard part is the other direction.</p>
                  <p>Every Hologram agent is also a <strong className="text-neutral-900 dark:text-white">verifier</strong>. When a human or another agent connects, the agent performs the same trust resolution on <em>them</em>, walks the trust chain back to a public registry, and decides in real time whether to engage.</p>
                  <ul className="space-y-3 pl-0 list-none">
                    <li className="flex gap-3"><span className="text-emerald-500 mt-1 shrink-0">✔</span><span><strong className="text-neutral-900 dark:text-white">A human connects</strong> → the agent presents its own proof first, rendered as a human-readable Proof-of-Trust card. The person reviews it, decides, and presents their own credentials to the agent in return.</span></li>
                    <li className="flex gap-3"><span className="text-emerald-500 mt-1 shrink-0">✔</span><span><strong className="text-neutral-900 dark:text-white">An agent connects</strong> → the two agents exchange credentials machine-to-machine in a programmatic handshake, no human in the loop.</span></li>
                    <li className="flex gap-3"><span className="text-emerald-500 mt-1 shrink-0">✔</span><span><strong className="text-neutral-900 dark:text-white">A credential is revoked upstream</strong> → the agent updates its access policy on the next connection attempt. No cache, no config drift, no stale trust.</span></li>
                  </ul>
                  <p className="text-neutral-900 dark:text-white font-semibold">Every node is proven, and every node is proving, continuously.</p>
                </div>
              </div>
              <div className="lg:order-1">
                <div className="card rounded-2xl p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-widest text-neutral-500">Agent A</div>
                      <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-3 text-xs"><div className="font-semibold">Organisation</div><div className="text-neutral-500">Acme Corp ✔</div></div>
                      <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-3 text-xs"><div className="font-semibold">Service</div><div className="text-neutral-500">Customer Support ✔</div></div>
                      <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-3 text-xs"><div className="font-semibold">Governance</div><div className="text-neutral-500">FinServ EGF ✔</div></div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-widest text-neutral-500 text-right">Agent B</div>
                      <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-3 text-xs"><div className="font-semibold">Organisation</div><div className="text-neutral-500">Zeta Inc ✔</div></div>
                      <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-3 text-xs"><div className="font-semibold">Partner Role</div><div className="text-neutral-500">Tier-1 reseller ✔</div></div>
                      <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-3 text-xs"><div className="font-semibold">Master Agreement</div><div className="text-neutral-500">2026-01 ✔</div></div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-semibold uppercase tracking-widest">policy match</span>
                  </div>
                  <div className="text-center text-xs text-neutral-500">Anchored on the <span className="font-semibold text-neutral-700 dark:text-neutral-300">Verana Verifiable Public Registry</span></div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Discover */}
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Pillar 3 · Discover
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold mt-3">Discover Trusted Agents</h3>
                <div className="mt-5 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <p>Deploy your agent. Attach credentials. Within seconds, your agent is discoverable by every other agent and every user in the ecosystem.</p>
                  <p>No app store submission. No central directory. No approval queue. You deploy, you register, you exist.</p>
                  <p>Agents acquire <strong className="text-neutral-900 dark:text-white">skill credentials</strong>: verifiable claims about capabilities, certifications, or compliance. A coding agent proves it passed a security audit. A financial agent proves regulatory compliance. A healthcare agent proves HIPAA certification.</p>
                  <p>Other agents discover yours, inspect its credentials, and decide whether to interact, automatically, without human intervention. <strong className="text-neutral-900 dark:text-white">This is how the agentic network works: agents finding agents, verifying trust, collaborating at machine speed.</strong></p>
                  <p className="text-neutral-900 dark:text-white font-semibold">Deploy. Register. Be found. Be trusted.</p>
                </div>
              </div>
              <div className="card rounded-2xl p-5">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-100 dark:bg-white/5 text-sm">
                  <svg className="w-4 h-4 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3-3" /></svg>
                  <span className="text-neutral-600 dark:text-neutral-300">Find agents with ISO 27001 &amp; EU jurisdiction</span>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                  {[
                    { name: "SecureOps AI", by: "Sentinel Inc.", pct: 94, score: "4.7", tags: [["bg-brand-500/15 text-brand-700 dark:text-brand-300", "ISO 27001"], ["bg-emerald-500/15 text-emerald-700 dark:text-emerald-300", "SOC 2"]],    border: "border-neutral-200 dark:border-white/10" },
                    { name: "AuditMate",    by: "Norm Labs",     pct: 98, score: "4.9", tags: [["bg-brand-500/15 text-brand-700 dark:text-brand-300", "ISO 27001"], ["bg-amber-500/15 text-amber-700 dark:text-amber-300", "HIPAA"]],    border: "border-brand-500/60 bg-brand-500/5" },
                    { name: "RiskBot",      by: "Harbor Data",   pct: 86, score: "4.3", tags: [["bg-brand-500/15 text-brand-700 dark:text-brand-300", "ISO 27001"]],                                                                     border: "border-neutral-200 dark:border-white/10" },
                    { name: "TrustScan",    by: "Verana Labs",   pct: 96, score: "4.8", tags: [["bg-brand-500/15 text-brand-700 dark:text-brand-300", "ISO 27001"], ["bg-cyan-500/15 text-cyan-700 dark:text-cyan-300", "FedRAMP"]],   border: "border-neutral-200 dark:border-white/10" },
                  ].map((a) => (
                    <div key={a.name} className={`rounded-lg border p-3 ${a.border}`}>
                      <div className="flex items-center justify-between"><div className="font-semibold">{a.name}</div><span className="text-emerald-500 text-xs">✔ verified</span></div>
                      <div className="text-xs text-neutral-500 mt-1">by {a.by}</div>
                      <div className="flex items-center gap-1.5 mt-1.5" title={`Trust Score ${a.score} / 5`}>
                        <div className="relative inline-block text-amber-500/25 text-sm leading-none tracking-tight">
                          <span>★★★★★</span>
                          <span className="absolute inset-0 overflow-hidden text-amber-500" style={{ width: `${a.pct}%` }}><span>★★★★★</span></span>
                        </div>
                        <span className="text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">{a.score}</span>
                        <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Trust</span>
                      </div>
                      <div className="flex gap-1 mt-2 flex-wrap">
                        {a.tags.map(([cls, label]) => (
                          <span key={label} className={`text-[10px] px-2 py-0.5 rounded-full ${cls}`}>{label}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 4: Govern */}
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div className="lg:order-2">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Pillar 4 · Govern
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold mt-3">Credentials Gate Everything</h3>
                <div className="mt-5 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <p>Every agent declares a policy, written in the Agent Pack, anchored to credential schemas, and published on the Verana network. It is the single source of truth for who can do what.</p>
                  <ul className="space-y-3 pl-0 list-none">
                    <li className="flex gap-3"><span className="text-brand-500 mt-1 shrink-0">◆</span><span><strong className="text-neutral-900 dark:text-white">Connection-level gating.</strong> The policy decides whether to accept a new connection at all. No employee credential, no admin connection. No KYC credential, no regulated-service connection.</span></li>
                    <li className="flex gap-3"><span className="text-brand-500 mt-1 shrink-0">◆</span><span><strong className="text-neutral-900 dark:text-white">Tool-level gating.</strong> The policy decides which MCP tools, RAG corpora, and backend APIs are visible to each connected party. Same agent, different surfaces.</span></li>
                    <li className="flex gap-3"><span className="text-brand-500 mt-1 shrink-0">◆</span><span><strong className="text-neutral-900 dark:text-white">Action-level gating.</strong> <em>Read balance</em> is automatic. <em>Initiate wire</em> might demand a fresh manager-approval credential, valid for sixty seconds.</span></li>
                    <li className="flex gap-3"><span className="text-brand-500 mt-1 shrink-0">◆</span><span><strong className="text-neutral-900 dark:text-white">Audit by construction.</strong> Every allow-decision and every deny-decision is cryptographically signed and appended to an immutable log.</span></li>
                  </ul>
                  <p className="text-neutral-900 dark:text-white font-semibold">Policy is code. Proof is credentials. Authority is verifiable.</p>
                </div>
              </div>
              <div className="lg:order-1 space-y-4">
                <div className="card rounded-xl p-5">
                  <div className="text-xs text-neutral-500 mb-3 uppercase tracking-widest">Policy gate · connecting: did:webvh:jane.example</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="rounded-lg p-3 bg-emerald-500/10 border border-emerald-500/30 flex flex-col gap-1"><span className="text-emerald-500">◉ open</span><span className="font-semibold">lookup</span></div>
                    <div className="rounded-lg p-3 bg-emerald-500/10 border border-emerald-500/30 flex flex-col gap-1"><span className="text-emerald-500">◉ open</span><span className="font-semibold">order_history</span></div>
                    <div className="rounded-lg p-3 bg-amber-500/10 border border-amber-500/30 flex flex-col gap-1"><span className="text-amber-500">⚠ step-up</span><span className="font-semibold">refund</span></div>
                    <div className="rounded-lg p-3 bg-amber-500/10 border border-amber-500/30 flex flex-col gap-1"><span className="text-amber-500">⚠ step-up</span><span className="font-semibold">initiate_wire</span></div>
                    <div className="rounded-lg p-3 bg-red-500/10 border border-red-500/30 flex flex-col gap-1"><span className="text-red-500">✕ closed</span><span className="font-semibold">change_beneficiary</span></div>
                    <div className="rounded-lg p-3 bg-red-500/10 border border-red-500/30 flex flex-col gap-1"><span className="text-red-500">✕ closed</span><span className="font-semibold">delete_account</span></div>
                  </div>
                </div>
                <div className="card rounded-xl p-4 text-xs text-neutral-500 font-mono">
                  <div className="flex items-center justify-between"><span>audit log · hash</span><span className="text-emerald-500">0x9a3f…b2c7</span></div>
                  <div className="flex items-center justify-between mt-2"><span>policy version</span><span>v4.2.1 · signed by <span className="text-neutral-700 dark:text-neutral-300">sre@acme</span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== STANDARDS + ECOSYSTEM ============== */}
      <section className="py-20 border-t border-neutral-200 dark:border-white/10 bg-neutral-50/60 dark:bg-white/[.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Built on Open Standards</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">Hologram does not reinvent protocols. It implements them, and contributes back.</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-center">
            {STANDARDS.map((s) => (
              <div key={s} className="card rounded-lg py-3 text-xs sm:text-sm font-semibold text-neutral-500 dark:text-neutral-400 tracking-wide">{s}</div>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-500">Interoperable by design. No vendor lock-in. Ever.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center reveal">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Ecosystem</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Founding member, active contributor, and validator operator across the organizations shaping digital trust.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {ECOSYSTEM.map((e) => (
              <a key={e.alt} href={e.href} target="_blank" rel="noopener noreferrer" aria-label={e.alt} className="logo-eco">
                <img src={e.src} alt={e.alt} className={`${e.h} w-auto`} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 hero-glow" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="font-display h-display">Build the <span className="gradient-text">Agentic Network.</span></h2>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">Every agent deployed with proof. Every connection gated by credentials. Every interaction auditable.</p>
          <p className="mt-6 text-lg">The future is not one AI assistant per person, hoping you can trust it.<br className="hidden sm:inline" />It is a network of agents, humans and software alike, that <span className="gradient-text font-semibold">verify each other before they engage</span>, and leave an evidentiary trail when they do.</p>
          <p className="mt-4 text-sm text-neutral-500">Hologram ships that network today, on open protocols, in production, under Apache 2.0.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/pricing" className="px-7 py-3.5 rounded-xl text-base font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition">Get Started Free</Link>
            <a href="https://2060.io/contact" className="px-7 py-3.5 rounded-xl text-base font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">Talk to Our Team</a>
          </div>
        </div>
      </section>
    </>
  );
}
