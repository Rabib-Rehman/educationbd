/**
 * Joins class names and skips empty values.
 * Example: cn("p-4", isActive && "font-bold") -> "p-4 font-bold"
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a price in Bangladeshi Taka.
 * Example: formatPrice(1500) -> "৳1,500" (0 -> "Free")
 */
export function formatPrice(amount: number): string {
  if (amount <= 0) return "Free";
  return `৳${new Intl.NumberFormat("en-US").format(amount)}`;
}
