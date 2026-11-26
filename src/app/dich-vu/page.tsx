import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Cho thuê máy cuốc, san lấp mặt bằng, phá dỡ – đục bê tông, làm đường và lắp đặt cống tại Thiên Ân.",
};

export default async function DichVuPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        title="Dịch vụ"
        description="Chuyên nhận thi công – Cho thuê máy. Tư vấn nhanh, triển khai đúng tiến độ."
      />
      <section className="section-pad">
        <div className="container-page space-y-16">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.04}>
              <article
                id={service.slug}
                className="grid items-center gap-8 scroll-mt-24 md:grid-cols-2"
              >
                <div className={`relative aspect-[16/10] overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold text-navy">{service.title}</h2>
                  <p className="mt-2 text-brand">{service.summary}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">{service.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
