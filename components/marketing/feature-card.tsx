import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <article className="brand-card flex h-full flex-col rounded-2xl border border-line bg-card p-5">
      <span className="grid size-10 place-items-center rounded-full bg-gold-soft text-brown">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-brown">{title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex w-fit cursor-pointer items-center gap-1 text-sm font-semibold text-brown hover:text-brown-rich"
      >
        Learn More
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
