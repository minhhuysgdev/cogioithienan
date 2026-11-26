import Image from "next/image";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  /** cover = crop to fill; contain = show full image (no zoom crop) */
  fit?: "cover" | "contain";
};

export function MediaFrame({
  src,
  alt,
  className = "aspect-[16/10]",
  sizes = "(max-width:768px) 100vw, 33vw",
  priority = false,
  quality = 70,
  fit = "cover",
}: MediaFrameProps) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        sizes={sizes}
      />
    </div>
  );
}
