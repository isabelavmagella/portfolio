import styles from "./Intro.module.css";
import videoBg from "../../assets/video/flores.mp4";

interface IntroProps {
  onAvancar: () => void;
}

export function Intro({onAvancar}: IntroProps) {
  return (
    <>
      <video
        id="portfolio-background"
        className="portfolio-background"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
        Seu navegador não suporta vídeo
      </video>

      <section id="intro-section" className={styles.introSection}>
        <h1>ISABELA MAGELLA</h1>

        <p className={styles.tagPixel}>PORTFÓLIO • DEV</p>

        <button className={styles.btnPixel} onClick={onAvancar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none"><path d="M0 0H2V2H0V0ZM0 2H4V4H0V2ZM0 4H6V6H0V4ZM0 6H8V8H0V6ZM0 8H10V10H0V8ZM0 10H12V12H0V10ZM0 12H12V14H0V12ZM0 14H10V16H0V14ZM0 16H8V18H0V16ZM0 18H6V20H0V18ZM0 20H4V22H0V20ZM0 22H2V24H0V22Z" fill="#FFD66B"/></svg>
          CLIQUE PARA COMEÇAR
        </button>
      </section>
    </>
  );
}
