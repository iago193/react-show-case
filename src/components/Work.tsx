import { motion } from "framer-motion";
import { FaHtml5, FaCog } from "react-icons/fa";
import { useCallback } from "react";

export default function MyWork() {
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
      id="work"
      className="w-full flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 mb-20"
    >
      {/* Lado esquerdo */}
      <div className="w-full md:w-1/2 p-2 md:p-4">
        {/* Backend */}
        <motion.div
          className="bg-blue-700/50 p-5 sm:p-10 text-amber-50 w-full min-w-[350px] max-w-[590px] rounded-2xl relative"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          onMouseMove={(e) => {
            const { rotateX, rotateY } = calcTilt(e);
            e.currentTarget.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `perspective(700px) rotateX(0deg) rotateY(0deg)`;
          }}
          style={{ transition: "transform .12s ease-out" }}
        >
          <div className="text-emerald-400 absolute top-4 sm:top-6 right-8">
            <FaCog size={60} />
          </div>
          <h2 className={`text-emerald-400 vend-sans font-bold text-4xl`}>Backend</h2>
          <p className={`mt-10 text-md`}>
            Construo APIs REST com Node.js, NestJS, Express e .NET, ligando o
            client-side ao banco de dados de forma organizada e escalável.
            Trabalho com PostgreSQL, MySQL e MongoDB conforme a necessidade do
            projeto, e crio automações e agentes de IA com n8n para eliminar
            trabalho manual. Mantenho uma arquitetura limpa, alinhada aos
            princípios de Clean Code.
          </p>
        </motion.div>

        {/* Frontend */}
        <motion.div
          className="bg-blue-700/50 p-5 sm:p-10 mt-5 text-amber-50 w-full min-w-[350px] max-w-[600px] rounded-2xl relative"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          onMouseMove={(e) => {
            const { rotateX, rotateY } = calcTilt(e);
            e.currentTarget.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `perspective(700px) rotateX(0deg) rotateY(0deg)`;
          }}
          style={{ transition: "transform .12s ease-out" }}
        >
          <div className="text-emerald-400 absolute top-4 sm:top-6 right-8">
            <FaHtml5 size={60} />
          </div>
          <h2 className={`text-emerald-400 vend-sans font-bold text-4xl`}>Frontend</h2>
          <p className={`mt-10 text-md`}>
            Desenvolvo interfaces modernas, responsivas e de alta performance
            com React e Next.js, com foco em interatividade e experiência do
            usuário. Uso Tailwind CSS e componentes reutilizáveis, mantendo o
            projeto bem organizado e fácil de manter. Levo essa mesma atenção
            a detalhes para o mobile, criando apps multiplataforma com
            Flutter.
          </p>
        </motion.div>
      </div>

      {/* Lado direito */}
      <motion.div
        className="p-5 w-full min-w-[350px] max-w-[600px]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-emerald-400 vend-sans font-bold text-4xl">Meu Trabalho</h1>
        <p className={`mt-10 text-lg`}>
          Sou desenvolvedor Full Stack, de Macaíba (RN), e gosto de acompanhar
          o projeto do início ao fim — do modelo de dados até a tela que o
          usuário toca. Trabalho principalmente com JavaScript e TypeScript:
          Node.js, NestJS e .NET no backend, React e Next.js no frontend, e
          Flutter quando o produto pede um app mobile. Uso PostgreSQL, MySQL
          e MongoDB no dia a dia, e tenho me dedicado a automações e agentes
          de IA com n8n para integrar sistemas e economizar tempo. Estou
          aberto a oportunidades remotas, híbridas ou presenciais.
        </p>

        <a
          href="/Curriculo_Iago_Bruno.pdf"
          className="mt-20 inline-block rounded-full p-4 py-3 shadow-2xl bg-blue-400 hover:bg-blue-600 transition-all duration-300 hover:scale-105 text-amber-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          Currículo
        </a>
      </motion.div>
    </section>
  );
}
