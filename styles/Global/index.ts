import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  /* Change the white to any color */
  //input:-webkit-autofill,
  //input:-webkit-autofill:hover,
  //input:-webkit-autofill:active {
  //  -webkit-box-shadow: 0 0 0 30px white inset !important;
  //  font-family: 'Kaushan Script', cursive;
  //
  //}

  //input:-webkit-autofill::first-line:active,
  //input:-webkit-autofill::first-line {
  //  font-family: 'Kaushan Script', cursive;
  //}
`;
