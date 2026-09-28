import { useState } from "react";
import { Intro } from "./pages/Intro/Intro";
import { MenuPrincipal } from "./pages/MenuPrincipal/MenuPrincipal";
import { Missoes } from "./pages/Missoes/Missoes";
import { Inventario } from "./pages/Inventario/Inventario";
import { Personagem } from "./pages/Personagem/Personagem";
import { Salvar } from "./pages/Salvar/Salvar";
import { Correio } from "./pages/Correio/Correio";

type Tela =
  | "intro"
  | "menu"
  | "correio"
  | "inventario"
  | "personagem"
  | "salvar"
  | "missoes";

function App() {
  const [telaAtiva, setTelaAtiva] = useState<Tela>("intro");

  const voltarAoMenu = () => setTelaAtiva("menu");

  return (
    <>
      {telaAtiva === "intro" && <Intro onAvancar={voltarAoMenu} />}

      {telaAtiva === "menu" && (
        <MenuPrincipal
          onAvancarCorreio={() => setTelaAtiva("correio")}
          onAvancarInventario={() => setTelaAtiva("inventario")}
          onAvancarMissoes={() => setTelaAtiva("missoes")}
          onAvancarPersonagem={() => setTelaAtiva("personagem")}
          onAvancarSalvar={() => setTelaAtiva("salvar")}
        />
      )}

      {telaAtiva === "missoes" && <Missoes onVoltar={voltarAoMenu} />}

      {telaAtiva === "inventario" && <Inventario onVoltar={voltarAoMenu} />}

      {telaAtiva === "personagem" && <Personagem onVoltar={voltarAoMenu} />}

      {telaAtiva === "salvar" && <Salvar onVoltar={voltarAoMenu} />}

      {telaAtiva === "correio" && <Correio onVoltar={voltarAoMenu} />}
    </>
  );
}

export default App;
