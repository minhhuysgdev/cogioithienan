import { BRAND, SITE } from "@/lib/constants";

export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cogioithienan.vn";

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    url: siteUrl,
    telephone: SITE.hotline,
    email: SITE.email,
    image: `${siteUrl}${BRAND.logo}`,
    slogan: SITE.slogan,
    areaServed: "VN",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
