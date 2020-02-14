import React, { Fragment, useState, useEffect } from "react";
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
import PortfolioContent from "../../components/PortfolioContent";
import SkillsContent from "../../components/SkillsContent";

const GlobalStyle = createGlobalStyle`
  @import '~bootstrap/scss/bootstrap.scss';

  html, body {
    margin: 0;
    padding: 0;
    background-color: #F7F7F7;
  }
`;

function App() {
    const [inSplash, showSplash] = useState(true);
    const [content, showContent] = useState("");

    useEffect(() => {
        showSplash(content === "" && true);
    }, [content]);

    const buildApp = () => {
        if (inSplash === true) {
            return (
                <Fragment>
                    <Row>
                        <InfoCard />
                        <Work onClick={() => showContent("work")} />
                    </Row>
                    <Row>
                        <Portfolio onClick={() => showContent("portfolio")} />
                        <Skills onClick={() => showContent("skills")} />
                        <Resume />
                    </Row>
                </Fragment>
            );
        }

        if (content === "work") {
            return <WorkContent onClose={() => showContent("")} />;
        } else if (content === "portfolio") {
            return <PortfolioContent onClose={() => showContent("")} />;
        } else if (content === "skills") {
            return <SkillsContent onClose={() => showContent("")} />;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalFonts />
            <GlobalStyle />
            <Layout>{buildApp}</Layout>
        </ThemeProvider>
    );
}

export default React.memo(App);
