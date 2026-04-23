"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS } from "@/lib/nav";
import { SOCIALS } from "@/lib/site";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Nav() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-neutral-950/75 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <img src="/images/logo.svg" alt="Hologram" width={32} height={32} className="w-8 h-8" />
          <span>Hologram</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-neutral-900 dark:hover:text-white transition ${isActive(pathname, item.href) ? "nav-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition inline-flex items-center gap-1"
          >
            GitHub
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/pricing"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition"
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-neutral-200 dark:border-white/10"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950 px-4 py-3 space-y-2 text-sm">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block py-2 ${isActive(pathname, item.href) ? "text-neutral-900 dark:text-white font-semibold" : "text-neutral-600 dark:text-neutral-400"}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            className="block py-2 text-neutral-600 dark:text-neutral-400"
            onClick={() => setOpen(false)}
          >
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  );
}
