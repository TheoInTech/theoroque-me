import React from "react";
import styled from "styled-components";
import { card } from "../../assets/theme";

const SkillsStyle = styled(card)`
    width: 40%;
    background: ${props => props.theme.aquaBlueColorBG}, url("/bg/skills.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    &:hover:before {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transition-timing-function: cubic-bezier(
            0.52,
            1.64,
            0.37,
            0.66
        );
        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    }
    &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;
        background: ${props => props.theme.hoverColor};
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transition: 300ms ease-out;
        transition: 300ms ease-out;
    }
`;

const Skills = ({ onClick }) => {
    return (
        <SkillsStyle onClick={onClick}>
            <h2>Skills</h2>
        </SkillsStyle>
    );
};

export default Skills;
