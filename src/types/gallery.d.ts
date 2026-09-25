export type GalleryItem = {
  src: string;
  name: string;
};

export type ProjectFeature = {
  name: string;
  color: string;
};

export type GalleryProps = {
  images: GalleryItem[];
  isGalleryOpen: boolean;
  isLoading?: boolean;
  title: string;
  description?: string;
  features?: ProjectFeature[];
  url?: string;
  onClose: () => void;
};
