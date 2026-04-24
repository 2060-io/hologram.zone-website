import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Apps",
  description: "Two apps, one network. Hologram Messaging App for humans. Hologram Dashboard for corporations managing agent deployment, supervision, and audit.",
  path: "/apps",
});

export default function AppsPage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Apps</span>
          <h1 className="font-display h-display mt-3">Two Apps. <span className="gradient-text">One Network.</span></h1>
          <p className="mt-5 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">One for humans, one for the corporations running agents at scale. Both built on the same verifiable stack.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="#messaging" className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">Hologram Messaging App</a>
            <a href="#dashboard" className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">Hologram Dashboard <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300 font-semibold tracking-widest">WIP</span></a>
          </div>
        </div>
      </section>

      {/* ============== APP 1: MESSAGING ============== */}
      <section id="messaging" className="py-20 border-t border-neutral-200 dark:border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> App 1 · For humans</div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">Hologram <span className="gradient-text">Messaging App</span></h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Private messaging meets verifiable AI. Free. Open source. Self-sovereign.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start mt-10">
          <div className="reveal space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>The <strong className="text-neutral-900 dark:text-white">Hologram Messaging App</strong> is your gateway to the agentic network. It is a messaging app, a credential wallet, and a trust-resolution engine, all in one. And it is fully open source.</p>

            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z" /></svg></span>
                <div><strong className="text-neutral-900 dark:text-white">Private messaging.</strong> End-to-end encrypted via DIDComm. No server can read your messages. No metadata is collected. No account required.</div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" /></svg></span>
                <div><strong className="text-neutral-900 dark:text-white">Proof of Trust.</strong> Before you connect to any service or agent, you see exactly who operates it, what credentials it holds, and who governs it. You decide.</div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M4 10h16" /></svg></span>
                <div><strong className="text-neutral-900 dark:text-white">Credential wallet.</strong> Receive, store, and present Verifiable Credentials. Authenticate to services without passwords. Prove your identity, your age, your qualifications, all with selective disclosure.</div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10h4l3-7 4 14 3-7h4" /></svg></span>
                <div><strong className="text-neutral-900 dark:text-white">Strong identity verification.</strong> Scan NFC-enabled passports and ID cards. Biometric verification with liveness detection (open-source, NIST FRTE 1:1 registered).</div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7zM1 5h14v14H1z" /></svg></span>
                <div><strong className="text-neutral-900 dark:text-white">Audio and video calls.</strong> WebRTC-based real-time communication, integrated into agent interactions.</div>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M8 12a4 4 0 018 0" /><circle cx="9" cy="10" r=".5" fill="currentColor" /><circle cx="15" cy="10" r=".5" fill="currentColor" /></svg></span>
                <div><strong className="text-neutral-900 dark:text-white">Kid-safe.</strong> Parental controls enforce age restrictions based on service metadata. Set a birthdate, protect it with a PIN, and your child only connects to age-appropriate services.</div>
              </li>
            </ul>

            <div className="card card-glow rounded-2xl p-6 mt-4">
              <p>The Hologram Messaging App is a <strong className="text-neutral-900 dark:text-white">Verifiable User Agent</strong>. Have different needs? Extend it, or build your own Verifiable User Agent from scratch using the open <a href="https://verana-labs.github.io/verifiable-trust-spec/" className="underline decoration-dotted">Verifiable Trust</a> spec. The standard is open, and the app is one implementation.</p>
            </div>
          </div>

          {/* Phone mockups */}
          <div className="relative reveal">
            <div className="absolute -inset-8 hero-glow" />
            <div className="relative grid grid-cols-3 gap-3 items-end">
              <div className="card rounded-[2rem] p-2 rotate-[-6deg] translate-y-6">
                <div className="rounded-[1.5rem] overflow-hidden bg-neutral-50 dark:bg-neutral-900 h-80">
                  <div className="h-5 bg-neutral-100 dark:bg-neutral-800/60" />
                  <div className="p-3 space-y-2 text-[10px]">
                    <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-blue-500" /><div className="flex-1"><div className="font-semibold">Acme Support</div><div className="text-neutral-500">Your order #… ✔</div></div><span className="text-emerald-500">✔</span></div>
                    <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-emerald-500/20" /><div className="flex-1"><div className="font-semibold">Maria</div><div className="text-neutral-500">See you tomorrow!</div></div></div>
                    <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-amber-500/20" /><div className="flex-1"><div className="font-semibold">Your Agent</div><div className="text-neutral-500">Booked your flight.</div></div></div>
                    <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-cyan-500/20" /><div className="flex-1"><div className="font-semibold">Wise</div><div className="text-neutral-500">Balance · €1,284 ✔</div></div><span className="text-emerald-500">✔</span></div>
                  </div>
                </div>
              </div>

              <div className="card rounded-[2rem] p-2 z-10 scale-110">
                <div className="rounded-[1.5rem] overflow-hidden bg-neutral-50 dark:bg-neutral-900 h-96">
                  <div className="h-5 bg-neutral-100 dark:bg-neutral-800/60" />
                  <div className="p-3 space-y-3 text-[10px]">
                    <div className="text-center text-[9px] uppercase tracking-widest text-brand-500 dark:text-brand-300">Proof of Trust</div>
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs">A</div>
                      <div className="flex-1"><div className="font-semibold">Acme Support</div><div className="text-neutral-500">did:webvh:acme.example</div></div>
                      <span className="text-emerald-500 text-[9px]">✔ verified</span>
                    </div>
                    <div className="rounded-lg border border-neutral-200 dark:border-white/10 divide-y divide-neutral-200 dark:divide-white/10">
                      <div className="flex justify-between p-2"><span className="text-neutral-500">Operator</span><span>Acme Corp</span></div>
                      <div className="flex justify-between p-2"><span className="text-neutral-500">Governance</span><span>FinServ EGF</span></div>
                      <div className="flex justify-between p-2"><span className="text-neutral-500">Deposit</span><span>$176K</span></div>
                      <div className="flex justify-between p-2"><span className="text-neutral-500">Rating</span><span className="text-amber-500">★★★★★</span></div>
                    </div>
                    <div className="flex gap-2">
                      <button type="button" className="flex-1 py-2 rounded-lg bg-emerald-500 text-white font-semibold">Connect</button>
                      <button type="button" className="py-2 px-3 rounded-lg border border-neutral-200 dark:border-white/10 text-neutral-500">Decline</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card rounded-[2rem] p-2 rotate-[6deg] translate-y-6">
                <div className="rounded-[1.5rem] overflow-hidden bg-neutral-50 dark:bg-neutral-900 h-80">
                  <div className="h-5 bg-neutral-100 dark:bg-neutral-800/60" />
                  <div className="p-3 space-y-2 text-[10px]">
                    <div className="text-[9px] uppercase tracking-widest text-brand-500 dark:text-brand-300">Wallet · 4 credentials</div>
                    <div className="rounded-lg p-2 bg-gradient-to-br from-brand-500/30 to-blue-500/20 border border-white/10"><div className="font-semibold">Digital ID</div><div className="text-neutral-500">Gov-issued · ✔</div></div>
                    <div className="rounded-lg p-2 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-white/10"><div className="font-semibold">Avatar</div><div className="text-neutral-500">@maria · ✔</div></div>
                    <div className="rounded-lg p-2 bg-gradient-to-br from-amber-500/20 to-pink-500/10 border border-white/10"><div className="font-semibold">Hello World</div><div className="text-neutral-500">Issued 2024 · ✔</div></div>
                    <div className="rounded-lg p-2 bg-gradient-to-br from-cyan-500/20 to-brand-500/10 border border-white/10"><div className="font-semibold">Employee</div><div className="text-neutral-500">Acme Corp · ✔</div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* App store badges — official 120x40 SVGs (with the Apple
                and Google internal stroke rects stripped so the outer
                wrapper border is the only one visible, consistent
                across all three). */}
            <div className="relative mt-20 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://apps.apple.com/us/app/hologram-messaging/id6474701855"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Download Hologram Messaging on the App Store"
                className="inline-flex items-center rounded-lg border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/[.03] overflow-hidden transition hover:border-neutral-300 dark:hover:border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
              >
                <img
                  src="/images/download-apple.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="block h-10 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=io.twentysixty.mobileagent.m"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Get Hologram Messaging on Google Play"
                className="inline-flex items-center rounded-lg border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/[.03] overflow-hidden transition hover:border-neutral-300 dark:hover:border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
              >
                <img
                  src="/images/download-google.svg"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="block h-10 w-auto"
                />
              </a>
              <a
                href="https://appgallery.huawei.com/app/C110964449"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Explore Hologram Messaging on Huawei AppGallery"
                className="inline-flex items-center rounded-lg border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/[.03] overflow-hidden transition hover:border-neutral-300 dark:hover:border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
              >
                <img
                  src="/images/download-huawei.svg"
                  alt="Explore it on AppGallery"
                  width={135}
                  height={40}
                  className="block h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============== APP 2: DASHBOARD ============== */}
      <section id="dashboard" className="py-20 border-t border-neutral-200 dark:border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> App 2 · For corporations</div>
            <div className="mt-3 flex items-center gap-3 flex-wrap">
              <h2 className="font-display text-3xl sm:text-5xl font-bold">Hologram <span className="gradient-text">Dashboard</span></h2>
              <span className="text-[11px] px-2 py-1 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-300 font-semibold tracking-widest uppercase">Work in progress</span>
            </div>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">A single place for corporations to deploy, supervise, and audit their agent fleet.</p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-14 items-start">
            <div className="reveal space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>Corporate agents do not run themselves. Someone has to deploy them, watch them, upgrade them, and prove to auditors that they behaved. <strong className="text-neutral-900 dark:text-white">Hologram Dashboard is that place.</strong></p>

              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="9" /></svg></span>
                  <div><strong className="text-neutral-900 dark:text-white">Deploy.</strong> Pick a template or upload your Agent Pack, choose a cluster, and your agent is live with a DID, its credentials, and its connection policy in minutes.</div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-6" /></svg></span>
                  <div><strong className="text-neutral-900 dark:text-white">Supervise.</strong> Watch every agent in real time: health, connection rate, policy hits, credential traffic, LLM usage and cost. Alerts on anomalies.</div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg></span>
                  <div><strong className="text-neutral-900 dark:text-white">Audit.</strong> Replay any interaction end-to-end. Export tamper-evident logs to your SIEM. Produce regulatory evidence without exposing conversation content.</div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></span>
                  <div><strong className="text-neutral-900 dark:text-white">Govern.</strong> Versioned connection policies with approvers, RBAC for operators, credential-schema management, and one-click rollback.</div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg></span>
                  <div><strong className="text-neutral-900 dark:text-white">One pane.</strong> Hologram Agentic Cloud, your own Kubernetes, or a mix. Same dashboard for the whole fleet.</div>
                </li>
              </ul>

              <div className="card rounded-2xl p-5 mt-4 border-l-4 border-l-amber-500">
                <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-300 font-semibold">Work in progress</div>
                <p className="mt-2 text-sm">Hologram Dashboard is under active development and ships with Business plans first. Interested in the private beta? We&#39;re onboarding design partners now.</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://2060.io/contact" className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition">Join the beta</a>
                <Link href="/pricing" className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition">See Business pricing</Link>
              </div>
            </div>

            {/* Dashboard mock */}
            <div className="reveal">
              <div className="card rounded-2xl p-4 shadow-2xl shadow-brand-500/10">
                <div className="flex items-center justify-between px-2 py-1.5">
                  <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /></div>
                  <div className="text-[10px] font-mono text-neutral-500">dashboard.hologram.zone / acme-corp</div>
                  <div className="w-10" />
                </div>
                <div className="mt-3 grid grid-cols-12 gap-3">
                  <div className="col-span-3 rounded-lg bg-neutral-50 dark:bg-white/[.02] border border-neutral-200 dark:border-white/5 p-2 text-[10px] space-y-1">
                    <div className="font-semibold text-neutral-500 uppercase tracking-widest text-[9px] px-1 pt-1">Acme Corp</div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-brand-500/15 text-brand-700 dark:text-brand-300 font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" />Overview</div>
                    {[
                      ["Agents", "47"],
                      ["Policies", null],
                      ["Credentials", null],
                      ["Audit log", null],
                      ["Team", null],
                      ["Settings", null],
                    ].map(([label, count]) => (
                      <div key={label} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />{label}
                        {count && <span className="ml-auto text-neutral-500">{count}</span>}
                      </div>
                    ))}
                  </div>

                  <div className="col-span-9 space-y-3">
                    <div className="grid grid-cols-4 gap-2">
                      <div className="rounded-lg border border-neutral-200 dark:border-white/10 p-2">
                        <div className="text-[9px] uppercase tracking-widest text-neutral-500">Agents</div>
                        <div className="flex items-baseline gap-1 mt-0.5"><span className="font-display text-lg font-bold">47</span><span className="text-[9px] text-emerald-500">+3</span></div>
                      </div>
                      <div className="rounded-lg border border-neutral-200 dark:border-white/10 p-2">
                        <div className="text-[9px] uppercase tracking-widest text-neutral-500">Uptime</div>
                        <div className="font-display text-lg font-bold mt-0.5">99.98<span className="text-xs">%</span></div>
                      </div>
                      <div className="rounded-lg border border-neutral-200 dark:border-white/10 p-2">
                        <div className="text-[9px] uppercase tracking-widest text-neutral-500">Conns/min</div>
                        <div className="flex items-baseline gap-1 mt-0.5"><span className="font-display text-lg font-bold">1.2K</span></div>
                        <svg viewBox="0 0 60 14" className="mt-0.5 w-full h-3 text-brand-500"><polyline fill="none" stroke="currentColor" strokeWidth="1.2" points="0,10 8,8 16,11 24,5 32,9 40,3 48,6 56,2 60,4" /></svg>
                      </div>
                      <div className="rounded-lg border border-neutral-200 dark:border-white/10 p-2">
                        <div className="text-[9px] uppercase tracking-widest text-neutral-500">Policy hits</div>
                        <div className="font-display text-lg font-bold mt-0.5">84<span className="text-[9px] text-neutral-500">%</span><span className="text-[9px] text-neutral-500 ml-0.5">allow</span></div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-neutral-200 dark:border-white/10 overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-2 bg-neutral-50 dark:bg-white/[.02] text-[10px] uppercase tracking-widest text-neutral-500"><span>Fleet</span><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" />all green</span></div>
                      <div className="divide-y divide-neutral-200 dark:divide-white/5 text-[11px]">
                        {([
                          { name: "support-agent", ver: "v4.2.1",      region: "hologram-cloud", status: "healthy", tone: "emerald" as const, traffic: "1.1K" },
                          { name: "kyc-agent",     ver: "v2.8.0",      region: "eu-west-1",      status: "healthy", tone: "emerald" as const, traffic: "412" },
                          { name: "wise-agent",    ver: "v1.5.3",      region: "hologram-cloud", status: "step-up", tone: "amber"   as const, traffic: "203" },
                          { name: "audit-agent",   ver: "v3.0.0-rc.4", region: "on-prem-dc1",    status: "healthy", tone: "emerald" as const, traffic: "88"  },
                          { name: "hr-agent",      ver: "v2.1.0",      region: "hologram-cloud", status: "healthy", tone: "emerald" as const, traffic: "61"  },
                        ]).map(({ name, ver, region, status, tone, traffic }) => {
                          const textCls = tone === "emerald" ? "text-emerald-600 dark:text-emerald-300" : "text-amber-600 dark:text-amber-300";
                          const dotCls  = tone === "emerald" ? "bg-emerald-500" : "bg-amber-500";
                          return (
                            <div key={name} className="grid grid-cols-12 gap-2 px-3 py-2 items-center">
                              <span className="col-span-4 font-semibold">{name}</span>
                              <span className="col-span-2 font-mono text-[9px] text-neutral-500">{ver}</span>
                              <span className="col-span-3 text-neutral-500">{region}</span>
                              <span className="col-span-2">
                                <span className={`inline-flex items-center gap-1 ${textCls}`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${dotCls}`} />{status}
                                </span>
                              </span>
                              <span className="col-span-1 text-right text-neutral-500">{traffic}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="rounded-lg border border-neutral-200 dark:border-white/10 p-3">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-neutral-500"><span>Recent audit events</span><span className="text-emerald-500">live</span></div>
                      <ul className="mt-2 space-y-1 text-[11px] font-mono text-neutral-500">
                        <li><span className="text-emerald-500">●</span> 10:44 · support-agent · step-up cleared · initiate_refund · manager_approval_cred</li>
                        <li><span className="text-red-500">●</span> 10:37 · kyc-agent · 47 attempts rate-limited · did:webvh:unk.9a3</li>
                        <li><span className="text-emerald-500">●</span> 10:21 · policy v4.2.2 applied to support-agent · by sre@acme</li>
                        <li><span className="text-emerald-500">●</span> 10:14 · wise-agent · connection refused · missing Customer credential</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
