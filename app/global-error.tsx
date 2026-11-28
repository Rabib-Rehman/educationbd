"use client"; // Error screens must be Client Components.

import "./globals.css";
import { fontBangla, fontEnglish } from "@/lib/fonts";
import { Button } from "@/components/ui/button";

/**
 * Last safety net. Shown only if the whole page frame (the root layout) breaks.
 * It must include its own <html> and <body>, and its own styles and fonts.
 */
export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html
      lang="en"
      className={`${fontEnglish.variable} ${fontBangla.variable} h-full antialiased`}
    >
      <body className="grid min-h-full place-items-center px-4 text-center">
        <div>
          <h1 className="text-2xl md:text-3xl">Something went wrong</h1>
          <p className="mt-3 text-muted">Please try again.</p>
          <div className="mt-6">
            <Button onClick={() => retry()}>Try again</Button>
          </div>
        </div>
      </body>
    </html>
  );
}
