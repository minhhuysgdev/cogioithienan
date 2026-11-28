import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { SITE, telHref, zaloHref } from "@/lib/constants";
import { getPillarService, getPillarServices } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const pillars = await getPillarServices();
  return pillars.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getPillarService(slug);
  const path = `/dich-vu/${slug}`;
  if (!service) {
    return {
      title: "Dịch vụ",
      alternates: { canonical: path },
      openGraph: { url: path },
    };
  }
  return {
    title: service.seoTitle ?? service.title,
    description: service.seoDescription ?? service.summary,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: service.seoTitle ?? service.title,
      description: service.seoDescription ?? service.summary,
    },
  };
}

export default async function DichVuPillarPage({ params }: Props) {
  const { slug } = await params;
  const service = await getPillarService(slug);
  if (!service) notFound();

  const faqs = service.faqs ?? [];
  const faqLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {faqLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      ) : null}

      <PageHero
        title={service.seoTitle ?? service.title}
        description={service.summary}
        image={service.image}
      />

      <div className="border-b border-line bg-surface/60">
        <nav aria-label="Breadcrumb" className="container-page py-3 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-brand">
                Trang chủ
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/dich-vu" className="hover:text-brand">
                Dịch vụ
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-navy">{service.shortTitle ?? service.title}</li>
          </ol>
        </nav>
      </div>

      <article className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="min-w-0 space-y-12">
            <MediaFrame
              src={service.image}
              alt={service.title}
              className="aspect-[16/10]"
              sizes="(max-width:1024px) 100vw, 70vw"
              priority
            />

            <section>
              <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                Giới thiệu dịch vụ
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted whitespace-pre-line">
                {service.intro ?? service.description}
              </p>
            </section>

            {service.scopes?.length ? (
              <section>
                <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                  Các hạng mục thi công cụ thể
                </h2>
                <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-muted">
                  {service.scopes.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {service.equipment?.length ? (
              <section>
                <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                  Năng lực thiết bị & đội ngũ
                </h2>
                <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-muted">
                  {service.equipment.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {service.costFactors?.length ? (
              <section>
                <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                  Chi phí & yếu tố cấu thành giá
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Đơn giá phụ thuộc hiện trường nên chúng tôi báo sau khảo sát. Ba yếu tố ảnh hưởng
                  chính:
                </p>
                <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-muted">
                  {service.costFactors.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {service.steps?.length ? (
              <section>
                <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                  Quy trình làm việc minh bạch
                </h2>
                <ol className="mt-5 space-y-3 text-base leading-relaxed text-muted">
                  {service.steps.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-display text-sm font-bold text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-base text-muted">
                  Xem thêm hình ảnh và video thực tế tại{" "}
                  <Link href="/cong-trinh" className="font-semibold text-brand hover:text-navy">
                    Công trình đã thi công
                  </Link>
                  .
                </p>
              </section>
            ) : null}

            {faqs.length ? (
              <section>
                <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                  Câu hỏi thường gặp
                </h2>
                <div className="mt-5 space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-line bg-surface p-4">
                      <h3 className="font-display text-lg font-bold text-navy">{faq.question}</h3>
                      <p className="mt-2 text-base leading-relaxed text-muted">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="overflow-hidden rounded-2xl bg-navy px-6 py-8 text-white md:px-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-brand-bright uppercase">
                Báo giá nhanh
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
                Cần khảo sát hạng mục {service.shortTitle ?? service.title}?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/75 md:text-base">
                Gọi hotline hoặc nhắn Zalo {SITE.hotlineDisplay} — phản hồi nhanh theo phạm vi công
                việc tại TP.HCM, Bình Dương, Đồng Nai.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={telHref()}
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-5 text-sm font-semibold hover:bg-brand-bright"
                >
                  Gọi {SITE.hotlineDisplay}
                </a>
                <a
                  href={zaloHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 px-5 text-sm font-semibold hover:bg-white/10"
                >
                  Nhắn Zalo
                </a>
                <Link
                  href="/lien-he"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 px-5 text-sm font-semibold hover:bg-white/10"
                >
                  Gửi yêu cầu
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="text-xs font-semibold tracking-wide text-brand uppercase">Liên hệ ngay</p>
              <p className="mt-2 font-display text-xl font-bold text-navy">{SITE.hotlineDisplay}</p>
              <p className="mt-1 text-sm text-muted">TP.HCM · Bình Dương · Đồng Nai</p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={telHref()}
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-bright"
                >
                  Gọi tư vấn
                </a>
                <a
                  href={zaloHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-line px-4 text-sm font-semibold text-navy hover:border-brand hover:text-brand"
                >
                  Chat Zalo
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5">
              <p className="text-sm font-semibold text-navy">Danh mục dịch vụ</p>
              <Link href="/dich-vu" className="mt-2 inline-flex text-sm font-semibold text-brand hover:text-navy">
                ← Về trang Dịch vụ
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
