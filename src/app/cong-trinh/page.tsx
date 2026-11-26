import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Công trình",
  description: "Các công trình san lấp, phá dỡ và thi công cơ giới Thiên Ân đã thực hiện.",
};

export default async function CongTrinhPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHero
        title="Công trình"
        description="Hình ảnh và video hạng mục tiêu biểu đã triển khai."
      />
      <section className="section-pad">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.05}>
              <Link href={`/cong-trinh/${project.slug}`} className="group block">
                <div className="relative mb-4 aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.poster || project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  {project.video ? (
                    <span className="absolute top-3 left-3 rounded bg-navy/80 px-2 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
                      Video
                    </span>
                  ) : null}
                  {project.video ? (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/95 text-white shadow-lg opacity-95 transition group-hover:scale-105">
                        <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current" aria-hidden>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  ) : null}
                </div>
                <p className="text-xs font-semibold tracking-wide text-brand uppercase">
                  {project.location} · {project.year}
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-navy group-hover:text-brand">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{project.summary}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
