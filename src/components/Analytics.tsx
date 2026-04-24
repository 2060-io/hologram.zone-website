"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/site";
import { EVENT_NAME, type ConsentValue, readStoredConsent } from "@/lib/consent";

/**
 * Google Analytics 4 loader, gated on explicit user consent.
 *
 * Nothing is loaded until the user clicks "OK" in the cookie-consent
 * banner. We subscribe to the shared `hologram:cookie-consent-change`
 * event so the scripts mount without a reload once consent is granted,
 * and unmount immediately if consent is revoked in-session.
 *
 * IPs are anonymised (`anonymize_ip: true`) and we do not enable ad
 * personalisation. Loaded with `afterInteractive` so it never blocks
 * paint; `gtag` calls made before the script arrives are queued on
 * `dataLayer` and replayed automatically.
 */
export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(readStoredConsent() === "accepted");

    function handleChange(e: Event) {
      const detail = (e as CustomEvent<ConsentValue>).detail;
      setConsented(detail === "accepted");
    }
    window.addEventListener(EVENT_NAME, handleChange as EventListener);
    return () => window.removeEventListener(EVENT_NAME, handleChange as EventListener);
  }, []);

  if (!GA_MEASUREMENT_ID || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
      `}</Script>
    </>
  );
}
