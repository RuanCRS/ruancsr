import React from "react";

import { Container, Menu } from "./styles";

export default function Top() {
  return (
    <>
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
    </>
  );
}
