type WebkitVideo = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
  webkitExitFullscreen?: () => void;
};

export function preferNativeFullscreen() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
}

export async function playVideoFullscreen(video: HTMLVideoElement) {
  try {
    await video.play();
  } catch {
    return false;
  }

  if (!preferNativeFullscreen()) return true;

  const wk = video as WebkitVideo;
  try {
    if (typeof wk.webkitEnterFullscreen === "function") {
      wk.webkitEnterFullscreen();
      return true;
    }
    if (video.requestFullscreen) {
      await video.requestFullscreen();
      return true;
    }
  } catch {
    /* fallback: video already playing inline */
  }
  return true;
}
