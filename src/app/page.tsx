import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoShowcase } from "@/components/VideoShowcase";
import { BRAND, PHOTOS, SITE } from "@/lib/constants";
import { getServices } from "@/lib/content";
import { STATS } from "@/lib/seed";

export default async function HomePage() {
  const services = await getServices();

  return (
    <>
      <Hero />

      <section className="section-pad">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="01 / Giới thiệu"
              title={SITE.name}
              description={SITE.description}
            />
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{SITE.intro}</p>
            <p className="mt-3 text-sm font-semibold text-navy italic">{SITE.slogan}</p>
            <a
              href={BRAND.profilePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center rounded-md border border-line bg-surface px-4 text-sm font-semibold text-navy transition hover:border-brand hover:text-brand"
            >
              Tải hồ sơ năng lực (PDF)
            </a>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={PHOTOS.excavators}
                alt="Máy cuốc Cơ Giới Thiên Ân"
                fill
                quality={70}
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 45vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad border-t border-line bg-surface/70">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="02 / Dịch vụ"
              title="Giải pháp cơ giới & thi công"
              description="Danh mục dịch vụ theo hồ sơ năng lực doanh nghiệp. Phạm vi, khối lượng và tiến độ thống nhất trước khi triển khai."
            />
          </FadeIn>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.04}>
                <Link href={`/dich-vu#${service.slug}`} className="group block">
                  <div className="relative mb-4 aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      quality={65}
                      loading="lazy"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-xs font-semibold tracking-wide text-brand uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy group-hover:text-brand">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.06} className="text-center md:text-left">
              <p className="font-display text-3xl font-extrabold text-brand md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <VideoShowcase />

      <CtaBand />
    </>
  );
}
