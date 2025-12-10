import works from "../data/works";
import github from "../assets/img/github-card.png";
import { GrGallery } from "react-icons/gr";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";
import type { GalleryItem } from "../types/gallery";
import { toast } from "react-toastify";

export default function MyProject() {
  const [isgalleryOpen, setIsGalleryOpen] = useState(false);
  const [imagesGallery, setImagesGallery] = useState<GalleryItem[]>([]);
  const [titleGallery, setTitleGallery] = useState("");

  useEffect(() => {
    if (isgalleryOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isgalleryOpen]);

  const openGallery = (images: GalleryItem[], title: string) => {
    setImagesGallery(images);
    setTitleGallery(title);
    setIsGalleryOpen(true);
  };

  // Estado de inclinação de cada card
  const [tiltStyles, setTiltStyles] = useState<{ [key: number]: string }>({});

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyles((prev) => ({
      ...prev,
      [index]: `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    }));
  };

  const handleMouseLeave = (index: number) => {
    setTiltStyles((prev) => ({
      ...prev,
      [index]: `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`,
    }));
  };

  // ---------- ANIMAÇÃO AO ENTRAR NO VIEWPORT ----------
  const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    const cards = document.querySelectorAll("#project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  // -----------------------------------------------------

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center mx-2"
    >
      <Gallery
        images={imagesGallery}
        title={titleGallery}
        isGalleryOpen={isgalleryOpen}
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

        <div className="w-full pb-10 flex flex-nowrap overflow-x-auto md:flex-wrap px-2">
          {works.map((work, index) => (
            <div
              key={index}
              id="project-card"
              data-index={index}
              className="bg-blue-700/50 h-[450px] w-[290px] min-w-[290px] rounded-2xl mr-6 mb-6
                         transition-all duration-700 ease-out"
              style={{
                transform: `
                  ${
                    tiltStyles[index] ||
                    "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)"
                  }
                  ${
                    !visibleCards[index]
                      ? " translateX(-80px)"
                      : " translateX(0px)"
                  }
                `,
                opacity: visibleCards[index] ? 1 : 0,
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
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
                    className="bg-black/90 text-amber-50 rounded-[50%] flex justify-center items-center 
                    active:scale-90 w-6 shadow-[inset_0_0_6px_2px_rgba(255,255,255,0.2)]"
                  >
                    <GrGallery size={12} />
                  </button>

                  <button
                    type="button"
                    className="bg-black/90 block p-0.5 rounded-[50%] w-6 
                    active:scale-90 shadow-[inset_0_0_6px_2px_rgba(255,255,255,0.2)]"
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

              <p className="text-[12px] mt-4 px-4">
                {work.description}
              </p>

              <div className="flex flex-wrap px-4 gap-2 mt-6 text-[10px]">
                {work.features.map((feature, i) => (
                  <span key={i} style={{ color: feature.color }}>
                    {feature.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
