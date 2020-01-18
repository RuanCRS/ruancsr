import React from "react";

import { Header, Container, Menu, Login, Find } from "./styles";
import IconLogo from "../../assets/icons/logo.png";
import IconLogin from "../../assets/icons/login.png";
import IconFind from "../../assets/icons/find.png";

export default function Top() {
  return (
    <Header>
      <Container>
        <Menu>
          <a href="/" className="logo">
            <img src={IconLogo} alt="Logo" title="Logo" />
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

          <Find>
            <img src={IconFind} alt="Buscar" title="Buscar" />
          </Find>
          <Login>
            <img src={IconLogin} alt="Entrar" title="Entrar" />
          </Login>
        </Menu>
      </Container>
    </Header>
  );
}
