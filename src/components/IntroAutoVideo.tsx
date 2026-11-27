"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type IntroAutoVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function IntroAutoVideo({ src, poster, className = "" }: IntroAutoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().then(() => setReady(true)).catch(() => undefined);
  }, [shouldLoad]);

  return (
    <div
      ref={rootRef}
      id="gioi-thieu"
      className={`relative w-full overflow-hidden rounded-2xl bg-navy/10 scroll-mt-24 ${className}`}
    >
      {/* Natural 16:9 flow — no absolute fill/cover so baked logo/text stay intact */}
      <div className="relative aspect-video w-full bg-navy/20">
        <Image
          src={poster}
          alt="Video giới thiệu Cơ Giới Thiên Ân"
          fill
          quality={72}
          className={`object-contain object-center transition ${ready ? "opacity-0" : "opacity-100"}`}
          sizes="(max-width:1024px) 100vw, 50vw"
        />
        {shouldLoad ? (
          <video
            ref={videoRef}
            className={`absolute inset-0 block h-full w-full object-contain object-center ${
              ready ? "opacity-100" : "opacity-0"
            }`}
            muted
            playsInline
            autoPlay
            loop
            controls
            controlsList="nodownload"
            preload="metadata"
            poster={poster}
            onPlaying={() => setReady(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : null}
      </div>
    </div>
  );
}
