import localFont from "next/font/local";

/**
 * Fonts are stored in the project (assets/fonts) instead of being downloaded
 * from Google at build time. This means a build never fails because of a
 * network problem, and the browser never contacts Google.
 *
 * English text uses Geist. Bangla text uses Noto Sans Bengali.
 * The browser picks the right font for each character on its own, so a
 * sentence that mixes Bangla and English displays correctly.
 */
export const fontEnglish = localFont({
  src: "../assets/fonts/geist-latin.woff2",
  variable: "--font-english",
  weight: "100 900",
  display: "swap",
});

export const fontBangla = localFont({
  src: "../assets/fonts/noto-sans-bengali-bengali.woff2",
  variable: "--font-bangla",
  weight: "100 900",
  display: "swap",
});
