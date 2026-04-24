import Link from "next/link";
import DemoGrid from "@/components/DemoGrid";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Demos",
  description:
    "Live demos of Hologram agents: Avatar, Passport, GitHub, Wise, and X. Real trust resolution, real credentials, try them now.",
  path: "/demos",
});

export default function DemosPage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">
            Live demos
          </span>
          <h1 className="font-display h-display mt-3">
            See It <span className="gradient-text">Live.</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Real agents. Real credentials. Real trust resolution. Try them now.
          </p>
          <p className="mt-4 text-sm text-neutral-500 max-w-2xl mx-auto">
            Every demo is open source, deployed as a Verifiable Service on the
            Verana network, and available for you to try right now with the
            Hologram app.
          </p>
        </div>
      </section>

      {/* ============== DEMO GRID ============== */}
      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        {/* App prerequisite notice — shown once, above every card. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="rounded-2xl border border-brand-500/25 bg-brand-500/5 dark:bg-brand-500/10 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div
              aria-hidden="true"
              className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-blue-500 flex items-center justify-center text-white"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="6" y="2" width="12" height="20" rx="3" />
                <path d="M11 18h2" />
              </svg>
            </div>
            <div className="flex-1 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p className="font-semibold text-neutral-900 dark:text-white">
                You&apos;ll need the Hologram app to try these demos.
              </p>
              <p className="mt-1">
                Every demo connects over DIDComm with{" "}
                <strong className="text-neutral-900 dark:text-white">
                  Hologram Messaging
                </strong>{" "}
                on your phone. If you don&apos;t have it yet, grab it from the{" "}
                <Link
                  href="/apps"
                  className="text-brand-600 dark:text-brand-400 hover:underline font-semibold"
                >
                  Apps page
                </Link>
                .
              </p>
              <p className="mt-3">
                These demos are educational. Each one is scoped to a single
                capability so the underlying concept is easy to follow. In
                a real deployment, one agent usually combines several of
                these capabilities into a single Agent Pack.
              </p>
            </div>
          </div>
        </div>

        <DemoGrid />
      </section>
    </>
  );
}
