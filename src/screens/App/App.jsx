import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import GlobalFonts from "../../fonts/fonts";
import Layout from "../../components/Layout";
import { theme } from "../../assets/theme";
import Info from "../../components/Info";
import Details from "../../components/Details";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalFonts />
            <GlobalStyle />
            <Layout>
                <Info />
                <Details />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
