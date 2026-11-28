import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

// Text is 16px or larger so phones do not zoom in when a field is tapped.
const fieldStyles =
  "block w-full rounded-control border border-field bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-brand disabled:cursor-not-allowed disabled:bg-periwinkle-100";

type FieldControlProps = {
  /** Shows the red error style. */
  invalid?: boolean;
};

export function Input({
  invalid,
  className,
  ...props
}: ComponentPropsWithoutRef<"input"> & FieldControlProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(
        fieldStyles,
        "min-h-11",
        invalid && "border-danger-600",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  invalid,
  className,
  ...props
}: ComponentPropsWithoutRef<"textarea"> & FieldControlProps) {
  return (
    <textarea
      aria-invalid={invalid || undefined}
      className={cn(
        fieldStyles,
        "min-h-28",
        invalid && "border-danger-600",
        className,
      )}
      {...props}
    />
  );
}
