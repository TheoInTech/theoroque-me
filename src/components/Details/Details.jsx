import React, { useState } from "react";
import styled from "styled-components";
import AboutContent from "./components/AboutContent";
import SkillsContent from "./components/SkillsContent";
import ExperiencesContent from "./components/ExperiencesContent";
import ProjectsContent from "./components/ProjectsContent";

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    flex: 1;
`;

const MenuGroup = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

const MenuButton = styled.button`
    color: ${props => props.theme.whiteColor};
    padding: 16px;
    background: ${props => props.theme.darkGreenColor};
    font-size: 21px;
    border: none;
    flex: 1;
    transition-duration: ${props => props.theme.transitionDuration};
    cursor: pointer;

    &:hover {
        filter: brightness(1.5);
    }

    @media (max-width: 850px) {
        font-size: 14px;
    }
`;

const MenuButtonActive = styled(MenuButton)`
    background: ${props => props.theme.greenColor};
    cursor: auto;

    &:hover {
        filter: none;
    }
`;

const Content = styled.div`
    overflow: auto;
    background: linear-gradient(#ffffff55, #ffffff55), url("/bg/paper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    padding: 16px;
`;

const Details = () => {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <Container>
            <MenuGroup>
                {activeTab === "about" ? (
                    <MenuButtonActive disabled>About</MenuButtonActive>
                ) : (
                    <MenuButton onClick={() => setActiveTab("about")}>
                        About
                    </MenuButton>
                )}
                {activeTab === "skills" ? (
                    <MenuButtonActive disabled>Skills</MenuButtonActive>
                ) : (
                    <MenuButton onClick={() => setActiveTab("skills")}>
                        Skills
                    </MenuButton>
                )}
                {activeTab === "experiences" ? (
                    <MenuButtonActive disabled>Experiences</MenuButtonActive>
                ) : (
                    <MenuButton onClick={() => setActiveTab("experiences")}>
                        Experiences
                    </MenuButton>
                )}
                {activeTab === "projects" ? (
                    <MenuButtonActive disabled>Projects</MenuButtonActive>
                ) : (
                    <MenuButton onClick={() => setActiveTab("projects")}>
                        Projects
                    </MenuButton>
                )}
            </MenuGroup>
            <Content>
                {activeTab === "about" && <AboutContent />}
                {activeTab === "skills" && <SkillsContent />}
                {activeTab === "experiences" && <ExperiencesContent />}
                {activeTab === "projects" && <ProjectsContent />}
            </Content>
        </Container>
    );
};

export default Details;
