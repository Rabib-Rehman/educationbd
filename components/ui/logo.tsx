import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  /** Width and height of the round logo, in pixels. */
  size?: number;
  /** Show the site name next to the logo. */
  showName?: boolean;
};

/** The EducationBd logo. Links to the home page. */
export function Logo({ size = 40, showName = true }: LogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 items-center gap-3 rounded-control"
      aria-label={showName ? undefined : `${siteConfig.name} home`}
    >
      <Image
        src="/brand-logo.png"
        // The name next to the logo already says it, so the image stays silent.
        alt={showName ? "" : `${siteConfig.name} logo`}
        width={size}
        height={size}
        sizes={`${size}px`}
        className="shrink-0 rounded-full border-2 border-white shadow-card"
      />
      {showName ? (
        <span className="text-lg font-bold text-ink">{siteConfig.name}</span>
      ) : null}
    </Link>
  );
}
