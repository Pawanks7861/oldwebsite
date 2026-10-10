import type { Metadata } from "next";
import { DemoForm } from "@/components/forms/demo-form";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Request a Rasoyaa Demo",
  description:
    "Request a Rasoyaa demo for your catering business. This form checks your details in the browser and does not store them.",
  path: "/request-demo",
});

const topics = [
  "How an event stays together from menu to completion",
  "Stations, dishes and a client menu PDF",
  "Inventory, purchase planning and market purchases",
  "Staff, vehicles, quotations and event profit",
];

export default function RequestDemoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Request a demo"
        title="See Rasoyaa in Action"
        description="Tell us a little about your catering business and we'll show you how Rasoyaa can fit your workflow."
      />
      <Container className="grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
        <div>
          <h2 className="font-serif text-3xl text-brown">What a walkthrough can cover</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
            {topics.map((topic) => (
              <li key={topic} className="rounded-2xl border border-line bg-card px-4 py-3">
                {topic}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-6 text-muted">
            The form checks that the details are complete. It does not send or save them yet.
          </p>
        </div>
        <DemoForm />
      </Container>
    </>
  );
}
