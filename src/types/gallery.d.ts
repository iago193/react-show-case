export type GalleryItem = {
  src: string;
  name: string;
};

export type GalleryProps = {
  images: GalleryItem[];
  isGalleryOpen: boolean;
  title: string;
  onClose: () => void;
};
