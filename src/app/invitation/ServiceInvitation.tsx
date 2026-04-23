"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

type InvitationPayload = {
  label?: string;
  service?: string;
  imageUrl?: string;
  image_url?: string;
  type?: string;
  "@type"?: string;
  services?: string[];
  handshake_protocols?: string[];
  accept?: string[];
};

type DeviceType = "mobile" | "tablet" | "desktop";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                 */
/* -------------------------------------------------------------------------- */

// Deep-link scheme that hands the original query string off to the Hologram
// mobile app. Preserved verbatim from the legacy Hugo site so existing
// invitations keep working.
const DIDCOMM_URL = "didcomm://aries_proof-request";
const DIDCOMM_V2_TYPE = "https://didcomm.org/out-of-band/2.0/invitation";

// The old site used api.qrserver.com to render the QR on-demand; we keep the
// same service so the rendered page matches pixel-for-pixel.
const QR_ENDPOINT = "https://api.qrserver.com/v1/create-qr-code/?size=315x315";

/* -------------------------------------------------------------------------- */
/*  Pure helpers                                                              */
/* -------------------------------------------------------------------------- */

function detectDevice(): DeviceType {
  if (typeof navigator === "undefined") return "desktop";
  const ua = (navigator.userAgent || "").toLowerCase();
  if (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/.test(ua))
    return "mobile";
  if (/tablet|ipad|playbook|silk/.test(ua)) return "tablet";
  return "desktop";
}

/**
 * Decode a base64url (RFC 4648 §5) string to UTF-8. Returns null on any
 * malformed input so callers can surface a friendly error rather than
 * throwing deep inside React.
 */
