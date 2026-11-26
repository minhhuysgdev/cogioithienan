"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND, PHOTOS, SITE } from "@/lib/constants";

export function VideoShowcase() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [wantPlay, setWantPlay] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !wantPlay) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().then(() => setPlaying(true)).catch(() => undefined);
  }, [shouldLoad, wantPlay]);

  function onPlayClick() {
    setShouldLoad(true);
    setWantPlay(true);
  }

  return (
    <section ref={sectionRef} id="video-nang-luc" className="relative scroll-mt-20 bg-navy text-white">
      <div className="container-page py-10 md:py-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-bright uppercase">
            Video năng lực
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Máy móc & hoạt động thực tế
          </h2>
          <p className="mt-2 text-sm text-white/70 md:text-base">
            Video chỉ tải khi bạn cuộn tới đây — bấm phát để xem.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl shadow-black/40">
          <div className="relative aspect-[9/16] w-full max-h-[70vh] sm:mx-auto sm:max-w-md md:aspect-[16/9] md:max-h-none md:max-w-none">
            <Image
              src={PHOTOS.site1}
              alt=""
              fill
              quality={65}
              className={`object-cover transition ${playing ? "opacity-0" : "opacity-100"}`}
              sizes="(max-width:768px) 100vw, 1100px"
            />

            {shouldLoad ? (
              <video
                ref={videoRef}
                className={`absolute inset-0 h-full w-full object-cover ${playing ? "opacity-100" : "opacity-0"}`}
                playsInline
                controls={playing}
                preload="metadata"
                poster={PHOTOS.site1}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              >
                <source src={BRAND.reel} type="video/mp4" />
                <source src={BRAND.reelFallback} type="video/mp4" />
              </video>
            ) : null}

            {!playing ? (
              <button
                type="button"
                onClick={onPlayClick}
                className="absolute inset-0 z-10 flex items-center justify-center bg-navy/25 transition hover:bg-navy/35"
                aria-label="Phát video"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-black/40">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            ) : null}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy/80 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
              <p className="text-sm font-semibold tracking-wide uppercase drop-shadow">
                {SITE.slogan}
              </p>
              <p className="text-xs text-white/80 drop-shadow">Hotline {SITE.hotlineDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
