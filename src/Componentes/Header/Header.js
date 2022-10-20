import React from "react";
import { HeaderBar } from "./style";

export function Header() {
  return (
    <HeaderBar>
      <h1>LabeTube</h1>
      <input type="text" placeholder="Busca" id="campoDeBusca" />
    </HeaderBar>
  );
}
