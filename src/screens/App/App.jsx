import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../../components/Layout";
import { theme } from "../../assets/theme";
import Info from "../../components/Info";
import Details from "../../components/Details";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4 {
    line-height: 2rem;
    margin: 8px 0;
  }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Info />
                <Details />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
