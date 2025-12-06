import type { GalleryProps } from "../types/gallery";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function Gallery({
  images,
  isGalleryOpen,
  onClose,
  title,
}: GalleryProps) {
  const [showAnim, setShowAnim] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

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

  if (!isGalleryOpen) return null;

  const openImage = (i: number) => setExpanded(i);
  const closeImage = () => setExpanded(null);

  return (
    <section className="w-full fixed top-10 md:top-25 inset-0 z-2 flex justify-center items-start py-10 px-2">
      <div
        className="bg-blue-700/50 backdrop-blur-md w-full md:w-[70%] rounded-2xl relative 
        transition-all duration-500 ease-out overflow-hidden"
        style={{
          opacity: showAnim ? 1 : 0,
          transform: showAnim
            ? "translateY(0px) scale(1)"
            : "translateY(40px) scale(0.95)",
        }}
      >
        {/* Header */}
        <div className="bg-white/30 backdrop-blur-md p-4 rounded-t-2xl shadow-2xl relative z-20">
          <h2 className="w-full text-emerald-400 vend-sans text-[18px] px-2">
            Galeria de imagens para {title}
          </h2>
        </div>

        {/* BOTÃO VOLTAR */}
        {expanded !== null && (
          <div className="absolute top-2 right-20 z-[90]">
            <button
              onClick={closeImage}
              className="text-xl flex justify-center items-center bg-white/50
              backdrop-blur-md w-10 h-10 rounded-full transition-all duration-300
              hover:bg-white/70 active:scale-90"
            >
              <FaChevronLeft />
            </button>
          </div>
        )}

        {/* BOTÃO FECHAR */}
        <div className="absolute top-2 right-4 shadow-2xl z-[90]">
          <button
            onClick={() => {
              setShowAnim(false);
              setTimeout(() => onClose(), 200);
            }}
            className="text-2xl flex justify-center items-center bg-white/50
              backdrop-blur-md w-10 h-10 rounded-full transition-all duration-300 
              hover:bg-white/70 active:scale-90"
          >
            <RiCloseLargeFill />
          </button>
        </div>

        {/* Conteúdo com ALTURA CONTROLADA */}
        <div
          ref={scrollRef}
          className="overflow-y-auto max-h-[70vh] relative transition-all duration-500"
        >
          <div className="p-4 relative">
            <ul
              className="grid gap-4 transition-all duration-500 relative"
              style={{
                gridTemplateColumns:
                  expanded === null
                    ? (window.innerWidth < 768 ? "1fr" : "1fr 1fr")
                    : "1fr",
                filter: expanded !== null ? "blur(10px)" : "none",
              }}
            >
              {images.map((img, i) => (
                <li
                  key={i}
                  onClick={() => openImage(i)}
                  className="cursor-pointer transition-all duration-500 ease-out"
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
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
