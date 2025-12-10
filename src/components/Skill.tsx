import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { imagesSkills } from "../assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SkillKey = keyof typeof imagesSkills;

export default function SkillsSection() {

  const allSkills: SkillKey[] = [
    "css","html","js","ts","mysql","mongo","git","github",
    "react","next","node","docker","tailwind"
  ];

  const [index, setIndex] = useState(0);

  const paginate = (dir:number) =>
    setIndex(prev => (prev + dir + allSkills.length) % allSkills.length);

  // ====== DRAG FLUIDO ==========
  const dragStartX = useRef(0);
  const dragStartTime = useRef(0);
  const dragging = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragStartTime.current = Date.now();
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if(!dragging.current) return;

    const diff = e.clientX - dragStartX.current;

    if(Math.abs(diff) > 65){
      // VELOCIDADE
      const dt = (Date.now() - dragStartTime.current) / 1000;
      const speed = Math.abs(diff/dt);

      // quantos itens pular
      let jump = 1;

      if(speed > 2300) jump = 2;
      if(speed > 3900) jump = 3;

      paginate(diff > 0 ? -jump : +jump);

      dragStartX.current = e.clientX;
      dragStartTime.current = Date.now();
    }
  };

  const onPointerUp = () => {
    dragging.current = false;
  };
  // =======================


  const ref = useRef(null);
  const isInView = useInView(ref, { margin:"-200px" });



  return (
    <section className="w-full mt-10 p-4" id="skills">

      <h2 className={`text-emerald-400 font-bold px-2 vend-sans text-4xl`}>
        Habilidades
      </h2>

      <p className="text-[#555353] px-2 mb-8 text-[14px]">
        ( Puxe para os lados para ver as habilidades. )
      </p>


      <div className="relative border-4 border-blue-700/40 rounded-2xl p-10 overflow-hidden flex flex-col items-center">

        <h3 className="text-gray-400 mb-5 text-xl">Tecnologias</h3>


        <div className="relative w-full flex items-center justify-center">

          <button
            onClick={()=>paginate(-1)}
            className="absolute left-4 z-1 bg-blue-700/30 hover:bg-blue-700/50 p-3 rounded-full"
          >
            <ChevronLeft size={26}/>
          </button>

          <div
            ref={ref}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="relative w-full flex items-center justify-center select-none min-h-[260px]"
            style={{
              perspective: 1600,
            }}
          >
            {allSkills.map((skill, i) => {

              const diff = (i - index + allSkills.length) % allSkills.length;
              const dist = diff > allSkills.length/2 ? diff - allSkills.length : diff;
              const abs = Math.abs(dist);

              const scale = 1.75 - abs * 0.21;
              const opacity = 1 - abs * 0.28;
              const x = dist * 140;
              const z = -abs * 240;
              const rotateY = dist * -28;

              const zIndex = 100 - abs;

              return (
                <motion.img
                  key={skill}
                  src={imagesSkills[skill]}
                  initial={{ opacity:0 }}
                  animate={
                    isInView ? {
                      opacity,
                      scale,
                      x,
                      z,
                      rotateY,
                    } : {}
                  }
                  transition={{ duration:.8, ease:"easeOut" }}
                  className="object-contain absolute"
                  style={{
                    width:120,
                    height:120,
                    transformStyle:"preserve-3d",
                    zIndex
                  }}
                  draggable={false}
                />
              );
            })}

          </div>


          <button
            onClick={()=>paginate(1)}
            className="absolute right-4 z-1 bg-blue-700/30 hover:bg-blue-700/50 p-3 rounded-full"
          >
            <ChevronRight size={26}/>
          </button>

        </div>

        <div className="flex gap-2 mt-6">
          {allSkills.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-white scale-125"
                  : "bg-white/25"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
