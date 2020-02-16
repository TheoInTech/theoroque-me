import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Row } from "react-bootstrap";
import styled from "styled-components";
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
    background-color: #101C2E;
    overflow: hidden;
  }
`;

function App() {
    const [content, showContent] = useState("");

    const InfoCardContent = styled.div`
        visibility: ${content === "" ? "visible" : "hidden"};
        position: ${content === "" ? "relative" : "absolute"};
        top: 0;
    `;

    return (
        <ThemeProvider theme={theme}>
            <GlobalFonts />
            <GlobalStyle />
            <Layout>
                <InfoCardContent>
                    <Row>
                        <InfoCard />
                        <Work onClick={() => showContent("work")} />
                    </Row>
                    <Row>
                        <Portfolio onClick={() => showContent("portfolio")} />
                        <Skills onClick={() => showContent("skills")} />
                        <Resume />
                    </Row>
                </InfoCardContent>
                <WorkContent
                    onClose={() => showContent("")}
                    style={
                        content === "work"
                            ? { visibility: "visible", position: "relative" }
                            : {
                                  visibility: "hidden",
                                  position: "absolute",
                                  top: "0"
                              }
                    }
                />
                <PortfolioContent
                    onClose={() => showContent("")}
                    styleArg={
                        content === "portfolio"
                            ? { visibility: "visible", position: "relative" }
                            : {
                                  visibility: "hidden",
                                  position: "absolute",
                                  top: "0"
                              }
                    }
                />
                <SkillsContent
                    onClose={() => showContent("")}
                    style={
                        content === "skills"
                            ? { visibility: "visible", position: "relative" }
                            : {
                                  visibility: "hidden",
                                  position: "absolute",
                                  top: "0"
                              }
                    }
                />
            </Layout>
        </ThemeProvider>
    );
}

export default React.memo(App);
