type GalleryProps = {
  images: GalleryItem[];
};

export default function Gallery({ images }: GalleryProps) {
  //const images = gallery.portfolio;

  return (
    <section className="w-full fixed z-2 top-40">
      <div className="bg-blue-700/50 backdrop-blur-md w-[70%] mx-auto rounded-2xl">
        <div className="p-4">
          <ul className="flex flex-wrap gap-4 ">
            {images.map((path, i) => (
              <li key={i}>
                <img
                  className="w-[300px] h-[300px] object-cover object-center rounded-2xl"
                  src={path.src}
                  alt={path.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
