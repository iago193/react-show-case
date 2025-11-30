import { formatImageName } from "./helper";
import type { GalleryItem } from "../types/gallery";

// Importa tudo (incluindo subpastas)
const images = import.meta.glob('../assets/projects/gallery/**/*', {
  eager: true,
  import: 'default'
});

// Objeto final organizado por categoria
const gallery: Record<string, GalleryItem[]> = {};

// Monta categorias com base no nome da pasta
Object.entries(images).forEach(([path, src]) => {
  const parts = path.split('/');
  const folder = parts[parts.length - 2]; // ← nome da categoria (pasta)

  if (!gallery[folder]) {
    gallery[folder] = [];
  }

  gallery[folder].push({
    name: formatImageName(path),
    src: src as string
  });
});

export default gallery;
