import styles from "./Inventario.module.css";
import { useState } from "react";
import { MOCK_INVENTARIO } from "../../mocks/inventario";
import { PaginaSessao } from "../../components/PaginaSessao/PaginaSessao";
import {
  IconeInventario,
  IconeSetaDireita,
  IconeSetaEsquerda,
} from "../../components/Icones/Icones";
import {
  TECLAS_HORIZONTAIS,
  useNavegacaoLista,
} from "../../hooks/useNavegacaoLista";

interface InventarioProps {
  onVoltar: () => void;
}

interface ListarFerramentasProps {
  indiceAtivo: number;
  setIndiceAtivo: (index: number) => void;
}

interface DetalhesFerramentaProps {
  indiceAtivo: number;
}

interface RotuloProps {
  texto: string;
}

const COLUNAS = 4;
const MINIMO_SLOTS = 12;
const NIVEL_MAXIMO = 5;

function ListarFerramentas({
  indiceAtivo,
  setIndiceAtivo,
}: ListarFerramentasProps) {
  const propsDoBotao = useNavegacaoLista(
    MOCK_INVENTARIO.length,
    setIndiceAtivo,
    TECLAS_HORIZONTAIS,
  );

  const totalSlots = Math.max(
    MINIMO_SLOTS,
    Math.ceil(MOCK_INVENTARIO.length / COLUNAS) * COLUNAS,
  );
  const slotsVazios = totalSlots - MOCK_INVENTARIO.length;

  return (
    <>
      {MOCK_INVENTARIO.map((ferramenta, index) => (
        <div
          key={ferramenta.id}
          className={`${styles.ferramenta} ${indiceAtivo === index ? styles.ativo : ""}`}
        >
          <button {...propsDoBotao(index)}>
            {ferramenta.icone}
            <p className={styles.nomeFerramenta}>{ferramenta.nome}</p>
          </button>
        </div>
      ))}

      {Array.from({ length: slotsVazios }, (_, i) => (
        <div
          key={`vazio-${i}`}
          className={`${styles.ferramenta} ${styles.ferramentaVazia}`}
          aria-hidden="true"
        ></div>
      ))}
    </>
  );
}

function Rotulo({ texto }: RotuloProps) {
  return (
    <p className={styles.rotulo}>
      <span className={styles.marcador} aria-hidden="true">
        ▪
      </span>{" "}
      {texto}
    </p>
  );
}

function DetalhesFerramenta({ indiceAtivo }: DetalhesFerramentaProps) {
  return MOCK_INVENTARIO.map((ferramenta, index) => (
    <div
      className={`${styles.detalhesFerramenta} ${indiceAtivo === index ? "" : styles.hidden}`}
      key={ferramenta.id}
    >
      <div className={styles.detalhesCabecalho}>
        <div className={styles.detalhesIconeContainer}>{ferramenta.icone}</div>
        <h2 className={styles.detalhesNome}>{ferramenta.nome}</h2>
      </div>

      <div className={styles.secaoNivel}>
        <Rotulo texto="NÍVEL" />
        <div
          className={styles.barraNivel}
          role="img"
          aria-label={`Nível ${ferramenta.nivel} de ${NIVEL_MAXIMO}`}
        >
          {Array.from({ length: NIVEL_MAXIMO }, (_, i) => (
            <div
              key={i}
              className={`${styles.blocoNivel} ${i < ferramenta.nivel ? styles.blocoPreenchido : styles.blocoVazio}`}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.secaoUso}>
        <Rotulo texto="USO" />
        <p className={styles.textoUso}>{ferramenta.uso}</p>
      </div>

      <div className={styles.secaoProjetos}>
        <Rotulo texto="USADA EM" />
        <div className={styles.listaProjetos}>
          {ferramenta.usadaEm.map((projeto, i) => (
            <p key={i} className={styles.projeto}>
              {projeto}
            </p>
          ))}
        </div>
      </div>
    </div>
  ));
}

export function Inventario({ onVoltar }: InventarioProps) {
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  return (
    <PaginaSessao
      className={styles.inventarioSection}
      icone={<IconeInventario />}
      titulo="INVENTÁRIO"
      subtitulo="ferramentas que uso"
      onVoltar={onVoltar}
    >
      <div className={styles.conteudoPainel}>
        <div className={styles.gridFerramentas}>
          <ListarFerramentas
            indiceAtivo={indiceAtivo}
            setIndiceAtivo={setIndiceAtivo}
          />
        </div>

        <DetalhesFerramenta indiceAtivo={indiceAtivo} />
      </div>

      <div className={styles.grupoSetas}>
        <div className={styles.setaWrapper}>
          <IconeSetaEsquerda aria-hidden="true" />
        </div>
        <div className={styles.setaWrapper}>
          <IconeSetaDireita aria-hidden="true" />
        </div>
        <p className={styles.rotuloControle}>ESCOLHER</p>
      </div>
    </PaginaSessao>
  );
}
