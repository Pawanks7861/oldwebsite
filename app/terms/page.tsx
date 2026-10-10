import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the public Rasoyaa informational website.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Terms"
        title="Terms of use"
        description="These terms apply to this informational website. They do not create a software subscription."
      />
      <Container className="max-w-3xl space-y-5 py-14 text-base leading-7 text-muted lg:py-16">
        <p>
          The pages describe Rasoyaa, a catering operations product, and the problems it is designed to address.
          Sample events, amounts, menus and screens are fictional illustrations.
        </p>
        <p>
          Requesting a demo on this website does not create an account, a booking or a contract. The form does not
          deliver your details until a contact method is connected.
        </p>
        <p>
          Product behaviour described here is the intended shape of Rasoyaa. A demonstration is the right place to
          confirm what is available for your business.
        </p>
        <p>
          Contact{" "}
          <a className="font-medium text-brown" href={siteConfig.contact.emailHref}>
            {siteConfig.contact.email}
          </a>{" "}
          about this website.
        </p>
      </Container>
    </>
  );
}
