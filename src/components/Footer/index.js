import React from "react";

import { Footer, Container, Content, Copyright } from "./styles";

import IconFacebook from "../../assets/icons/facebook.png";
import IconInstagram from "../../assets/icons/instagram.png";
import IconTwitter from "../../assets/icons/twitter.png";
import IconYoutube from "../../assets/icons/youtube.png";

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

          <div className="social-profile">
            <h3>Redes Sociais</h3>
            <li>
              <a href="/">
                <img src={IconFacebook} alt="Facebook" title="Facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={IconInstagram} alt="Instagram" title="Instagram" />
              </a>
            </li>

            <li>
              <a href="/">
                <img src={IconTwitter} alt="Twitter" title="Twitter" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={IconYoutube} alt="Youtube" title="Youtube" />
              </a>
            </li>
          </div>
        </Content>
      </Container>
      <Copyright>
        <p>Copyright © 2020 Feedzao. Todos os direitos reservados</p>
      </Copyright>
    </Footer>
  );
}
