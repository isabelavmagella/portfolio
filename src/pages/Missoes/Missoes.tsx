import styles from "./Missoes.module.css";
import { useState } from "react";
import { MOCK_PROJETOS } from "../../mocks/projetos";
import { PaginaSessao } from "../../components/PaginaSessao/PaginaSessao";
import {
  IconeGithub,
  IconeLinkExterno,
  IconeMissoes,
  IconeSetaAtivo,
} from "../../components/Icones/Icones";
import { useNavegacaoLista } from "../../hooks/useNavegacaoLista";

interface ListarProjetosProps {
  indiceAtivo: number;
  setIndiceAtivo: (index: number) => void;
}

interface DetalhesProjetoProps {
  indiceAtivo: number;
}

interface MissoesProps {
  onVoltar: () => void;
}

function ListarProjetos({ indiceAtivo, setIndiceAtivo }: ListarProjetosProps) {
  const propsDoBotao = useNavegacaoLista(MOCK_PROJETOS.length, setIndiceAtivo);

  return MOCK_PROJETOS.map((projeto, index) => (
    <li
      key={projeto.id}
      className={`${styles.projetoItem} ${indiceAtivo === index ? styles.ativo : ""}`}
    >
      <IconeSetaAtivo
        className={styles.setaAtivo}
        width="12"
        height="24"
        aria-hidden="true"
      />
      <button className={styles.projetoBotao} {...propsDoBotao(index)}>
        <span className={styles.projetoNome}>{projeto.nome}</span>
      </button>
    </li>
  ));
}

function DetalhesProjeto({ indiceAtivo }: DetalhesProjetoProps) {
  return MOCK_PROJETOS.map((projeto, index) => (
    <article
      key={projeto.id}
      className={`${styles.projetoDetalhes} ${indiceAtivo === index ? "" : styles.hidden}`}
    >
      <img
        src={projeto.previw}
        className={styles.projetoPreview}
        alt={`${projeto.nome} preview`}
      />

      <div className={styles.detalhesHeader}>
        <h2>{projeto.nome}</h2>
      </div>

      <div className={styles.detalhesSecao}>
        <p className={styles.secaoTitulo}>
          <span aria-hidden="true">▪</span> OBJETIVO
        </p>
        <p className={styles.secaoDescricao}>{projeto.objetivo}</p>
      </div>

      <div className={styles.detalhesSecao}>
        <p className={styles.secaoTitulo}>
          <span aria-hidden="true">▪</span> EQUIPAMENTO
        </p>
        <div className={styles.tagsTecnologias}>
          {projeto.equipamento.map((eq, i) => (
            <span key={i} className={styles.tagTecnologia}>
              {eq}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.detalhesAcoes}>
        <a
          href={projeto.linkGit}
          className={styles.verCodigo}
          rel="noopener noreferrer"
        >
          <IconeGithub aria-hidden="true" />
          <span>VER CÓDIGO</span>
        </a>

        <a
          href={projeto.linkProjeto}
          className={styles.linkProjeto}
          rel="noopener noreferrer"
        >
          <IconeLinkExterno aria-hidden="true" />
          <span>VER ONLINE</span>
        </a>
      </div>
    </article>
  ));
}

export function Missoes({ onVoltar }: MissoesProps) {
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  return (
    <PaginaSessao
      className={styles.missoesSection}
      icone={<IconeMissoes aria-hidden="true" />}
      titulo="MISSÕES"
      subtitulo="meus projetos"
      onVoltar={onVoltar}
    >
      <div className={styles.conteudoPainel}>
        <nav className={styles.projetosNav} aria-label="Navegação dos projetos">
          <ul className={styles.projetosLista}>
            <ListarProjetos
              indiceAtivo={indiceAtivo}
              setIndiceAtivo={setIndiceAtivo}
            />
          </ul>
        </nav>

        <DetalhesProjeto indiceAtivo={indiceAtivo} />
      </div>
    </PaginaSessao>
  );
}
