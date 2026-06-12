"use client";

import { useEffect, useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/*  ContactForm                                                               */
/*                                                                            */
/*  Client-side form for /contact. Posts to /api/contact, which writes the    */
/*  inquiry into the self-hosted Relaticle CRM (best-effort on the server).   */
/*                                                                            */
/*  Anti-spam at the UI level: honeypot field "website_hp" hidden off-screen, */
/*  a render timestamp for a server-side time-to-submit check, a min-length   */
/*  message, and an explicit consent checkbox.                                */
/* -------------------------------------------------------------------------- */

const FIELD =
  "w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-white/15 bg-white dark:bg-white/5 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition";
const LABEL =
  "block text-sm font-medium text-neutral-900 dark:text-white mb-2";

const MIN_MESSAGE = 50;
const MAX_MESSAGE = 4000;

const TOPICS = [
  { value: "enterprise", label: "Hologram Cloud: enterprise or on-premise deployment" },
  { value: "sales", label: "Plans & subscriptions: pricing, quotes, billing" },
  { value: "partnership", label: "Partnership / integration" },
  { value: "build", label: "Building an agent: developer support" },
  { value: "press", label: "Press or analyst" },
  { value: "general", label: "General inquiry" },
];

const VALIDATION_MSG = `Please complete the required fields — a valid email and a message of at least ${MIN_MESSAGE} characters — then try again.`;
const SUBMIT_MSG =
  "Sorry, we couldn't send your message just now. Please try again in a moment, or reach a founder on LinkedIn.";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [renderedAt, setRenderedAt] = useState("");
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRenderedAt(String(Date.now()));
  }, []);

  // Make the outcome visible (especially on mobile) by scrolling the banner
  // into view on success/error.
  useEffect(() => {
    if (state === "submitted" || state === "error") {
      bannerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [state]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const honeypot = (form.elements.namedItem("website_hp") as HTMLInputElement)
      ?.value;
    if (honeypot) {
      setState("submitted");
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      setErrorMsg(VALIDATION_MSG);
      setState("error");
      return;
    }

    const fd = new FormData(form);
    const payload = {
      topic: fd.get("topic"),
      name: fd.get("name"),
      email: fd.get("email"),
      organization: fd.get("organization"),
      role: fd.get("role"),
      linkedin: fd.get("linkedin"),
      company_website: fd.get("company_website"),
      message: fd.get("message"),
      source: fd.get("source"),
      consent: (form.elements.namedItem("consent") as HTMLInputElement)?.checked,
      website_hp: honeypot ?? "",
      rendered_at: renderedAt,
    };

    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("submitted");
      form.reset();
      setCharCount(0);
    } catch {
      setErrorMsg(SUBMIT_MSG);
      setState("error");
    }
  }

  // Success — replace the form with a confirmation card.
  if (state === "submitted") {
    return (
      <div
        ref={bannerRef}
        className="mt-8 card rounded-2xl p-6 border-l-4"
        style={{ borderLeftColor: "#1FB57A" }}
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-lg font-bold flex items-center gap-2">
          <span aria-hidden="true" style={{ color: "#1FB57A" }}>
            ✓
          </span>
          Message sent
        </h3>
        <p className="mt-2 text-sm text-neutral-500">
          Thank you — we received your inquiry and will reply within one business
          day. For urgent matters, reach a founder on LinkedIn.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-4 px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = state === "submitting";
  const errored = state === "error";

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
      {/* Error banner — keeps the form so it can be re-submitted. */}
      {errored && (
        <div
          ref={bannerRef}
          role="alert"
          aria-live="assertive"
          className="card rounded-2xl p-5 border-l-4"
          style={{ borderLeftColor: "#e5484d", background: "rgba(229,72,77,0.08)" }}
        >
          <h3 className="font-display text-lg font-bold" style={{ color: "#e5484d" }}>
            Couldn&rsquo;t send your message
          </h3>
          <p className="mt-2 text-sm text-neutral-500">{errorMsg}</p>
          <button
            type="submit"
            disabled={submitting}
            className="mt-4 px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Try again"}
          </button>
        </div>
      )}

      {/* Honeypot — hidden from humans, a giveaway for bots. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Leave this field empty:
          <input name="website_hp" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="rendered_at" value={renderedAt} readOnly />

      <div>
        <label htmlFor="topic" className={LABEL}>
          Inquiry type{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </label>
        <select id="topic" name="topic" required className={FIELD} defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={LABEL}>
            Name{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Email{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={FIELD}
          />
        </div>
      </div>

      <div>
        <label htmlFor="linkedin" className={LABEL}>
          Your LinkedIn{" "}
          <span className="text-neutral-500 text-xs font-normal">(optional)</span>
        </label>
        <input
          id="linkedin"
          name="linkedin"
          type="url"
          autoComplete="url"
          placeholder="https://www.linkedin.com/in/…"
          className={FIELD}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organization" className={LABEL}>
            Organization{" "}
            <span className="text-neutral-500 text-xs font-normal">
              (required for investor / enterprise / press)
            </span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="role" className={LABEL}>
            Role or title{" "}
            <span className="text-neutral-500 text-xs font-normal">
              (optional)
            </span>
          </label>
          <input
            id="role"
            name="role"
            type="text"
            autoComplete="organization-title"
            placeholder="Partner, CTO, head of…"
            className={FIELD}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company_website" className={LABEL}>
          Company Website{" "}
          <span className="text-neutral-500 text-xs font-normal">(optional)</span>
        </label>
        <input
          id="company_website"
          name="company_website"
          type="url"
          placeholder="https://…"
          className={FIELD}
        />
      </div>

      <div>
        <label htmlFor="message" className={LABEL}>
          Message{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={MIN_MESSAGE}
          maxLength={MAX_MESSAGE}
          onChange={(e) => setCharCount(e.target.value.length)}
          placeholder="What are you building or evaluating, what is the question, and what timeline are you on?"
          className={FIELD}
        />
        <p className="text-xs text-neutral-500 mt-2">
          {charCount} / {MAX_MESSAGE} (min {MIN_MESSAGE})
        </p>
      </div>

      <div>
        <label htmlFor="source" className={LABEL}>
          How did you hear about us{" "}
          <span className="text-neutral-500 text-xs font-normal">(optional)</span>
        </label>
        <select id="source" name="source" className={FIELD} defaultValue="">
          <option value="">(none)</option>
          <option>GitHub</option>
          <option>IIW or standards venue</option>
          <option>Verana</option>
          <option>Referral</option>
          <option>Search</option>
          <option>Other</option>
        </select>
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 rounded border-neutral-300 dark:border-white/20 text-brand-600 focus:ring-brand-500"
        />
        <label htmlFor="consent" className="text-sm text-neutral-600 dark:text-neutral-400">
          I consent to 2060 OÜ storing this inquiry to respond to me. See the{" "}
          <a
            href="/privacy"
            className="text-brand-600 dark:text-brand-400 underline decoration-dotted"
          >
            Privacy Policy
          </a>
          .{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </label>
      </div>

      <div className="pt-4 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send message"}
        </button>
        <span className="text-xs text-neutral-500">
          We reply within one business day. For urgent matters, reach a founder
          on LinkedIn.
        </span>
      </div>
    </form>
  );
}
