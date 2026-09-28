export interface Projeto {
  id: number;
  nome: string;
  status: "CONCLUÍDO" | "EM ANDAMENTO";
  objetivo: string;
  equipamento: string[];
  previw: string;
  linkGit: string;
  linkProjeto: string;
}

export const MOCK_PROJETOS: Projeto[] = [
  {
    id: 1,
    nome: "Projeto 1",
    status: "CONCLUÍDO",
    objetivo:
      "[Qual problema o projeto resolve e o que você construiu, em uma ou duas frases.]",
    equipamento: ["[TECNOLOGIA]", "[TECNOLOGIA]", "[TECNOLOGIA]"],
    previw: "https://placehold.co/600x100",
    linkGit: "",
    linkProjeto: "",
  },
  {
    id: 2,
    nome: "Projeto 2",
    status: "CONCLUÍDO",
    objetivo:
      "[Qual problema o projeto resolve e o que você construiu, em uma ou duas frases.]",
    equipamento: ["[TECNOLOGIA]", "[TECNOLOGIA]", "[TECNOLOGIA]"],
    previw: "https://placehold.co/600x100",
    linkGit: "",
    linkProjeto: "",
  },
  {
    id: 3,
    nome: "Projeto 3",
    status: "EM ANDAMENTO",
    objetivo:
      "[Qual problema o projeto resolve e o que você construiu, em uma ou duas frases.]",
    equipamento: ["[TECNOLOGIA]", "[TECNOLOGIA]", "[TECNOLOGIA]"],
    previw: "https://placehold.co/600x100",
    linkGit: "",
    linkProjeto: "",
  },
  {
    id: 4,
    nome: "Projeto 4",
    status: "CONCLUÍDO",
    objetivo:
      "[Qual problema o projeto resolve e o que você construiu, em uma ou duas frases.]",
    equipamento: ["[TECNOLOGIA]", "[TECNOLOGIA]", "[TECNOLOGIA]"],
    previw: "https://placehold.co/600x100",
    linkGit: "",
    linkProjeto: "",
  },
];
