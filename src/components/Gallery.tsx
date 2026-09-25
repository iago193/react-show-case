import type { GalleryProps } from "../types/gallery";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaChevronLeft, FaGithub } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function Gallery({
  images,
  isGalleryOpen,
  isLoading = false,
  onClose,
  title,
  description,
  features,
  url,
}: GalleryProps) {
  const [showAnim, setShowAnim] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isGalleryOpen) {
      setShowAnim(false);
      setExpanded(null);
      const timer = setTimeout(() => setShowAnim(true), 20);
      return () => clearTimeout(timer);
    }
  }, [isGalleryOpen]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (expanded !== null) {
      el.style.overflowY = "hidden";
      el.scrollTop = 0;
    } else {
      el.style.overflowY = "auto";
    }
  }, [expanded]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Atalhos de teclado: Esc fecha (ou volta pra grade), setas navegam entre imagens
  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (expanded !== null) {
          setExpanded(null);
        } else {
          setShowAnim(false);
          setTimeout(() => onClose(), 200);
        }
      } else if (expanded !== null && images.length > 1) {
        if (e.key === "ArrowRight") {
          setExpanded((prev) => (prev === null ? prev : (prev + 1) % images.length));
        } else if (e.key === "ArrowLeft") {
          setExpanded((prev) =>
            prev === null ? prev : (prev - 1 + images.length) % images.length
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen, expanded, images.length, onClose]);

  if (!isGalleryOpen) return null;

  const openImage = (i: number) => setExpanded(i);
  const closeImage = () => setExpanded(null);

  const handleClose = () => {
    setShowAnim(false);
    setTimeout(() => onClose(), 200);
  };

  const goNext = () =>
    setExpanded((prev) => (prev === null ? prev : (prev + 1) % images.length));
  const goPrev = () =>
    setExpanded((prev) =>
      prev === null ? prev : (prev - 1 + images.length) % images.length
    );

  return (
    <section
      className="w-full fixed top-10 md:top-25 inset-0 z-2 flex justify-center items-start py-10 px-2 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      style={{ opacity: showAnim ? 1 : 0 }}
      onClick={(e) => {
        // Fecha apenas quando o clique é no fundo (fora do card da galeria)
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        className="bg-blue-700/50 backdrop-blur-md w-full md:w-[75%] xl:w-[65%] rounded-2xl relative
        transition-all duration-500 ease-out overflow-hidden"
        style={{
          transform: showAnim
            ? "translateY(0px) scale(1)"
            : "translateY(40px) scale(0.95)",
        }}
      >
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-t-2xl shadow-2xl relative z-20 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-emerald-400 vend-sans text-[18px] sm:text-[20px] font-bold truncate">
              {title}
            </h2>
            {!isLoading && images.length > 0 && (
              <p className="text-gray-300 text-[12px]">
                {expanded !== null
                  ? `Imagem ${expanded + 1} de ${images.length}`
                  : `${images.length} ${images.length === 1 ? "imagem" : "imagens"}`}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {expanded !== null && (
              <button
                onClick={closeImage}
                type="button"
                aria-label="Voltar para a lista de imagens"
                className="text-lg flex justify-center items-center bg-white/50
                backdrop-blur-md w-9 h-9 rounded-full transition-all duration-300
                hover:bg-white/70 active:scale-90"
              >
                <FaChevronLeft />
              </button>
            )}

            <a
              href={url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código de ${title} no GitHub`}
              onClick={(e) => {
                if (!url) {
                  e.preventDefault();
                  toast.error("Projeto privado ou indisponível no repositório");
                }
              }}
              className="text-lg flex justify-center items-center bg-white/50
              backdrop-blur-md w-9 h-9 rounded-full transition-all duration-300
              hover:bg-white/70 active:scale-90"
            >
              <FaGithub />
            </a>

            <button
              onClick={handleClose}
              type="button"
              aria-label="Fechar galeria"
              className="text-xl flex justify-center items-center bg-white/50
                backdrop-blur-md w-9 h-9 rounded-full transition-all duration-300
                hover:bg-white/70 active:scale-90"
            >
              <RiCloseLargeFill />
            </button>
          </div>
        </div>

        {/* Conteúdo com ALTURA CONTROLADA */}
        <div
          ref={scrollRef}
          className="overflow-y-auto max-h-[75vh] relative transition-all duration-500"
        >
          <div className="p-4 sm:p-6 relative">
            {/* Descrição completa + todas as tecnologias, só na visão em grade */}
            {expanded === null && (description || (features && features.length > 0)) && (
              <div className="mb-6">
                {description && (
                  <p className="text-gray-100 text-[14px] leading-relaxed">
                    {description}
                  </p>
                )}
                {features && features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {features.map((feature) => (
                      <span
                        key={feature.name}
                        style={{ color: feature.color }}
                        className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[12px] font-medium"
                      >
                        {feature.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {isLoading ? (
              <p className="text-center text-gray-200 py-10">
                Carregando imagens...
              </p>
            ) : images.length === 0 ? (
              <p className="text-center text-gray-300 py-10">
                Nenhuma imagem encontrada para este projeto.
              </p>
            ) : (
              <ul
                className="grid gap-4 transition-all duration-500 relative"
                style={{
                  gridTemplateColumns:
                    expanded === null ? (isMobile ? "1fr" : "1fr 1fr") : "1fr",
                  filter: expanded !== null ? "blur(10px)" : "none",
                }}
              >
                {images.map((img, i) => (
                  <li
                    key={`${img.name}-${i}`}
                    onClick={() => openImage(i)}
                    className="cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:opacity-90"
                  >
                    <div
                      className="rounded-2xl overflow-hidden transition-all duration-500"
                      style={{ height: "300px" }}
                    >
                      <img
                        src={img.src}
                        alt={img.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* IMAGEM EXPANDIDA — ALTURA CONTROLADA */}
            {expanded !== null && (
              <div
                className="absolute left-1/2 top-0 z-[100] flex justify-center
                items-start transition-all duration-500"
                style={{
                  transform: "translateX(-50%)",
                  width: "100%",
                  height: "60vh",
                  paddingTop: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={images[expanded].src}
                  alt={images[expanded].name}
                  className={`
                    max-h-full max-w-full object-contain rounded-2xl shadow-2xl
                    transition-opacity transition-transform
                    duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${expanded !== null ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                  `}
                  style={{
                    transformOrigin: "top center",
                  }}
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      type="button"
                      aria-label="Imagem anterior"
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-[110] bg-black/60 text-white
                      w-10 h-10 rounded-full flex items-center justify-center
                      hover:bg-black/80 active:scale-90 transition-all duration-300"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={goNext}
                      type="button"
                      aria-label="Próxima imagem"
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-[110] bg-black/60 text-white
                      w-10 h-10 rounded-full flex items-center justify-center
                      hover:bg-black/80 active:scale-90 transition-all duration-300"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
