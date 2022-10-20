import React from "react";
import { NavBar, LiStyles } from "./styled";

export function Nav() {
  return (
    <NavBar>
      <ul>
        <LiStyles>Início</LiStyles>
        <LiStyles>Em alta</LiStyles>
        <LiStyles>Inscrições</LiStyles>
        <hr />
        <LiStyles>Originais</LiStyles>
        <LiStyles>Histórico</LiStyles>
      </ul>
    </NavBar>
  );
}
