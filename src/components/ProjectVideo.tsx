"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { playVideoFullscreen } from "@/lib/video";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function onPlayClick() {
    const video = videoRef.current;
    if (!video) return;
    const ok = await playVideoFullscreen(video);
    if (ok) setPlaying(true);
  }

  return (
    <div className={`relative overflow-hidden bg-navy/10 ${className}`}>
      <Image
        src={poster}
        alt={title}
        fill
        priority={priority}
        quality={70}
        className={`object-cover transition ${playing ? "opacity-0" : "opacity-100"}`}
        sizes="(max-width:768px) 100vw, 50vw"
      />

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover ${playing ? "opacity-100" : "opacity-0"}`}
        playsInline
        controls={playing}
        preload="none"
        poster={poster}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!playing ? (
        <button
          type="button"
          onClick={onPlayClick}
          className="absolute inset-0 z-10 flex items-center justify-center bg-navy/20 transition hover:bg-navy/30"
          aria-label={`Phát video ${title}`}
        >
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-black/30">
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      ) : null}

      <span className="pointer-events-none absolute top-3 left-3 z-10 rounded bg-navy/75 px-2 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
        Video
      </span>
    </div>
  );
}
