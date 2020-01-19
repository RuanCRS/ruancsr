import React from "react";

import { Footer, Container, Content, Copyright } from "./styles";

export default function ComponentFooter() {
  return (
    <Footer>
      <Container>
        <Content>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/noticias">Notícias</a>
            </li>

            <li>
              <a href="/quizz">Quizz</a>
            </li>

            <li>
              <a href="/humor">Humor</a>
            </li>

            <li>
              <a href="/loja">Loja</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/quem-somos">Quem somos</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>

            <li>
              <a href="/sobre">Sobre</a>
            </li>

            <li>
              <a href="/seja-um-parceiro">Seja um parceiro</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/"></a>
            </li>
            <li>
              <a href="/"></a>
            </li>

            <li>
              <a href="/"></a>
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
