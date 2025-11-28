import { imagesProjects } from "../assets";
import colors from "./colors";

const works = [
  {
    title: "Portfólio 3D",
    description:
      "Projeto em React + Spline.Projeto em React + Spline.Projeto em React + Spline.Projeto em React + Spline.Projeto em React + Spline.Projeto em React + Spline.Projeto em React + Spline.Projeto em React + Spline.Projeto em React + Spline.",
    image: imagesProjects.portfolio,
    features: [
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind", color: "#38BDF8" },
    ],

    url: 'https://github.com/iago193/3D-Portfolio.git',
  },
  {
    title: "Portfólio 3D",
    description: "Projeto em React + Spline.",
    image: imagesProjects.portfolio,
    features: [
      { name: "JavaScript", color: colors.JavaScript },
      { name: "TypeScript", color: colors.TypeScript },
      { name: "Tailwind", color: colors.Tailwind },
    ],
  },
];

export default works;
