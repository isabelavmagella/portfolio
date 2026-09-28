import { useEffect, useRef } from "react";
import type React from "react";

interface TeclasNavegacao {
  proximo: string;
  anterior: string;
}

export const TECLAS_VERTICAIS: TeclasNavegacao = {
  proximo: "ArrowDown",
  anterior: "ArrowUp",
};

export const TECLAS_HORIZONTAIS: TeclasNavegacao = {
  proximo: "ArrowRight",
  anterior: "ArrowLeft",
};

/**
 * Navegação entre os botões de uma lista pelo teclado (com volta ao início)
 * e pelo mouse. Foca o primeiro botão ao montar e mantém o índice ativo
 * sincronizado com o foco.
 *
 * Retorna uma função que gera as props de cada botão da lista.
 */
export function useNavegacaoLista(
  total: number,
  setIndiceAtivo: (index: number) => void,
  teclas: TeclasNavegacao = TECLAS_VERTICAIS,
) {
  const botoesRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    botoesRef.current[0]?.focus();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === teclas.proximo) {
      event.preventDefault();
      botoesRef.current[(index + 1) % total]?.focus();
    }

    if (event.key === teclas.anterior) {
      event.preventDefault();
      botoesRef.current[(index - 1 + total) % total]?.focus();
    }
  };

  return (index: number) => ({
    ref: (el: HTMLButtonElement | null) => {
      botoesRef.current[index] = el;
    },
    onFocus: () => setIndiceAtivo(index),
    onMouseEnter: () => {
      setIndiceAtivo(index);
      botoesRef.current[index]?.focus();
    },
    onKeyDown: (event: React.KeyboardEvent) => handleKeyDown(event, index),
  });
}
