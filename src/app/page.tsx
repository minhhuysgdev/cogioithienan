import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { IntroAutoVideo } from "@/components/IntroAutoVideo";
import { MediaFrame } from "@/components/MediaFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { MachineCarousel } from "@/components/MachineCarousel";
import { ProjectVideo } from "@/components/ProjectVideo";
import { FLEET, SITE, VIDEOS } from "@/lib/constants";
import { getProjects, getServices } from "@/lib/content";
import { STATS } from "@/lib/seed";

export default async function HomePage() {
  const [services, projects] = await Promise.all([getServices(), getProjects()]);
  const projectVideos = projects.filter((project) => project.video && project.poster);

  return (
    <>
      <Hero />

      <section className="section-pad">
        <div className="container-page grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <SectionHeading
              eyebrow="01 / Giới thiệu"
              title={SITE.name}
              description={SITE.introLead}
            />
            <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-muted">
              {SITE.introServices.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08} className="flex h-full min-h-[220px] min-w-0 w-full">
            <IntroAutoVideo
              src={VIDEOS.intro}
              poster={VIDEOS.introPoster}
              className="h-full w-full flex-1"
            />
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
                  <MediaFrame
                    src={service.image}
                    alt={service.title}
                    className="mb-4 aspect-[4/3]"
                    quality={70}
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
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

      <section className="section-pad overflow-x-hidden border-t border-line">
        <div className="container-page min-w-0">
          <FadeIn>
            <SectionHeading
              eyebrow="03 / Máy móc"
              title="Máy móc Thiên Ân"
              description="Đội xe cuốc và máy công trình sẵn sàng cho thuê và thi công."
            />
          </FadeIn>
          <FadeIn delay={0.06} className="mt-8">
            <MachineCarousel images={FLEET} intervalMs={3000} />
          </FadeIn>
          <FadeIn>
            <Link
              href="/san-pham"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-brand hover:text-navy"
            >
              Xem sản phẩm cho thuê →
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.06} className="text-center md:text-left">
              <p className="font-display text-3xl font-bold text-brand md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {projectVideos.length ? (
        <section className="section-pad border-t border-line">
          <div className="container-page">
            <FadeIn>
              <SectionHeading
                eyebrow="04 / Công trình"
                title="Video thi công thực tế"
                description="Máy móc và hạng mục đã triển khai trên hiện trường."
              />
            </FadeIn>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projectVideos.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 0.04}>
                  <article>
                    <ProjectVideo
                      src={project.video!}
                      poster={project.poster!}
                      title={project.title}
                      className="mb-4 aspect-[4/3]"
                    />
                    <Link href={`/cong-trinh/${project.slug}`} className="group block">
                      <p className="text-xs font-semibold tracking-wide text-brand uppercase">
                        {project.location} · {project.year}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-bold text-navy group-hover:text-brand">
                        {project.title}
                      </h3>
                    </Link>
                  </article>
                </FadeIn>
              ))}
            </div>
            <FadeIn>
              <Link
                href="/cong-trinh"
                className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-brand hover:text-navy"
              >
                Xem tất cả công trình →
              </Link>
            </FadeIn>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
