import { useState } from "react";
import { Link } from "react-scroll";

export function Header() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setIsNavBarOpen((prev) => !prev);
  };

  return (
    <header className="w-full lg:w-[90%] xl:w-[80%] 2xl:w-[70%] fixed z-2 top-0 md:top-10 max-w-7xl">
      <div className="bg-blue-700/50 backdrop-blur-md flex justify-between items-center p-2 md:rounded-xl">
        <h2 className="text-emerald-400 google-sans-code text-3xl hidden md:block">
          {'const name = useDevName("Iago Bruno");'}
        </h2>
        <button
          className="text-gray-300 text-lg flex items-center gap-4 relative px-2"
          type="button"
          onClick={toggleNavBar}
        >
          Menu
          {/* Ícone Hambúrguer / X */}
          <div className="relative w-7 h-7 flex items-center justify-center">
            {/* Linha 1 */}
            <span
              className={`
                absolute block h-[3px] w-7 bg-gray-300 rounded transition-all duration-300
                ${
                  isNavBarOpen
                    ? "rotate-45 translate-y-0"
                    : "-translate-y-2 rotate-0"
                }
              `}
            />

            {/* Linha 2 (a linha do meio some) */}
            <span
              className={`
                absolute block h-[3px] w-7 bg-gray-300 rounded transition-all duration-300
                ${
                  isNavBarOpen
                    ? "opacity-0 translate-x-3"
                    : "opacity-100 translate-x-0"
                }
              `}
            />

            {/* Linha 3 */}
            <span
              className={`
                absolute block h-[3px] w-7 bg-gray-300 rounded transition-all duration-300
                ${
                  isNavBarOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-2 rotate-0"
                }
              `}
            />
          </div>
        </button>
      </div>

      <nav
        className={`
          text-gray-300 bg-black/50 backdrop-blur-lg font-bold rounded-b-2xl
          overflow-hidden transition-all duration-500
          ${isNavBarOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-4 text-4xl py-10 px-5">
          <li>
            <Link onClick={toggleNavBar} to="hero" offset={-250}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleNavBar} to="work" offset={-150}>
              Sobre
            </Link>
          </li>
          <li>
            <Link onClick={toggleNavBar} to="projects">
              Projetos
            </Link>
          </li>
          <li>
            <Link onClick={toggleNavBar} to="skills" offset={-250}>
              Habilidades
            </Link>
          </li>
          <li>
            <Link onClick={toggleNavBar} to="contact">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
