import styled from "styled-components";

export const Footer = styled.div`
  background-color: #612a92;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 1200px;

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
  ul {
    display: inline-block;
    align-items: left;
    width: 33.33%;
    float: left;

    padding-left: 50px;
  }

  li {
    float: left;
    display: inline-block;
    float: left;
    width: 100%;
  }

  a {
    font-family: "Barlow", sans-serif;
    color: #fff;
    text-decoration: none;
    font-size: 22px;
    padding: 7px;
    display: block;
    list-style-type: none;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 769px) {
    ul {
      width: 50%;
      padding-left: 0px;
    }
  }

  @media only screen and (max-width: 426px) {
    padding-top: 30px;
    padding-bottom: 20px;
    a {
      font-size: 20px;
      padding: 5px;
    }
  }
`;

export const Copyright = styled.div`
  display: inline-block;
  background-color: #53207b;
  width: 100%;
  text-align: center;
  padding: 20px 10px;
  p {
    color: #fff;
    font-size: 18px;
  }

  @media only screen and (max-width: 426px) {
    p {
      font-size: 16px;
    }
  }
`;
