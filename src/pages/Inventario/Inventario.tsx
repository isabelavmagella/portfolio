import styles from "./Inventario.module.css";
import { motion } from "framer-motion";
import { Header } from "../../components/Header/Header";
import ceu from "../../assets/images/ceu.webp";
import { MOCK_INVENTARIO } from "../../mocks/inventario";
import { useEffect, useRef, useState } from "react";

interface InventarioProps {
  onVoltar: () => void;
}

interface ListarFerramentasProps {
  indiceAtivo: number;
  setIndiceAtivo: React.Dispatch<React.SetStateAction<number>>;
}

interface DetalhesFerramenta {
  indiceAtivo: number;
}

const COLUNAS = 4;
const MINIMO_SLOTS = 12;

function ListarFerramentas({
  indiceAtivo,
  setIndiceAtivo,
}: ListarFerramentasProps) {
  const botoesRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    botoesRef.current[0]?.focus();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const total = MOCK_INVENTARIO.length;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      botoesRef.current[(index + 1) % total]?.focus();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      botoesRef.current[(index - 1 + total) % total]?.focus();
    }
  };

  const totalSlots = Math.max(
    MINIMO_SLOTS,
    Math.ceil(MOCK_INVENTARIO.length / COLUNAS) * COLUNAS,
  );
  const slotsVazios = totalSlots - MOCK_INVENTARIO.length;

  return (
    <>
      {MOCK_INVENTARIO.map((ferramenta, index) => (
        <div
          key={ferramenta.id}
          className={`${styles.ferramenta} ${indiceAtivo === index ? styles.ativo : ""}`}
        >
          <button
            ref={(el) => {
              botoesRef.current[index] = el;
            }}
            onFocus={() => setIndiceAtivo(index)}
            onMouseEnter={() => {
              setIndiceAtivo(index);
              botoesRef.current[index]?.focus();
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {ferramenta.icone}
            <p className={styles.nomeFerramenta}>{ferramenta.nome}</p>
          </button>
        </div>
      ))}

      {Array.from({ length: slotsVazios }, (_, i) => (
        <div
          key={`vazio-${i}`}
          className={`${styles.ferramenta} ${styles.ferramentaVazia}`}
          aria-hidden="true"
        ></div>
      ))}
    </>
  );
}

function DetalhesFerramenta({ indiceAtivo }: DetalhesFerramenta) {
  const NIVEL_MAXIMO = 5;

  return MOCK_INVENTARIO.map((ferramenta, index) => (
    <div
      className={`${styles.detalhesFerramenta} ${indiceAtivo === index ? "" : styles.hidden}`}
      key={ferramenta.id}
    >
      <div className={styles.detalhesCabecalho}>
        <div className={styles.detalhesIconeContainer}>{ferramenta.icone}</div>
        <h2 className={styles.detalhesNome}>{ferramenta.nome}</h2>
      </div>

      <div className={styles.secaoNivel}>
        <p className={styles.rotulo}>
          <span className={styles.marcador} aria-hidden="true">
            ▪
          </span>{" "}
          NÍVEL
        </p>
        <div
          className={styles.barraNivel}
          role="img"
          aria-label={`Nível ${ferramenta.nivel} de ${NIVEL_MAXIMO}`}
        >
          {Array.from({ length: NIVEL_MAXIMO }, (_, i) => (
            <div
              key={i}
              className={`${styles.blocoNivel} ${i < ferramenta.nivel ? styles.blocoPreenchido : styles.blocoVazio}`}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.secaoUso}>
        <p className={styles.rotulo}>
          <span className={styles.marcador} aria-hidden="true">
            ▪
          </span>{" "}
          USO
        </p>
        <p className={styles.textoUso}>{ferramenta.uso}</p>
      </div>

      <div className={styles.secaoProjetos}>
        <p className={styles.rotulo}>
          <span className={styles.marcador} aria-hidden="true">
            ▪
          </span>{" "}
          USADA EM
        </p>
        <div className={styles.listaProjetos}>
          {ferramenta.usadaEm.map((projeto) => (
            <p className={styles.projeto}>{projeto}</p>
          ))}
        </div>
      </div>
    </div>
  ));
}

export function Inventario({ onVoltar }: InventarioProps) {
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
        <section className={`${styles.inventarioSection} sessao`}>
          <header className={styles.inventarioHeader}>
            <div className={styles.tituloContainer}>
              <svg
                className={styles.iconeTitulo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
              >
                <path d="M3 2h10v1h-10zM2 3h1v1h-1zM13 3h1v1h-1zM1 4h1v1h-1zM14 4h1v1h-1zM1 5h1v1h-1zM14 5h1v1h-1zM1 6h6v1h-6zM9 6h6v1h-6zM1 7h1v1h-1zM6 7h1v1h-1zM9 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM6 8h4v1h-4zM14 8h1v1h-1zM1 9h1v1h-1zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
              </svg>
              <h1 className={styles.titulo}>INVENTÁRIO</h1>

              <p className={styles.subtitulo}>ferramentas que uso</p>
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
            <div className={styles.gridFerramentas}>
              <ListarFerramentas
                indiceAtivo={indiceAtivo}
                setIndiceAtivo={setIndiceAtivo}
              />
            </div>

            <DetalhesFerramenta indiceAtivo={indiceAtivo} />
          </div>

          <div className={styles.grupoSetas}>
            <div className={styles.setaWrapper}>
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                shape-rendering="crispEdges"
              >
                <path d="M7 4h1v1h-1zM6 5h2v1h-2zM5 6h3v1h-3zM4 7h8v1h-8zM4 8h8v1h-8zM5 9h3v1h-3zM6 10h2v1h-2zM7 11h1v1h-1z"></path>
              </svg>
            </div>
            <div className={styles.setaWrapper}>
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                shape-rendering="crispEdges"
              >
                <path d="M8 4h1v1h-1zM8 5h2v1h-2zM8 6h3v1h-3zM4 7h8v1h-8zM4 8h8v1h-8zM8 9h3v1h-3zM8 10h2v1h-2zM8 11h1v1h-1z"></path>
              </svg>
            </div>
            <p className={styles.rotuloControle}>ESCOLHER</p>
          </div>
        </section>
      </motion.main>
    </>
  );
}
