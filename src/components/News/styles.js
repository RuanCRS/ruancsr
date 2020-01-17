import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: auto;
  width: 1200px;
  padding-top: 90px;
  padding-bottom: 100px;
`;

export const News = styled.div`
  width: 70%;
  padding-right: 50px;
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
`;
