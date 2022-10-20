import React from "react";
// import CardVideo from "./Componentes/CardVideo";
import "./styles.css";
// import { Nav } from "./Componentes/Nav/Nav"
import { Header } from "./Componentes/Header/Header";
import { Main } from "./Componentes/Main/Main";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <div className="tela-inteira">
        <Header />

        <Main
          tituloVideo={card1.titulo}
          imagemVideo={card1.imagemDoVideo}
          textoAlternativoVideo={card1.textoAlternativo}
        />

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
