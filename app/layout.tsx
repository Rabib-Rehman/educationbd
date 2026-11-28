import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontBangla, fontEnglish } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Education Bangladesh",
  description: "Education Bangladesh is Coming Soon",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Colors the browser bar on phones with the brand navy.
  themeColor: "#27254c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontEnglish.variable} ${fontBangla.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
