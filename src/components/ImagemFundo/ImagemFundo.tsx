interface ImagemFundoProps {
  src: string;
}

export function ImagemFundo({ src }: ImagemFundoProps) {
  return (
    <img
      src={src}
      id="portfolio-background"
      className="portfolio-background"
      alt="Plano de fundo decorativo com flores"
    />
  );
}
