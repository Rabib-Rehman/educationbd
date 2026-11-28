import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

/** Shown when a page does not exist. */
export default function NotFound() {
  return (
    <main className="flex flex-1 items-center py-16">
      <Container className="max-w-xl">
        <Card className="text-center">
          <h1 className="text-2xl md:text-3xl">Page not found</h1>
          <p className="mt-3 text-muted">
            This page does not exist or has moved.
          </p>
          <div className="mt-6">
            <ButtonLink href="/">Go to home</ButtonLink>
          </div>
        </Card>
      </Container>
    </main>
  );
}
