type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  tone = "default",
}: SectionHeadingProps) {
  const Tag = as;
  const alignClass = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";
  const titleColor = tone === "inverse" ? "text-ivory" : "text-brown";
  const bodyColor = tone === "inverse" ? "text-[#f3e6d4]" : "text-muted";
  const eyebrowColor = tone === "inverse" ? "text-gold-light" : "text-brown";
  const rule = tone === "inverse" ? "bg-gold-light" : "bg-gold";
  const centered = align === "center";

  return (
    <div className={alignClass}>
      {eyebrow ? (
        <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] ${eyebrowColor} ${centered ? "justify-center" : ""}`}>
          <span className={`h-px w-8 ${rule}`} aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`${eyebrow ? "mt-3" : ""} font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl ${titleColor}`}
      >
        {title}
      </Tag>
      {description ? <p className={`mt-4 text-base leading-7 sm:text-lg ${bodyColor}`}>{description}</p> : null}
    </div>
  );
}
