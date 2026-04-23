import Link from "next/link";
import type { Metadata } from "next";

const TITLE = "Apps";
const DESCRIPTION = "Two apps, one network. Hologram Messaging App for humans. Hologram Dashboard for corporations managing agent deployment, supervision, and audit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/app" },
  openGraph: { title: `${TITLE} · Hologram`, description: DESCRIPTION, url: "/app" },
  twitter:   { title: `${TITLE} · Hologram`, description: DESCRIPTION },
};

export default function AppsPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Apps</span>
          <h1 className="h-display-sm mt-4">Two apps. <span className="gradient-text">One network.</span></h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            The <strong>Hologram Messaging App</strong> is where humans live on the network. The <strong>Hologram Dashboard</strong> is where corporations operate their agent fleet. Both share one identity fabric, one trust model, one audit stream.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 reveal">
          <div className="card rounded-2xl p-8">
            <h2 className="font-display text-2xl font-bold">Hologram Messaging App</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              iOS, Android, desktop. Self-custody. Your profile, your contacts, your credentials, your conversations — all stored on your device, end-to-end encrypted, under your keys.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>✔ Chat with people, organisations, and credentialed agents</li>
              <li>✔ Receive and hold W3C Verifiable Credentials in a ciphered enclave</li>
              <li>✔ Authenticate to any Hologram service with your Avatar &amp; Passport</li>
              <li>✔ Delete the app — all local data goes with it</li>
            </ul>
            <p className="mt-6 text-xs text-neutral-500">No online profile. No cloud backup. No server-side account.</p>
          </div>

          <div className="card rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="font-display text-2xl font-bold">Hologram Dashboard</h2>
              <span className="text-[10px] uppercase tracking-widest rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-300 px-2 py-0.5 font-semibold">WIP</span>
            </div>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              A pane of glass for corporations operating agents at scale. Deploy, supervise, and audit your agent fleet across Hologram Agentic Cloud, your own Kubernetes, or a mix.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>✔ Agent Pack registry with version pinning and rollout control</li>
              <li>✔ Live supervision: conversation transcripts, tool calls, policy hits</li>
              <li>✔ Credential and trust-registry management under your organisation&#39;s DID</li>
              <li>✔ Audit exports, SIEM integration, and SLA dashboards</li>
            </ul>
            <p className="mt-6 text-xs text-neutral-500">Coming with Hologram Agentic Cloud GA.</p>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="font-display text-3xl font-bold">Get the App</h2>
          <p className="mt-5 text-neutral-600 dark:text-neutral-400">
            The Hologram Messaging App is available for iOS, Android, and desktop.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/demos" className="px-7 py-3.5 rounded-xl text-base font-semibold bg-brand-600 hover:bg-brand-500 text-white transition">See It In a Demo</Link>
            <Link href="/pricing" className="px-7 py-3.5 rounded-xl text-base font-semibold border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition">Deploy an Agent</Link>
          </div>
        </div>
      </section>
    </>
  );
}
