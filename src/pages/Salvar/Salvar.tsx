import { useEffect } from "react";
import styles from "./Salvar.module.css";
import { motion } from "framer-motion";
import { Header } from "../../components/Header/Header";
import ceu from "../../assets/images/ceu.webp";

interface SalvarProps {
  onVoltar: () => void;
}

export function Salvar({ onVoltar }: SalvarProps) {
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

        <section className={`${styles.salvarSection} sessao`}>
          <header className={styles.salvarHeader}>
            <div className={styles.tituloContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shape-rendering="crispEdges"
              >
                <path d="M1 1h12v1h-12zM1 2h1v1h-1zM4 2h1v1h-1zM8 2h1v1h-1zM10 2h1v1h-1zM13 2h1v1h-1zM1 3h1v1h-1zM4 3h1v1h-1zM8 3h1v1h-1zM10 3h1v1h-1zM14 3h1v1h-1zM1 4h1v1h-1zM4 4h1v1h-1zM10 4h1v1h-1zM14 4h1v1h-1zM1 5h1v1h-1zM4 5h7v1h-7zM14 5h1v1h-1zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM3 8h10v1h-10zM14 8h1v1h-1zM1 9h1v1h-1zM3 9h1v1h-1zM12 9h1v1h-1zM14 9h1v1h-1zM1 10h1v1h-1zM3 10h1v1h-1zM12 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM3 11h1v1h-1zM12 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM12 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
              </svg>
              <h1 className={styles.titulo}>SALVAR JOGO</h1>

              <p className={styles.subtitulo}>baixar currículo</p>
            </div>
            <button
              className={styles.botaoVoltar}
              onClick={onVoltar}
              aria-label="Voltar para a página anterior"
            >
              <svg
                className={styles.iconeVoltar}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
                aria-hidden="true"
              >
                <path d="M12 2h1v1h-1zM11 3h2v1h-2zM10 4h3v1h-3zM9 5h4v1h-4zM8 6h5v1h-5zM7 7h6v1h-6zM7 8h6v1h-6zM8 9h5v1h-5zM9 10h4v1h-4zM10 11h3v1h-3zM11 12h2v1h-2zM12 13h1v1h-1z" />
              </svg>
              <p className={styles.textoVoltar}>VOLTAR</p>
              <p className={styles.teclaEsc}>ESC</p>
            </button>
          </header>

          <div className={styles.conteudoPainel}>
            <div className={styles.slotSave}>
              <svg
                className={styles.iconeSeta}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 0H2V2H0V0ZM0 2H4V4H0V2ZM0 4H6V6H0V4ZM0 6H8V8H0V6ZM0 8H10V10H0V8ZM0 10H12V12H0V10ZM0 12H12V14H0V12ZM0 14H10V16H0V14ZM0 16H8V18H0V16ZM0 18H6V20H0V18ZM0 20H4V22H0V20ZM0 22H2V24H0V22Z"
                  fill="#FFD66B"
                />
              </svg>

              <svg
                className={styles.iconeSlot}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
                aria-hidden="true"
              >
                <path d="M1 1h12v1h-12zM1 2h1v1h-1zM4 2h1v1h-1zM8 2h1v1h-1zM10 2h1v1h-1zM13 2h1v1h-1zM1 3h1v1h-1zM4 3h1v1h-1zM8 3h1v1h-1zM10 3h1v1h-1zM14 3h1v1h-1zM1 4h1v1h-1zM4 4h1v1h-1zM10 4h1v1h-1zM14 4h1v1h-1zM1 5h1v1h-1zM4 5h7v1h-7zM14 5h1v1h-1zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM3 8h10v1h-10zM14 8h1v1h-1zM1 9h1v1h-1zM3 9h1v1h-1zM12 9h1v1h-1zM14 9h1v1h-1zM1 10h1v1h-1zM3 10h1v1h-1zM12 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM3 11h1v1h-1zM12 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM12 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
              </svg>

              <div className={styles.infoSlot}>
                <p className={styles.slotTitulo}>SLOT 1 • CURRÍCULO</p>
                <p className={styles.slotDetalhes}>
                  PDF • [nº de páginas] • atualizado em [MM/AAAA]
                </p>
              </div>
            </div>

            <p className={styles.pergunta}>
              Salvar o currículo no seu dispositivo?
            </p>

            <div className={styles.acoes}>
              <div className={styles.botaoConfirmar}>
                <svg
                  className={styles.iconeDownload}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  shapeRendering="crispEdges"
                  aria-hidden="true"
                >
                  <path d="M7 1h2v1h-2zM7 2h2v1h-2zM7 3h2v1h-2zM7 4h2v1h-2zM7 5h2v1h-2zM4 6h8v1h-8zM5 7h6v1h-6zM6 8h4v1h-4zM7 9h2v1h-2zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
                </svg>
                <p className={styles.textoConfirmar}>SIM, BAIXAR PDF</p>
              </div>

              <p className={styles.botaoCancelar}>NÃO, VOLTAR</p>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
