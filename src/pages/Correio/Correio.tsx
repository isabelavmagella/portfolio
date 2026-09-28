import styles from "./Correio.module.css";
import { PaginaSessao } from "../../components/PaginaSessao/PaginaSessao";
import {
  IconeCorreio,
  IconeGithub,
  IconeLinkedin,
} from "../../components/Icones/Icones";

interface CorreioProps {
  onVoltar: () => void;
}

const CONTATOS = [
  { tipo: "E-MAIL", valor: "isabelamagella@gmail.com", Icone: IconeCorreio },
  { tipo: "GITHUB", valor: "isabelavmagella", Icone: IconeGithub },
  { tipo: "LINKEDIN", valor: "Isabela Magella", Icone: IconeLinkedin },
];

export function Correio({ onVoltar }: CorreioProps) {
  return (
    <PaginaSessao
      className={styles.correioSection}
      icone={<IconeCorreio />}
      titulo="CORREIO"
      subtitulo="fale comigo"
      onVoltar={onVoltar}
      ocultarEscNoMobile
    >
      <div className={styles.conteudoPainel}>
        <p className={styles.rotulo}>
          <span>▪</span> OUTROS CAMINHOS
        </p>

        {CONTATOS.map(({ tipo, valor, Icone }) => (
          <div key={tipo} className={styles.contato}>
            <Icone aria-hidden="true" />

            <div className={styles.infoContato}>
              <p className={styles.contatoTipo}>{tipo}</p>
              <p className={styles.contatoValor}>{valor}</p>
            </div>
          </div>
        ))}
      </div>
    </PaginaSessao>
  );
}
