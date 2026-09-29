import type { ReactNode } from "react";

interface Inventario {
  id: number;
  nome: string;
  icone: ReactNode;
  nivel: number;
  uso: string;
}

export const MOCK_INVENTARIO: Inventario[] = [
  {
    id: 1,
    nome: "TypeScript",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M5 2h2v1h-2zM11 2h2v1h-2zM4 3h1v1h-1zM13 3h1v1h-1zM4 4h1v1h-1zM13 4h1v1h-1zM4 5h1v1h-1zM13 5h1v1h-1zM4 6h1v1h-1zM13 6h1v1h-1zM2 7h2v1h-2zM14 7h2v1h-2zM2 8h2v1h-2zM14 8h2v1h-2zM4 9h1v1h-1zM13 9h1v1h-1zM4 10h1v1h-1zM13 10h1v1h-1zM4 11h1v1h-1zM13 11h1v1h-1zM4 12h1v1h-1zM13 12h1v1h-1zM5 13h2v1h-2zM11 13h2v1h-2z" />
      </svg>
    ),
    nivel: 5,
    uso: "Minha linguagem principal: escrevo a lógica e os componentes com tipagem",
  },
  {
    id: 2,
    nome: "React",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M1 2h14v1h-14zM1 3h1v1h-1zM14 3h1v1h-1zM1 4h1v1h-1zM3 4h1v1h-1zM5 4h1v1h-1zM7 4h1v1h-1zM14 4h1v1h-1zM1 5h14v1h-14zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM3 7h6v1h-6zM14 7h1v1h-1zM1 8h1v1h-1zM14 8h1v1h-1zM1 9h1v1h-1zM3 9h4v1h-4zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM3 11h7v1h-7zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
      </svg>
    ),
    nivel: 5,
    uso: "Construo interfaces com componentes reutilizáveis e controle de estado.",
  },
  {
    id: 3,
    nome: "JavaScript",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M5 2h2v1h-2zM11 2h2v1h-2zM4 3h1v1h-1zM13 3h1v1h-1zM4 4h1v1h-1zM13 4h1v1h-1zM4 5h1v1h-1zM13 5h1v1h-1zM4 6h1v1h-1zM13 6h1v1h-1zM2 7h2v1h-2zM14 7h2v1h-2zM2 8h2v1h-2zM14 8h2v1h-2zM4 9h1v1h-1zM13 9h1v1h-1zM4 10h1v1h-1zM13 10h1v1h-1zM4 11h1v1h-1zM13 11h1v1h-1zM4 12h1v1h-1zM13 12h1v1h-1zM5 13h2v1h-2zM11 13h2v1h-2z" />
      </svg>
    ),
    nivel: 4,
    uso: "A base de tudo: interações, validações e consumo de APIs, tanto puro quanto por trás do TypeScript.",
  },
  {
    id: 4,
    nome: "Node.js",
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
      </svg>
    ),
    nivel: 4,
    uso: "Executo JavaScript fora do navegador, para criar servidores e ferramentas.",
  },
  {
    id: 5,
    nome: "Tailwind CSS",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M1 2h14v1h-14zM1 3h1v1h-1zM14 3h1v1h-1zM1 4h1v1h-1zM3 4h1v1h-1zM5 4h1v1h-1zM7 4h1v1h-1zM14 4h1v1h-1zM1 5h14v1h-14zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM3 7h6v1h-6zM14 7h1v1h-1zM1 8h1v1h-1zM14 8h1v1h-1zM1 9h1v1h-1zM3 9h4v1h-4zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM3 11h7v1h-7zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
      </svg>
    ),
    nivel: 3,
    uso: "Estilizo rápido e de forma consistente, direto nas classes do componente.",
  },
  {
    id: 6,
    nome: "Express",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M6 1h4v1h-4zM2 2h2v1h-2zM6 2h4v1h-4zM12 2h2v1h-2zM2 3h12v1h-12zM3 4h2v1h-2zM11 4h2v1h-2zM1 5h3v1h-3zM12 5h3v1h-3zM1 6h2v1h-2zM7 6h2v1h-2zM13 6h2v1h-2zM1 7h2v1h-2zM6 7h4v1h-4zM13 7h2v1h-2zM1 8h2v1h-2zM6 8h4v1h-4zM13 8h2v1h-2zM1 9h2v1h-2zM7 9h2v1h-2zM13 9h2v1h-2zM1 10h3v1h-3zM12 10h3v1h-3zM3 11h2v1h-2zM11 11h2v1h-2zM2 12h12v1h-12zM2 13h2v1h-2zM6 13h4v1h-4zM12 13h2v1h-2zM6 14h4v1h-4z" />
      </svg>
    ),
    nivel: 4,
    uso: "Crio rotas e APIs no back-end de forma simples e organizada.",
  },
  {
    id: 7,
    nome: "Git",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M2 1h2v1h-2zM12 1h2v1h-2zM1 2h1v1h-1zM4 2h1v1h-1zM11 2h1v1h-1zM14 2h1v1h-1zM1 3h1v1h-1zM4 3h1v1h-1zM11 3h1v1h-1zM14 3h1v1h-1zM2 4h2v1h-2zM12 4h2v1h-2zM3 5h1v1h-1zM12 5h1v1h-1zM3 6h1v1h-1zM12 6h1v1h-1zM3 7h1v1h-1zM11 7h1v1h-1zM3 8h1v1h-1zM10 8h1v1h-1zM3 9h1v1h-1zM8 9h2v1h-2zM3 10h1v1h-1zM6 10h2v1h-2zM3 11h3v1h-3zM2 12h2v1h-2zM1 13h1v1h-1zM4 13h1v1h-1zM1 14h1v1h-1zM4 14h1v1h-1zM2 15h2v1h-2z" />
      </svg>
    ),
    nivel: 4,
    uso: "Registro o histórico do código e trabalho em versões sem perder nada.",
  },
  {
    id: 8,
    nome: "HTML",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M5 2h2v1h-2zM11 2h2v1h-2zM4 3h1v1h-1zM13 3h1v1h-1zM4 4h1v1h-1zM13 4h1v1h-1zM4 5h1v1h-1zM13 5h1v1h-1zM4 6h1v1h-1zM13 6h1v1h-1zM2 7h2v1h-2zM14 7h2v1h-2zM2 8h2v1h-2zM14 8h2v1h-2zM4 9h1v1h-1zM13 9h1v1h-1zM4 10h1v1h-1zM13 10h1v1h-1zM4 11h1v1h-1zM13 11h1v1h-1zM4 12h1v1h-1zM13 12h1v1h-1zM5 13h2v1h-2zM11 13h2v1h-2z" />
      </svg>
    ),
    nivel: 5,
    uso: "Estruturo o conteúdo das páginas: títulos, textos, imagens, formulários e links.",
  },
  {
    id: 9,
    nome: "SQL",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M4 1h8v1h-8zM2 2h2v1h-2zM12 2h2v1h-2zM1 3h1v1h-1zM14 3h1v1h-1zM2 4h2v1h-2zM12 4h2v1h-2zM1 5h1v1h-1zM4 5h8v1h-8zM14 5h1v1h-1zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h2v1h-2zM13 7h2v1h-2zM1 8h1v1h-1zM3 8h10v1h-10zM14 8h1v1h-1zM1 9h1v1h-1zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h2v1h-2zM13 11h2v1h-2zM1 12h1v1h-1zM3 12h10v1h-10zM14 12h1v1h-1zM2 13h2v1h-2zM12 13h2v1h-2zM4 14h8v1h-8z" />
      </svg>
    ),
    nivel: 4,
    uso: "Consulto e organizo dados em bancos relacionais.",
  },
  {
    id: 10,
    nome: "CSS",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M5 2h2v1h-2zM11 2h2v1h-2zM4 3h1v1h-1zM13 3h1v1h-1zM4 4h1v1h-1zM13 4h1v1h-1zM4 5h1v1h-1zM13 5h1v1h-1zM4 6h1v1h-1zM13 6h1v1h-1zM2 7h2v1h-2zM14 7h2v1h-2zM2 8h2v1h-2zM14 8h2v1h-2zM4 9h1v1h-1zM13 9h1v1h-1zM4 10h1v1h-1zM13 10h1v1h-1zM4 11h1v1h-1zM13 11h1v1h-1zM4 12h1v1h-1zM13 12h1v1h-1zM5 13h2v1h-2zM11 13h2v1h-2z" />
      </svg>
    ),
    nivel: 5,
    uso: "Layouts responsivos e estilização de todos os meus projetos.",
  },
  {
    id: 11,
    nome: "Vite",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M1 2h14v1h-14zM1 3h1v1h-1zM14 3h1v1h-1zM1 4h1v1h-1zM3 4h1v1h-1zM5 4h1v1h-1zM7 4h1v1h-1zM14 4h1v1h-1zM1 5h14v1h-14zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM3 7h6v1h-6zM14 7h1v1h-1zM1 8h1v1h-1zM14 8h1v1h-1zM1 9h1v1h-1zM3 9h4v1h-4zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM3 11h7v1h-7zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
      </svg>
    ),
    nivel: 5,
    uso: "Rodo o ambiente de desenvolvimento e gero a versão otimizada para publicar.",
  },
  {
    id: 12,
    nome: "VS Code",
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Zm29-85 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z" />
      </svg>
    ),
    nivel: 5,
    uso: "Meu editor para escrever, testar e organizar o código.",
  },
  {
    id: 13,
    nome: "GitHub",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M2 1h2v1h-2zM12 1h2v1h-2zM1 2h1v1h-1zM4 2h1v1h-1zM11 2h1v1h-1zM14 2h1v1h-1zM1 3h1v1h-1zM4 3h1v1h-1zM11 3h1v1h-1zM14 3h1v1h-1zM2 4h2v1h-2zM12 4h2v1h-2zM3 5h1v1h-1zM12 5h1v1h-1zM3 6h1v1h-1zM12 6h1v1h-1zM3 7h1v1h-1zM11 7h1v1h-1zM3 8h1v1h-1zM10 8h1v1h-1zM3 9h1v1h-1zM8 9h2v1h-2zM3 10h1v1h-1zM6 10h2v1h-2zM3 11h3v1h-3zM2 12h2v1h-2zM1 13h1v1h-1zM4 13h1v1h-1zM1 14h1v1h-1zM4 14h1v1h-1zM2 15h2v1h-2z" />
      </svg>
    ),
    nivel: 4,
    uso: "Guardo e compartilho meu código, e publico projetos online.",
  },
  {
    id: 14,
    nome: "Prisma",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M4 1h8v1h-8zM2 2h2v1h-2zM12 2h2v1h-2zM1 3h1v1h-1zM14 3h1v1h-1zM2 4h2v1h-2zM12 4h2v1h-2zM1 5h1v1h-1zM4 5h8v1h-8zM14 5h1v1h-1zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h2v1h-2zM13 7h2v1h-2zM1 8h1v1h-1zM3 8h10v1h-10zM14 8h1v1h-1zM1 9h1v1h-1zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h2v1h-2zM13 11h2v1h-2zM1 12h1v1h-1zM3 12h10v1h-10zM14 12h1v1h-1zM2 13h2v1h-2zM12 13h2v1h-2zM4 14h8v1h-8z" />
      </svg>
    ),
    nivel: 4,
    uso: "Conecto o back-end ao banco de dados, com consultas seguras e tipadas.",
  },
  {
    id: 15,
    nome: "Docker",
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Zm29-85 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z" />
      </svg>
    ),
    nivel: 4,
    uso: "Empacoto a aplicação em contêineres para rodar igual em qualquer máquina.",
  },
];
