import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { siteConfig } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact Rasoyaa",
  description:
    "Contact Rasoyaa about catering management software. Phone, email, hours and location on this page are placeholders.",
  path: "/contact",
});

export default function ContactPage() {
  const { contact } = siteConfig;
  const details = [
    { label: "Phone", value: contact.phone, href: contact.phoneHref, icon: Phone },
    { label: "Email", value: contact.email, href: contact.emailHref, icon: Mail },
    { label: "Business Hours", value: contact.hours, href: undefined, icon: Clock },
    { label: "Location", value: contact.location, href: undefined, icon: MapPin },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's Talk About Your Catering Business"
        description="Use the details on the left, or send a message. The contact details are placeholders until real ones are added in the site configuration."
      />
      <Container className="grid gap-8 py-14 lg:grid-cols-2 lg:py-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {details.map((detail) => (
            <li key={detail.label} className="rounded-2xl border border-line bg-card p-5">
              <detail.icon className="size-5 text-brown" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-muted">{detail.label}</h2>
              {detail.href ? (
                <a href={detail.href} className="mt-2 inline-block text-lg font-medium hover:text-brown">
                  {detail.value}
                </a>
              ) : (
                <p className="mt-2 text-lg font-medium">{detail.value}</p>
              )}
            </li>
          ))}
        </ul>
        <ContactForm />
      </Container>
    </>
  );
}
