import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Row } from "react-bootstrap";
import GlobalFonts from "../../fonts/fonts";
import Layout from "../../components/Layout";
import InfoCard from "../../components/InfoCard";
import Work from "../../components/Work";
import Portfolio from "../../components/Portfolio";
import Skills from "../../components/Skills";
import Resume from "../../components/Resume";
import { theme } from "../../assets/theme";

const GlobalStyle = createGlobalStyle`
  @import '~bootstrap/scss/bootstrap.scss';

  * {
    box-sizing : border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: #F9F9F9;
  }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalFonts />
            <GlobalStyle />
            <Layout>
                <div className="App">
                    <Row>
                        <InfoCard />
                        <Work />
                    </Row>
                    <Row>
                        <Portfolio />
                        <Skills />
                        <Resume />
                    </Row>
                </div>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
