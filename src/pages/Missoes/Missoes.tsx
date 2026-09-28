import styles from "./Missoes.module.css";
import { motion } from "framer-motion";
import { Header } from "../../components/Header/Header";
import ceu from "../../assets/images/ceu.webp";
import { MOCK_PROJETOS } from "../../mocks/projetos";
import React, { useEffect, useRef, useState } from "react";

interface ListarProjetosProps {
  indiceAtivo: number;
  setIndiceAtivo: React.Dispatch<React.SetStateAction<number>>;
}

interface DetalhesProjetoProps {
  indiceAtivo: number;
}

interface MissoesProps {
  onVoltar: () => void;
}

function ListarProjetos({ indiceAtivo, setIndiceAtivo }: ListarProjetosProps) {
  const botoesRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    botoesRef.current[0]?.focus();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const total = MOCK_PROJETOS.length;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      botoesRef.current[(index + 1) % total]?.focus();
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      botoesRef.current[(index - 1 + total) % total]?.focus();
    }
  };

  return MOCK_PROJETOS.map((projeto, index) => (
    <li
      key={projeto.id}
      className={`${styles.projetoItem} ${indiceAtivo === index ? styles.ativo : ""}`}
    >
      <svg
        className={styles.setaAtivo}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="24"
        viewBox="0 0 12 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 0H2V2H0V0ZM0 2H4V4H0V2ZM0 4H6V6H0V4ZM0 6H8V8H0V6ZM0 8H10V10H0V8ZM0 10H12V12H0V10ZM0 12H12V14H0V12ZM0 14H10V16H0V14ZM0 16H8V18H0V16ZM0 18H6V20H0V18ZM0 20H4V22H0V20ZM0 22H2V24H0V22Z"
          fill="#FFD66B"
        />
      </svg>
      <button
        ref={(el) => {
          botoesRef.current[index] = el;
        }}
        className={styles.projetoBotao}
        onFocus={() => setIndiceAtivo(index)}
        onMouseEnter={() => {
          setIndiceAtivo(index);
          botoesRef.current[index]?.focus();
        }}
        onKeyDown={(e) => handleKeyDown(e, index)}
      >
        <span className={styles.projetoNome}>{projeto.nome}</span>
        <span
          className={`${styles.projetoStatus} ${projeto.status === "CONCLUÍDO" ? styles.concluido : styles.emAndamento}`}
        >
          {projeto.status}
        </span>
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
        <p
          className={`${styles.badgeStatus} ${projeto.status === "CONCLUÍDO" ? styles.concluido : styles.emAndamento}`}
        >
          {projeto.status}
        </p>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            shapeRendering="crispEdges"
            aria-hidden="true"
          >
            <path d="M9 3h1v1h-1zM9 4h1v1h-1zM3 5h2v1h-2zM8 5h1v1h-1zM11 5h2v1h-2zM2 6h2v1h-2zM8 6h1v1h-1zM12 6h2v1h-2zM1 7h2v1h-2zM7 7h1v1h-1zM13 7h2v1h-2zM1 8h2v1h-2zM7 8h1v1h-1zM13 8h2v1h-2zM2 9h2v1h-2zM6 9h1v1h-1zM12 9h2v1h-2zM3 10h2v1h-2zM6 10h1v1h-1zM11 10h2v1h-2zM5 11h1v1h-1zM5 12h1v1h-1z" />
          </svg>
          <span>VER CÓDIGO</span>
        </a>

        <a
          href={projeto.linkProjeto}
          className={styles.linkProjeto}
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            shapeRendering="crispEdges"
            aria-hidden="true"
          >
            <path d="M7 2h7v1h-7zM7 3h7v1h-7zM10 4h4v1h-4zM9 5h2v1h-2zM12 5h2v1h-2zM8 6h2v1h-2zM12 6h2v1h-2zM7 7h2v1h-2zM12 7h2v1h-2zM6 8h2v1h-2zM12 8h2v1h-2zM5 9h2v1h-2zM4 10h2v1h-2zM3 11h2v1h-2zM2 12h2v1h-2z" />
          </svg>
          <span>VER ONLINE</span>
        </a>
      </div>
    </article>
  ));
}

export function Missoes({ onVoltar }: MissoesProps) {
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  useEffect(() => {
    const escutarTecladoGlobal = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onVoltar();
      }
    };

    window.addEventListener("keydown", escutarTecladoGlobal);

    return () => {
      window.removeEventListener("keydown", escutarTecladoGlobal);
    };
  }, [onVoltar]);

  return (
    <>
      <img
        src={ceu}
        id="portfolio-background"
        className="portfolio-background"
        alt="Plano de fundo decorativo com flores"
      />

      <motion.main
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Header />
        <section className={`${styles.missoesSection} sessao`}>
          <header className={styles.missoesHeader}>
            <div className={styles.tituloContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
                aria-hidden="true"
              >
                <path d="M2 1h1v1h-1zM2 2h10v1h-10zM2 3h11v1h-11zM2 4h10v1h-10zM2 5h9v1h-9zM2 6h10v1h-10zM2 7h11v1h-11zM2 8h10v1h-10zM2 9h1v1h-1zM2 10h1v1h-1zM2 11h1v1h-1zM2 12h1v1h-1zM2 13h1v1h-1zM1 14h3v1h-3z" />
              </svg>
              <h1>MISSÕES</h1>

              <p className={styles.subtitulo}>meus projetos</p>
            </div>
            <button
              className={styles.botaoVoltar}
              onClick={onVoltar}
              aria-label="Voltar para a página anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
                aria-hidden="true"
              >
                <path d="M12 2h1v1h-1zM11 3h2v1h-2zM10 4h3v1h-3zM9 5h4v1h-4zM8 6h5v1h-5zM7 7h6v1h-6zM7 8h6v1h-6zM8 9h5v1h-5zM9 10h4v1h-4zM10 11h3v1h-3zM11 12h2v1h-2zM12 13h1v1h-1z" />
              </svg>
              <p>VOLTAR</p>
              <p className={styles.teclaEsc}>ESC</p>
            </button>
          </header>

          <div className={styles.conteudoPainel}>
            <nav
              className={styles.projetosNav}
              aria-label="Navegação dos projetos"
            >
              <ul className={styles.projetosLista}>
                <ListarProjetos
                  indiceAtivo={indiceAtivo}
                  setIndiceAtivo={setIndiceAtivo}
                />
              </ul>
            </nav>

            <DetalhesProjeto indiceAtivo={indiceAtivo} />
          </div>
        </section>
      </motion.main>
    </>
  );
}
