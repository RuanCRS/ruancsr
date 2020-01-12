import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Barlow:500,600,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap');

    background: #f8f8f8;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    ul,li{list-style:none;}

    h1{
      font-family: 'Open Sans', sans-serif;
      font-weight: 800;
      font-size: 35px;
    }

    h2{ 
      font-size: 20px;   
      font-weight: 800;
    }
      
    h3 {
      font-size: 20px;
      font-weight: 800;
    }

    p {
    font-size: 18px;
    font-family: 'Barlow', sans-serif;
    }

    a{
      font-family: 'Barlow', sans-serif;

    }

  }

`;

export default GlobalStyle;
