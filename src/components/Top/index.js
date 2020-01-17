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
              <a href="/">Início</a>
            </li>
            <li className="btn">
              <a href="/noticias">Notícias</a>
            </li>

            <li className="btn">
              <a href="/quizz">Quizz</a>
            </li>
            <li className="btn">
              <a href="/humor">Humor</a>
            </li>
            <li className="btn">
              <a href="/loja">Loja</a>
            </li>
          </ul>
        </Menu>
      </Container>
    </Header>
  );
}
