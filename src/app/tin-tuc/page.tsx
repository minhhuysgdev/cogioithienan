import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Kiến thức và cập nhật về thi công cơ giới, thuê máy, san lấp mặt bằng.",
};

export default async function TinTucPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero title="Tin tức" description="Chia sẻ kinh nghiệm thi công và cho thuê máy cơ giới." />
      <section className="section-pad">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
              <Link href={`/tin-tuc/${post.slug}`} className="group block">
                <div className="relative mb-4 aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <time className="text-xs text-muted" dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                </time>
                <h2 className="mt-1 font-display text-xl font-bold text-navy group-hover:text-brand">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
