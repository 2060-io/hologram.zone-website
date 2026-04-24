import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { buildPageMetadata } from "@/lib/metadata";
import { COMPANY, SOCIALS } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Talk to Hologram. The fastest way to reach us is the form on this page, routed internally. We reply within one business day.",
  path: "/contact",
});

/* ------------------------------------------------------------------ */
/*  Small inline icon components, to keep parity with the rest of the  */
/*  site which uses inline SVGs rather than an icon library.           */
/* ------------------------------------------------------------------ */

function IconEnvelope(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
    </svg>
  );
}
function IconDatabase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}
function IconCookie(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2a10 10 0 108.5 15 5 5 0 01-5-5 5 5 0 01-5-5A10 10 0 0012 2z" />
      <circle cx="9" cy="10" r=".8" fill="currentColor" />
      <circle cx="14" cy="14" r=".8" fill="currentColor" />
      <circle cx="10" cy="15" r=".8" fill="currentColor" />
    </svg>
  );
}
function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h3.96V21H3V8.98zM9.47 8.98h3.8v1.63h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-3.96v-5.41c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21H9.47V8.98z" />
    </svg>
  );
}
function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 011.2-3.2c-.1-.3-.5-1.5.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2a4.7 4.7 0 011.2 3.2c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3" />
    </svg>
  );
}
function IconDiscord(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.3 4.4A17.4 17.4 0 0016.1 3l-.2.4c1.7.4 2.9 1 4.1 1.7a15.2 15.2 0 00-15.8 0c1.2-.7 2.4-1.3 4.1-1.7L7.9 3a17.4 17.4 0 00-4.2 1.4C1.4 7.7.8 10.9 1.1 14a17.3 17.3 0 005.2 2.6l.5-.7a11.5 11.5 0 01-1.9-.9l.3-.3c3.6 1.7 7.5 1.7 11 0l.3.3c-.6.3-1.2.6-1.9.9l.5.7a17.3 17.3 0 005.2-2.6c.3-3.6-.4-6.8-2.6-9.6zM8.8 12.9a1.7 1.7 0 010-3.4 1.7 1.7 0 010 3.4zm6.3 0a1.7 1.7 0 010-3.4 1.7 1.7 0 010 3.4z" />
    </svg>
  );
}
function IconMic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0014 0" />
      <path d="M12 18v3" />
      <path d="M8 21h8" />
    </svg>
  );
}
function IconNewspaper(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="4" width="16" height="16" rx="2" />
      <path d="M6 8h8M6 12h8M6 16h5" />
      <path d="M18 8h4v10a2 2 0 01-2 2h-2" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">
            Contact
          </span>
          <h1 className="font-display h-display mt-3">
            Talk to <span className="gradient-text">Hologram</span>.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            The fastest way to reach us is the form below. We reply within one
            business day.
          </p>
          <p className="mt-4 text-sm text-neutral-500 max-w-2xl mx-auto">
            We do not publish email addresses. They collect more spam than
            signal. Form submissions are handled internally, without exposing
            any contact endpoint on the public site.
          </p>
        </div>
      </section>

      {/* ============== CONTACT FORM ============== */}
      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10">
          {/* Aside: why this form */}
          <aside className="md:col-span-4 order-2 md:order-1 reveal">
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
              Why this form
            </div>
            <h2 className="font-display text-2xl font-bold mt-3">
              Routed internally.
            </h2>
            <ul className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-400 text-sm">
              <li className="flex items-start gap-3">
                <IconEnvelope className="w-5 h-5 shrink-0 mt-0.5 text-neutral-500" aria-hidden="true" />
                <span>No email addresses exposed. Nothing in HTML, meta or JSON-LD.</span>
              </li>
              <li className="flex items-start gap-3">
                <IconShield className="w-5 h-5 shrink-0 mt-0.5 text-neutral-500" aria-hidden="true" />
                <span>Self-hosted anti-abuse. No Turnstile, hCaptcha or reCAPTCHA.</span>
              </li>
              <li className="flex items-start gap-3">
                <IconDatabase className="w-5 h-5 shrink-0 mt-0.5 text-neutral-500" aria-hidden="true" />
                <span>One processor: OVHcloud Canada (Beauharnois, Québec). No CDN. Covered by EC adequacy decision 2002/2/EC.</span>
              </li>
              <li className="flex items-start gap-3">
                <IconCookie className="w-5 h-5 shrink-0 mt-0.5 text-neutral-500" aria-hidden="true" />
                <span>
                  No cookies from this form. The site uses Google Analytics 4
                  (pageviews only, IP anonymized), see the{" "}
                  <Link
                    href="/privacy"
                    className="text-brand-600 dark:text-brand-400 underline decoration-dotted"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </li>
            </ul>
            <p className="text-xs text-neutral-500 mt-8">
              Full details on the{" "}
              <Link
                href="/privacy"
                className="text-brand-600 dark:text-brand-400 underline decoration-dotted"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </aside>

          {/* Form */}
          <div className="md:col-span-8 order-1 md:order-2 reveal">
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
              Request information
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mt-3">
              Send a message
            </h2>
            <p className="mt-4 text-sm text-neutral-500">
              Every message is routed to the right person on the team within
              one business day.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ============== OTHER WAYS ============== */}
      <section className="py-20 border-t border-neutral-200 dark:border-white/10 bg-neutral-50/60 dark:bg-white/[.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
              Other ways to reach us
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mt-3">
              If the form isn&apos;t your preference
            </h2>
          </div>

          <ul className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl">
            <li className="card rounded-2xl p-5 reveal">
              <h3 className="font-display text-lg font-bold flex items-center gap-2">
                <IconLinkedIn className="w-5 h-5" aria-hidden="true" />
                LinkedIn
              </h3>
              <p className="text-sm mt-3 text-neutral-600 dark:text-neutral-400">
                Founders and core team post regularly. Direct message is fine
                for informal inquiries.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.linkedin.com/in/fabricerochette/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-600 dark:text-brand-400 underline decoration-dotted"
                  >
                    Fabrice Rochette (CEO) ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aogentile/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-600 dark:text-brand-400 underline decoration-dotted"
                  >
                    Ariel Gentile (CTO) ↗
                  </a>
                </li>
              </ul>
            </li>

            <li className="card rounded-2xl p-5 reveal">
              <h3 className="font-display text-lg font-bold flex items-center gap-2">
                <IconGitHub className="w-5 h-5" aria-hidden="true" />
                GitHub
              </h3>
              <p className="text-sm mt-3 text-neutral-600 dark:text-neutral-400">
                Open an issue or a pull request.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-600 dark:text-brand-400 underline decoration-dotted"
                  >
                    github.com/2060-io ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/verana-labs"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-600 dark:text-brand-400 underline decoration-dotted"
                  >
                    github.com/verana-labs ↗
                  </a>
                </li>
              </ul>
            </li>

            <li className="card rounded-2xl p-5 reveal">
              <h3 className="font-display text-lg font-bold flex items-center gap-2">
                <IconDiscord className="w-5 h-5" aria-hidden="true" />
                Discord
              </h3>
              <p className="text-sm mt-3 text-neutral-600 dark:text-neutral-400">
                Community chat for builders and integrators.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href={SOCIALS.discord}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-600 dark:text-brand-400 underline decoration-dotted"
                  >
                    Join the Hologram Discord ↗
                  </a>
                </li>
              </ul>
            </li>

            <li className="card rounded-2xl p-5 reveal">
              <h3 className="font-display text-lg font-bold flex items-center gap-2">
                <IconMic className="w-5 h-5" aria-hidden="true" />
                In person
              </h3>
              <p className="text-sm mt-3 text-neutral-600 dark:text-neutral-400">
                We present regularly at the{" "}
                <strong className="text-neutral-900 dark:text-white">
                  Internet Identity Workshop
                </strong>{" "}
                and adjacent standards venues.
              </p>
            </li>

            <li className="card rounded-2xl p-5 reveal md:col-span-2">
              <h3 className="font-display text-lg font-bold flex items-center gap-2">
                <IconNewspaper className="w-5 h-5" aria-hidden="true" />
                Press kit
              </h3>
              <p className="text-sm mt-3 text-neutral-600 dark:text-neutral-400">
                Logos, founder portraits, and boilerplate are available on
                request. Use inquiry type{" "}
                <em>Press or analyst</em> on the form above.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ============== OFFICE AND LEGAL ============== */}
      <section className="py-20 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 reveal">
            <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
              Office and legal
            </div>
            <h2 className="font-display text-2xl font-bold mt-3">
              Who you&apos;re talking to
            </h2>
          </div>
          <div className="md:col-span-8 reveal">
            <address className="not-italic text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <strong className="text-neutral-900 dark:text-white block text-lg">
                {COMPANY.legalName}
              </strong>
              {COMPANY.address}
            </address>
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mt-6 text-sm">
              <div>
                <dt className="text-xs tracking-wider uppercase text-neutral-500">
                  Registry code
                </dt>
                <dd className="text-neutral-900 dark:text-white mt-1">
                  16853041
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-wider uppercase text-neutral-500">
                  VAT
                </dt>
                <dd className="text-neutral-900 dark:text-white mt-1">
                  EE102810457
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-wider uppercase text-neutral-500">
                  Founded
                </dt>
                <dd className="text-neutral-900 dark:text-white mt-1">2023</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wider uppercase text-neutral-500">
                  Incorporated in
                </dt>
                <dd className="text-neutral-900 dark:text-white mt-1">
                  Republic of Estonia
                </dd>
              </div>
            </dl>
            <p className="text-sm text-neutral-500 mt-8">
              For legal service, GDPR requests, or anything touching the{" "}
              <Link
                href="/privacy"
                className="text-brand-600 dark:text-brand-400 underline decoration-dotted"
              >
                Privacy Policy
              </Link>
              , use inquiry type <em>General inquiry</em> on the form above and
              begin the message with <em>&quot;Legal:&quot;</em>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
