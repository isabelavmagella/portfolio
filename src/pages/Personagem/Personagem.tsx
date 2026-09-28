import { useEffect } from "react";
import styles from "./Personagem.module.css";
import { motion } from "framer-motion";
import { Header } from "../../components/Header/Header";
import ceu from "../../assets/images/ceu.webp";
import personagem from "../../assets/images/personagem.webp";

interface PersonagemProps {
  onVoltar: () => void;
}

export function Personagem({ onVoltar }: PersonagemProps) {
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

        <section className={`${styles.personagemSection} sessao`}>
          <header className={styles.personagemHeader}>
            <div className={styles.tituloContainer}>
              <svg
                className={styles.iconeTitulo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
              >
                <path d="M6 2h4v1h-4zM5 3h1v1h-1zM10 3h1v1h-1zM4 4h1v1h-1zM11 4h1v1h-1zM4 5h1v1h-1zM11 5h1v1h-1zM4 6h1v1h-1zM11 6h1v1h-1zM5 7h1v1h-1zM10 7h1v1h-1zM6 8h4v1h-4zM4 9h8v1h-8zM3 10h1v1h-1zM12 10h1v1h-1zM2 11h1v1h-1zM13 11h1v1h-1zM2 12h1v1h-1zM13 12h1v1h-1zM2 13h12v1h-12z" />
              </svg>
              <h1 className={styles.titulo}>PERSONAGEM</h1>

              <p className={styles.subtitulo}>sobre mim</p>
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
            <div className={styles.cartaPersonagem}>
              <img
                className={styles.imagemPersonagem}
                src={personagem}
                alt="Ilustração da Isabela Magella como personagem"
              />
              <p className={styles.nomePersonagem}>Isabela Magella</p>
              <p className={styles.classePersonagem}>CLASSE • DEV</p>
            </div>

            <div className={styles.detalhesPersonagem}>
              <div className={styles.secaoAtributos}>
                <p className={styles.rotulo}>
                  <span className={styles.marcador}>▪</span> ATRIBUTOS
                </p>

                <div className={styles.atributo}>
                  <p className={styles.atributoNome}>CLASSE</p>
                  <p className={styles.atributoValor}>
                    Dev [front-end • back-end • full-stack]
                  </p>
                </div>

                <div className={styles.atributo}>
                  <p className={styles.atributoNome}>ORIGEM</p>
                  <p className={styles.atributoValor}>Vitória, ES</p>
                </div>

                <div className={styles.atributo}>
                  <p className={styles.atributoNome}>IDIOMAS</p>
                  <p className={styles.atributoValor}>
                    Português [nativo], inglês [intermediário]
                  </p>
                </div>

                <div className={styles.atributo}>
                  <p className={styles.atributoNome}>MISSÃO ATUAL</p>
                  <p className={styles.atributoValor}>
                    [O que você busca agora: vaga, freelas, parcerias]
                  </p>
                </div>
              </div>

              <div className={styles.secaoHistoria}>
                <p className={styles.rotulo}>
                  <span className={styles.marcador}>▪</span> HISTÓRIA
                </p>
                <p className={styles.textoHistoria}>
                  [Conte em três ou quatro linhas como você começou a programar,
                  o que mais gosta de construir e o que te diferencia.]
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
