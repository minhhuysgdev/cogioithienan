import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getPost, getPosts } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Tin tức" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title} description={post.excerpt} />
      <article className="section-pad">
        <div className="container-page max-w-3xl">
          <time className="text-sm text-muted" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
          </time>
          <div className="relative mt-6 aspect-[16/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 768px"
              priority
            />
          </div>
          <div className="prose-p mt-8 space-y-4 text-base leading-relaxed text-muted whitespace-pre-line">
            {post.body}
          </div>
          <Link href="/tin-tuc" className="mt-10 inline-block text-sm font-semibold text-brand hover:underline">
            ← Quay lại tin tức
          </Link>
        </div>
      </article>
    </>
  );
}
