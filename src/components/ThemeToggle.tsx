"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const KEY = "hologram-theme";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  // Hydrate after mount to avoid SSR/CSR mismatch
  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try { localStorage.setItem(KEY, next); } catch { /* private mode, ignore */ }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="w-9 h-9 rounded-lg flex items-center justify-center border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5 transition"
    >
      <span className="text-lg leading-none" aria-hidden="true">
        {theme === "dark" ? "☾" : "☀"}
      </span>
    </button>
  );
}
