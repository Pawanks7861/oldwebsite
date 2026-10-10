import { ArrowRight } from "lucide-react";
import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { SampleFigure } from "@/components/mockups/sample-figure";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="hero-wash border-b border-line">
      <Container className="grid items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-12">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brown">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Catering management software
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.08] tracking-tight text-balance text-brown sm:text-5xl">
            Managing Catering, Your Way.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            Manage events, menus, inventory, purchases, staff, quotations, payments and profitability from one organised
            catering management platform.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/request-demo">
              Request a Demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/features" variant="secondary">
              Explore Features
            </ButtonLink>
          </div>
        </div>
        <SampleFigure label="Illustrative dashboard for the fictional Sharma Wedding Reception. Not a live account.">
          <DashboardMockup />
        </SampleFigure>
      </Container>
    </section>
  );
}
