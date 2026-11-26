import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SITE, facebookHref, telHref, zaloHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: `Liên hệ ${SITE.name} — hotline ${SITE.hotlineDisplay} để nhận tư vấn và báo giá.`,
};

export default function LienHePage() {
  return (
    <>
      <PageHero
        title="Liên hệ"
        description="Gọi hotline hoặc gửi form để nhận báo giá nhanh."
      />
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">{SITE.name}</h2>
            <p className="mt-2 text-muted">{SITE.slogan}</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                  Hotline
                </span>
                <a href={telHref()} className="text-lg font-semibold text-brand hover:underline">
                  {SITE.hotlineDisplay}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                  Zalo
                </span>
                <a
                  href={zaloHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy hover:text-brand"
                >
                  {SITE.hotlineDisplay}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                  Facebook
                </span>
                <a
                  href={facebookHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy hover:text-brand"
                >
                  facebook.com/profile.php?id=61596575926007
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                  Email
                </span>
                <a href={`mailto:${SITE.email}`} className="font-medium text-navy hover:text-brand">
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                  Khu vực phục vụ
                </span>
                <p className="font-medium text-navy">TP.HCM, Đồng Nai, Bình Dương và các tỉnh lân cận</p>
              </li>
            </ul>
            <div className="mt-8 aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface">
              <iframe
                title="Bản đồ khu vực phục vụ"
                src="https://maps.google.com/maps?q=Dong%20Nai&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6 shadow-sm md:p-8">
            <h3 className="font-display text-xl font-bold text-navy">Nhận báo giá</h3>
            <p className="mt-1 mb-6 text-sm text-muted">
              Để lại thông tin, chúng tôi sẽ liên hệ trong thời gian sớm nhất.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
