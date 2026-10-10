import Image from "next/image";
import { siteConfig } from "@/lib/constants";

export function Logo({
  size = "nav",
  priority = false,
}: {
  size?: "nav" | "footer" | "mark";
  priority?: boolean;
}) {
  const frame =
    size === "nav"
      ? "h-12 w-auto sm:h-14"
      : size === "footer"
        ? "h-28 w-auto sm:h-32"
        : "h-16 w-auto";

  return (
    <Image
      src={siteConfig.logo}
      alt={`${siteConfig.name}. ${siteConfig.tagline}`}
      width={1024}
      height={1024}
      priority={priority}
      className={`${frame} max-w-none object-contain`}
    />
  );
}
