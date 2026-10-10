import { Container } from "@/components/ui/container";

export function FeatureSplit({
  id,
  tone = "paper",
  reverse = false,
  compact = false,
  copy,
  media,
}: {
  id?: string;
  tone?: "paper" | "white";
  reverse?: boolean;
  compact?: boolean;
  copy: React.ReactNode;
  media: React.ReactNode;
}) {
  const padding = compact ? "py-14 lg:py-16" : "py-16 lg:py-20";
  return (
    <section id={id} className={`scroll-mt-28 ${tone === "white" ? "bg-card" : ""}`}>
      <Container className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${padding}`}>
        <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>{copy}</div>
        <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>{media}</div>
      </Container>
    </section>
  );
}
