import { Header } from "./components/header";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SkillsSection from "./components/skill-section";
import Work from "./components/work-section";
import Hero from "./components/hero-section";
import Project from "./components/projects-section";
import Contact from "./components/contact";

function App() {
  return (
    <main className="w-full lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto max-w-7xl">
      <Header />
      <Hero />
      <Work />
      <Project />
      <SkillsSection />
      <Contact />
      <ToastContainer />
    </main>
  );
}

export default App;
