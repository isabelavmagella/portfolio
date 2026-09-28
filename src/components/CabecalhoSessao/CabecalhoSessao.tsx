import type { ReactNode } from "react";
import styles from "./CabecalhoSessao.module.css";
import { IconeVoltar } from "../Icones/Icones";

interface CabecalhoSessaoProps {
  icone: ReactNode;
  titulo: string;
  subtitulo: string;
  onVoltar: () => void;
  ocultarEscNoMobile?: boolean;
}

export function CabecalhoSessao({
  icone,
  titulo,
  subtitulo,
  onVoltar,
  ocultarEscNoMobile = false,
}: CabecalhoSessaoProps) {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.tituloContainer}>
        {icone}
        <h1>{titulo}</h1>

        <p>{subtitulo}</p>
      </div>
      <button
        className={styles.botaoVoltar}
        onClick={onVoltar}
        aria-label="Voltar para a página anterior"
      >
        <IconeVoltar aria-hidden="true" />
        <p>VOLTAR</p>
        <p
          className={`${styles.teclaEsc} ${ocultarEscNoMobile ? styles.ocultarNoMobile : ""}`}
        >
          ESC
        </p>
      </button>
    </header>
  );
}
