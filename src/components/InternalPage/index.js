import React from "react";

import { Container, BlockContent, Content } from "./styles";

import TopNewsImage from "../../assets/TopNews/01news.png";

import SocialNetworks from "../SocialNetworks";

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

export default function InternalPageComponent() {
  const RenderDatasBlockNews = dataBlockNews.map(datas => (
    <div className="content-block mb">
      <div className="image">
        <img src={datas.image} alt="teste" title="teste" />
      </div>

      <div className="text">
        <h2>{datas.title}</h2>
        <p>{datas.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      <Container>
        <Content>
          <div className="top">
            <div className="content-block first">
              <div className="image">
                <img src={TopNewsImage} alt="teste" title="teste" />
              </div>

              <div className="text">
                <h1>
                  1 -Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  ipsum dolor sit
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                  dolor sit adipiscing elit ipsum dolor sit ipsum dolor sit
                  ipsum dolor sit
                </p>
              </div>
            </div>

            <div className="sn">
              <SocialNetworks marginTop="-26px" />

              <div className="content-block sb">
                <div className="image">
                  <img src={TopNewsImage} alt="teste" title="teste" />
                </div>

                <div className="text">
                  <h2>
                    1 -Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    ipsum dolor sit
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    ipsum dolor sit adipiscing elit ipsum dolor sit ipsum dolor
                    sit ipsum dolor sit
                  </p>
                </div>
              </div>
            </div>
          </div>
          {RenderDatasBlockNews}
        </Content>
      </Container>
    </>
  );
}
