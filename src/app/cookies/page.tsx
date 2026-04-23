import type { Metadata } from "next";
import { COMPANY, GA_MEASUREMENT_ID } from "@/lib/site";

const TITLE = "Cookie Policy";
const DESCRIPTION =
  "What cookies hologram.zone sets, why, and how to manage your preferences. Strictly necessary cookies only by default; analytics loaded only after consent.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cookies" },
  openGraph: { title: `${TITLE} · Hologram`, description: DESCRIPTION, url: "/cookies" },
  twitter:   { title: `${TITLE} · Hologram`, description: DESCRIPTION },
};

export default function CookiesPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Legal</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">Cookie Policy</h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            What cookies and similar technologies we use on <strong>hologram.zone</strong>, why, and how to manage your preferences.
          </p>
          <p className="mt-6 text-xs tracking-wider uppercase text-neutral-500">
            <strong className="text-neutral-900 dark:text-white">Effective</strong> Jan 14, 2024 ·{" "}
            <strong className="text-neutral-900 dark:text-white">Last updated</strong> April 23, 2026
          </p>
        </div>
      </section>

      <section className="pb-24">
        <article className="legal max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-neutral-700 dark:text-neutral-300">
          <p>This Cookie Policy explains how <strong>2060 OÜ</strong> (&quot;2060.io&quot;, &quot;we&quot;, &quot;us&quot;) uses cookies and similar technologies on <strong>hologram.zone</strong> and related sub-sites. It should be read together with our <a href="/privacy">Privacy Policy</a>.</p>

          <hr />
          <h2>1. What are cookies?</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, or work more efficiently, and to provide information to the site owner. &quot;Similar technologies&quot; include local storage, session storage, and pixel tags — we treat all of them under this policy.</p>
          <p>Cookies can be <strong>first-party</strong> (set by the domain you are visiting) or <strong>third-party</strong> (set by another domain, e.g. an analytics provider). They can also be <strong>session cookies</strong> (deleted when you close your browser) or <strong>persistent cookies</strong> (stored for a set period).</p>

          <hr />
          <h2>2. Categories of cookies we use</h2>

          <h3>2.1 Strictly necessary</h3>
          <p>These are required for the site to function and cannot be switched off. They are only set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms. They do not store any personally identifiable information.</p>

          <h3>2.2 Analytics (requires consent)</h3>
          <p>We use <strong>Google Analytics 4</strong> (measurement ID <code>{GA_MEASUREMENT_ID}</code>) to understand which pages are read, how people arrive at the site, and how the site performs. Analytics cookies are only set after you accept them on the cookie banner. IP addresses are anonymised before storage. We do <strong>not</strong> use Google Analytics for ad targeting or remarketing on this site.</p>

          <h3>2.3 What we do <em>not</em> use</h3>
          <ul>
            <li>No advertising or remarketing cookies</li>
            <li>No cross-site tracking or &quot;fingerprinting&quot;</li>
            <li>No social-media tracking pixels</li>
            <li>No cookies in the Hologram Messaging App (the App is self-custody and does not rely on web cookies)</li>
          </ul>

          <hr />
          <h2>3. Cookies set on hologram.zone</h2>
          <p>The table below lists the cookies and similar storage items this site may set. Exact names and lifetimes may evolve; the categories and purposes above are stable.</p>

          <table className="ck">
            <thead>
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Category</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>hologram-consent</code></td>
                <td>hologram.zone (local&nbsp;storage)</td>
                <td>Strictly necessary</td>
                <td>Stores your cookie-banner choice (accept / reject analytics)</td>
                <td>Until cleared</td>
              </tr>
              <tr>
                <td><code>hologram-theme</code></td>
                <td>hologram.zone (local&nbsp;storage)</td>
                <td>Strictly necessary</td>
                <td>Remembers your light / dark theme preference</td>
                <td>Until cleared</td>
              </tr>
              <tr>
                <td><code>_ga</code></td>
                <td>Google (google-analytics.com)</td>
                <td>Analytics</td>
                <td>Distinguishes unique visitors (anonymised)</td>
                <td>Up to 2 years</td>
              </tr>
              <tr>
                <td><code>_ga_{GA_MEASUREMENT_ID.replace("G-", "")}</code></td>
                <td>Google (google-analytics.com)</td>
                <td>Analytics</td>
                <td>Persists session state for this Google Analytics property</td>
                <td>Up to 2 years</td>
              </tr>
            </tbody>
          </table>

          <hr />
          <h2>4. Your choices</h2>
          <p>You can accept or reject non-essential cookies from the banner shown on your first visit. You can change your choice at any time:</p>
          <ul>
            <li>Clear the <code>hologram-consent</code> entry from your browser&#39;s local storage (or all site data for <code>hologram.zone</code>) — the banner will reappear on your next visit.</li>
            <li>Use your browser&#39;s cookie controls to block third-party cookies globally, or to block cookies from <code>google-analytics.com</code> and <code>googletagmanager.com</code> specifically.</li>
            <li>Enable &quot;Do Not Track&quot; or &quot;Global Privacy Control&quot; in your browser — we honour GPC as a signal to reject analytics cookies.</li>
            <li>Install the official <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
          </ul>

          <h3>Managing cookies in common browsers</h3>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/view-cookies-in-microsoft-edge-a7d95376-f2cd-8e4a-25dc-1de753474879" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
          </ul>

          <hr />
          <h2>5. Third-party transfers</h2>
          <p>Google Analytics is operated by Google LLC and may transfer data to servers in the United States and other countries. When this happens, we rely on the European Commission&#39;s Standard Contractual Clauses and Google&#39;s supplementary measures. IP addresses are anonymised before being stored, and we do not join Google Analytics data with any other identifiers we hold about you.</p>

          <hr />
          <h2>6. Changes to this policy</h2>
          <p>We may update this Cookie Policy when we add or remove services that set cookies, or when regulations change. The &quot;Last updated&quot; date above reflects the most recent substantive change. For material changes we will re-surface the cookie banner so you can review your choice.</p>

          <hr />
          <h2>7. Contact</h2>
          <p>For any question about this policy or your data, <a href={COMPANY.contactUrl}>contact us</a>.</p>
          <ul>
            <li><strong>Controller:</strong> {COMPANY.legalName}, {COMPANY.address}</li>
            <li><strong>Related documents:</strong> <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a></li>
          </ul>

          <p className="mt-10 text-sm text-neutral-500 italic">Effective as of Jan 14, 2024. Last updated April 23, 2026.</p>
        </article>
      </section>
    </>
  );
}
