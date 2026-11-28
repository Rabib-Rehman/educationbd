import type { ReactNode } from "react";

type FieldProps = {
  /** The visible name of the field. Keep it short. */
  label: string;
  /** Must match the id of the input inside. */
  htmlFor: string;
  /** Optional help text shown under the label. */
  hint?: string;
  /** Error message. When set, it is shown in red under the field. */
  error?: string;
  children: ReactNode;
};

/**
 * A label, optional hint and error message around one input.
 * Put an <Input id="..."> inside, using the same id as htmlFor.
 */
export function Field({ label, htmlFor, hint, error, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="block text-base font-medium">
        {label}
      </label>
      {hint ? <p className="text-sm text-muted">{hint}</p> : null}
      {children}
      {error ? (
        <p role="alert" className="text-sm font-medium text-danger-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
