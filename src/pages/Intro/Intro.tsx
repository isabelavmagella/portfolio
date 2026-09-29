import styles from "./Intro.module.css";
import flores from "../../assets/images/flores.webp";
import { ImagemFundo } from "../../components/ImagemFundo/ImagemFundo";
import { TelaAnimada } from "../../components/TelaAnimada/TelaAnimada";
import { IconeSetaAtivo } from "../../components/Icones/Icones";

interface IntroProps {
  onAvancar: () => void;
}

export function Intro({ onAvancar }: IntroProps) {
  return (
    <TelaAnimada>
      <ImagemFundo src={flores} />

      <section
        id="intro-section"
        className={`${styles.introSection} container escalaTela`}
      >
        <h1>ISABELA MAGELLA</h1>

        <p className={styles.tagPixel}>PORTFÓLIO • DEV</p>

        <button className={styles.btnPixel} onClick={onAvancar}>
          <IconeSetaAtivo width="12" height="24" />
          CLIQUE PARA COMEÇAR
        </button>
      </section>
    </TelaAnimada>
  );
}
