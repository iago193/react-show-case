import { TbBrandWhatsappFilled } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import {
  MdMarkEmailUnread,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px" });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (theme === "dark" || (theme === "system" && systemPrefersDark)) {
      document.body.style.backgroundColor = "rgb(6, 9, 26)";
      document.body.style.color = "#eef1f7";
    } else if (
      theme === "light" ||
      (theme === "system" && !systemPrefersDark)
    ) {
      document.body.style.backgroundColor = "rgb(247, 248, 255)";
      document.body.style.color = "#1f1d1d";
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSettings = (theme: string) => {
    setTheme(theme);
  };

  return (
    <section id="contact" className="w-full mt-20">
      {/* ANIMAÇÃO DA SECTION */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 120 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                },
              }
            : {}
        }
        className="
          h-[50vh] flex flex-col justify-center items-center px-2 
          bg-black/70 backdrop-blur-xl shadow-xl shadow-black/30
        "
      >
        {/* TÍTULO COM PARALLAX */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-emerald-400 font-bold vend-sans mb-12 text-4xl"
        >
          Contato
        </motion.h2>

        {/* IMAGEM + TEXTO COM FADE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="relative mt-[-40px]"
        >
          <h3 className="text-gray-300 text-2xl sm:text-4xl vend-sans mb-4">
            iago.silva6969@gmail.com
          </h3>
        </motion.div>

        {/* ÍCONES — ANIMAÇÃO COM DELAY INDIVIDUAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center w-full"
        >
          <div className="text-blue-500 flex justify-center gap-5">
            {/* WHATS */}
            <motion.a
              href="https://wa.me/558491454957"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <TbBrandWhatsappFilled size={40} />
            </motion.a>

            {/* GITHUB */}
            <motion.a
              href="https://github.com/iago193"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <BsGithub size={40} />
            </motion.a>

            {/* EMAIL */}
            <motion.a
              href="mailto:iago.silva6969@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <MdMarkEmailUnread size={40} />
            </motion.a>

              {/* LINKEDIN */}
            <motion.a
              href="https://www.linkedin.com/in/iago-bruno-aa1630355/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <SiLinkedin size={40} />
            </motion.a>
          </div>
        </motion.div>

        <div className="mt-10 text-amber-50 flex gap-4 p-2.5 rounded-full border border-amber-50 relative">
          <button
            className={`relative ${
              theme === "light"
                ? "bg-gray-400/50 rounded-full p-1.5 btn-glow"
                : "p-1.5"
            }`}
            onClick={() => handleSettings("light")}
            type="button"
          >
            <MdOutlineLightMode size={25} />
          </button>

          <button
            className={`relative ${
              theme === "system"
                ? "bg-gray-400/50 rounded-full p-1.5 btn-glow"
                : "p-1.5"
            }`}
            onClick={() => handleSettings("system")}
            type="button"
          >
            <HiOutlineComputerDesktop size={25} />
          </button>

          <button
            className={`relative ${
              theme === "dark"
                ? "bg-gray-400/50 rounded-full p-1.5 btn-glow"
                : "p-1.5"
            }`}
            onClick={() => handleSettings("dark")}
            type="button"
          >
            <MdOutlineDarkMode size={25} />
          </button>

        </div>
        <p className="text-gray-300 mt-10">
          Feito com <span className="text-red-500">❤️</span> por mim:{" "}
          <a
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/iago193/react-show-case"
          >
            GitHub
          </a>
        </p>
      </motion.div>
    </section>
  );
}
