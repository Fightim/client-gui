import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import ALBProvider from "./service/context/ALBContext";
import LoaderProvider from "./service/context/LoaderContext";
import MySQLProvider from "./service/context/MySQLContext";
import T2Provider from "./service/context/T2Context";
import { GlobalStyle } from "./store/style/globalStyle";
import theme from "./store/style/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LoaderProvider>
        <T2Provider>
          <MySQLProvider>
            <ALBProvider>
              <GlobalStyle />
              <App />
            </ALBProvider>
          </MySQLProvider>
        </T2Provider>
      </LoaderProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
