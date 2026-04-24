"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Attaches an IntersectionObserver to every `.reveal` element on the page
 * and toggles `.is-visible` when they enter the viewport.
 *
 * Re-runs on every pathname change because the root layout (and therefore
 * this component) persists across client-side navigations, so the observer
 * would otherwise only ever see the initial page's elements and new pages'
 * `.reveal` content would stay hidden at opacity: 0 until a full reload.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const targets = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
    if (targets.length === 0) return;

    // Respect users who prefer reduced motion — just show everything.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
