import { useState } from "react";
import { Intro } from "./pages/Intro/Intro";
import { MenuPrincipal } from "./pages/MenuPrincipal/MenuPrincipal";

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
    </>
  );
}

export default App;
