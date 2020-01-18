import styled from "styled-components";

export const Footer = styled.div`
  background-color: #0d0d0d;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 1200px;
`;

export const Content = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
  ul {
    display: flex;
    align-items: left;
  }

  li {
    display: flex;
    float: left;
  }

  a {
    font-family: "Barlow", sans-serif;
    color: #fff;
    text-decoration: none;
    font-size: 30px;
    padding: 10px;
    display: block;
    list-style-type: none;
    cursor: pointer;
  }

  a:hover {
    background: white;
    color: #000;
  }
`;

export const Copyright = styled.div`
  display: inline-block;
  background-color: #333;
  width: 100%;
  text-align: center;
  padding: 20px 0px;
  p {
    color: #fff;
    font-size: 20px;
  }
`;
