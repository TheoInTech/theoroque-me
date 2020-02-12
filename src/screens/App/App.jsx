import React, { useState } from "react";
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
import WorkContent from "../../components/WorkContent";

const GlobalStyle = createGlobalStyle`
  @import '~bootstrap/scss/bootstrap.scss';

  html, body {
    margin: 0;
    padding: 0;
    background-color: #F7F7F7;
  }
`;

function App() {
    const [workContent, showWorkContent] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <GlobalFonts />
            <GlobalStyle />
            <Layout>
                <WorkContent animate={workContent} />

                <div className="App">
                    <Row>
                        <InfoCard />
                        <Work onClick={() => showWorkContent(true)} />
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
