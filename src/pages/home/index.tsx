import SkillsSection from "./skill-section";
import MyWork from "./my-work-section";
import Hero from "./hero-section";
import MyProject from "./my-projects-section";

export default function Home() {
  return (
    <main className="md:w-[100%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] md:mx-auto overflow-x-hidden max-w-[1700px]">
      <Hero />
      <MyWork />
      <SkillsSection />
      <MyProject />
    </main>
  );
}
