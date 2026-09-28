import type { ReactNode } from "react";

interface Inventario {
  id: number;
  nome: string;
  icone: ReactNode;
  nivel: number;
  uso: string;
  usadaEm: string[];
}

export const MOCK_INVENTARIO: Inventario[] = [
  {
    id: 1,
    nome: "[Nome da ferramenta]",
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
    uso: "[Onde e como você usa: trabalho, projetos pessoais, estudo.]",
    usadaEm: ["[Projeto 1]", "[Projeto 3]"],
  },
  {
    id: 2,
    nome: "[Nome da ferramenta]",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M1 2h14v1h-14zM1 3h1v1h-1zM14 3h1v1h-1zM1 4h1v1h-1zM3 4h1v1h-1zM5 4h1v1h-1zM7 4h1v1h-1zM14 4h1v1h-1zM1 5h14v1h-14zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM3 7h6v1h-6zM14 7h1v1h-1zM1 8h1v1h-1zM14 8h1v1h-1zM1 9h1v1h-1zM3 9h4v1h-4zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM3 11h7v1h-7zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
      </svg>
    ),
    nivel: 2,
    uso: "[Onde e como você usa: trabalho, projetos pessoais, estudo.]",
    usadaEm: ["[Projeto 1]", "[Projeto 3]"],
  },
  {
    id: 3,
    nome: "[Nome da ferramenta]",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M6 1h4v1h-4zM2 2h2v1h-2zM6 2h4v1h-4zM12 2h2v1h-2zM2 3h12v1h-12zM3 4h2v1h-2zM11 4h2v1h-2zM1 5h3v1h-3zM12 5h3v1h-3zM1 6h2v1h-2zM7 6h2v1h-2zM13 6h2v1h-2zM1 7h2v1h-2zM6 7h4v1h-4zM13 7h2v1h-2zM1 8h2v1h-2zM6 8h4v1h-4zM13 8h2v1h-2zM1 9h2v1h-2zM7 9h2v1h-2zM13 9h2v1h-2zM1 10h3v1h-3zM12 10h3v1h-3zM3 11h2v1h-2zM11 11h2v1h-2zM2 12h12v1h-12zM2 13h2v1h-2zM6 13h4v1h-4zM12 13h2v1h-2zM6 14h4v1h-4z" />
      </svg>
    ),
    nivel: 5,
    uso: "[Onde e como você usa: trabalho, projetos pessoais, estudo.]",
    usadaEm: ["[Projeto 1]", "[Projeto 3]"],
  },
  {
    id: 4,
    nome: "[Nome da ferramenta]",
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
    uso: "[Onde e como você usa: trabalho, projetos pessoais, estudo.]",
    usadaEm: ["[Projeto 1]", "[Projeto 3]"],
  },
  {
    id: 5,
    nome: "[Nome da ferramenta]",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        <path d="M2 1h2v1h-2zM12 1h2v1h-2zM1 2h1v1h-1zM4 2h1v1h-1zM11 2h1v1h-1zM14 2h1v1h-1zM1 3h1v1h-1zM4 3h1v1h-1zM11 3h1v1h-1zM14 3h1v1h-1zM2 4h2v1h-2zM12 4h2v1h-2zM3 5h1v1h-1zM12 5h1v1h-1zM3 6h1v1h-1zM12 6h1v1h-1zM3 7h1v1h-1zM11 7h1v1h-1zM3 8h1v1h-1zM10 8h1v1h-1zM3 9h1v1h-1zM8 9h2v1h-2zM3 10h1v1h-1zM6 10h2v1h-2zM3 11h3v1h-3zM2 12h2v1h-2zM1 13h1v1h-1zM4 13h1v1h-1zM1 14h1v1h-1zM4 14h1v1h-1zM2 15h2v1h-2z" />
      </svg>
    ),
    nivel: 1,
    uso: "[Onde e como você usa: trabalho, projetos pessoais, estudo.]",
    usadaEm: ["[Projeto 1]", "[Projeto 3]"],
  },
];
