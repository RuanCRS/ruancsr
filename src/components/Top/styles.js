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
`;

export const Menu = styled.div`
  min-height: 52px;
  ul {
    display: inline-block;
    align-items: left;
    width: 100%;
    text-align: center;
    display: inline-block;
    width: 100%;
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
    font-size: 23px;
    padding: 15px 10px;
    display: block;
    list-style-type: none;
    cursor: pointer;
    font-weight: 800;
    text-transform: uppercase;
  }

  .btn a:hover {
    background: linear-gradient(to right, #a800d2, #7000d4);
    color: #fff;
  }

  .logo {
    position: absolute;
    cursor: pointer;
  }

  .logo img {
    width: 70px;
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
      width: 60px;
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
  display: inline;
  position: absolute;
  right: 15%;
  top: 10px;

  img {
    cursor: pointer;
    width: 40px;
  }
  @media screen and (max-width: 1025px) {
    right: 5%;
  }

  @media screen and (max-width: 769px) {
    img {
      width: 35px;
    }
  }
`;

export const Find = styled.div`
  display: inline;
  position: absolute;
  right: 20%;
  top: 10px;

  img {
    cursor: pointer;
    width: 40px;
  }

  @media screen and (max-width: 1025px) {
    right: 12%;
  }

  @media screen and (max-width: 769px) {
    img {
      width: 35px;
    }
  }
`;
