import React, { useState } from "react";

import {
  Header,
  Container,
  Menu,
  Login,
  Find,
  BtnMobile,
  BtnCloseMenuMobile,
} from "./styles";

import IconLogo from "../../assets/icons/logo.png";
import IconLogin from "../../assets/icons/login.png";
import IconFind from "../../assets/icons/find.png";
import IconBtnMenu from "../../assets/icons/btn_menu.png";

export default function Top() {
  const [OpenMenuMobile, setOpenMenuMobile] = useState(false);

  return (
    <Header>
      <Container>
        <Menu>
          <a href="/" className="logo">
            <img src={IconLogo} alt="Logo" title="Logo" />
          </a>

          <ul style={OpenMenuMobile ? { display: "block" } : {}}>
            <BtnCloseMenuMobile onClick={() => setOpenMenuMobile(false)}>
              X
            </BtnCloseMenuMobile>

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
            <Login>
              <img src={IconLogin} alt="Entrar" title="Entrar" />
            </Login>
            <Find>
              <img src={IconFind} alt="Buscar" title="Buscar" />
            </Find>
          </ul>
          <BtnMobile onClick={() => setOpenMenuMobile(true)}>
            <img src={IconBtnMenu} />
          </BtnMobile>
        </Menu>
      </Container>
    </Header>
  );
}
