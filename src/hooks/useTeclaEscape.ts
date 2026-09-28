import { useEffect } from "react";

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
