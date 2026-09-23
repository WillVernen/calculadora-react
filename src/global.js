import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    min-height: 100%;
    height: 100%;
    font-family: 'Segoe UI', sans-serif;
    background: #dfe3e8;
  }

  body {
    min-height: 100vh;
  }

  button,
  input {
    font: inherit;
  }
`;