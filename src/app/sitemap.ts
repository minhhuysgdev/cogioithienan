import type { MetadataRoute } from "next";
import { getPillarServices, getPosts, getProducts, getProjects } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cogioithienan.vn";
  const [products, projects, posts, pillars] = await Promise.all([
    getProducts(),
    getProjects(),
    getPosts(),
    getPillarServices(),
  ]);

  const staticRoutes = ["", "/dich-vu", "/san-pham", "/cong-trinh", "/tin-tuc", "/lien-he"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  return [
    ...staticRoutes,
    ...pillars.map((s) => ({
      url: `${siteUrl}/dich-vu/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...products.map((p) => ({
      url: `${siteUrl}/san-pham/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...projects.map((p) => ({
      url: `${siteUrl}/cong-trinh/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: `${siteUrl}/tin-tuc/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
