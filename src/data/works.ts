import { imagesProjects } from "../assets";
import colors from "./colors";
import gallery from "../utils/images-gallery";

const works = [
  {
    title: "BrasilNow",
    description:
      "BrasilNow é um site de notícias desenvolvido com Next.js, React e TypeScript, focado em consumo de APIs e renderização dinâmica de conteúdo. A aplicação consome feeds RSS para exibir notícias atualizadas por categoria (Geral, Economia, Política, Mundo e Saúde).",
    image: imagesProjects.brasilnow,
    features: [
      { name: "JavaScript", color: colors.JavaScriptColor },
      { name: "Next", color: colors.NextColor },
      { name: "TypeScript", color: colors.TypeScriptColor },
      { name: "Tailwind", color: colors.TailwindColor }
    ],

    url: "https://github.com/iago193/brasilnow.git",
    gallery: gallery.brasilnow,
  },

  {
    title: "Smart Stock",
    description:
      "Smart Stock é um sistema inteligente de controle de estoque desenvolvido com Next.js, Express e Prisma, focado no gerenciamento de produtos, vendas e movimentações, com arquitetura escalável, API REST e atualização em tempo real.",
    image: imagesProjects.SmartStock,
    features: [
      { name: "JavaScript", color: colors.JavaScriptColor },
      { name: "Next", color: colors.NextColor },
      { name: "TypeScript", color: colors.TypeScriptColor },
      { name: "Tailwind", color: colors.TailwindColor },
      { name: "Node", color: colors.NodeColor },
    ],

    url: "https://github.com/iago193/smart-stock-app.git",
    gallery: gallery.smartStock,
  },

  {
    title: "Portfólio",
    description:
      "Um portfólio dinâmico em React JS com gráficos 3D imersivos e animações fluidas para uma experiência de usuário envolvente. Inclui seções interativas como Sobre, Educação, Projetos, Conectar e Contato. 🎨💻",
    image: imagesProjects.reactShowCase,
    features: [
      { name: "JavaScript", color: colors.JavaScriptColor },
      { name: "React", color: colors.ReactColor },
      { name: "TypeScript", color: colors.TypeScriptColor },
      { name: "Tailwind", color: colors.TailwindColor },
    ],

    url: "https://github.com/iago193/react-show-case",
    gallery: gallery.reactShowCase,
  },

  {
    title: "SchoolDesk",
    description:
      "SchoolDesk é uma aplicação web voltada para organização escolar, permitindo gerenciar tarefas, matérias, horários e anotações em um único ambiente. Com uma interface simples e intuitiva, o app facilita o acompanhamento da rotina acadêmica de alunos e professores.",
    image: imagesProjects.schooldesk,
    features: [
      { name: "JavaScript", color: colors.JavaScriptColor },
      { name: "React", color: colors.ReactColor },
      { name: "TypeScript", color: colors.TypeScriptColor },
      { name: "Tailwind", color: colors.TailwindColor },
      { name: "Prisma", color: colors.PrismaColor },
      { name: "Node", color: colors.NodeColor },
    ],
    url: "https://github.com/iago193/SchoolDesk",
    gallery: gallery.schooldesk,
  },

  {
    title: "ElitePizzaria",
    description:
      "ElitePizzaria é um sistema completo de gerenciamento para pizzarias, desenvolvido com PHP e integrado a banco de dados. O projeto permite controlar pedidos, produtos, estoque e atendimento com uma interface moderna e eficiente, facilitando o fluxo operacional do estabelecimento.",
    image: imagesProjects.elitePizzaria,
    features: [
      { name: "PHP", color: colors.PHPColor },
      { name: "MySQL", color: colors.MySQLColor },
      { name: "JavaScript", color: colors.JavaScriptColor },
      { name: "CSS", color: colors.CSSColor },
    ],
    url: "",
    gallery: gallery.elitePizzaria,
  },
];

export default works;
