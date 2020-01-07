import Styled from "styled-components";

export const Bottom = Styled.div`
  background-color: #0d0d0d;
  padding-top: 80px;
  padding-bottom: 50px;
`;

export const Container = Styled.div`
  display:flex;
  flex-direction: column;
  margin: auto;
  width:1200px;
`;

export const Content = Styled.div`

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
    font-size: 30px;
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
