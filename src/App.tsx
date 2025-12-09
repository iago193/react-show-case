import { Header } from "./components/NavBar";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SkillsSection from "./components/Skill";
import Work from "./components/Work";
import Hero from "./components/Hero";
import Project from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <main className="w-full lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto max-w-7xl overflow-x-hidden">
        <Header />
        <Hero />
        <Work />
        <Project />
        <SkillsSection />
        <ToastContainer />
      </main>
      <Contact />
    </>
  );
}

export default App;
