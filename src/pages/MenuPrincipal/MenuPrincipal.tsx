import styles from "./MenuPrincipal.module.css";
import { useState } from "react";
import flores from "../../assets/images/flores.webp";
import { Header } from "../../components/Header/Header";
import { ImagemFundo } from "../../components/ImagemFundo/ImagemFundo";
import { TelaAnimada } from "../../components/TelaAnimada/TelaAnimada";
import {
  IconeCorreio,
  IconeInventario,
  IconeMissoes,
  IconePersonagem,
  IconeSalvar,
  IconeSetaAtivo,
  IconeSetaBaixo,
  IconeSetaCima,
} from "../../components/Icones/Icones";
import { useNavegacaoLista } from "../../hooks/useNavegacaoLista";

interface MenuPrincipalProps {
  onAvancarMissoes: () => void;
  onAvancarInventario: () => void;
  onAvancarPersonagem: () => void;
  onAvancarSalvar: () => void;
  onAvancarCorreio: () => void;
}

export function MenuPrincipal({
  onAvancarMissoes,
  onAvancarCorreio,
  onAvancarInventario,
  onAvancarPersonagem,
  onAvancarSalvar,
}: MenuPrincipalProps) {
  const itens = [
    {
      titulo: "MISSÕES",
      subtitulo: "meus projetos",
      Icone: IconeMissoes,
      onClick: onAvancarMissoes,
    },
    {
      titulo: "INVENTÁRIO",
      subtitulo: "ferramentas que uso",
      Icone: IconeInventario,
      onClick: onAvancarInventario,
    },
    {
      titulo: "PERSONAGEM",
      subtitulo: "sobre mim",
      Icone: IconePersonagem,
      onClick: onAvancarPersonagem,
    },
    {
      titulo: "SALVAR JOGO",
      subtitulo: "baixar currículo",
      Icone: IconeSalvar,
      onClick: onAvancarSalvar,
    },
    {
      titulo: "CORREIO",
      subtitulo: "fale comigo",
      Icone: IconeCorreio,
      onClick: onAvancarCorreio,
    },
  ];

  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const propsDoBotao = useNavegacaoLista(itens.length, setIndiceAtivo);

  return (
    <TelaAnimada>
      <ImagemFundo src={flores} />

      <div className={`${styles.menuPrincipal} container`}>
        <Header />

        <section className={`${styles.sectionMenu} sessao`}>
          <h2 className={styles.tituloMenu}>MENU</h2>
          <ul className={styles.listaMenu}>
            {itens.map(({ titulo, subtitulo, Icone, onClick }, index) => (
              <li
                key={titulo}
                className={`${styles.itemMenu} ${indiceAtivo === index ? styles.ativo : ""}`}
              >
                <IconeSetaAtivo
                  className={styles.setaAtivo}
                  width="12"
                  height="24"
                />
                <button
                  className={styles.botaoMenu}
                  onClick={onClick}
                  {...propsDoBotao(index)}
                >
                  <Icone />
                  <p className={styles.textoItem}>
                    {titulo}{" "}
                    <span className={styles.subtextoItem}>{subtitulo}</span>
                  </p>
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.controlesContainer}>
            <div className={styles.grupoSetas}>
              <div className={styles.setaWrapper}>
                <IconeSetaCima />
              </div>
              <div className={styles.setaWrapper}>
                <IconeSetaBaixo />
              </div>
              <p className={styles.rotuloControle}>ESCOLHER</p>
            </div>

            <div className={styles.grupoEnter}>
              <p className={styles.teclaEnter}>ENTER</p>
              <p className={styles.rotuloControle}>ABRIR</p>
            </div>
          </div>
        </section>
      </div>
    </TelaAnimada>
  );
}
