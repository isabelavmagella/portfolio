import { useEffect } from "react";
import styles from "./Correio.module.css";
import { motion } from "framer-motion";
import { Header } from "../../components/Header/Header";
import ceu from "../../assets/images/ceu.webp";

interface CorreioProps {
  onVoltar: () => void;
}

export function Correio({ onVoltar }: CorreioProps) {
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

        <section className={`${styles.correioSection} sessao`}>
          <header className={styles.correioHeader}>
            <div className={styles.tituloContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shape-rendering="crispEdges"
              >
                <path d="M1 3h14v1h-14zM1 4h2v1h-2zM13 4h2v1h-2zM1 5h1v1h-1zM3 5h1v1h-1zM12 5h1v1h-1zM14 5h1v1h-1zM1 6h1v1h-1zM4 6h1v1h-1zM11 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM5 7h1v1h-1zM10 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM6 8h1v1h-1zM9 8h1v1h-1zM14 8h1v1h-1zM1 9h1v1h-1zM7 9h2v1h-2zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h14v1h-14z" />
              </svg>
              <h1 className={styles.titulo}>CORREIO</h1>

              <p className={styles.subtitulo}>fale comigo</p>
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
            <p className={styles.rotulo}>
              <span>▪</span> OUTROS CAMINHOS
            </p>

            <div className={styles.contato}>
              <svg
                className={styles.iconeContato}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
                aria-hidden="true"
              >
                <path d="M1 3h14v1h-14zM1 4h2v1h-2zM13 4h2v1h-2zM1 5h1v1h-1zM3 5h1v1h-1zM12 5h1v1h-1zM14 5h1v1h-1zM1 6h1v1h-1zM4 6h1v1h-1zM11 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM5 7h1v1h-1zM10 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM6 8h1v1h-1zM9 8h1v1h-1zM14 8h1v1h-1zM1 9h1v1h-1zM7 9h2v1h-2zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h14v1h-14z" />
              </svg>

              <div className={styles.infoContato}>
                <p className={styles.contatoTipo}>E-MAIL</p>
                <p className={styles.contatoValor}>isabelamagella@gmail.com</p>
              </div>
            </div>

            <div className={styles.contato}>
              <svg
                className={styles.iconeContato}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
                aria-hidden="true"
              >
                <path d="M9 3h1v1h-1zM9 4h1v1h-1zM3 5h2v1h-2zM8 5h1v1h-1zM11 5h2v1h-2zM2 6h2v1h-2zM8 6h1v1h-1zM12 6h2v1h-2zM1 7h2v1h-2zM7 7h1v1h-1zM13 7h2v1h-2zM1 8h2v1h-2zM7 8h1v1h-1zM13 8h2v1h-2zM2 9h2v1h-2zM6 9h1v1h-1zM12 9h2v1h-2zM3 10h2v1h-2zM6 10h1v1h-1zM11 10h2v1h-2zM5 11h1v1h-1zM5 12h1v1h-1z" />
              </svg>

              <div className={styles.infoContato}>
                <p className={styles.contatoTipo}>GITHUB</p>
                <p className={styles.contatoValor}>isabelavmagella</p>
              </div>
            </div>

            <div className={styles.contato}>
              <svg
                className={styles.iconeContato}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
                aria-hidden="true"
              >
                <path d="M5 2h6v1h-6zM5 3h1v1h-1zM10 3h1v1h-1zM1 4h14v1h-14zM1 5h1v1h-1zM14 5h1v1h-1zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM14 7h1v1h-1zM1 8h6v1h-6zM9 8h6v1h-6zM1 9h1v1h-1zM6 9h4v1h-4zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
              </svg>

              <div className={styles.infoContato}>
                <p className={styles.contatoTipo}>LINKEDIN</p>
                <p className={styles.contatoValor}>Isabela Magella</p>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
