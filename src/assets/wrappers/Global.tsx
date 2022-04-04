import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-size: 1.5rem;
  font-family: 'Spartan', sans-serif;
  font-weight: 500;
}
`;

export default GlobalStyle;
