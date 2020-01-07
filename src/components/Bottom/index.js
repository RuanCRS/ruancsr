import React from "react";

import { Bottom, Container, Content } from "./styles";

export default function ComponentBottom() {
  return (
    <Bottom>
      <Container>
        <Content>
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
        </Content>
      </Container>
    </Bottom>
  );
}
