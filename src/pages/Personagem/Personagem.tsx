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
    valor: "Entrar para um time e pegar novos desafios. Aberta a vagas, freelas e parcerias, então se tem projeto, me chama.",
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
              Comecei a programar depois de ganhar um curso de lógica de programação, e gostei tanto que segui para um curso de fullstack. Hoje construo o produto completo, da tela ao servidor, e sigo treinando para melhorar ainda mais. Já entreguei um site do zero para um cliente, o que me ensinou a pensar no usuário, e não só no código.
            </p>
          </div>
        </div>
      </div>
    </PaginaSessao>
  );
}
