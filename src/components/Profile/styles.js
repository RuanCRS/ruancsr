import Styled from "styled-components";

export const Container = Styled.div`
  display:flex;
  flex-direction: column;
  margin: auto;
  width:1200px;
`;

export const Profile = Styled.div`

  padding-top: 50px;
  text-align: center;
  padding-bottom: 60px;

   img{
     border-radius: 50%;
     width:450px;
     border: 8px solid;
     border-color: #000;
     float:left;
   }

`;

export const BottomDescription = Styled.div`
  background: linear-gradient(to right,#ff8a00,#e52e71);
  padding: 100px;
  margin-top: -200px;
  overflow: hidden;
  -webkit-border-radius: 0px 285px 0px 0px;
    -moz-border-radius: 0px 285px 0px 0px;
    -ms-border-radius: 0px 285px 0px 0px;
    -o-border-radius: 0px 285px 0px 0px;

  p {
    font-size: 25px;

    }

`;
