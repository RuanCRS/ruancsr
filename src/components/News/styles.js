import Styled from "styled-components";

export const Container = Styled.div`
  display:flex;
  /* flex-direction: column; */
  margin: auto;
  width:1200px;
  padding-top: 50px;
  padding-bottom: 100px;
`;

export const News = Styled.div`
  width: 70%;
  padding-right: 50px;
`;

export const FirstNews = Styled.div`

  width: 100%; 
  display: inline;
  background-color: #fff;

  .first:hover{
    cursor: pointer;
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  }  

  .text{
    display: inline-block;
    background-color: #fff;
    width: 100%;
    padding: 20px;
  }

  h1{ 
    
    margin-bottom: 5px;
  }

  p{
    font-size: 18px;
  }


  img{
    width: 100%;
    height: 100%;
  }
`;

export const TopNews = Styled.div`
  width: 30%;

  img{
     width: 100%; 
     margin-top: -23px;
  }

  .news{
    background-color: #fff;
    /* position: relative; */

  }
  .text{
    padding: 10px 10px; 
  }
   
   span{
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

   h2{
   }
`;
