import type { Metadata } from "next";
import {
  SITE_NAME,
  OG_IMAGE,
  OG_IMAGE_ALT,
} from "./site";

/**
 * Build a complete per-page Metadata object.
 *
 * Why this exists: Next.js merges `openGraph` and `twitter` by REPLACING
 * the whole object, not by merging fields. A page that only sets
 * `openGraph: { title, description }` silently loses the root layout's
 * `og:image`, and a page that sets `twitter: { title }` loses
 * `twitter:card: summary_large_image` and `twitter:image`. This helper
 * returns the full set of fields for every page so nothing is dropped.
 *
 * Relative URLs (for canonical, og:url) are resolved against
 * `metadataBase` (set on the root layout to https://hologram.zone).
 *
 * @param title        Short label used for `<title>` and OG/Twitter title.
 *                     Suffixed with " · Hologram" via the layout template
 *                     unless `absoluteTitle` is true.
 * @param description  Short (≤ 155 chars) description used everywhere.
 * @param path         Canonical path starting with "/". Used for canonical
 *                     and og:url.
 * @param absoluteTitle  If true, skip the " · Hologram" suffix (for the
 *                       home page, whose site-level title is already
 *                       fully qualified).
 */
export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} · Hologram`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title: socialTitle,
      description,
      locale: "en_US",
      images: [
        { url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
