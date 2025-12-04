import { Header } from "./components/header";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SkillsSection from "./components/skill-section";
import Work from "./components/work-section";
import Hero from "./components/hero-section";
import Project from "./components/projects-section";
import Contact from "./components/contact-section";

function App() {
  return (
    <>
      <Header />
      <main className="md:w-[100%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] md:mx-auto overflow-x-hidden max-w-[1700px]">
        <Hero />
        <Work />
        <Project />
        <SkillsSection />
        <Contact />
      </main>
      < ToastContainer />
    </>
  );
}

export default App;
