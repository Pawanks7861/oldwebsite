import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/features",
    "/solutions",
    "/how-it-works",
    "/successful-events",
    "/about",
    "/faq",
    "/contact",
    "/request-demo",
    "/privacy",
    "/terms",
  ];
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-10-09"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
