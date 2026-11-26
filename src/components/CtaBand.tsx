import Link from "next/link";
import { SITE, telHref } from "@/lib/constants";

export function CtaBand() {
  return (
    <section className="section-pad">
      <div className="container-page overflow-hidden rounded-2xl bg-navy px-6 py-10 text-white md:px-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Cần máy hoặc thi công gấp?
            </h2>
            <p className="mt-2 text-white/75">
              Gọi ngay hotline {SITE.hotlineDisplay} để được tư vấn miễn phí và báo giá nhanh.
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
              Gửi yêu cầu báo giá
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
