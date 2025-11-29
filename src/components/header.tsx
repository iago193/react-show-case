import { Link } from "react-scroll";

export function Header() {
  return (
    <header className="w-full fixed z-2 top-5 md:top-10">
      <div className="bg-blue-700/50 backdrop-blur-md flex justify-between w-[100%] md:w-[70%] mx-auto p-2 md:rounded-[5px]">
        <h2
          className="text-emerald-400 google-sans-code text-3xl hidden md:block">
          {'const name = useDevName("Iago Bruno");'}
        </h2>
        <nav className="text-gray-300 font-bold md:text-2xl text-[20px]">
          <ul className="flex gap-4">
            <li>
              <Link
                to="hero-section"
                smooth={true}
                duration={500}
                offset={-300} // ajusta a altura por causa do header fixo
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="my-work" smooth={true} duration={500} offset={-300}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-100}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="footer" smooth={true} duration={500} offset={-100}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
