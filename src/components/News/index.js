import React from "react";

import { Container, News, TopNews, FirstNews, BlockNews } from "./styles";

import TopNewsImage from "../../assets/TopNews/01news.png";

import SocialNetworks from "../SocialNetworks";

const dataTopNews = [
  {
    id: 1,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
  },
  {
    id: 2,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
  },
  {
    id: 3,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
  },
  {
    id: 4,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
  },
  {
    id: 5,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
  },
  {
    id: 6,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
  },
  {
    id: 7,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
  },
];

const dataBlockNews = [
  {
    id: 1,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit adipiscing elit ipsum dolor sit ipsum dolor sit ipsum dolor sit",
  },
  {
    id: 2,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit adipiscing elit ipsum dolor sit ipsum dolor sit ipsum dolor sit",
  },
  {
    id: 3,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit adipiscing elit ipsum dolor sit ipsum dolor sit ipsum dolor sit",
  },
  {
    id: 4,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit adipiscing elit ipsum dolor sit ipsum dolor sit ipsum dolor sit",
  },
  {
    id: 5,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit adipiscing elit ipsum dolor sit ipsum dolor sit ipsum dolor sit",
  },
  {
    id: 6,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit adipiscing elit ipsum dolor sit ipsum dolor sit ipsum dolor sit",
  },
  {
    id: 7,
    image: TopNewsImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit adipiscing elit ipsum dolor sit ipsum dolor sit ipsum dolor sit",
  },
];

export default function NewsComponent() {
  const RenderDatasTopNews = dataTopNews.map(datas => (
    <div className="news">
      <span>{datas.id}</span>

      <img src={datas.image} />
      <div className="text">
        <h2>{datas.title}</h2>
      </div>
    </div>
  ));

  const RenderDatasBlockNews = dataBlockNews.map(datas => (
    <div className="news">
      <div className="image">
        <img src={datas.image} />
      </div>

      <div className="text">
        <h3>{datas.title}</h3>
        <p>{datas.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      <Container>
        <News>
          <FirstNews>
            <div className="first">
              <div className="spotlight">
                <span>Destaque</span>
              </div>
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

          <BlockNews>{RenderDatasBlockNews}</BlockNews>
        </News>
        <TopNews>
          <SocialNetworks />
          {RenderDatasTopNews}
        </TopNews>
      </Container>
    </>
  );
}
