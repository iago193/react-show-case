import { Link } from "react-scroll";

export function Header() {
  return (
    <header className="w-full lg:w-[90%] xl:w-[80%] 2xl:w-[70%] fixed z-2 top-0 md:top-10 max-w-7xl">
      <div className="bg-blue-700/50 backdrop-blur-md flex justify-between p-2 md:rounded-xl">
        <h2
          className="text-emerald-400 google-sans-code text-3xl hidden lg:block">
          {'const name = useDevName("Iago Bruno");'}
        </h2>
        <nav className="text-gray-300 font-bold md:text-2xl text-[20px]">
          <ul className="flex gap-4">
            <li>
              <Link to="hero-section" smooth={true} duration={500} offset={-100}>
                Home
              </Link>
            </li>
            <li>
              <Link to="my-work" smooth={true} duration={500} offset={-100}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-100}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-100}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
