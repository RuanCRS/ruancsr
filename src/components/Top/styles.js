import styled from "styled-components";

export const Header = styled.div`
  background: linear-gradient(to right, #a800d2, #7000d4);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 1200px;
`;

export const Menu = styled.div`
  ul {
    display: inline-block;
    align-items: left;
    width: 100%;
    padding-left: 90px;
  }

  li {
    display: flex;
    float: left;
  }

  .btn a {
    font-family: "Barlow", sans-serif;
    color: #fff;
    text-decoration: none;
    font-size: 23px;
    padding: 10px;
    display: block;
    list-style-type: none;
    cursor: pointer;
  }

  .btn:hover {
    background: white;
    color: #000;
  }

  .logo {
    position: absolute;
    cursor: pointer;
  }

  .logo img {
    width: 70px;
  }
`;

export const BackgroundImage = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
