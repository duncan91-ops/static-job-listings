import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyle from "./assets/wrappers/Global";

const theme = {
  primaryCyan: "hsl(180, 29%, 50%)",
  primaryLightCyan: "hsl(180, 52%, 96%)",
  secondaryLightCyan: "hsl(180, 31%, 95%)",
  primaryDarkCyan: "hsl(180, 8%, 52%)",
  secondaryDarkCyan: "hsl(180, 14%, 20%)",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default App;
