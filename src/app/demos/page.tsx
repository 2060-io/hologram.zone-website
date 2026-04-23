import type { Metadata } from "next";

const TITLE = "Demos";
const DESCRIPTION = "Live demos of Hologram agents: Avatar, Government Digital ID, GitHub, Wise, and X. Real trust resolution, real credentials, try them now.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/demos" },
  openGraph: { title: `${TITLE} · Hologram`, description: DESCRIPTION, url: "/demos" },
  twitter:   { title: `${TITLE} · Hologram`, description: DESCRIPTION },
};

const DEMOS = [
  {
    name: "Avatar",
    tagline: "Your credential-gated digital self",
    body: "A personal agent that can authenticate you to any Hologram service. Uses a Verana-issued Avatar credential and a government-grade Passport as a step-up.",
  },
  {
    name: "Government Digital ID",
    tagline: "Sovereign identity, verifiable anywhere",
    body: "Issue and verify a national digital-identity credential through a Hologram agent, with trust resolution anchored in the Verana VPR.",
  },
  {
    name: "GitHub Agent",
    tagline: "Open-source collaborator with proof",
    body: "A GitHub-integrated agent that only accepts pull-request reviews from contributors who can prove an organisational role credential.",
  },
  {
    name: "Wise (MCP)",
    tagline: "Money moves under policy",
    body: "An agent that talks to the Wise MCP server to move funds — but only after a step-up proof from an authorised signatory credential.",
  },
  {
    name: "X Autonomous",
    tagline: "Social reach with verifiable authorship",
    body: "An autonomous X (Twitter) agent that posts, replies, and follows under a signed corporate identity, with every action auditable.",
  },
];

export default function DemosPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Demos</span>
          <h1 className="h-display-sm mt-4">Live demos. <span className="gradient-text">Real credentials.</span></h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            Every demo runs against the live Verana VPR and uses the same open-source agent stack you can self-host.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
            {DEMOS.map((d) => (
              <li key={d.name} className="card rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold">{d.name}</h2>
                <p className="text-sm text-brand-600 dark:text-brand-300 mt-1">{d.tagline}</p>
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{d.body}</p>
                <div className="mt-6 flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Request access
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="font-display text-3xl font-bold">Want a demo tailored to your use case?</h2>
          <p className="mt-5 text-neutral-600 dark:text-neutral-400">
            Banking, healthcare, telecom, public sector — we can stand up a Hologram agent against your domain schemas in a workshop.
          </p>
          <a
            href="https://2060.io/contact"
            className="mt-10 inline-flex px-7 py-3.5 rounded-xl text-base font-semibold bg-brand-600 hover:bg-brand-500 text-white transition"
          >
            Talk to us
          </a>
        </div>
      </section>
    </>
  );
}
