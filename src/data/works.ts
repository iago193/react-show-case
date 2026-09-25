import { imagesProjects } from "../assets";
import colors from "./colors";

const works = [
  {
    title: "Lovyon",
    description:
      "Lovyon é uma plataforma completa de descoberta e venda de ingressos para eventos, estilo Fever/GetYourGuide, que desenvolvo do zero como freelancer, atuando no back-end e no front-end. Cobre toda a jornada, da criação do evento pelo produtor até a compra pelo cliente final, pensada para o mercado europeu (euros, cidades europeias e interface em 5 idiomas: inglês, português, espanhol, francês e italiano).",
    image: imagesProjects.lovyon,
    features: [
      { name: "next", color: colors.NextColor },
      { name: "javascript", color: colors.JavaScriptColor },
      { name: "TypeScript", color: colors.TypeScriptColor },
      { name: "PostgreSql", color: colors.NodeColor },
      { name: "Node", color: colors.NodeColor },
      { name: "Docker", color: colors.DockerColor },
      { name: "Express", color: colors.ExpressColor },
    ],

    url: "https://lovyon.com/",
    galleryKey: "lovyon",
  },

  {
    title: "Agente de IA",
    description:
      "Agente de IA desenvolvido para atendimento automatizado da NEW MARKET, focado em suporte ao cliente em mercados autônomos.",
    image: imagesProjects.n8n,
    features: [
      { name: "n8n", color: colors.NextColor },
      { name: "SupaBase", color: colors.NodeColor },
      { name: "PostgreSql", color: colors.NodeColor },
      { name: "Docker", color: colors.DockerColor },
    ],

    url: "",
    galleryKey: "n8n",
  },

  {
    title: "Protocolo Seco",
    description:
      "Protocolo Seco é um método prático e estratégico focado na redução de gordura corporal de forma rápida e eficiente, sem dietas extremas ou sofrimento. combinações alimentares inteligentes e um plano estruturado para acelerar o processo de emagrecimento.",
    image: imagesProjects.protocoloseco,
    features: [
      { name: "JavaScript", color: colors.JavaScriptColor },
      { name: "react", color: colors.NextColor },
      { name: "TypeScript", color: colors.TypeScriptColor },
      { name: "Tailwind", color: colors.TailwindColor },
    ],

    url: "",
    galleryKey: "protocoloseco",
  },

  {
    title: "BrasilNow",
    description:
      "BrasilNow é um site de notícias desenvolvido com Next.js, React e TypeScript, focado em consumo de APIs e renderização dinâmica de conteúdo. A aplicação consome feeds RSS para exibir notícias atualizadas por categoria (Geral, Economia, Política, Mundo e Saúde).",
    image: imagesProjects.brasilnow,
    features: [
      { name: "JavaScript", color: colors.JavaScriptColor },
      { name: "Next", color: colors.NextColor },
      { name: "TypeScript", color: colors.TypeScriptColor },
      { name: "Tailwind", color: colors.TailwindColor },
    ],

    url: "https://github.com/iago193/brasilnow.git",
    galleryKey: "brasilnow",
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
    galleryKey: "smartStock",
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
    galleryKey: "reactShowCase",
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
    galleryKey: "schooldesk",
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
    galleryKey: "elitePizzaria",
  },
];

export default works;
