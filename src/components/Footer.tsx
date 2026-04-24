import Link from "next/link";
import { NAV_LINKS, FOOTER_LEGAL } from "@/lib/nav";
import { COMPANY, SOCIALS } from "@/lib/site";

const PRODUCT_LINKS = NAV_LINKS.filter((l) => l.href !== "/build");

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg">
              <img src="/images/logo.svg" alt="Hologram" width={32} height={32} className="w-8 h-8" />
              <span>Hologram</span>
            </Link>
            <p className="mt-4 text-sm text-neutral-500 max-w-xs">
              A network of verified agents. Open infrastructure for the agentic network.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-neutral-900 dark:hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Developers</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><a href={SOCIALS.docs}    className="hover:text-neutral-900 dark:hover:text-white">Documentation ↗</a></li>
              <li><a href={SOCIALS.github}  className="hover:text-neutral-900 dark:hover:text-white">GitHub ↗</a></li>
              <li><a href={SOCIALS.discord} className="hover:text-neutral-900 dark:hover:text-white">Discord ↗</a></li>
              <li><a href={SOCIALS.spec}    className="hover:text-neutral-900 dark:hover:text-white">Verifiable Trust Spec ↗</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Company &amp; Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><a href={COMPANY.website}    className="hover:text-neutral-900 dark:hover:text-white">2060.io ↗</a></li>
              <li><a href={COMPANY.foundation} className="hover:text-neutral-900 dark:hover:text-white">Verana Foundation ↗</a></li>
              {FOOTER_LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-neutral-900 dark:hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="text-center md:text-left">
            Hologram is developed by{" "}
            <a href={COMPANY.website} className="underline decoration-dotted">2060.io</a>
            , built on the{" "}
            <a href={COMPANY.foundation} className="underline decoration-dotted">Verana Verifiable Trust Network</a>.
            <br />© {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}
          </p>
          <div className="flex items-center gap-4">
            <a href={SOCIALS.linkedin} className="hover:text-neutral-900 dark:hover:text-white">LinkedIn</a>
            <a href={SOCIALS.x}        className="hover:text-neutral-900 dark:hover:text-white">X</a>
            <a href={SOCIALS.discord}  className="hover:text-neutral-900 dark:hover:text-white">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
