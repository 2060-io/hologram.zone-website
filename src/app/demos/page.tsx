import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Demos",
  description: "Live demos of Hologram agents: Avatar, Government Digital ID, GitHub, Wise, and X. Real trust resolution, real credentials, try them now.",
  path: "/demos",
});

export default function DemosPage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Live demos</span>
          <h1 className="font-display h-display mt-3">See It <span className="gradient-text">Live.</span></h1>
          <p className="mt-5 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Real agents. Real credentials. Real trust resolution. Try them now.</p>
          <p className="mt-4 text-sm text-neutral-500 max-w-2xl mx-auto">Every demo is open source, deployed as a Verifiable Service on the Verana network, and available for you to try right now with the Hologram app.</p>
        </div>
      </section>

      {/* ============== DEMO GRID ============== */}
      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">

          {/* Demo 1: Avatar */}
          <article className="card rounded-2xl p-6 reveal flex flex-col">
            <div className="h-40 rounded-xl bg-gradient-to-br from-brand-500/30 via-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-blue-500 flex items-center justify-center text-white font-bold text-2xl">@</div>
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 text-[10px] font-semibold">✔ verified</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Demo 1</div>
            <h2 className="font-display text-2xl font-bold mt-1">Avatar · Your Digital Identity</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"><strong className="text-neutral-900 dark:text-white">Create your verifiable avatar in minutes.</strong> Choose a name, upload a photo, and receive a Verifiable Credential that represents you across the entire ecosystem. Protect it with a password or authenticator app. Lose your phone? Recover it anytime.</p>
            <p className="mt-3 text-sm text-neutral-500">Your avatar is yours: portable, verifiable, and under your control.</p>
            <div className="mt-5 flex gap-2">
              <a href="#" className="px-4 py-2 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition">Try It</a>
              <a href="https://github.com/2060-io" className="px-4 py-2 rounded-lg text-sm font-semibold border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition">GitHub ↗</a>
            </div>
          </article>

          {/* Demo 2: Government Digital ID */}
          <article className="card rounded-2xl p-6 reveal flex flex-col">
            <div className="h-40 rounded-xl bg-gradient-to-br from-emerald-500/25 via-blue-500/15 to-brand-500/15 flex items-center justify-center mb-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <svg className="relative w-20 h-20 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="8" cy="12" r="3" /><path d="M14 10h5M14 14h3" /></svg>
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 text-[10px] font-semibold">NFC + liveness</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Demo 2</div>
            <h2 className="font-display text-2xl font-bold mt-1">Government Digital ID</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"><strong className="text-neutral-900 dark:text-white">Get a digital identity credential from your passport.</strong> Scan the NFC chip in your passport or ID card. Complete a liveness check. The agent compares your face to the document photo in real time. If everything matches, you receive a Government Digital ID credential you can use anywhere.</p>
            <p className="mt-3 text-sm text-neutral-500">Production-grade identity verification. Open source.</p>
            <div className="mt-5 flex gap-2">
              <a href="#" className="px-4 py-2 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition">Try It</a>
              <a href="https://github.com/2060-io" className="px-4 py-2 rounded-lg text-sm font-semibold border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition">GitHub ↗</a>
            </div>
          </article>

          {/* Demo 3: GitHub */}
          <article className="card rounded-2xl p-6 reveal flex flex-col">
            <div className="h-40 rounded-xl bg-gradient-to-br from-neutral-800 via-neutral-900 to-black flex items-center justify-center mb-5 relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <svg className="relative w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 011.2-3.2c-.1-.3-.5-1.5.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2a4.7 4.7 0 011.2 3.2c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3" /></svg>
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 text-[10px] font-semibold">MCP-powered</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Demo 3</div>
            <h2 className="font-display text-2xl font-bold mt-1">GitHub Agent</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"><strong className="text-neutral-900 dark:text-white">Your AI-powered GitHub assistant.</strong> Search repositories, browse issues and pull requests, explore code, all through a verified AI agent in a private chat. Connect your own GitHub account securely, and the agent works on your behalf. Multi-language, instant responses, every interaction private.</p>
            <div className="mt-5 flex gap-2">
              <a href="#" className="px-4 py-2 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition">Try It</a>
              <a href="https://github.com/2060-io" className="px-4 py-2 rounded-lg text-sm font-semibold border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition">GitHub ↗</a>
            </div>
          </article>

          {/* Demo 4: Wise */}
          <article className="card rounded-2xl p-6 reveal flex flex-col">
            <div className="h-40 rounded-xl bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="relative card rounded-xl p-3 w-44 text-xs">
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Balance</div>
                <div className="flex items-center justify-between mt-1"><span className="font-semibold">EUR</span><span>€1,284.50</span></div>
                <div className="flex items-center justify-between mt-1"><span className="font-semibold">USD</span><span>$940.12</span></div>
                <div className="flex items-center justify-between mt-1"><span className="font-semibold">GBP</span><span>£712.30</span></div>
              </div>
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold">financial</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Demo 4</div>
            <h2 className="font-display text-2xl font-bold mt-1">Wise Financial Agent</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"><strong className="text-neutral-900 dark:text-white">Manage your international finances through a trusted AI.</strong> Check balances, review transfers, get live exchange rates, all through a verified AI agent connected to your Wise account. Authenticate with your credential, link your own Wise token securely, and manage your money through conversation.</p>
            <div className="mt-5 flex gap-2">
              <a href="#" className="px-4 py-2 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition">Try It</a>
              <a href="https://github.com/2060-io" className="px-4 py-2 rounded-lg text-sm font-semibold border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition">GitHub ↗</a>
            </div>
          </article>

          {/* Demo 5: X Agent */}
          <article className="card rounded-2xl p-6 reveal flex flex-col md:col-span-2">
            <div className="h-44 rounded-xl bg-gradient-to-br from-amber-400/30 via-pink-500/25 to-brand-500/30 flex items-center justify-center mb-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="relative flex items-center gap-4">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.54 7.47L22 22h-6.828l-5.34-6.982L3.6 22H1l7.02-8.02L1 2h7.005l4.833 6.39L18.244 2zm-2.39 18h1.64L6.22 4H4.47l11.383 16z" /></svg>
                <div className="text-white font-display text-xl font-bold">Compose. Draw. Publish.</div>
              </div>
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-500/30 text-pink-200 text-[10px] font-semibold">creative</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">Demo 5</div>
            <h2 className="font-display text-2xl font-bold mt-1">X (Twitter) Agent</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl"><strong className="text-neutral-900 dark:text-white">Compose, publish, and manage your social media, with AI that can draw.</strong> Draft tweets, search posts, manage your timeline, and generate images for your posts on the fly. The agent writes, you review and approve before anything goes live. Voice notes welcome: just talk, and the agent transcribes and acts.</p>
            <div className="mt-5 flex gap-2">
              <a href="#" className="px-4 py-2 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition">Try It</a>
              <a href="https://github.com/2060-io" className="px-4 py-2 rounded-lg text-sm font-semibold border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition">GitHub ↗</a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
