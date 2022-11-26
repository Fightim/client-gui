import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import App from "./App";
import LoaderProvider from "./service/context/LoaderContext";
import { GlobalStyle } from "./store/style/globalStyle";
import theme from "./store/style/theme";
import { worker } from "./story/mock/browser";

if (import.meta.env.DEV) {
  worker.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: false,
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <LoaderProvider>
        <GlobalStyle />
        <App />
      </LoaderProvider>
    </ThemeProvider>
  </QueryClientProvider>,
  // </React.StrictMode>,
);
