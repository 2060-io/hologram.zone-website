# hologram.zone — website

Marketing site for [hologram.zone](https://hologram.zone).
Built with **Next.js 15** (App Router, React 19) and **Tailwind CSS v4**.

## Scripts

```bash
npm run dev        # start dev server (http://localhost:3000)
npm run build      # production build
npm run start      # run production build
npm run typecheck  # strict TypeScript check
npm run lint       # next lint
```

## Project layout

```
public/            static assets, served from /
  images/          all site imagery (logos, illustrations, og-image.png)
  favicon.ico
  site.webmanifest
src/
  app/             Next.js App Router pages
    layout.tsx     root layout: metadata, GA4, font preconnect
    globals.css    Tailwind v4 entry + @theme tokens
    page.tsx       /
    agents/        /agents
    app/           /app
    demos/         /demos
    pricing/       /pricing
    build/         /build
    privacy/       /privacy
    terms/         /terms
    cookies/       /cookies
  components/      shared client/server components (Nav, Footer, ThemeToggle …)
  lib/             small utilities (site metadata, nav model)
```

## SEO & analytics

- OpenGraph / Twitter Card: site-wide defaults in `src/app/layout.tsx`, per-page overrides via each route's `metadata` export.
- OG image: `public/images/og-image.png` → `https://hologram.zone/images/og-image.png` (1200×630).
- Google Analytics 4: measurement ID `G-LV2RHBYR5T`, loaded from `src/components/Analytics.tsx`, with `anonymize_ip: true`.

## Theming

Dark mode is the default; users can toggle to light. The preference is persisted in `localStorage` under `hologram-theme` and restored synchronously before first paint to avoid flashes (see `src/components/ThemeScript.tsx`).

## License

Apache 2.0 — see `LICENSE`.
