import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { ProjectVideo } from "@/components/ProjectVideo";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Công trình",
  description: "Các công trình san lấp, phá dỡ và thi công cơ giới Thiên Ân đã thực hiện.",
  alternates: { canonical: "/cong-trinh" },
  openGraph: { url: "/cong-trinh" },
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
              <article>
                {project.video && project.poster ? (
                  <ProjectVideo
                    src={project.video}
                    poster={project.poster}
                    title={project.title}
                    className="mb-4 aspect-[4/3]"
                  />
                ) : (
                  <Link href={`/cong-trinh/${project.slug}`} className="group block">
                    <div className="relative mb-4 aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    </div>
                  </Link>
                )}
                <Link href={`/cong-trinh/${project.slug}`} className="group block">
                  <p className="text-xs font-semibold tracking-wide text-brand uppercase">
                    {project.location} · {project.year}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold text-navy group-hover:text-brand">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{project.summary}</p>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
