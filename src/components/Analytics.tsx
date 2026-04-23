import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Google Analytics 4 loader. Uses IP anonymisation and does NOT enable
 * ad personalisation. Loaded with Next's `afterInteractive` strategy so it
 * does not block the main thread.
 */
export default function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;

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
