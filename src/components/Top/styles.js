import Styled from "styled-components";

// import ImagemH from "../../assets/icones/mg.png";

export const Header = Styled.div`
  background: linear-gradient(to right,#ff8a00,#e52e71);

  width: 100%;
`;

export const Container = Styled.div`
  display:flex;
  flex-direction: column;
  margin: auto;
  width:1200px;
`;

export const Menu = Styled.div`

  ul {
    display:inline-block;
    align-items: left;
    width:100%;
  }   

  li{
    display:flex;
    float: left;
  }

  a {
    font-family: 'Barlow', sans-serif;
    color: #fff;
    text-decoration:none;
    font-size: 23px;
    padding: 10px;
    display:block;
    list-style-type: none;
    cursor:pointer;
  }
   
  a:hover{
    background: white;
    color:#000;
  }
   
`;

export const BackgroundImage = Styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;

`;
