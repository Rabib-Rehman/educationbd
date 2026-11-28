"use client"; // Error screens must be Client Components.

import { useEffect } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

/**
 * Shown when something breaks inside a page.
 * The rest of the site (header, footer) stays in place, so the visitor
 * is never left with a broken or blank screen.
 */
export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    // Later phases can send this to an error tracking service.
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 items-center py-16">
      <Container className="max-w-xl">
        <Card className="text-center">
          <h1 className="text-2xl md:text-3xl">Something went wrong</h1>
          <p className="mt-3 text-muted">Please try again.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={() => retry()}>Try again</Button>
            <ButtonLink href="/" variant="secondary">
              Go to home
            </ButtonLink>
          </div>
        </Card>
      </Container>
    </main>
  );
}
