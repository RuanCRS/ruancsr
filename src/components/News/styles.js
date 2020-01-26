import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  width: 1200px;
  padding-top: 90px;
  padding-bottom: 100px;

  @media screen and (max-width: 1201px) {
    width: 90%;
  }

  @media screen and (max-width: 651px) {
    width: 100%;
    display: inline-block;
    margin: auto;
    padding: 20px;
    padding-top: 90px;
  }
`;

export const News = styled.div`
  width: 70%;
  padding-right: 50px;

  @media screen and (max-width: 651px) {
    width: 100%;
    display: inline-block;
    float: left;
    padding-right: 0px;
  }
`;

export const FirstNews = styled.section`
  width: 100%;
  display: inline;
  background-color: #fff;
  .first {
    position: relative;
  }

  .first:hover {
    cursor: pointer;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  .text {
    display: inline-block;
    background-color: #fff;
    width: 100%;
    padding: 20px;
  }

  .spotlight {
    /* background-image: linear-gradient(#8206c9, #4a09b5); */
    background-color: rgba(130, 6, 201, 0.3);
    position: absolute;
    padding: 10px;
    width: 100%;
    -webkit-border-radius: 0px 0px 64px 0px;
    -moz-border-radius: 0px 0px 64px 0px;
    -ms-border-radius: 0px 0px 64px 0px;
    -o-border-radius: 0px 0px 64px 0px;
  }

  .spotlight span {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    padding-left: 15px;
  }

  h1 {
    margin-bottom: 5px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1025px) {
    h1 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 991px) {
    .spotlight span {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 769px) {
    h1 {
      font-size: 23px;
    }
  }

  @media screen and (max-width: 426px) {
    h1 {
      font-size: 20px;
    }
    .text {
      padding: 10px 20px;
    }

    p {
      font-size: 16px;
    }

    .spotlight span {
      font-size: 16px;
    }
  }
`;

export const TopNews = styled.section`
  width: 30%;

  img {
    width: 100%;
    margin-top: -23px;
  }

  .news {
    background-color: #fff;
    margin-bottom: 20px;
  }

  .news:hover {
    cursor: pointer;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  .text {
    padding: 10px 10px;
  }

  .title {
    margin-bottom: 30px;
    background: linear-gradient(to right, #a800d2, #7000d4);
    padding: 8px;
    -webkit-border-radius: 0px 285px 0px 0px;
    -moz-border-radius: 0px 285px 0px 0px;
    -ms-border-radius: 0px 285px 0px 0px;
    -o-border-radius: 0px 285px 0px 0px;
  }

  .title p {
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
  }

  span {
    background-color: red;
    border-radius: 50px;
    position: relative;
    padding: 8px 14px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    right: 10px;
    bottom: 8px;
  }

  @media screen and (max-width: 651px) {
    width: 100%;
    display: inline-block;
    float: left;
    margin-top: 30px;

    .news {
      width: 48%;
      float: left;
      margin-left: 2%;
    }
  }

  @media screen and (max-width: 651px) {
    .news {
      width: 100%;
      margin-left: 0%;
    }
    h2 {
      font-size: 18px;
    }

    span {
      padding: 5px 11px;
    }
  }
`;

export const BlockNews = styled.section`
  .news {
    width: 49.5%;
    display: inline-block;
    float: left;
    margin-top: 20px;
    background-color: #fff;
  }

  .news:nth-child(2n) {
    margin-left: 1%;
  }

  .news:hover {
    cursor: pointer;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }
  .image {
    width: 100%;
    display: inline-block;
    float: left;
  }

  .text {
    width: 100%;
    display: inline-block;
    float: left;
    padding: 10px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 15px;
    margin-top: 4px;
  }

  @media screen and (max-width: 426px) {
    .news {
      width: 100%;
    }
  }
`;
