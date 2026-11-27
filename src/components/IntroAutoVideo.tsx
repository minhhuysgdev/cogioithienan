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
  const [showControls, setShowControls] = useState(false);

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.paused) return;
    video.muted = true;
    video.volume = 0;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    void video.play().then(() => setPlaying(true)).catch(() => undefined);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const el = rootRef.current;
    if (!video || !el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.25, rootMargin: "60px 0px" },
    );
    observer.observe(el);

    const onReady = () => tryPlay();
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);

    const unlock = () => tryPlay();
    document.addEventListener("touchstart", unlock, { passive: true, once: true });
    document.addEventListener("scroll", unlock, { passive: true, once: true });

    return () => {
      observer.disconnect();
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("scroll", unlock);
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
          className={`pointer-events-none object-contain object-center transition ${
            playing ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width:1024px) 100vw, 50vw"
          priority
        />
        <video
          ref={videoRef}
          className="absolute inset-0 block h-full w-full cursor-pointer object-contain object-center"
          src={src}
          muted
          playsInline
          autoPlay
          loop
          controls={showControls}
          controlsList="nodownload nofullscreen"
          preload="auto"
          poster={poster}
          onClick={() => setShowControls(true)}
          onPlaying={() => setPlaying(true)}
          onPlay={() => setPlaying(true)}
        />
      </div>
    </div>
  );
}
