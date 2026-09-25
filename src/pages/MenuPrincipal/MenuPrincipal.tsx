import styles from "./MenuPrincipal.module.css";
import flores from "../../assets/images/flores.webp";
import React, { useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header/Header";

interface MenuPrincipalProps {
  onAvancarMissoes: () => void;
  onAvancarInventario: () => void;
  onAvancarPersonagem: () => void;
  onAvancarSalvar: () => void;
  onAvancarCorreio: () => void;
}

export function MenuPrincipal({
  onAvancarMissoes,
  onAvancarCorreio,
  onAvancarInventario,
  onAvancarPersonagem,
  onAvancarSalvar,
}: MenuPrincipalProps) {
  const botoesRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  useEffect(() => {
    botoesRef.current[0]?.focus();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const total = botoesRef.current.length;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      botoesRef.current[(index + 1) % total]?.focus();
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      botoesRef.current[(index - 1 + total) % total]?.focus();
    }
  };

  return (
    <>
      <img
        src={flores}
        id="portfolio-background"
        className="portfolio-background"
        alt="Imagem de fundo"
      />

      <div className={styles.menuPrincipal}>
        <Header />

        <section className={styles.sectionMenu}>
          <h2 className={styles.tituloMenu}>MENU</h2>
          <ul className={styles.listaMenu}>
            <li
              className={`${styles.itemMenu} ${indiceAtivo === 0 ? styles.ativo : ""}`}
            >
              <svg
                className={styles.setaAtivo}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none"
              >
                <path
                  d="M0 0H2V2H0V0ZM0 2H4V4H0V2ZM0 4H6V6H0V4ZM0 6H8V8H0V6ZM0 8H10V10H0V8ZM0 10H12V12H0V10ZM0 12H12V14H0V12ZM0 14H10V16H0V14ZM0 16H8V18H0V16ZM0 18H6V20H0V18ZM0 20H4V22H0V20ZM0 22H2V24H0V22Z"
                  fill="#FFD66B"
                />
              </svg>
              <button
                ref={(el) => {
                  botoesRef.current[0] = el;
                }}
                className={styles.botaoMenu}
                onClick={onAvancarMissoes}
                onFocus={() => setIndiceAtivo(0)}
                onMouseEnter={() => {
                  setIndiceAtivo(0);
                  botoesRef.current[0]?.focus();
                }}
                onKeyDown={(e) => handleKeyDown(e, 0)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  shape-rendering="crispEdges"
                >
                  <path d="M2 1h1v1h-1zM2 2h10v1h-10zM2 3h11v1h-11zM2 4h10v1h-10zM2 5h9v1h-9zM2 6h10v1h-10zM2 7h11v1h-11zM2 8h10v1h-10zM2 9h1v1h-1zM2 10h1v1h-1zM2 11h1v1h-1zM2 12h1v1h-1zM2 13h1v1h-1zM1 14h3v1h-3z" />
                </svg>
                <p className={styles.textoItem}>
                  MISSÕES{" "}
                  <span className={styles.subtextoItem}>meus projetos</span>
                </p>
              </button>
            </li>
            <li
              className={`${styles.itemMenu} ${indiceAtivo === 1 ? styles.ativo : ""}`}
            >
              <svg
                className={styles.setaAtivo}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none"
              >
                <path
                  d="M0 0H2V2H0V0ZM0 2H4V4H0V2ZM0 4H6V6H0V4ZM0 6H8V8H0V6ZM0 8H10V10H0V8ZM0 10H12V12H0V10ZM0 12H12V14H0V12ZM0 14H10V16H0V14ZM0 16H8V18H0V16ZM0 18H6V20H0V18ZM0 20H4V22H0V20ZM0 22H2V24H0V22Z"
                  fill="#FFD66B"
                />
              </svg>
              <button
                ref={(el) => {
                  botoesRef.current[1] = el;
                }}
                className={styles.botaoMenu}
                onClick={onAvancarInventario}
                onFocus={() => setIndiceAtivo(1)}
                onMouseEnter={() => {
                  setIndiceAtivo(1);
                  botoesRef.current[1]?.focus();
                }}
                onKeyDown={(e) => handleKeyDown(e, 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  shape-rendering="crispEdges"
                >
                  <path d="M3 2h10v1h-10zM2 3h1v1h-1zM13 3h1v1h-1zM1 4h1v1h-1zM14 4h1v1h-1zM1 5h1v1h-1zM14 5h1v1h-1zM1 6h6v1h-6zM9 6h6v1h-6zM1 7h1v1h-1zM6 7h1v1h-1zM9 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM6 8h4v1h-4zM14 8h1v1h-1zM1 9h1v1h-1zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
                </svg>
                <p className={styles.textoItem}>
                  INVENTÁRIO{" "}
                  <span className={styles.subtextoItem}>
                    ferramentas que uso
                  </span>
                </p>
              </button>
            </li>
            <li
              className={`${styles.itemMenu} ${indiceAtivo === 2 ? styles.ativo : ""}`}
            >
              <svg
                className={styles.setaAtivo}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none"
              >
                <path
                  d="M0 0H2V2H0V0ZM0 2H4V4H0V2ZM0 4H6V6H0V4ZM0 6H8V8H0V6ZM0 8H10V10H0V8ZM0 10H12V12H0V10ZM0 12H12V14H0V12ZM0 14H10V16H0V14ZM0 16H8V18H0V16ZM0 18H6V20H0V18ZM0 20H4V22H0V20ZM0 22H2V24H0V22Z"
                  fill="#FFD66B"
                />
              </svg>
              <button
                ref={(el) => {
                  botoesRef.current[2] = el;
                }}
                className={styles.botaoMenu}
                onClick={onAvancarPersonagem}
                onFocus={() => setIndiceAtivo(2)}
                onMouseEnter={() => {
                  setIndiceAtivo(2);
                  botoesRef.current[2]?.focus();
                }}
                onKeyDown={(e) => handleKeyDown(e, 2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  shape-rendering="crispEdges"
                >
                  <path d="M6 2h4v1h-4zM5 3h1v1h-1zM10 3h1v1h-1zM4 4h1v1h-1zM11 4h1v1h-1zM4 5h1v1h-1zM11 5h1v1h-1zM4 6h1v1h-1zM11 6h1v1h-1zM5 7h1v1h-1zM10 7h1v1h-1zM6 8h4v1h-4zM4 9h8v1h-8zM3 10h1v1h-1zM12 10h1v1h-1zM2 11h1v1h-1zM13 11h1v1h-1zM2 12h1v1h-1zM13 12h1v1h-1zM2 13h12v1h-12z" />
                </svg>
                <p className={styles.textoItem}>
                  PERSONAGEM{" "}
                  <span className={styles.subtextoItem}>sobre mim</span>
                </p>
              </button>
            </li>
            <li
              className={`${styles.itemMenu} ${indiceAtivo === 3 ? styles.ativo : ""}`}
            >
              <svg
                className={styles.setaAtivo}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none"
              >
                <path
                  d="M0 0H2V2H0V0ZM0 2H4V4H0V2ZM0 4H6V6H0V4ZM0 6H8V8H0V6ZM0 8H10V10H0V8ZM0 10H12V12H0V10ZM0 12H12V14H0V12ZM0 14H10V16H0V14ZM0 16H8V18H0V16ZM0 18H6V20H0V18ZM0 20H4V22H0V20ZM0 22H2V24H0V22Z"
                  fill="#FFD66B"
                />
              </svg>
              <button
                ref={(el) => {
                  botoesRef.current[3] = el;
                }}
                className={styles.botaoMenu}
                onClick={onAvancarSalvar}
                onFocus={() => setIndiceAtivo(3)}
                onMouseEnter={() => {
                  setIndiceAtivo(3);
                  botoesRef.current[3]?.focus();
                }}
                onKeyDown={(e) => handleKeyDown(e, 3)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  shape-rendering="crispEdges"
                >
                  <path d="M1 1h12v1h-12zM1 2h1v1h-1zM4 2h1v1h-1zM8 2h1v1h-1zM10 2h1v1h-1zM13 2h1v1h-1zM1 3h1v1h-1zM4 3h1v1h-1zM8 3h1v1h-1zM10 3h1v1h-1zM14 3h1v1h-1zM1 4h1v1h-1zM4 4h1v1h-1zM10 4h1v1h-1zM14 4h1v1h-1zM1 5h1v1h-1zM4 5h7v1h-7zM14 5h1v1h-1zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM3 8h10v1h-10zM14 8h1v1h-1zM1 9h1v1h-1zM3 9h1v1h-1zM12 9h1v1h-1zM14 9h1v1h-1zM1 10h1v1h-1zM3 10h1v1h-1zM12 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM3 11h1v1h-1zM12 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM12 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
                </svg>
                <p className={styles.textoItem}>
                  SALVAR JOGO{" "}
                  <span className={styles.subtextoItem}>baixar currículo</span>
                </p>
              </button>
            </li>
            <li
              className={`${styles.itemMenu} ${indiceAtivo === 4 ? styles.ativo : ""}`}
            >
              <svg
                className={styles.setaAtivo}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none"
              >
                <path
                  d="M0 0H2V2H0V0ZM0 2H4V4H0V2ZM0 4H6V6H0V4ZM0 6H8V8H0V6ZM0 8H10V10H0V8ZM0 10H12V12H0V10ZM0 12H12V14H0V12ZM0 14H10V16H0V14ZM0 16H8V18H0V16ZM0 18H6V20H0V18ZM0 20H4V22H0V20ZM0 22H2V24H0V22Z"
                  fill="#FFD66B"
                />
              </svg>
              <button
                ref={(el) => {
                  botoesRef.current[4] = el;
                }}
                className={styles.botaoMenu}
                onClick={onAvancarCorreio}
                onFocus={() => setIndiceAtivo(4)}
                onMouseEnter={() => {
                  setIndiceAtivo(4);
                  botoesRef.current[4]?.focus();
                }}
                onKeyDown={(e) => handleKeyDown(e, 4)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  shape-rendering="crispEdges"
                >
                  <path d="M1 3h14v1h-14zM1 4h2v1h-2zM13 4h2v1h-2zM1 5h1v1h-1zM3 5h1v1h-1zM12 5h1v1h-1zM14 5h1v1h-1zM1 6h1v1h-1zM4 6h1v1h-1zM11 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM5 7h1v1h-1zM10 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM6 8h1v1h-1zM9 8h1v1h-1zM14 8h1v1h-1zM1 9h1v1h-1zM7 9h2v1h-2zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h14v1h-14z" />
                </svg>
                <p className={styles.textoItem}>
                  CORREIO{" "}
                  <span className={styles.subtextoItem}>fale comigo</span>
                </p>
              </button>
            </li>
          </ul>

          <div className={styles.controlesContainer}>
            <div className={styles.grupoSetas}>
              <div className={styles.setaWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  shape-rendering="crispEdges"
                >
                  <path d="M7 4h2v1h-2zM6 5h4v1h-4zM5 6h6v1h-6zM4 7h8v1h-8zM7 8h2v1h-2zM7 9h2v1h-2zM7 10h2v1h-2zM7 11h2v1h-2z" />
                </svg>
              </div>
              <div className={styles.setaWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  shape-rendering="crispEdges"
                >
                  <path d="M7 4h2v1h-2zM7 5h2v1h-2zM7 6h2v1h-2zM7 7h2v1h-2zM4 8h8v1h-8zM5 9h6v1h-6zM6 10h4v1h-4zM7 11h2v1h-2z" />
                </svg>
              </div>
              <p className={styles.rotuloControle}>ESCOLHER</p>
            </div>

            <div className={styles.grupoEnter}>
              <p className={styles.teclaEnter}>ENTER</p>
              <p className={styles.rotuloControle}>ABRIR</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
