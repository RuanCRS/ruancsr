import React from "react";

import { Header, Container, Menu } from "./styles";
import Logo from "../../assets/logo.png";

export default function Top() {
  return (
    <Header>
      <Container>
        <Menu>
          <a href="/" className="logo">
            <img src={Logo} />
          </a>

          <ul>
            <li className="btn">
              <a href="/">Home</a>
            </li>
            <li className="btn">
              <a href="/sobre">Sobre</a>
            </li>

            <li className="btn">
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </Menu>
      </Container>
    </Header>
  );
}
