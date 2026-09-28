import { useState } from "react";
import { Intro } from "./pages/Intro/Intro";
import { MenuPrincipal } from "./pages/MenuPrincipal/MenuPrincipal";
import { Missoes } from "./pages/Missoes/Missoes";
import { Inventario } from "./pages/Inventario/Inventario";
import { Personagem } from "./pages/Personagem/Personagem";

function App() {
  const [telaAtiva, setTelaAtiva] = useState<
    | "intro"
    | "menu"
    | "correio"
    | "inventario"
    | "personagem"
    | "salvar"
    | "missoes"
  >("intro");

  return (
    <>
      {telaAtiva === "intro" && (
        <Intro onAvancar={() => setTelaAtiva("menu")} />
      )}

      {telaAtiva === "menu" && (
        <MenuPrincipal
          onAvancarCorreio={() => setTelaAtiva("correio")}
          onAvancarInventario={() => setTelaAtiva("inventario")}
          onAvancarMissoes={() => setTelaAtiva("missoes")}
          onAvancarPersonagem={() => setTelaAtiva("personagem")}
          onAvancarSalvar={() => setTelaAtiva("salvar")}
        />
      )}

      {telaAtiva === "missoes" && (
        <Missoes onVoltar={() => setTelaAtiva("menu")} />
      )}

      {telaAtiva === "inventario" && (
        <Inventario onVoltar={() => setTelaAtiva("menu")}/>
      )}

      {telaAtiva === "personagem" && (
        <Personagem onVoltar={() => setTelaAtiva("menu")}/>
      )}
    </>
  );
}

export default App;
