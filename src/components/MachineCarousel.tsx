"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type FleetShot = {
  src: string;
  alt: string;
  title: string;
};

type MachineCarouselProps = {
  images: readonly FleetShot[];
  intervalMs?: number;
};

export function MachineCarousel({ images, intervalMs = 3000 }: MachineCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(1);
  const [reduce, setReduce] = useState(false);
  const count = images.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => setPerView(el.clientWidth >= 768 ? 2 : 1);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const maxIndex = Math.max(0, count - perView);

  const go = useCallback(
    (next: number) => {
      if (!count) return;
      if (next > maxIndex) setIndex(0);
      else if (next < 0) setIndex(maxIndex);
      else setIndex(next);
    },
    [count, maxIndex],
  );

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  useEffect(() => {
    if (reduce || paused || count < 2) return;
    const id = window.setInterval(() => go(index + 1), intervalMs);
    return () => window.clearInterval(id);
  }, [count, go, index, intervalMs, paused, reduce]);

  if (!count) return null;
  const current = images[index];

  return (
    <div
      className="min-w-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={viewportRef}
        className="overflow-hidden"
        onTouchStart={(e) => {
          touchX.current = e.touches[0]?.clientX ?? null;
          setPaused(true);
        }}
        onTouchEnd={(e) => {
          const start = touchX.current;
          const end = e.changedTouches[0]?.clientX;
          touchX.current = null;
          setPaused(false);
          if (start == null || end == null) return;
          const delta = end - start;
          if (Math.abs(delta) < 40) return;
          go(index + (delta < 0 ? 1 : -1));
        }}
      >
        <div
          className={`flex w-full transition-transform duration-500 ease-out ${perView > 1 ? "gap-4" : ""}`}
          style={{
            transform:
              perView > 1
                ? `translateX(calc(-${index} * (50% + 0.5rem)))`
                : `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((shot, i) => (
            <div
              key={shot.src}
              className="min-w-0 shrink-0 grow-0"
              style={{
                flexBasis: perView > 1 ? "calc(50% - 0.5rem)" : "100%",
                width: perView > 1 ? "calc(50% - 0.5rem)" : "100%",
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy/5">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  quality={75}
                  priority={i === 0}
                  className="object-cover object-center"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="font-display text-lg font-bold text-navy">{current.title}</p>
        {count > 1 ? (
          <div className="flex items-center gap-1.5">
            {images.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                aria-label={shot.title}
                onClick={() => go(Math.min(i, maxIndex))}
                className={`h-1.5 rounded-full transition ${
                  i === index ? "w-6 bg-brand" : "w-1.5 bg-line hover:bg-muted"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
