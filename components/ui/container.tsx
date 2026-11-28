import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Keeps page content centered with a comfortable width and side spacing.
 * 16px on phones, 24px on tablets, 32px on desktops. Max width 1152px.
 */
export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
