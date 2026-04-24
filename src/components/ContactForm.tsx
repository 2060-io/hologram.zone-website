"use client";

import { useState } from "react";

/* -------------------------------------------------------------------------- */
/*  ContactForm                                                               */
/*                                                                            */
/*  Client-side form UI for /contact.                                         */
/*                                                                            */
/*  NOTE — submission is currently stubbed: on submit we prevent-default and  */
/*  show a success card. When the backend intake endpoint is ready, replace   */
/*  the TODO in `handleSubmit` with a POST to that endpoint and branch on     */
/*  the response.                                                             */
/*                                                                            */
/*  Anti-spam built in at the UI level:                                       */
/*    - honeypot field "website" hidden off-screen                            */
/*    - min-length requirement on the message                                 */
/*    - explicit consent checkbox                                             */
/* -------------------------------------------------------------------------- */

const FIELD =
  "w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-white/15 bg-white dark:bg-white/5 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition";
const LABEL =
  "block text-sm font-medium text-neutral-900 dark:text-white mb-2";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "submitted" | "error">("idle");
  const [charCount, setCharCount] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot — if the hidden "website" field is filled, silently
    // drop the submission (bots fill every input they see).
    const form = new FormData(e.currentTarget);
    if (form.get("website")) {
      setState("submitted");
      return;
    }

    // TODO: wire to the backend intake endpoint when it is available.
    //       For now we just acknowledge the submission locally so the
    //       UI behaves like a real form.
    setState("submitted");
  }

  if (state === "submitted") {
    return (
      <div
        className="mt-8 card rounded-2xl p-6"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-lg font-bold">Thank you.</h3>
        <p className="mt-2 text-sm text-neutral-500">
          We received your inquiry and will reply within one business day. For
          urgent matters, reach a founder on LinkedIn.
        </p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="mt-8 card rounded-2xl p-6" role="alert">
        <h3 className="font-display text-lg font-bold">Something went wrong.</h3>
        <p className="mt-2 text-sm text-neutral-500">
          Please try again, or reach a founder on LinkedIn directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
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
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

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
          <option value="enterprise">
            Enterprise or consortium: Hologram deployment, trust-registry engagement
          </option>
          <option value="investor">
            Investor: equity round, investor memo, data-room access
          </option>
          <option value="press">Press or analyst</option>
          <option value="hiring">Hiring: send work, not résumés</option>
          <option value="general">General inquiry</option>
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
        <div className="md:col-span-2">
          <label htmlFor="linkedin" className={LABEL}>
            LinkedIn or website{" "}
            <span className="text-neutral-500 text-xs font-normal">
              (optional)
            </span>
          </label>
          <input
            id="linkedin"
            name="linkedin"
            type="url"
            placeholder="https://…"
            className={FIELD}
          />
        </div>
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
          minLength={50}
          maxLength={4000}
          onChange={(e) => setCharCount(e.target.value.length)}
          placeholder="What are you building or evaluating, what is the question, and what timeline are you on?"
          className={FIELD}
        />
        <p className="text-xs text-neutral-500 mt-2">
          {charCount} / 4000 (min 50)
        </p>
      </div>

      <div>
        <label htmlFor="source" className={LABEL}>
          How did you hear about us{" "}
          <span className="text-neutral-500 text-xs font-normal">
            (optional)
          </span>
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
          className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 transition"
        >
          Send message
        </button>
        <span className="text-xs text-neutral-500">
          We reply within one business day. For urgent matters, reach a founder
          on LinkedIn.
        </span>
      </div>
    </form>
  );
}
