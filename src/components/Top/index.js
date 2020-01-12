import React from "react";

import { Header, Container, Menu } from "./styles";

export default function Top() {
  return (
    <Header>
      <Container>
        <Menu>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>

            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </Menu>
      </Container>
    </Header>
  );
}
