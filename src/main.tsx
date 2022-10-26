import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import LoaderProvider from "./service/context/LoaderContext";
import { GlobalStyle } from "./store/style/globalStyle";
import theme from "./store/style/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LoaderProvider>
        <GlobalStyle />
        <App />
      </LoaderProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
