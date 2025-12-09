import { TbBrandWhatsappFilled } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px" });

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
          bg-gradient-to-t from-black/10 via-black/40 to-black/60 
          backdrop-blur-xl shadow-xl shadow-black/30 rounded-xl
        "
      >

        {/* TÍTULO COM PARALLAX */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-emerald-400 vend-sans mb-10 text-[45px]"
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
          <h3 className="text-gray-400 text-[48px] mb-4">
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

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
