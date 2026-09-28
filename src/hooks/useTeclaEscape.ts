import { useEffect } from "react";

/** Executa `aoPressionar` quando a tecla ESC é pressionada em qualquer lugar da página. */
export function useTeclaEscape(aoPressionar: () => void) {
  useEffect(() => {
    const escutarTecladoGlobal = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        aoPressionar();
      }
    };

    window.addEventListener("keydown", escutarTecladoGlobal);

    return () => {
      window.removeEventListener("keydown", escutarTecladoGlobal);
    };
  }, [aoPressionar]);
}
