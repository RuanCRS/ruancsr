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

export const FirstNews = styled.div`
  width: 100%;
  display: inline;
  background-color: #fff;

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
  }
`;

export const TopNews = styled.div`
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

export const BlockNews = styled.div`
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

export const SocialNetworks = styled.div`
  width: 100%;
  display: inline-block;
  margin: auto;
  margin-bottom: 30px;
  text-align: center;
  position: relative;

  a {
    display: inline-block;
  }

  p {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
  }

  .social-network {
    display: inline-block;
    width: 80%;
    margin: auto;
    background-image: linear-gradient(#8206c9, #4a09b5);
    border-radius: 10px;
    padding: 10px;
  }

  .social-links {
    position: relative;
    z-index: 2;
    top: 36px;
    margin-top: -8px;
  }
  .social-links a {
    margin: 0px 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 1025px) {
    .social-network {
      width: 90%;
    }
    p {
      font-size: 18px;
    }

    img {
      width: 38px;
    }
  }

  @media screen and (max-width: 769px) {
    padding: 8px;

    .social-network {
      width: 100%;
    }
    p {
      font-size: 16px;
    }

    img {
      width: 36px;
    }
  }
`;
