"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type IntroAutoVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function IntroAutoVideo({ src, poster, className = "" }: IntroAutoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.paused) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    void video.play().then(() => setPlaying(true)).catch(() => undefined);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    tryPlay();

    const onReady = () => tryPlay();
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.addEventListener("canplaythrough", onReady);

    const el = rootRef.current;
    const observer =
      el &&
      new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) tryPlay();
        },
        { threshold: 0.15, rootMargin: "80px 0px" },
      );
    if (el && observer) observer.observe(el);

    // iOS often unlocks autoplay only after a user gesture
    const unlock = () => tryPlay();
    document.addEventListener("touchstart", unlock, { passive: true, once: true });
    document.addEventListener("click", unlock, { once: true });
    document.addEventListener("scroll", unlock, { passive: true, once: true });

    const retry = window.setInterval(() => {
      if (video.paused) tryPlay();
      else window.clearInterval(retry);
    }, 800);

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("canplaythrough", onReady);
      observer?.disconnect();
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("click", unlock);
      document.removeEventListener("scroll", unlock);
      window.clearInterval(retry);
    };
  }, [tryPlay]);

  return (
    <div
      ref={rootRef}
      id="gioi-thieu"
      className={`relative w-full overflow-hidden rounded-2xl bg-navy/10 scroll-mt-24 ${className}`}
    >
      <div className="relative aspect-video w-full bg-navy/20">
        <Image
          src={poster}
          alt="Video giới thiệu Cơ Giới Thiên Ân"
          fill
          quality={72}
          className={`object-contain object-center transition ${playing ? "opacity-0" : "opacity-100"}`}
          sizes="(max-width:1024px) 100vw, 50vw"
          priority
        />
        <video
          ref={videoRef}
          className="absolute inset-0 block h-full w-full object-contain object-center"
          src={src}
          muted
          playsInline
          autoPlay
          loop
          controls
          controlsList="nodownload"
          preload="auto"
          poster={poster}
          onPlaying={() => setPlaying(true)}
          onPlay={() => setPlaying(true)}
        />
      </div>
    </div>
  );
}
