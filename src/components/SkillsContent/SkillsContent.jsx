import React from "react";
import styled from "styled-components";
import { overlay } from "../../assets/theme";
import CloseButton from "../CloseButton";
import { Row } from "react-bootstrap";
import skills from "../../assets/data/skills";

const SkillsContent = ({ onClose, style }) => {
    const SkillsOverlay = styled(overlay)`
        background: ${props => props.theme.aquaBlueColor};
    `;

    const Container = styled.div`
        display: flex;
        flex-flow: row nowrap;
        padding: 16px 60px;
        overflow: auto;
        align-items: center;
        justify-content: space-between;
        padding: 36px;
    `;

    const StrongSkills = styled.div`
        flex: 1 1 auto;
        text-align: center;
        padding: 0px 24px;
        height: 500px;

        h3 {
            color: ${props => props.theme.yellowColor};
            font-size: 48px;
            font-weight: 700;
            text-shadow: ${props => props.theme.textShadow};
            margin-bottom: 36px;
        }
        span {
            color: ${props => props.theme.lightGrayColor};
            font-size: 36px;
            opacity: 0.5;

            &:hover {
                color: ${props => props.theme.whiteColor};
                opacity: 1;
            }

            &:not(:last-child):after {
                content: " ● ";
                display: inline-block;
                margin: 0 24px;
            }
        }
    `;

    const KnowledgeableSkills = styled.div`
        flex: 1 1 auto;
        text-align: center;
        padding: 0px 24px;
        height: 500px;

        h3 {
            color: ${props => props.theme.whiteColor};
            font-size: 48px;
            font-weight: 700;
            text-shadow: ${props => props.theme.textShadow};
            margin-bottom: 36px;
        }
        span {
            color: ${props => props.theme.lightGrayColor};
            font-size: 36px;
            opacity: 0.5;

            &:hover {
                color: ${props => props.theme.whiteColor};
                opacity: 1;
            }

            &:not(:last-child):after {
                content: " ● ";
                display: inline-block;
                margin: 0 24px;
            }
        }
    `;

    return (
        <Row style={style}>
            <SkillsOverlay>
                <CloseButton onClick={onClose} />
                <h2>Skills</h2>
                <Container>
                    <StrongSkills>
                        <h3>Awesomely Strong</h3>
                        {skills.strong.map(skill => (
                            <span>{skill}</span>
                        ))}
                    </StrongSkills>
                    <KnowledgeableSkills>
                        <h3>Knowledgeable</h3>
                        {skills.knowledgeable.map(skill => (
                            <span>{skill}</span>
                        ))}
                    </KnowledgeableSkills>
                </Container>
            </SkillsOverlay>
        </Row>
    );
};

export default React.memo(SkillsContent);
