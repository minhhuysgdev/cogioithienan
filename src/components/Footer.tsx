import Image from "next/image";
import Link from "next/link";
import { BRAND, NAV, SITE, telHref, zaloHref } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={BRAND.logoPhone}
              alt={SITE.name}
              width={64}
              height={64}
              className="h-14 w-14 rounded-full bg-white object-cover"
            />
            <div>
              <p className="font-display text-xl font-bold uppercase">{SITE.name}</p>
              <p className="text-sm text-white/70">{SITE.slogan}</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            {SITE.description}
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-wider text-white/50 uppercase">
            Điều hướng
          </p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-wider text-white/50 uppercase">
            Liên hệ
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telHref()} className="font-semibold text-brand-bright hover:underline">
                Hotline: {SITE.hotlineDisplay}
              </a>
            </li>
            <li>
              <a
                href={zaloHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                Zalo: {SITE.hotlineDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="text-white/80 hover:text-white">
                Email: {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Chuyên nhận thi công – Cho thuê máy</p>
        </div>
      </div>
    </footer>
  );
}
