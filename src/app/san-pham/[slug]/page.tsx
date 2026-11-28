import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { getProduct, getProducts } from "@/lib/content";
import { SITE, telHref } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  const path = `/san-pham/${slug}`;
  if (!product) {
    return {
      title: "Sản phẩm",
      alternates: { canonical: path },
      openGraph: { url: path },
    };
  }
  return {
    title: product.title,
    description: product.summary,
    alternates: { canonical: path },
    openGraph: { url: path },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <PageHero title={product.title} description={product.summary} />
      <section className="section-pad">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-brand uppercase">
              {product.category}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={telHref()}
                className="inline-flex min-h-11 items-center rounded-md bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-bright"
              >
                Gọi thuê máy {SITE.hotlineDisplay}
              </a>
              <Link
                href="/lien-he"
                className="inline-flex min-h-11 items-center rounded-md border border-line px-5 text-sm font-semibold text-navy hover:bg-white"
              >
                Nhận báo giá
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
