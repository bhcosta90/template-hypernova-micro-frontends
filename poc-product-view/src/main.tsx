import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const root = document.getElementById("root");
render(<App
  name="Bruno Costa"
  brand="My Brand"
  price="R$ 150,00"
  finalPrice="R$ 120,00"
  eco={true}
  cart={true}
  wish={true}
  discount="-38%"
  free_shipping={true}
  sponsor={true}
  black={true}
  urlImage="https://static.dafiti.com.br/p/Aura-Vestido-Aura-Faixa-Babado-Azul-9387-5557586-1-zoom.jpg"
/>, root);