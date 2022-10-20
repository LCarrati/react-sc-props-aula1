import React from "react";
import { BoxMain } from "./style";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxMain onClick={reproduzVideo}>
      <img src={props.merda} alt={props.textoAlternativoMerda} />
      <h4>{props.tituloMerda}</h4>
    </BoxMain>
  );
}

export default CardVideo;
