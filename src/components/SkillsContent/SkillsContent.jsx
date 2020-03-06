import React from "react";
import styled from "styled-components";
import skills from "../../assets/data/skills";

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 36px 24px;

    @media (max-width: 850px) {
        padding: 24px 8px;
    }
`;

const Skills = styled.div`
    flex: 1 1 auto;
    padding: 0px 24px;
    margin-bottom: 36px;

    h3 {
        color: ${props => props.theme.yellowColor};
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 16px;
        text-transform: uppercase;

        @media (max-width: 850px) {
            font-size: 24px;
        }
    }

    span {
        color: ${props => props.theme.blackColor};
        font-size: 24px;
        line-height: 1.5em;

        &:not(:last-child):after {
            content: " ● ";
            font-size: 12px;
            display: inline-block;
            margin: 0 16px;
            color: ${props => props.theme.grayColor};
        }

        @media (max-width: 850px) {
            display: block;
            font-size: 21px;

            &:not(:last-child):after {
                content: "";
            }

            &:before {
                content: " ● ";
                font-size: 12px;
                display: inline-block;
                margin-right: 16px;
                color: ${props => props.theme.grayColor};
            }
        }
    }
`;

const SkillsContent = () => {
    return (
        <Container>
            <Skills>
                <h3>Awesomely Strong</h3>
                {skills.strong.map((skill, key) => (
                    <span key={key}>{skill}</span>
                ))}
            </Skills>
            <Skills>
                <h3>Knowledgeable</h3>
                {skills.knowledgeable.map((skill, key) => (
                    <span key={key}>{skill}</span>
                ))}
            </Skills>
        </Container>
    );
};

export default React.memo(SkillsContent);
