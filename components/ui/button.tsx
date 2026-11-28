import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "secondary" | "ghost";
type Size = "md" | "lg";

type StyleOptions = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
};

const baseStyles =
  "inline-flex select-none items-center justify-center gap-2 rounded-control text-center font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<Variant, string> = {
  // Main action on a page. Use once per area.
  primary: "bg-brand text-white hover:bg-brand-hover",
  // Strong call to action, such as "Enroll". Use sparingly.
  accent: "bg-accent text-white hover:bg-accent-hover",
  // Second choice next to a primary button.
  secondary:
    "border-2 border-brand bg-white text-brand hover:bg-periwinkle-100",
  // Low-key action, such as "Cancel".
  ghost: "text-brand hover:bg-periwinkle-100",
};

// Both sizes are at least 44px tall, the minimum comfortable size for a thumb.
const sizeStyles: Record<Size, string> = {
  md: "min-h-11 px-5 text-base",
  lg: "min-h-12 px-6 text-lg",
};

/** Class names for a button. Also useful to make a link look like a button. */
export function buttonStyles({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: StyleOptions = {}): string {
  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className,
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & StyleOptions;

/** A button that does something on the page, such as submit a form. */
export function Button({
  variant,
  size,
  fullWidth,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, fullWidth, className })}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & StyleOptions;

/** A link that looks like a button. Use it to go to another page. */
export function ButtonLink({
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={buttonStyles({ variant, size, fullWidth, className })}
      {...props}
    />
  );
}
