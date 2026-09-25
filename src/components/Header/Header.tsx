import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.tituloHeader}>
        ISABELA MAGELLA <span>DEV</span>
      </p>

      <div className={styles.linksContainer}>
        <a
          href="https://github.com/isabelavmagella"
          className={styles.linkSocial}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            shape-rendering="crispEdges"
          >
            <path d="M9 3h1v1h-1zM9 4h1v1h-1zM3 5h2v1h-2zM8 5h1v1h-1zM11 5h2v1h-2zM2 6h2v1h-2zM8 6h1v1h-1zM12 6h2v1h-2zM1 7h2v1h-2zM7 7h1v1h-1zM13 7h2v1h-2zM1 8h2v1h-2zM7 8h1v1h-1zM13 8h2v1h-2zM2 9h2v1h-2zM6 9h1v1h-1zM12 9h2v1h-2zM3 10h2v1h-2zM6 10h1v1h-1zM11 10h2v1h-2zM5 11h1v1h-1zM5 12h1v1h-1z" />
          </svg>
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/isabela-magella-32401a271/"
          className={styles.linkSocial}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            shape-rendering="crispEdges"
          >
            <path d="M5 2h6v1h-6zM5 3h1v1h-1zM10 3h1v1h-1zM1 4h14v1h-14zM1 5h1v1h-1zM14 5h1v1h-1zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM14 7h1v1h-1zM1 8h6v1h-6zM9 8h6v1h-6zM1 9h1v1h-1zM6 9h4v1h-4zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z" />
          </svg>
          LINKEDIN
        </a>
      </div>
    </header>
  );
}
