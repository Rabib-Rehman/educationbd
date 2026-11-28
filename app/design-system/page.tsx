import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Field } from "@/components/ui/field";
import { Input, Textarea } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

// Class names are written out in full so Tailwind can find them.
const brandColors = [
  { name: "navy-950", hex: "#1B1A38", swatch: "bg-navy-950" },
  { name: "navy-900", hex: "#27254C", swatch: "bg-navy-900" },
  { name: "navy-800", hex: "#34325F", swatch: "bg-navy-800" },
  { name: "navy-700", hex: "#4D486E", swatch: "bg-navy-700" },
  { name: "periwinkle-500", hex: "#9FA5D5", swatch: "bg-periwinkle-500" },
  { name: "periwinkle-400", hex: "#B4B9E0", swatch: "bg-periwinkle-400" },
  { name: "periwinkle-300", hex: "#C9CDE9", swatch: "bg-periwinkle-300" },
  { name: "periwinkle-200", hex: "#DDE0F2", swatch: "bg-periwinkle-200" },
  { name: "periwinkle-100", hex: "#ECEEF8", swatch: "bg-periwinkle-100" },
  { name: "periwinkle-50", hex: "#F6F7FC", swatch: "bg-periwinkle-50" },
  { name: "orange-500", hex: "#E76146", swatch: "bg-orange-500" },
  { name: "orange-600", hex: "#C4452A", swatch: "bg-orange-600" },
  { name: "orange-700", hex: "#A93A22", swatch: "bg-orange-700" },
  { name: "orange-100", hex: "#FCE9E3", swatch: "bg-orange-100" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "All Courses" },
  { href: "/free-courses", label: "Free Courses" },
  { href: "/paid-courses", label: "Paid Courses" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5 py-10 md:py-12">
      <div className="space-y-1">
        <h2>{title}</h2>
        {note ? <p className="text-muted">{note}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  // Hide this page on the real website. It still shows on preview deployments
  // and on your own computer.
  if (process.env.VERCEL_ENV === "production") {
    notFound();
  }

  return (
    <>
      <SiteHeader
        links={navLinks}
        currentPath="/"
        actions={
          <>
            <ButtonLink href="/login" variant="ghost">
              Login
            </ButtonLink>
            <ButtonLink href="/register">Register</ButtonLink>
          </>
        }
      />

      <main className="flex-1">
        <Container className="divide-y divide-line">
          <div className="space-y-2 py-10 md:py-12">
            <h1>Design system</h1>
            <p className="max-w-2xl text-lg text-muted">
              Colors, text, buttons and forms for EducationBd. This page is for
              the team. It is hidden on the live website.
            </p>
          </div>

          <Section
            title="Colors"
            note="All colors come from the logo: navy, periwinkle and orange."
          >
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {brandColors.map((color) => (
                <li key={color.name} className="min-w-0">
                  <div
                    className={`h-16 rounded-control border border-line ${color.swatch}`}
                  />
                  <p className="mt-2 text-sm font-medium">{color.name}</p>
                  <p className="text-sm text-muted">{color.hex}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section
            title="Headings and text"
            note="English uses Geist. Bangla uses Noto Sans Bengali. Both can be in one line."
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="space-y-4">
                <p className="text-sm font-medium text-muted">English</p>
                <h1>Heading 1: Admission Course</h1>
                <h2>Heading 2: Physics and Chemistry</h2>
                <h3>Heading 3: Live class schedule</h3>
                <h4>Heading 4: Class notes</h4>
                <p>
                  Body text. Learn at your own pace and prepare for your
                  university admission test with clear lessons.
                </p>
                <p className="text-sm text-muted">
                  Small text. Used for hints and dates.
                </p>
              </Card>

              <Card className="space-y-4">
                <p className="text-sm font-medium text-muted">Bangla</p>
                <h1>বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি</h1>
                <h2>পদার্থবিজ্ঞান ও রসায়ন কোর্স</h2>
                <h3>দৃষ্টিভঙ্গি, শ্রেষ্ঠ ও ক্ষুদ্র</h3>
                <h4>ক্লাসের নোট ও রুটিন</h4>
                <p>
                  এই কোর্সে তুমি ধাপে ধাপে ভর্তি পরীক্ষার প্রস্তুতি নিতে পারবে।
                  প্রতিটি ক্লাসের ভিডিও, নোট এবং অনুশীলনী এখানে পাবে। ১২৩৪৫৬৭৮৯০
                </p>
                <p className="text-sm text-muted">
                  ছোট লেখা। তারিখ ও সংকেত দেখানোর জন্য।
                </p>
              </Card>
            </div>

            <Card className="space-y-3">
              <p className="text-sm font-medium text-muted">
                Mixed Bangla and English in one line
              </p>
              <h3>HSC Physics ২০২৭ — পদার্থবিজ্ঞান Admission Batch</h3>
              <p>
                Course fee: {formatPrice(1500)} · কোর্স ফি: {formatPrice(1500)} ·{" "}
                {formatPrice(0)}
              </p>
            </Card>
          </Section>

          <Section
            title="Buttons"
            note="Every button is at least 44px tall, so it is easy to tap."
          >
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="accent">Enroll now</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button disabled>Disabled</Button>
              <Button size="lg">Large</Button>
              <ButtonLink href="/courses" variant="secondary">
                Link button
              </ButtonLink>
            </div>
          </Section>

          <Section
            title="Forms"
            note="Text is 16px so phones do not zoom in when a field is tapped."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="space-y-4">
                <Field label="Full name" htmlFor="demo-name">
                  <Input id="demo-name" placeholder="Your name" />
                </Field>
                <Field
                  label="Phone number"
                  htmlFor="demo-phone"
                  hint="The number you will use for bKash."
                >
                  <Input
                    id="demo-phone"
                    inputMode="tel"
                    placeholder="01XXXXXXXXX"
                  />
                </Field>
                <Field label="Message" htmlFor="demo-message">
                  <Textarea id="demo-message" placeholder="Write here" />
                </Field>
                <Button fullWidth>Send</Button>
              </Card>

              <Card className="space-y-4">
                <p className="text-sm font-medium text-muted">Error state</p>
                <Field
                  label="Transaction ID"
                  htmlFor="demo-trx"
                  error="Enter your transaction ID."
                >
                  <Input id="demo-trx" invalid aria-describedby="demo-trx" />
                </Field>
                <Field label="Locked field" htmlFor="demo-locked">
                  <Input id="demo-locked" disabled defaultValue="Cannot edit" />
                </Field>
              </Card>
            </div>
          </Section>

          <Section
            title="Cards, borders and shadows"
            note="Small corners, thin borders, soft shadows."
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-card border border-line bg-surface p-5">
                Border only
              </div>
              <Card>Card shadow</Card>
              <div className="rounded-card bg-surface p-5 shadow-raised">
                Raised shadow
              </div>
            </div>
          </Section>

          <Section
            title="Navigation"
            note="The bar at the top of this page is the navigation. On phones and tablets, links open from the Menu button."
          >
            <p className="text-muted">
              Desktop: links in a row. Mobile: one Menu button.
            </p>
          </Section>
        </Container>
      </main>
    </>
  );
}
