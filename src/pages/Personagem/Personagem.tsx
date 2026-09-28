import styles from "./Personagem.module.css";
import personagem from "../../assets/images/personagem.webp";
import { PaginaSessao } from "../../components/PaginaSessao/PaginaSessao";
import { IconePersonagem } from "../../components/Icones/Icones";

interface PersonagemProps {
  onVoltar: () => void;
}

const ATRIBUTOS = [
  { nome: "CLASSE", valor: "Dev [front-end • back-end • full-stack]" },
  { nome: "ORIGEM", valor: "Vitória, ES" },
  { nome: "IDIOMAS", valor: "Português [nativo], inglês [intermediário]" },
  {
    nome: "MISSÃO ATUAL",
    valor: "[O que você busca agora: vaga, freelas, parcerias]",
  },
];

export function Personagem({ onVoltar }: PersonagemProps) {
  return (
    <PaginaSessao
      className={styles.personagemSection}
      icone={<IconePersonagem />}
      titulo="PERSONAGEM"
      subtitulo="sobre mim"
      onVoltar={onVoltar}
      ocultarEscNoMobile
    >
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
              <span>▪</span> ATRIBUTOS
            </p>

            {ATRIBUTOS.map(({ nome, valor }) => (
              <div key={nome} className={styles.atributo}>
                <p className={styles.atributoNome}>{nome}</p>
                <p className={styles.atributoValor}>{valor}</p>
              </div>
            ))}
          </div>

          <div className={styles.secaoHistoria}>
            <p className={styles.rotulo}>
              <span>▪</span> HISTÓRIA
            </p>
            <p className={styles.textoHistoria}>
              [Conte em três ou quatro linhas como você começou a programar, o
              que mais gosta de construir e o que te diferencia.]
            </p>
          </div>
        </div>
      </div>
    </PaginaSessao>
  );
}
