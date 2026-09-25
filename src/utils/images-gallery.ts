import { formatImageName } from "./helper";
import type { GalleryItem } from "../types/gallery";

// Importa as imagens sob demanda (lazy) — cada entrada é uma função de import,
// não a imagem em si, então nada é carregado no bundle inicial.
const modules = import.meta.glob<string>("../assets/projects/gallery/**/*", {
  import: "default",
});

// Agrupa apenas os caminhos por categoria (nome da pasta), sem carregar nada ainda
const galleryPaths: Record<string, string[]> = {};

Object.keys(modules).forEach((path) => {
  const parts = path.split("/");
  const folder = parts[parts.length - 2]; // nome da categoria (pasta)

  if (!galleryPaths[folder]) {
    galleryPaths[folder] = [];
  }

  galleryPaths[folder].push(path);
});

// Carrega, sob demanda, as imagens de uma única galeria/projeto
export async function loadGallery(folder: string): Promise<GalleryItem[]> {
  const paths = galleryPaths[folder] ?? [];

  const items = await Promise.all(
    paths.map(async (path) => ({
      name: formatImageName(path),
      src: await modules[path](),
    }))
  );

  return items;
}

export const galleryFolders = Object.keys(galleryPaths);
