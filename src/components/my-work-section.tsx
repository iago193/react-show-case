import { motion } from "framer-motion";
import { FaHtml5,FaCog } from "react-icons/fa";
import { style } from "../styles";
import { useCallback } from "react";

export default function MyWork() {

  const calcTilt = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 7;
    const rotateX = ((midY - y) / midY) * 7;

    return { rotateX, rotateY };
  }, []);


  return (
    <section
      id="my-work"
      className="w-full flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 mb-20"
    >

      {/* Lado esquerdo */}
      <div className="w-full md:w-1/2 p-4">

        {/* Backend */}
        <motion.div
          className="bg-blue-700/50 p-10 shadow-2xl text-amber-50 w-full min-w-[350px] max-w-[600px] rounded-2xl relative"
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
          <div className="text-emerald-400 absolute top-6 right-8">
            <FaCog size={60} />
          </div>
          <h2 className={`${style.work.headerStyle}`}>Backend</h2>
          <p className={`${style.work.paragraph}`}>
            Atuo na integração entre o client-side e o banco de dados por meio
            de APIs bem estruturadas e escaláveis. Dou ênfase à performance
            das aplicações, utilizando recursos como programação assíncrona,
            execução paralela e processamento sob demanda em Node.js. Adoto
            práticas de TDD para garantir confiabilidade e mantenho uma
            arquitetura limpa e organizada, sempre alinhada aos princípios de
            Clean Code.
          </p>
        </motion.div>

        {/* Frontend */}
        <motion.div
          className="bg-blue-700/50 shadow-2xl p-10 mt-5 text-amber-50 w-full min-w-[350px] max-w-[600px] rounded-2xl relative"
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
          <div className="text-emerald-400 absolute top-6 right-8">
            <FaHtml5 size={60} />
          </div>
          <h2 className={`${style.work.headerStyle}`}>Frontend</h2>
          <p className={`${style.work.paragraph}`}>
            Desenvolvo interfaces modernas, responsivas e de alta performance,
            com foco em interatividade e experiência do usuário. Utilizo
            componentes reutilizáveis e estilos consistentes, sempre seguindo
            boas práticas de UI/UX. Mantenho uma estrutura de projeto bem
            organizada, com pastas e componentes claramente definidos,
            garantindo fácil manutenção, escalabilidade e uma estética
            profissional em cada aplicação.
          </p>
        </motion.div>

      </div>

      {/* Lado direito */}
      <motion.div
        className="p-10 w-full min-w-[350px] max-w-[600px]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-emerald-400 vend-sans text-[45px]">Meu Trabalho</h1>
        <p className={`${style.work.paragraph}`}>
          Sou desenvolvedor Full Stack focado em criar aplicações web modernas e
          eficientes. Trabalho com JavaScript e TypeScript, utilizando Node.js
          no backend e React no frontend. Tenho experiência no desenvolvimento
          de APIs, integração de sistemas e uso do SQL Server como banco de
          dados principal. Atualmente, estou aprimorando minhas habilidades em
          Inteligência Artificial, Machine Learning, criação de dashboards
          interativos em React e otimização de performance no backend com
          Node.js.
        </p>
      </motion.div>

    </section>

  );
}
