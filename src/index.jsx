// @flow
import React, { Fragment } from "react";
import type { Node } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import AppRouter from "./AppRouter";
import { theme, GlobalStyle } from "./theme";

export const AppWrapper = ({ children }: { children: Node }) => (
  <Fragment>{children}</Fragment>
);

export const App = () => (
  <ThemeProvider theme={theme.main}>
    <AppWrapper>
      <GlobalStyle />
      <AppRouter />
    </AppWrapper>
  </ThemeProvider>
);

ReactDOM.render(<App />, global.document.getElementById("app"));
