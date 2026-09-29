interface Projeto {
  id: number;
  nome: string;
  objetivo: string;
  equipamento: string[];
  previw: string;
  linkGit: string;
  linkProjeto: string;
}

export const MOCK_PROJETOS: Projeto[] = [
  {
    id: 1,
    nome: "CRV",
    objetivo:
      "Site responsivo que apresenta os serviços e trabalhos, e leva o visitante direto ao WhatsApp com a mensagem já montada.",
    equipamento: ["HTML", "CSS", "JavaScript", "JSON"],
    previw: "src/assets/images/crv_acrilicos.webp",
    linkGit: "",
    linkProjeto: "https://crvacrilicos.com.br/",
  },
  {
    id: 2,
    nome: "Extension manager",
    objetivo:
      "Desafio do Frontend Mentor feito do zero: um gerenciador de extensões que ativa, desativa, remove e filtra itens, guardando o estado no navegador.",
    equipamento: ["HTML", "CSS", "JavaScript"],
    previw: "src/assets/images/extension_manager.webp",
    linkGit: "https://github.com/isabelavmagella/browser-extension-manager-ui",
    linkProjeto: "https://browser-extension-manager-ui-steel.vercel.app/",
  },
  {
    id: 3,
    nome: "Todo List",
    objetivo:
      "Um app de tarefas leve e responsivo que refiz por conta própria: adiciona, conclui, filtra e limpa em poucos cliques.",
    equipamento: ["React + Vite", "TypeScript", "CSS", "Context API"],
    previw: "src/assets/images/todolist.webp",
    linkGit: "https://github.com/isabelavmagella/todo-app",
    linkProjeto: "https://todo-app-five-sigma-30.vercel.app/",
  },
  {
    id: 4,
    nome: "GitHub viewer",
    objetivo:
      "Digite um usuário e veja o perfil completo: avatar, bio, seguidores, repositórios e links, direto da API do GitHub.",
    equipamento: ["HTML", "CSS", "JavaScript", "API REST"],
    previw: "src/assets/images/github_viewer.webp",
    linkGit: "https://github.com/isabelavmagella/visualizador-perfil-github",
    linkProjeto: "https://isabelavmagella.github.io/visualizador-perfil-github/",
  },
];