function decodeBase64Url(value: string): string | null {
  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(
      normalized.length + ((4 - (normalized.length % 4)) % 4),
      "=",
    );
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
    return new TextDecoder("utf-8").decode(bytes);
  } catch {
    return null;
  }
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function ServiceInvitation() {
  const searchParams = useSearchParams();

  const oob = searchParams?.get("oob") ?? searchParams?.get("_oob") ?? null;
  const encodedUrl = searchParams?.get("_url") ?? null;
  const queryString = searchParams?.toString() ?? "";

  const [device, setDevice] = useState<DeviceType>("desktop");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [payload, setPayload] = useState<InvitationPayload | null>(null);
  const [qrTarget, setQrTarget] = useState("");

  const didcommHref = useMemo(
    () => (queryString ? `${DIDCOMM_URL}?${queryString}` : DIDCOMM_URL),
    [queryString],
  );

  /* ---------- capture the user's environment on mount --------------------- */

  useEffect(() => {
    setDevice(detectDevice());
    // The QR needs the full URL (including query) that a phone should land
    // on; it's the same URL the user already has open, so build it from
    // `window.location` which is stable post-hydration.
    setQrTarget(
      window.location.origin + window.location.pathname + window.location.search,
    );
  }, []);

  /* ---------- mobile: auto-trigger the DIDComm deep link ------------------ */

  useEffect(() => {
    if (device !== "mobile" || !oob) return;
    // Short delay matches the legacy site and gives Safari a chance to start
    // rendering this page before we try to hand off to the Hologram app.
    const t = window.setTimeout(() => {
      try {
        window.location.href = didcommHref;
      } catch (e) {
        console.warn("Failed to trigger DIDComm redirect", e);
      }
    }, 150);
    return () => window.clearTimeout(t);
  }, [device, oob, didcommHref]);

  /* ---------- resolve the payload (inline oob or fetched _url) ------------ */

  useEffect(() => {
    let cancelled = false;

    async function resolve() {
      if (!oob && !encodedUrl) {
        setError("No invitation payload was found in this link.");
        setLoading(false);
        return;
      }

      try {
        if (oob) {
          const decoded = decodeBase64Url(oob);
          if (!decoded)
            throw new Error("Could not decode the invitation payload.");
          const parsed = JSON.parse(decoded) as InvitationPayload;
          if (!cancelled) {
            setPayload(parsed);
            setLoading(false);
          }
          return;
        }

        if (encodedUrl) {
          const decodedUrl = decodeBase64Url(encodedUrl);
          if (!decodedUrl) throw new Error("The invitation URL is not valid.");
          const resp = await fetch(decodedUrl, {
            credentials: "omit",
            cache: "no-store",
          });
          if (!resp.ok)
            throw new Error(
              "Could not retrieve the invitation from its source.",
            );
          const parsed = (await resp.json()) as InvitationPayload;
          if (!cancelled) {
            setPayload(parsed);
            setLoading(false);
          }
        }
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error
              ? e.message
              : "Unable to open this invitation link.",
          );
          setLoading(false);
        }
      }
    }

    resolve();
    return () => {
      cancelled = true;
    };
  }, [oob, encodedUrl]);

  /* ---------- derived render data ---------------------------------------- */

  const label = payload?.label || payload?.service || "Hologram Service";
  const imageUrl =
    payload?.imageUrl || payload?.image_url || "/images/ico-hologram.png";
  const invitationType = (payload?.type || payload?.["@type"] || "").trim();
  const services = Array.isArray(payload?.services) ? payload!.services! : [];
  const protocols = Array.from(
    new Set([
      ...(Array.isArray(payload?.handshake_protocols)
        ? payload!.handshake_protocols!
        : []),
      ...(Array.isArray(payload?.accept) ? payload!.accept! : []),
    ]),
  ).filter(Boolean);
  const isDidcommV2 = invitationType === DIDCOMM_V2_TYPE;

  /* ---------- render ----------------------------------------------------- */

  return (
    <section className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">
          Service Invitation
        </span>
        <h1 className="font-display h-display-sm mt-4">
          You&rsquo;ve been <span className="gradient-text">invited</span>
        </h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">
          Connect to this service only if you trust it.
        </p>
      </div>

      {loading && (
        <div className="card rounded-2xl p-10 text-center">
          <div className="inline-block w-10 h-10 border-4 border-brand-500/25 border-t-brand-500 rounded-full animate-spin" />
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Preparing your invitation&hellip;
          </p>
        </div>
      )}

      {!loading && error && (
        <div className="rounded-2xl p-6 border border-red-300/70 bg-red-50 dark:bg-red-900/15">
          <h2 className="font-display text-lg font-bold text-red-700 dark:text-red-300">
            We couldn&rsquo;t open this invitation
          </h2>
          <p className="mt-2 text-red-600 dark:text-red-300">{error}</p>
        </div>
      )}

      {!loading && !error && payload && (
        <div className="space-y-6">
          {/* service banner */}
          <div className="card rounded-2xl p-6 flex items-center gap-6">
            <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 shadow-sm flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={`${label} avatar`}
                className="w-16 h-16 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-2xl font-bold break-words">
                {label}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 text-xs font-semibold">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Verified service
              </span>
            </div>
          </div>

          {/* desktop/tablet: scan-to-continue QR */}
          {device !== "mobile" && (
            <div className="card rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="font-display text-xl font-bold">
                  Scan to continue
                </h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                  The credential of this service is valid.{" "}
                  <strong>
                    Continue on your mobile phone by scanning this QR.
                  </strong>
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-white p-5 rounded-2xl shadow-lg border-2 border-brand-500/25">
                  <div className="w-52 h-52 md:w-60 md:h-60 bg-neutral-100 rounded-xl flex items-center justify-center">
                    {qrTarget && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={`${QR_ENDPOINT}&data=${encodeURIComponent(qrTarget)}`}
                        alt="QR code to continue this invitation on mobile"
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* mobile: big tap-to-open button */}
          {device === "mobile" && (
            <div className="card rounded-2xl p-6 md:p-8 text-center">
              <p className="text-xs uppercase tracking-widest font-semibold text-brand-600 dark:text-brand-400 mb-3">
                Open with Hologram
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Tap to open <strong>{label}</strong> in Hologram.
              </p>
              <a
                href={didcommHref}
                className="inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg px-6 py-4 rounded-2xl shadow-lg transition-colors"
              >
                {isDidcommV2 ? "Continue with this service" : "Open in Hologram"}
              </a>
            </div>
          )}

          {/* details */}
          <div className="card rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-xl font-bold mb-5">
              Invitation details
            </h2>
            <dl className="space-y-4">
              <Row term="Service" value={label} />
              <Row term="Service DID" value={services[0] ?? "—"} />
              <Row
                term="Supported protocols"
                value={protocols.length ? protocols.join(", ") : "—"}
              />
              <Row term="Invitation type" value={invitationType || "—"} />
            </dl>
          </div>
        </div>
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Small presentational helpers                                              */
/* -------------------------------------------------------------------------- */

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-white/5">
      <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-500 flex-shrink-0" />
      <div className="min-w-0 flex-1">
        <dt className="font-semibold text-neutral-900 dark:text-white mb-1">
          {term}
        </dt>
        <dd className="text-sm text-neutral-600 dark:text-neutral-300 font-mono break-all">
          {value}
        </dd>
      </div>
    </div>
  );
}
