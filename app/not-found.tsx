import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brown">404</p>
      <h1 className="mt-3 font-serif text-4xl">This page is not on the site.</h1>
      <p className="mt-4 max-w-xl text-muted">The link may be out of date. The homepage still has the product story.</p>
      <div className="mt-8">
        <ButtonLink href="/">Back to Home</ButtonLink>
      </div>
    </Container>
  );
}
