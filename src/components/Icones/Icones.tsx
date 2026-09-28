import type { SVGProps } from "react";

type IconeProps = SVGProps<SVGSVGElement>;

function IconePixel({ d, ...props }: IconeProps & { d: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      {...props}
    >
      <path d={d} />
    </svg>
  );
}

export function IconeSetaAtivo(props: IconeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 24"
      fill="none"
      {...props}
    >
      <path
        d="M0 0H2V2H0V0ZM0 2H4V4H0V2ZM0 4H6V6H0V4ZM0 6H8V8H0V6ZM0 8H10V10H0V8ZM0 10H12V12H0V10ZM0 12H12V14H0V12ZM0 14H10V16H0V14ZM0 16H8V18H0V16ZM0 18H6V20H0V18ZM0 20H4V22H0V20ZM0 22H2V24H0V22Z"
        fill="#FFD66B"
      />
    </svg>
  );
}

export function IconeMissoes(props: IconeProps) {
  return (
    <IconePixel
      d="M2 1h1v1h-1zM2 2h10v1h-10zM2 3h11v1h-11zM2 4h10v1h-10zM2 5h9v1h-9zM2 6h10v1h-10zM2 7h11v1h-11zM2 8h10v1h-10zM2 9h1v1h-1zM2 10h1v1h-1zM2 11h1v1h-1zM2 12h1v1h-1zM2 13h1v1h-1zM1 14h3v1h-3z"
      {...props}
    />
  );
}

export function IconeInventario(props: IconeProps) {
  return (
    <IconePixel
      d="M3 2h10v1h-10zM2 3h1v1h-1zM13 3h1v1h-1zM1 4h1v1h-1zM14 4h1v1h-1zM1 5h1v1h-1zM14 5h1v1h-1zM1 6h6v1h-6zM9 6h6v1h-6zM1 7h1v1h-1zM6 7h1v1h-1zM9 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM6 8h4v1h-4zM14 8h1v1h-1zM1 9h1v1h-1zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z"
      {...props}
    />
  );
}

export function IconePersonagem(props: IconeProps) {
  return (
    <IconePixel
      d="M6 2h4v1h-4zM5 3h1v1h-1zM10 3h1v1h-1zM4 4h1v1h-1zM11 4h1v1h-1zM4 5h1v1h-1zM11 5h1v1h-1zM4 6h1v1h-1zM11 6h1v1h-1zM5 7h1v1h-1zM10 7h1v1h-1zM6 8h4v1h-4zM4 9h8v1h-8zM3 10h1v1h-1zM12 10h1v1h-1zM2 11h1v1h-1zM13 11h1v1h-1zM2 12h1v1h-1zM13 12h1v1h-1zM2 13h12v1h-12z"
      {...props}
    />
  );
}

export function IconeSalvar(props: IconeProps) {
  return (
    <IconePixel
      d="M1 1h12v1h-12zM1 2h1v1h-1zM4 2h1v1h-1zM8 2h1v1h-1zM10 2h1v1h-1zM13 2h1v1h-1zM1 3h1v1h-1zM4 3h1v1h-1zM8 3h1v1h-1zM10 3h1v1h-1zM14 3h1v1h-1zM1 4h1v1h-1zM4 4h1v1h-1zM10 4h1v1h-1zM14 4h1v1h-1zM1 5h1v1h-1zM4 5h7v1h-7zM14 5h1v1h-1zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM3 8h10v1h-10zM14 8h1v1h-1zM1 9h1v1h-1zM3 9h1v1h-1zM12 9h1v1h-1zM14 9h1v1h-1zM1 10h1v1h-1zM3 10h1v1h-1zM12 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM3 11h1v1h-1zM12 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM12 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z"
      {...props}
    />
  );
}

export function IconeCorreio(props: IconeProps) {
  return (
    <IconePixel
      d="M1 3h14v1h-14zM1 4h2v1h-2zM13 4h2v1h-2zM1 5h1v1h-1zM3 5h1v1h-1zM12 5h1v1h-1zM14 5h1v1h-1zM1 6h1v1h-1zM4 6h1v1h-1zM11 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM5 7h1v1h-1zM10 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM6 8h1v1h-1zM9 8h1v1h-1zM14 8h1v1h-1zM1 9h1v1h-1zM7 9h2v1h-2zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h14v1h-14z"
      {...props}
    />
  );
}

