"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { VideoPlayOverlay } from "@/components/VideoPlayOverlay";
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
  const [loading, setLoading] = useState(false);

  async function onPlayClick() {
    const video = videoRef.current;
    if (!video || loading) return;
    setLoading(true);
    try {
      const ok = await playVideoFullscreen(video);
      if (ok) setPlaying(true);
    } catch {
      /* keep poster + play button */
    } finally {
      setLoading(false);
    }
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
        onPlay={() => {
          setPlaying(true);
          setLoading(false);
        }}
        onPause={() => setPlaying(false)}
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
