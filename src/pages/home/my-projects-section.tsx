import works from "../../data/works";

export default function MyProject() {
  return (
    <section id="projects" className="w-full min-h-screen flex items-center">
      <div className="w-full flex flex-col">
        <h1 className="mb-[30px]">texte</h1>
        <div className="w-full pb-10 flex overflow-x-auto px-2">
          {works.map((work, index) => (
            <div
              key={index}
              id="project-card"
              className="bg-blue-700/50  h-[450px] w-[300px] rounded-2xl shadow-2xl mr-10"
            >
              <div className="w-full px-6 pt-6">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full rounded-2xl h-[170px] object-cover"
                />
              </div>
              <h2 className="vend-sans text-emerald-400 font-bold text-[22px] text-center mt-4">
                {work.title}
              </h2>
              <p className="text-center text-[12px] text-[#C9C9C9] mt-4 px-5">
                {work.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6 text-[10px]">
                {work.features.map((feature, i) => (
                  <span key={i} style={{ color: feature.color }}>
                    {feature.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
