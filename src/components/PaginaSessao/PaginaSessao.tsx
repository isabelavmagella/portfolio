import type { ReactNode } from "react";
import ceu from "../../assets/images/ceu.webp";
import { useTeclaEscape } from "../../hooks/useTeclaEscape";
import { CabecalhoSessao } from "../CabecalhoSessao/CabecalhoSessao";
import { Header } from "../Header/Header";
import { ImagemFundo } from "../ImagemFundo/ImagemFundo";
import { TelaAnimada } from "../TelaAnimada/TelaAnimada";

interface PaginaSessaoProps {
  className: string;
  icone: ReactNode;
  titulo: string;
  subtitulo: string;
  onVoltar: () => void;
  ocultarEscNoMobile?: boolean;
  children: ReactNode;
}

export function PaginaSessao({
  className,
  icone,
  titulo,
  subtitulo,
  onVoltar,
  ocultarEscNoMobile,
  children,
}: PaginaSessaoProps) {
  useTeclaEscape(onVoltar);

  return (
    <>
      <ImagemFundo src={ceu} />

      <TelaAnimada>
        <Header />

        <section className={`${className} sessao`}>
          <CabecalhoSessao
            icone={icone}
            titulo={titulo}
            subtitulo={subtitulo}
            onVoltar={onVoltar}
            ocultarEscNoMobile={ocultarEscNoMobile}
          />

          {children}
        </section>
      </TelaAnimada>
    </>
  );
}
