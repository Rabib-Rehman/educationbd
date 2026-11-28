import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/** A white box with a thin border and a soft shadow. */
export function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        // min-w-0 stops long titles from stretching the card on small screens.
        "min-w-0 rounded-card border border-line bg-surface p-5 shadow-card sm:p-6",
        className,
      )}
      {...props}
    />
  );
}
