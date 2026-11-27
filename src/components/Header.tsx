"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BRAND, NAV, SITE, telHref, zaloHref } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={BRAND.logo}
            alt={SITE.name}
            width={48}
            height={48}
            className="h-11 w-11 rounded-full bg-white object-cover"
            priority
          />
          <span className="font-display text-lg font-bold tracking-wide uppercase md:text-xl">
            {SITE.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-lg font-semibold tracking-wide transition ${
                  active
                    ? "bg-white/15 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={zaloHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/25 px-3 py-2 text-lg font-semibold transition hover:bg-white/10"
          >
            Zalo
          </a>
          <a
            href={telHref()}
            className="rounded-md bg-brand px-3 py-2 text-lg font-semibold transition hover:bg-brand-bright"
          >
            {SITE.hotlineDisplay}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 lg:hidden"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2.5 text-lg font-semibold tracking-wide text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={telHref()}
              className="mt-1 rounded-md bg-brand px-3 py-2.5 text-center text-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Gọi {SITE.hotlineDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
