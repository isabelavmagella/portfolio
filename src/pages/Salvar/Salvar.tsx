import styles from "./Salvar.module.css";
import curriculo from "../../assets/arquivos/Curriculo_Isabela_Virginio_Magella.pdf";
import { PaginaSessao } from "../../components/PaginaSessao/PaginaSessao";
import {
  IconeDownload,
  IconeSalvar,
  IconeSetaAtivo,
} from "../../components/Icones/Icones";

interface SalvarProps {
  onVoltar: () => void;
}

export function Salvar({ onVoltar }: SalvarProps) {
  return (
    <PaginaSessao
      className={styles.salvarSection}
      icone={<IconeSalvar />}
      titulo="SALVAR JOGO"
      subtitulo="baixar currículo"
      onVoltar={onVoltar}
    >
      <div className={styles.conteudoPainel}>
        <div className={styles.slotSave}>
          <IconeSetaAtivo className={styles.iconeSeta} aria-hidden="true" />
          <IconeSalvar className={styles.iconeSlot} aria-hidden="true" />

          <div className={styles.infoSlot}>
            <p className={styles.slotTitulo}>SLOT 1 • CURRÍCULO</p>
            <p className={styles.slotDetalhes}>
              PDF • 1 página • atualizado em 08/2026
            </p>
          </div>
        </div>

        <p className={styles.pergunta}>Salvar o currículo no seu dispositivo?</p>

        <div className={styles.acoes}>
          <a
            href={curriculo}
            download="Curriculo_Isabela_Virginio_Magella.pdf"
            className={styles.botaoConfirmar}
          >
            <IconeDownload className={styles.iconeDownload} aria-hidden="true" />
            <p className={styles.textoConfirmar}>SIM, BAIXAR PDF</p>
          </a>

          <button className={styles.botaoCancelar} onClick={onVoltar}>
            NÃO, VOLTAR
          </button>
        </div>
      </div>
    </PaginaSessao>
  );
}
