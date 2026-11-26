type WebkitVideo = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
  webkitExitFullscreen?: () => void;
};

export function preferNativeFullscreen() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
}

async function waitForCanPlay(video: HTMLVideoElement) {
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) return;
  video.load();
  await new Promise<void>((resolve, reject) => {
    const onReady = () => {
      cleanup();
      resolve();
    };
    const onError = () => {
      cleanup();
      reject(new Error("Video load failed"));
    };
    const cleanup = () => {
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("error", onError);
    };
    video.addEventListener("canplay", onReady, { once: true });
    video.addEventListener("loadeddata", onReady, { once: true });
    video.addEventListener("error", onError, { once: true });
  });
}

export async function playVideoFullscreen(video: HTMLVideoElement) {
  await waitForCanPlay(video);

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
