import { Container } from "@/components/ui/container";

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line bg-card">
      <Container className="py-12 sm:py-16 lg:py-24">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brown">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight text-balance text-brown sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p>
        {actions ? <div className="mt-6 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
      </Container>
    </header>
  );
}
