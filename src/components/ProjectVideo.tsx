"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { VideoPlayOverlay } from "@/components/VideoPlayOverlay";

type ProjectVideoProps = {
  src: string;
  poster: string;
  title: string;
  className?: string;
  priority?: boolean;
};

export function ProjectVideo({
  src,
  poster,
  title,
  className = "",
  priority = false,
}: ProjectVideoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const playInline = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return false;
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    try {
      await video.play();
      setPlaying(true);
      return true;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35, rootMargin: "40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      setLoading(true);
      void playInline().finally(() => setLoading(false));
      return;
    }

    video.pause();
    setPlaying(false);
    setShowControls(false);
  }, [inView, playInline]);

  async function onPlayClick() {
    if (loading) return;
    setLoading(true);
    setShowControls(true);
    try {
      await playInline();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div ref={rootRef} className={`relative overflow-hidden bg-navy/10 ${className}`}>
      <Image
        src={poster}
        alt={title}
        fill
        priority={priority}
        quality={70}
        className={`pointer-events-none object-cover transition ${playing ? "opacity-0" : "opacity-100"}`}
        sizes="(max-width:768px) 100vw, 50vw"
      />

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full cursor-pointer object-cover ${
          playing ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        loop
        controls={showControls}
        controlsList="nodownload nofullscreen"
        preload={inView || priority ? "metadata" : "none"}
        poster={poster}
        onClick={() => {
          if (playing) setShowControls(true);
        }}
        onPlay={() => {
          setPlaying(true);
          setLoading(false);
        }}
        onPause={() => {
          if (!inView) setPlaying(false);
        }}
        onEnded={() => setPlaying(false)}
        onWaiting={() => setLoading(true)}
        onPlaying={() => setLoading(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!playing ? (
        <VideoPlayOverlay
          loading={loading}
          label={`Phát video ${title}`}
          onPlay={onPlayClick}
        />
      ) : null}

      <span className="pointer-events-none absolute top-3 left-3 z-10 rounded bg-navy/75 px-2 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
        Video
      </span>
    </div>
  );
}
