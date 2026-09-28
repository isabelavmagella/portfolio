import styles from "./Header.module.css";
import { IconeGithub, IconeLinkedin } from "../Icones/Icones";

const LINKS_SOCIAIS = [
  {
    nome: "GITHUB",
    url: "https://github.com/isabelavmagella",
    Icone: IconeGithub,
  },
  {
    nome: "LINKEDIN",
    url: "https://www.linkedin.com/in/isabela-magella-32401a271/",
    Icone: IconeLinkedin,
  },
];

export function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.tituloHeader}>
        ISABELA MAGELLA <span>DEV</span>
      </p>

      <div className={styles.linksContainer}>
        {LINKS_SOCIAIS.map(({ nome, url, Icone }) => (
          <a
            key={nome}
            href={url}
            className={styles.linkSocial}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icone />
            {nome}
          </a>
        ))}
      </div>
    </header>
  );
}