export function IconeGithub(props: IconeProps) {
  return (
    <IconePixel
      d="M9 3h1v1h-1zM9 4h1v1h-1zM3 5h2v1h-2zM8 5h1v1h-1zM11 5h2v1h-2zM2 6h2v1h-2zM8 6h1v1h-1zM12 6h2v1h-2zM1 7h2v1h-2zM7 7h1v1h-1zM13 7h2v1h-2zM1 8h2v1h-2zM7 8h1v1h-1zM13 8h2v1h-2zM2 9h2v1h-2zM6 9h1v1h-1zM12 9h2v1h-2zM3 10h2v1h-2zM6 10h1v1h-1zM11 10h2v1h-2zM5 11h1v1h-1zM5 12h1v1h-1z"
      {...props}
    />
  );
}

export function IconeLinkedin(props: IconeProps) {
  return (
    <IconePixel
      d="M5 2h6v1h-6zM5 3h1v1h-1zM10 3h1v1h-1zM1 4h14v1h-14zM1 5h1v1h-1zM14 5h1v1h-1zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h1v1h-1zM14 7h1v1h-1zM1 8h6v1h-6zM9 8h6v1h-6zM1 9h1v1h-1zM6 9h4v1h-4zM14 9h1v1h-1zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z"
      {...props}
    />
  );
}

export function IconeVoltar(props: IconeProps) {
  return (
    <IconePixel
      d="M12 2h1v1h-1zM11 3h2v1h-2zM10 4h3v1h-3zM9 5h4v1h-4zM8 6h5v1h-5zM7 7h6v1h-6zM7 8h6v1h-6zM8 9h5v1h-5zM9 10h4v1h-4zM10 11h3v1h-3zM11 12h2v1h-2zM12 13h1v1h-1z"
      {...props}
    />
  );
}

export function IconeLinkExterno(props: IconeProps) {
  return (
    <IconePixel
      d="M7 2h7v1h-7zM7 3h7v1h-7zM10 4h4v1h-4zM9 5h2v1h-2zM12 5h2v1h-2zM8 6h2v1h-2zM12 6h2v1h-2zM7 7h2v1h-2zM12 7h2v1h-2zM6 8h2v1h-2zM12 8h2v1h-2zM5 9h2v1h-2zM4 10h2v1h-2zM3 11h2v1h-2zM2 12h2v1h-2z"
      {...props}
    />
  );
}

export function IconeDownload(props: IconeProps) {
  return (
    <IconePixel
      d="M7 1h2v1h-2zM7 2h2v1h-2zM7 3h2v1h-2zM7 4h2v1h-2zM7 5h2v1h-2zM4 6h8v1h-8zM5 7h6v1h-6zM6 8h4v1h-4zM7 9h2v1h-2zM1 11h1v1h-1zM14 11h1v1h-1zM1 12h1v1h-1zM14 12h1v1h-1zM1 13h14v1h-14z"
      {...props}
    />
  );
}

export function IconeSetaCima(props: IconeProps) {
  return (
    <IconePixel
      d="M7 4h2v1h-2zM6 5h4v1h-4zM5 6h6v1h-6zM4 7h8v1h-8zM7 8h2v1h-2zM7 9h2v1h-2zM7 10h2v1h-2zM7 11h2v1h-2z"
      {...props}
    />
  );
}

export function IconeSetaBaixo(props: IconeProps) {
  return (
    <IconePixel
      d="M7 4h2v1h-2zM7 5h2v1h-2zM7 6h2v1h-2zM7 7h2v1h-2zM4 8h8v1h-8zM5 9h6v1h-6zM6 10h4v1h-4zM7 11h2v1h-2z"
      {...props}
    />
  );
}

export function IconeSetaEsquerda(props: IconeProps) {
  return (
    <IconePixel
      d="M7 4h1v1h-1zM6 5h2v1h-2zM5 6h3v1h-3zM4 7h8v1h-8zM4 8h8v1h-8zM5 9h3v1h-3zM6 10h2v1h-2zM7 11h1v1h-1z"
      {...props}
    />
  );
}

export function IconeSetaDireita(props: IconeProps) {
  return (
    <IconePixel
      d="M8 4h1v1h-1zM8 5h2v1h-2zM8 6h3v1h-3zM4 7h8v1h-8zM4 8h8v1h-8zM8 9h3v1h-3zM8 10h2v1h-2zM8 11h1v1h-1z"
      {...props}
    />
  );
}
