import createImageUrlBuilder from "@sanity/image-url";
import { dataset, hasSanity, projectId } from "./env";

type ImageSource = Parameters<ReturnType<typeof createImageUrlBuilder>["image"]>[0];

const builder = hasSanity ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source: ImageSource) {
  return builder?.image(source);
}
