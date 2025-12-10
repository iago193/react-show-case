import works from "../data/works";
import github from "../assets/img/github-card.png";
import { GrGallery } from "react-icons/gr";
import Gallery from "./Gallery";
import { useState, useCallback } from "react";
import type { GalleryItem } from "../types/gallery";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function MyProject() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [imagesGallery, setImagesGallery] = useState<GalleryItem[]>([]);
  const [titleGallery, setTitleGallery] = useState("");

  const openGallery = (images: GalleryItem[], title: string) => {
    setImagesGallery(images);
    setTitleGallery(title);
    setIsGalleryOpen(true);
  };

  const calcTilt = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateY = ((x - midX) / midX) * 7;
      const rotateX = ((midY - y) / midY) * 7;
      return { rotateX, rotateY };
    },
    []
  );

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center mx-2"
    >
      <Gallery
        images={imagesGallery}
        title={titleGallery}
        isGalleryOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />

      <div className="w-full flex flex-col">
        <h2 className="text-emerald-400 vend-sans text-4xl font-bold px-4">
          Projetos
        </h2>

        <p className="text-[15px] text-[#555353] px-4 mb-10">
          Para ver todos os meus projetos:
          <a
            className="px-2 text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/iago193?tab=repositories"
          >
            Github.
          </a>
        </p>

        <div className="w-full pb-10 flex flex-nowrap overflow-x-auto md:flex-wrap py-4 px-2 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="bg-blue-700/50 h-[450px] w-[290px] min-w-[290px] rounded-2xl relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              onMouseMove={(e) => {
                const { rotateX, rotateY } = calcTilt(e);
                e.currentTarget.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `perspective(700px) rotateX(0deg) rotateY(0deg)`;
              }}
              style={{ transition: "transform 0.15s ease-out" }}
            >
              <div className="w-full p-4 relative">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full rounded-2xl h-[170px] object-cover"
                />

                <div className="absolute flex top-6 right-6 gap-2">
                  <button
                    onClick={() => openGallery(work.gallery, work.title)}
                    type="button"
                    className="bg-black/90 text-amber-50 rounded-full flex justify-center items-center w-6 shadow-[inset_0_0_6px_2px_rgba(255,255,255,0.2)] active:scale-90"
                  >
                    <GrGallery size={12} />
                  </button>

                  <button
                    type="button"
                    className="bg-black/90 block p-0.5 rounded-full w-6 active:scale-90 shadow-[inset_0_0_6px_2px_rgba(255,255,255,0.2)]"
                  >
                    <a
                      href={work.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!work.url) {
                          e.preventDefault();
                          toast.error(
                            "Projeto privado ou indisponível no repositório"
                          );
                        }
                      }}
                    >
                      <img src={github ?? "#"} alt={work.title} />
                    </a>
                  </button>
                </div>
              </div>

              <h2 className="vend-sans text-emerald-400 font-bold text-[22px] px-4 mt-4">
                {work.title}
              </h2>

              <p className="text-[12px] mt-4 px-4">{work.description}</p>

              <div className="flex flex-wrap px-4 gap-2 mt-6 text-[10px]">
                {work.features.map((feature, i) => (
                  <span key={i} style={{ color: feature.color }}>
                    {feature.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
