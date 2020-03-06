import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column nowrap;
    background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%) 0% 0%
        no-repeat padding-box;

    @media (max-width: 850px) {
        flex: 1 0 100%;
    }
`;

const MenuGroup = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
`;

const MenuButton = styled.button`
    color: ${props => props.theme.whiteColor};
    padding: 8px 16px;
    background: ${props => props.theme.darkGreenColor};
    font-size: 16px;
    border: none;
    flex: 1;
    transition-duration: ${props => props.theme.transitionDuration};

    &:hover {
        filter: brightness(1.5);
    }
`;

const MenuButtonActive = styled(MenuButton)`
    background: ${props => props.theme.greenColor};

    &:hover {
        filter: none;
    }
`;

const Content = styled.div`
    padding: 24px;
`;

const Details = () => {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <Container>
            <MenuGroup>
                {activeTab === "about" ? (
                    <MenuButtonActive disabled>Who's Theo</MenuButtonActive>
                ) : (
                    <MenuButton onClick={() => setActiveTab("about")}>
                        Who's Theo
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
                {activeTab === "about" && "About page - WIP"}
                {activeTab === "skills" && "Skills page - WIP"}
                {activeTab === "experiences" && "Experiences page - WIP"}
                {activeTab === "projects" && "Projects page - WIP"}
            </Content>
        </Container>
    );
};

export default Details;
