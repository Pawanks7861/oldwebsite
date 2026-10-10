import Link from "next/link";

const variants = {
  primary: "bg-brown text-ivory hover:bg-brown-rich active:bg-brown-rich",
  secondary: "border border-line bg-card text-ink hover:border-gold hover:bg-gold-soft active:bg-gold-soft",
  gold: "bg-gold text-brown hover:bg-gold-light active:bg-gold-light",
  inverse: "border border-gold/40 text-ivory hover:bg-white/10 active:bg-white/15",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
