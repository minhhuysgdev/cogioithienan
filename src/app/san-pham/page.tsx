import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { getProducts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Danh mục máy và thiết bị cơ giới cho thuê tại Thiên Ân.",
};

export default async function SanPhamPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        title="Sản phẩm"
        description="Máy thi công và thiết bị phục vụ san lấp, đào đắp, phá dỡ."
      />
      <section className="section-pad">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.05}>
              <Link href={`/san-pham/${product.slug}`} className="group block">
                <div className="relative mb-4 aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-xs font-semibold tracking-wide text-brand uppercase">
                  {product.category}
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-navy group-hover:text-brand">
                  {product.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{product.summary}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
