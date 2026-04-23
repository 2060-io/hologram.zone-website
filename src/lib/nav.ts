export type NavLink = { href: string; label: string };

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/",        label: "Home" },
  { href: "/agents",  label: "Agents" },
  { href: "/apps",    label: "Apps" },
  { href: "/demos",   label: "Demos" },
  { href: "/pricing", label: "Pricing" },
  { href: "/build",   label: "Build" },
] as const;

export const FOOTER_LEGAL: readonly NavLink[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms",   label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
] as const;
