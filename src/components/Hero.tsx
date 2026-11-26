"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND, PHOTOS, SITE, telHref, zaloHref } from "@/lib/constants";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden bg-navy text-white md:min-h-[92svh]">
      <div className="absolute inset-0">
        <Image
          src={PHOTOS.site}
          alt=""
          fill
          priority
          quality={70}
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/35" />
      </div>

      <div className="pointer-events-none absolute inset-y-8 right-0 hidden w-[42%] opacity-80 lg:block">
        <div className="relative h-full overflow-hidden">
          <Image
            src={PHOTOS.excavators}
            alt=""
            fill
            priority
            quality={65}
            className="object-cover"
            sizes="42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-navy/20 to-navy" />
        </div>
      </div>

      <div className="relative container-page flex min-h-[88svh] flex-col justify-center py-20 md:min-h-[92svh] md:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <Image
            src={BRAND.logoPhone}
            alt={SITE.name}
            width={96}
            height={96}
            className="mb-5 h-20 w-20 rounded-full bg-white object-cover shadow-xl shadow-black/30 md:h-24 md:w-24"
            priority
          />
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-brand-bright uppercase">
            {SITE.tagline}
          </p>
          <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight uppercase sm:text-5xl md:text-6xl lg:text-7xl">
            Cơ Giới
            <br />
            Thiên Ân
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            {SITE.slogan}. Thi công – cho thuê máy – phá dỡ theo nhu cầu công trình.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={telHref()}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-5 text-sm font-semibold transition hover:bg-brand-bright"
            >
              Gọi tư vấn {SITE.hotlineDisplay}
            </a>
            <a
              href={zaloHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 bg-white/5 px-5 text-sm font-semibold backdrop-blur transition hover:bg-white/15"
            >
              Nhắn Zalo
            </a>
            <a
              href="#video-nang-luc"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Xem video
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
