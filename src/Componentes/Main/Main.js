import React from "react";
import { Principal, Section } from "./style";
import CardVideo from "../CardVideo/CardVideo";
import { Nav } from "../Nav/Nav";

export function Main(props) {
  console.log(props.tituloVideo);
  return (
    <Principal>
      <Nav />
      <Section className="painel-de-videos">
        <CardVideo
          merda={props.imagemVideo}
          tituloMerda={props.tituloVideo}
          textoAlternativoMerda={props.textoAlternativoVideo}
        />
      </Section>
    </Principal>
  );
}
