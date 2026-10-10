import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function CtaSection({
  primaryHref = "/request-demo",
  primaryLabel = "Request a Demo",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
}: {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-brown text-ivory">
      <Container className="py-14 text-center lg:py-16">
        <p className="mx-auto flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          Rasoyaa
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
          Ready to Manage Catering, Your Way?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#f3e6d4]">
          See how Rasoyaa can bring your events, menus, inventory, purchases, team and finances together.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={primaryHref} variant="gold">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink href={secondaryHref} variant="inverse">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
