import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export type NavItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  links: NavItem[];
  /** The page the visitor is on, so its link can be highlighted. */
  currentPath?: string;
  /** Buttons on the right, such as Login. */
  actions?: ReactNode;
};

const linkStyles =
  "inline-flex min-h-11 items-center rounded-control px-3 text-base font-medium text-ink transition-colors hover:bg-periwinkle-100";

function NavLinks({
  links,
  currentPath,
  vertical,
}: Pick<SiteHeaderProps, "links" | "currentPath"> & { vertical?: boolean }) {
  return (
    <ul className={cn("flex gap-1", vertical && "flex-col")}>
      {links.map((link) => {
        const isCurrent = link.href === currentPath;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={isCurrent ? "page" : undefined}
              className={cn(
                linkStyles,
                vertical && "w-full",
                isCurrent && "bg-periwinkle-100 font-semibold",
              )}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Top bar with the logo and main links.
 * Desktop: links sit in a row. Phone and tablet: links open from a Menu button.
 * The Menu button uses plain HTML (<details>), so it works even if JavaScript fails.
 */
export function SiteHeader({ links, currentPath, actions }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks links={links} currentPath={currentPath} />
        </nav>

        {actions ? (
          <div className="hidden items-center gap-2 lg:flex">{actions}</div>
        ) : null}

        <details className="group relative lg:hidden">
          <summary className="inline-flex min-h-11 cursor-pointer list-none items-center rounded-control border-2 border-brand px-4 text-base font-semibold text-brand [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-full z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] space-y-2 rounded-card border border-line bg-surface p-2 shadow-raised">
            <nav aria-label="Main mobile">
              <NavLinks links={links} currentPath={currentPath} vertical />
            </nav>
            {actions ? (
              <div className="flex flex-col gap-2 border-t border-line pt-2">
                {actions}
              </div>
            ) : null}
          </div>
        </details>
      </Container>
    </header>
  );
}
