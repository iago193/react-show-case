import Logo from "../assets/img/logo.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-10 px-6 mb-40 lg:mb-5 mt-20 sm:mt-10 md:mt-50"
    >

      {/* Texto */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <p className="text-[#1f1f1f] px-2 mb-4 text-md">Web Developer</p>

        <h2 className="font-bold vend-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Olá, tudo bom?
        </h2>

        <h2 className="text-emerald-400 font-bold vend-sans drop-shadow-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-3">
          Sou o Iago Bruno
        </h2>

        <p className="mt-6  sm:text-md md:text-lg">
          Desenvolvedor Full Stack especializado em JavaScript/TypeScript, com
          foco em soluções robustas usando Node, React, Next e MySql/MongoDb.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
          <a
            href="https://www.linkedin.com/in/iago-bruno-aa1630355/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-44 flex justify-center items-center gap-2 bg-emerald-400 text-black font-medium rounded-2xl py-3 hover:bg-emerald-500 transition-all"
          >
            <FaLinkedin className="text-2xl" />
            Linkedin
          </a>

          <a
            href="https://github.com/iago193"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-44 flex justify-center items-center gap-2 bg-emerald-400 text-black font-medium rounded-2xl py-3 hover:bg-emerald-500 transition-all"
          >
            <FaGithub className="text-2xl" />
            Github
          </a>
        </div>
      </div>

      {/* Imagem */}
      <div className="lg:w-1/2 w-full flex justify-center bubble-border">
        <img
          className="rounded-full max-w-[450px] w-[90%] sm:w-[60%] lg:w-[500px] shadow-lg bubble-img"
          src={Logo}
          alt="Iago Bruno"
        />
      </div>
    </section>
  );
}
