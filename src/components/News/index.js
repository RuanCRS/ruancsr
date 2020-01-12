/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Container, News, TopNews, FirstNews } from "./styles";

import TopNewsImage from "../../assets/TopNews/01news.png";

export default function NewsComponent() {
  return (
    <>
      <Container>
        <News>
          <FirstNews>
            <div className="first">
              <img src={TopNewsImage} />
              <div className="text">
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                  dolor sit.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </FirstNews>
        </News>
        <TopNews>
          <div className="news">
            <span>1</span>

            <img src={TopNewsImage} />
            <div className="text">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                dolor sit.
              </h2>
            </div>
          </div>
        </TopNews>
      </Container>
    </>
  );
}
