type VideoPlayOverlayProps = {
  loading: boolean;
  label: string;
  onPlay: () => void;
  size?: "md" | "lg";
};

export function VideoPlayOverlay({
  loading,
  label,
  onPlay,
  size = "md",
}: VideoPlayOverlayProps) {
  const button = size === "lg" ? "h-16 w-16" : "h-14 w-14";
  const icon = size === "lg" ? "h-7 w-7" : "h-6 w-6";

  return (
    <button
      type="button"
      onClick={onPlay}
      disabled={loading}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-navy/25 transition hover:bg-navy/35 disabled:cursor-wait"
      aria-label={loading ? "Đang tải video" : label}
    >
      {loading ? (
        <>
          <span
            className={`inline-flex ${button} items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-black/30`}
            aria-hidden
          >
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          </span>
          <span className="rounded-full bg-navy/70 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
            Đang tải…
          </span>
        </>
      ) : (
        <span
          className={`inline-flex ${button} items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-black/30`}
        >
          <svg viewBox="0 0 24 24" className={`ml-1 ${icon} fill-current`} aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      )}
    </button>
  );
}
