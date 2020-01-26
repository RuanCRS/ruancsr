import styled from "styled-components";

export const Header = styled.div`
  /* background: linear-gradient(to right, #a800d2, #7000d4); */
  background: linear-gradient(to right, #fff, #fff);
  position: fixed;
  width: 100%;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 1200px;

  @media screen and (max-width: 1201px) {
    width: 90%;
  }
  @media screen and (max-width: 769px) {
    width: 97%;
  }
`;

export const Menu = styled.div`
  min-height: 52px;
  ul {
    display: inline-block;
    align-items: left;
    width: 100%;
    text-align: center;
    position: relative;
  }

  li {
    display: inline-block;
    width: auto;
    text-align: center;
  }

  .btn a {
    font-family: "Barlow", sans-serif;
    color: #000;
    text-decoration: none;
    font-size: 22px;
    padding: 15px 10px;
    display: block;
    list-style-type: none;
    cursor: pointer;
    font-weight: 800;
    text-transform: uppercase;
  }

  .btn a:hover {
    background: linear-gradient(to right, #8206c9, #8206c9);
    /* background-color: rgba(130, 6, 201, 0.3) */
    color: #fff;
  }

  .logo {
    position: absolute;
    cursor: pointer;
  }

  .logo img {
    width: 180px;
  }

  @media screen and (max-width: 1025px) {
    .btn a {
      font-size: 20px;
      padding: 15px 7px;
    }
  }
  @media screen and (max-width: 769px) {
    .btn a {
      font-size: 18px;
    }

    .logo img {
      width: 160px;
    }
  }

  @media screen and (max-width: 651px) {
    ul {
      position: fixed;
      width: 50%;
      z-index: 11;
      right: 0px;
      top: 0px;
      background-color: #fff;
      height: 100%;
      display: none;
    }
    li {
      width: 100%;
    }

    .btn a {
      padding: 8px 7px;
    }
  }
`;

export const BackgroundImage = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Login = styled.div`
  width: auto;
  display: inline-block;
  float: right;
  margin-top: 10px;
  margin-right: 25px;
  position: absolute;
  right: 0px;

  img {
    cursor: pointer;
    width: 35px;
  }
  @media screen and (max-width: 1025px) {
    right: 5%;
  }
`;

export const Find = styled.div`
  width: auto;
  display: inline-block;
  float: right;
  margin-top: 10px;
  margin-right: 15px;
  position: absolute;
  z-index: 2;
  right: 59px;
  img {
    cursor: pointer;
    width: 35px;
  }

  @media screen and (max-width: 1025px) {
    right: 12%;
  }
  @media screen and (max-width: 651px) {
    display: none;
  }
`;

export const BtnMobile = styled.a`
  width: auto;
  float: right;
  margin-top: 10px;
  margin-right: 25px;
  position: absolute;
  right: 0px;
  display: none;
  top: 5px;

  img {
    width: 25px;
  }

  @media screen and (max-width: 651px) {
    display: inline-block;
  }
`;

export const BtnCloseMenuMobile = styled.a`
  display: none;
  float: right;
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
  color: #53207b;
  cursor: pointer;

  @media screen and (max-width: 651px) {
    display: inline-block;
  }
`;
