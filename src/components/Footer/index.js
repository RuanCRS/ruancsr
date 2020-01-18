import React from "react";

import { Footer, Container, Content, Copyright } from "./styles";

export default function ComponentFooter() {
  return (
    <Footer>
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
      <Copyright>
        <p>Copyright © 2020 Feedzao. Todos os direitos reservados</p>
      </Copyright>
    </Footer>
  );
}
