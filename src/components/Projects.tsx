import works from "../data/works";
import { GrGallery } from "react-icons/gr";
import Gallery from "./Gallery";
import { useState, useCallback, useEffect } from "react";
import type { GalleryItem } from "../types/gallery";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { loadGallery } from "../utils/images-gallery";

// Quantidade máxima de tecnologias exibidas no card antes de resumir em "+N"
const MAX_FEATURES_SHOWN = 4;

type Work = (typeof works)[number];

export default function MyProject() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [imagesGallery, setImagesGallery] = useState<GalleryItem[]>([]);
  const [activeWork, setActiveWork] = useState<Work | null>(null);
  const [isGalleryLoading, setIsGalleryLoading] = useState(false);

  const openGallery = async (work: Work) => {
    setActiveWork(work);
    setIsGalleryLoading(true);
    setIsGalleryOpen(true);
    try {
      const images = await loadGallery(work.galleryKey);
      setImagesGallery(images);
    } catch (error) {
      console.error("Falha ao carregar galeria:", error);
      toast.error("Não foi possível carregar as imagens da galeria");
      setIsGalleryOpen(false);
    } finally {
      setIsGalleryLoading(false);
    }
  };

  const calcTilt = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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

  useEffect(() => {
    if(isGalleryOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  },[isGalleryOpen]);

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center mx-2"
    >
      <Gallery
        images={imagesGallery}
        title={activeWork?.title ?? ""}
        description={activeWork?.description}
        features={activeWork?.features}
        url={activeWork?.url}
        isGalleryOpen={isGalleryOpen}
        isLoading={isGalleryLoading}
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

        <div className="w-full pb-10 flex flex-nowrap overflow-x-auto md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-visible py-4 px-2 gap-6 md:gap-8">
          {works.map((work, index) => (
            <motion.button
              key={work.title}
              type="button"
              onClick={() => openGallery(work)}
              aria-label={`Ver galeria de imagens de ${work.title}`}
              className="group text-left bg-blue-700/50 h-[520px] w-[300px] min-w-[300px] md:w-full md:min-w-0 rounded-2xl relative cursor-pointer overflow-hidden flex flex-col"
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
              <div className="w-full p-4 relative shrink-0">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={450}
                  className="w-full rounded-2xl h-[200px] object-cover"
                />

                {/* Indica visualmente que o card inteiro abre a galeria */}
                <div
                  className="absolute inset-4 rounded-2xl bg-black/0 group-hover:bg-black/50
                  flex items-center justify-center gap-2 text-white opacity-0
                  group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                >
                  <GrGallery size={18} />
                  <span className="text-sm font-medium">Ver galeria</span>
                </div>
              </div>

              <div className="flex flex-col flex-1 min-h-0 px-5 pb-5">
                <h2 className="vend-sans text-emerald-400 font-bold text-[22px] line-clamp-1">
                  {work.title}
                </h2>

                {/* Tecnologias logo abaixo do título, para escanear rápido */}
                <div className="flex flex-wrap gap-1.5 mt-3 text-[11px] font-medium shrink-0">
                  {work.features.slice(0, MAX_FEATURES_SHOWN).map((feature) => (
                    <span
                      key={feature.name}
                      style={{ color: feature.color }}
                      className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10"
                    >
                      {feature.name}
                    </span>
                  ))}
                  {work.features.length > MAX_FEATURES_SHOWN && (
                    <span
                      className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
                      title={work.features
                        .slice(MAX_FEATURES_SHOWN)
                        .map((f) => f.name)
                        .join(", ")}
                    >
                      +{work.features.length - MAX_FEATURES_SHOWN}
                    </span>
                  )}
                </div>

                {/* Descrição preenche o espaço restante do card, sem vazar */}
                <p className="text-[13px] leading-relaxed text-gray-200 mt-3 line-clamp-5 flex-1">
                  {work.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
