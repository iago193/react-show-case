import { formatImageName } from "./helper";
import type { GalleryItem } from "../types/gallery";

const images = import.meta.glob('../assets/projects/gallery/*', {
  eager: true,
  import: 'default'
});

const gallery: GalleryItem[] = Object.entries(images).map(([path, src]) => ({
  name: formatImageName(path),
  src: src as string
}));

export default gallery;
