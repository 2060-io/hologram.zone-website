import Link from "next/link";

const ECO_LOGOS = [
  { src: "/images/verana.svg",                   alt: "Verana" },
  { src: "/images/daiaa.avif",                   alt: "DAIAA" },
  { src: "/images/logo-dif.png",                 alt: "Decentralized Identity Foundation" },
  { src: "/images/logo-open-wallet.svg",         alt: "Open Wallet Foundation" },
  { src: "/images/logo-trust-over-ip.svg",       alt: "Trust Over IP Foundation" },
  { src: "/images/verana-logo-with-verana.svg",  alt: "Verana Foundation" },
];

const STANDARDS = [
  "W3C DIDs", "W3C VC", "DIDComm", "MCP",
  "A2A", "JSON-LD", "Ed25519", "OpenRouter",
  "Credo-TS", "Verana VPR",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">
            The Agentic Network
          </span>
          <h1 className="h-display mt-5">
            The Future Is a <span className="gradient-text">Network of Verified Agents</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Not one AI assistant per person. A network. Agents serving many humans. Agents talking to other agents. Every connection gated by cryptographic proof of who is on the other end, and what they are authorised to do.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/pricing" className="px-7 py-3.5 rounded-xl text-base font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition">
              Get Started Free
            </Link>
            <Link href="/demos" className="px-7 py-3.5 rounded-xl text-base font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">
              See Live Demos
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 border-t border-neutral-200 dark:border-white/10 reveal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-center">Chatbots Were Built for One Human at a Time.</h2>
          <div className="mt-8 space-y-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>Every AI assistant you use today is designed for a single user. You log in. You chat. You log out. The agent has no way to know if you are the owner, an employee, a customer, a friend, or a bot pretending to be you.</p>
            <p>Now imagine AI agents that operate continuously: a <strong className="text-neutral-900 dark:text-white">personal agent</strong> guarding your inbox while you sleep, a <strong className="text-neutral-900 dark:text-white">customer-support agent</strong> talking to thousands of people in parallel, <strong className="text-neutral-900 dark:text-white">specialist agents</strong> negotiating with other specialist agents to close a deal, book a flight, file a claim.</p>
            <p className="text-neutral-900 dark:text-white font-semibold">Each one has to answer the same questions, in real time, at machine speed:</p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
            {[
              { title: "Who is connecting?",       body: "A human? Another agent? From which organisation?" },
              { title: "What can they do?",        body: "Read my calendar? Transfer funds? Call only public methods?" },
              { title: "Do I trust them enough?",  body: "At all? With this tool? Under this governance framework?" },
            ].map((q) => (
              <li key={q.title} className="card rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 015 0c0 1.5-2.5 2-2.5 4" /><circle cx="12" cy="17" r="0.6" fill="currentColor" /></svg>
                </div>
                <div className="font-semibold">{q.title}</div>
                <div className="text-neutral-500 mt-1">{q.body}</div>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xl sm:text-2xl font-semibold text-center">
            <span className="gradient-text">The agentic network needs a new primitive. We built it.</span>
          </p>
        </div>
      </section>

      {/* PROOF OF TRUST */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900/40 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">The Breakthrough</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">Proof of Trust</h2>
            <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400">
              Every connection to a Hologram agent begins with cryptographic proof. Humans see it visually. Other agents evaluate it directly. Either way, the agent decides before it engages.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
            <ol className="space-y-5 reveal">
              {[
                ["Credentials are exchanged. The receiving agent goes first.", "The receiving agent presents its own W3C Verifiable Credentials up-front: identity, operator, service, governance. A human reviews them as a Proof-of-Trust card. Another agent evaluates them programmatically. Only then is the connecting party asked to present its credentials in return."],
                ["Trust is resolved, end-to-end.",                             "Signatures are checked, issuers walked, trust registries traversed, all the way to a public, auditable Verifiable Public Registry on the Verana network. Every link of the chain is verified before the agent makes a decision."],
                ["The agent decides.",                                         "Accept the connection. Refuse it. Accept it with limited features. The policy is declared in the Agent Pack, enforced by the runtime, and applied before a single user-visible message is exchanged."],
              ].map(([title, body], i) => (
                <li key={i} className="card rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-xl bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center font-display font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg">{title}</h3>
                      <p className="mt-2 text-neutral-600 dark:text-neutral-400">{body}</p>
                    </div>
                  </div>
                </li>
              ))}
              <p className="text-center sm:text-left text-xl font-semibold pt-3">
                No blind trust. No hope. <span className="gradient-text">Cryptographic proof.</span>
              </p>
            </ol>

            <div className="relative reveal">
              <div className="card rounded-2xl p-5 overflow-hidden">
                <div className="text-[10px] uppercase tracking-widest text-cyan-500 dark:text-cyan-300 mb-3">
                  For other agents · programmatic
                </div>
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

              <pre className="trust-flow card rounded-2xl p-5 mt-6 overflow-x-auto">{`Incoming connection ──▶ Agent receives credentials
         │
         ├─ Org Credential       ← issuer ← trust registry ← Verana VPR
         ├─ Role Credential      ← employer ← HR registry
         └─ Jurisdiction         ← state authority ← ...

Policy evaluation:
  ✓ Connection allowed
  ✓ Tools exposed:  [read_balance, list_transfers, get_statement]
  ✗ Tools hidden:   [transfer_funds, change_beneficiary, delete_account]
  ⚠ Step-up proof required: [initiate_wire → manager_approval_cred]

Response: Connected, with scoped access.   Audit record written.`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-24 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">What Hologram Gives You</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">One Network. Four Capabilities.</h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
            {[
              { title: "Verified agents",       body: "Every agent — personal, corporate, specialist — starts with a DID and a credential chain, not a password. Identity is cryptographic and portable." },
              { title: "Credential-gated access", body: "Declare in an Agent Pack YAML who may connect, which tools they may call, and when a step-up proof is required. No client-side guards, no bypasses." },
              { title: "Agent-to-agent trust",  body: "Agents discover, authenticate, and negotiate with other agents over DIDComm. Every exchange is signed, logged, and resolvable to a Verifiable Public Registry." },
              { title: "Open + auditable",      body: "Apache 2.0. Bring your own LLM. Self-host or use our Hologram Agentic Cloud. Every trust decision is inspectable end-to-end." },
            ].map((p) => (
              <div key={p.title} className="card rounded-2xl p-6">
                <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950/60 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Open Standards</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">Built on Open Standards. With the Ecosystem.</h2>
            <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-400">
              Hologram speaks W3C DIDs &amp; VCs, DIDComm, MCP, and A2A. It plugs into any LLM via OpenRouter. It writes trust facts to a public registry governed by the Verana Foundation.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 reveal">
            {STANDARDS.map((s) => (
              <li key={s} className="card rounded-full px-4 py-1.5">{s}</li>
            ))}
          </ul>

          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 reveal">
            {ECO_LOGOS.map((l) => (
              <li key={l.alt} className="logo-eco">
                <img src={l.src} alt={l.alt} className="h-10 w-auto" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="h-display-sm">
            Ready for an <span className="gradient-text">agentic network</span> that proves who it talks to?
          </h2>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            Start free on Hologram Agentic Cloud, or self-host the full stack under Apache 2.0.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/pricing" className="px-7 py-3.5 rounded-xl text-base font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition">
              Get Started Free
            </Link>
            <Link href="/build" className="px-7 py-3.5 rounded-xl text-base font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">
              Build on the Stack
            </Link>
          </div>
          <p className="mt-5 text-xs text-neutral-500">Apache 2.0 · Bring your own LLM · Self-hosted is free, forever.</p>
        </div>
      </section>
    </>
  );
}
