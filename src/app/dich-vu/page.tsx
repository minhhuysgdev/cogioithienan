import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { PHOTOS, SITE, telHref, zaloHref } from "@/lib/constants";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Cho thuê máy cuốc, san lấp mặt bằng, phá dỡ – đục bê tông, làm đường và lắp đặt cống tại Thiên Ân.",
  alternates: { canonical: "/dich-vu" },
  openGraph: { url: "/dich-vu" },
};

export default async function DichVuPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        title="Dịch vụ"
        description="Chuyên nhận thi công – Cho thuê máy. Tư vấn nhanh, triển khai đúng tiến độ."
        image={PHOTOS.demolition}
      />

      <nav
        aria-label="Danh mục dịch vụ"
        className="sticky top-16 z-40 border-b border-line bg-background/90 backdrop-blur-md md:top-[4.25rem]"
      >
        <div className="container-page flex gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="shrink-0 rounded-md border border-line bg-surface px-3 py-1.5 text-sm font-medium text-navy transition hover:border-brand hover:text-brand"
            >
              {service.shortTitle ?? service.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="section-pad">
        <div className="container-page space-y-16 md:space-y-20">
          {services.map((service, i) => (
            <div key={service.slug}>
              <FadeIn delay={0.04}>
                <article
                  id={service.slug}
                  className="grid items-center gap-8 scroll-mt-36 md:grid-cols-2 md:scroll-mt-40"
                >
                  <MediaFrame
                    src={service.image}
                    alt={service.title}
                    className={`mb-0 aspect-[4/3] ${i % 2 === 1 ? "md:order-2" : ""}`}
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                      {String(i + 1).padStart(2, "0")} / Dịch vụ
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-bold text-navy">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-brand">{service.summary}</p>
                    {service.highlights?.length ? (
                      <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-muted">
                        {service.highlights.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-4 text-base leading-relaxed text-muted">
                        {service.description}
                      </p>
                    )}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {service.isPillar ? (
                        <Link
                          href={`/dich-vu/${service.slug}`}
                          className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-4 text-sm font-semibold text-white transition hover:bg-brand-bright"
                        >
                          Xem chi tiết
                        </Link>
                      ) : null}
                      <a
                        href={telHref()}
                        className={`inline-flex min-h-11 items-center justify-center rounded-md px-4 text-sm font-semibold transition ${
                          service.isPillar
                            ? "border border-line bg-surface text-navy hover:border-brand hover:text-brand"
                            : "bg-brand text-white hover:bg-brand-bright"
                        }`}
                      >
                        Gọi {SITE.hotlineDisplay}
                      </a>
                      <a
                        href={zaloHref()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-surface px-4 text-sm font-semibold text-navy transition hover:border-brand hover:text-brand"
                      >
                        Nhắn Zalo
                      </a>
                    </div>
                  </div>
                </article>
              </FadeIn>

              {i === 3 ? (
                <div className="mt-16 overflow-hidden rounded-2xl bg-navy px-6 py-8 text-white md:mt-20 md:px-8">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-xl">
                      <p className="text-xs font-semibold tracking-[0.18em] text-brand-bright uppercase">
                        Báo giá nhanh
                      </p>
                      <p className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
                        Cần tư vấn hạng mục đang xem?
                      </p>
                      <p className="mt-2 text-sm text-white/75 md:text-base">
                        Gọi hotline hoặc gửi yêu cầu — phản hồi nhanh theo phạm vi công việc.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={telHref()}
                        className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-5 text-sm font-semibold hover:bg-brand-bright"
                      >
                        Gọi {SITE.hotlineDisplay}
                      </a>
                      <Link
                        href="/lien-he"
                        className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 px-5 text-sm font-semibold hover:bg-white/10"
                      >
                        Gửi yêu cầu
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
