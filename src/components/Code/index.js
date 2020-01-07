import React from "react";

import { Code, Imagem, Programming } from "./styles";
import ImageCode from "../../assets/code.jpg";

import ImagesCodesJavascript from "../../assets/Code/javascript.png";
import ImagesCodesHTML5 from "../../assets/Code/html5.png";
import ImagesCodesCSS3 from "../../assets/Code/css3.png";
import ImagesCodesNodeJs from "../../assets/Code/nodejs.png";
import ImagesCodesReactJS from "../../assets/Code/reactjs.png";

export default function ComponentCode() {
  const ListaCodeDatas = [
    { id: 1, image: ImagesCodesJavascript, name: "Javascript" },
    { id: 2, image: ImagesCodesHTML5, name: "HTML5" },
    { id: 3, image: ImagesCodesCSS3, name: "CSS3" },
    { id: 4, image: ImagesCodesNodeJs, name: "NodeJS" },
    { id: 5, image: ImagesCodesReactJS, name: "ReactJS" },
    { id: 6, image: ImagesCodesJavascript, name: "Javascript" },
    { id: 7, image: ImagesCodesJavascript, name: "QJavascript" },
    { id: 8, image: ImagesCodesJavascript, name: "Javascript" },
    { id: 9, image: ImagesCodesJavascript, name: "Javascript" },
    { id: 10, image: ImagesCodesJavascript, name: "Javascript" },
    { id: 11, image: ImagesCodesJavascript, name: "Javascript" },
    { id: 12, image: ImagesCodesJavascript, name: "Javascript" },
    { id: 13, image: ImagesCodesJavascript, name: "Javascript" },
    { id: 14, image: ImagesCodesJavascript, name: "Javascript" },
    { id: 15, image: ImagesCodesJavascript, name: "Javascript" },
  ];

  const Cont = 250;
  const RenderListImagesCode = ListaCodeDatas.map(todo => (
    <img
      className="wow fadeInDown"
      data-wow-delay={`${Cont * todo.id}ms`}
      key={todo.id}
      src={todo.image}
      alt={todo.name}
      title={todo.name}
    />
  ));

  return (
    <Code>
      <Imagem>
        <img src={ImageCode} />
      </Imagem>
      <Programming>{RenderListImagesCode}</Programming>
    </Code>
  );
}
