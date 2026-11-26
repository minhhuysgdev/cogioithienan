import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ProjectVideo } from "@/components/ProjectVideo";
import { getProject, getProjects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Công trình" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero title={project.title} description={`${project.location} · ${project.year}`} />
      <section className="section-pad">
        <div className="container-page grid gap-10 md:grid-cols-2">
          {project.video && project.poster ? (
            <ProjectVideo
              src={project.video}
              poster={project.poster}
              title={project.title}
              className="aspect-[4/3]"
              priority
            />
          ) : (
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
            </div>
          )}
          <div>
            <p className="text-base leading-relaxed text-muted">{project.description}</p>
            <Link
              href="/lien-he"
              className="mt-8 inline-flex min-h-11 items-center rounded-md bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-bright"
            >
              Tư vấn công trình tương tự
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
