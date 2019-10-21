import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Barlow:500,600,700&display=swap');
    background: #000;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    ul,li{list-style:none;}
  }

`;

export default GlobalStyle;
