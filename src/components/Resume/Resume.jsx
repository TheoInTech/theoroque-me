import React from "react";
import styled from "styled-components";
import { card } from "../../assets/theme";

const ResumeStyle = styled(card)`
    width: 20%;
    background: ${props => props.theme.violetColor};
    flex-direction: column;

    > h2 {
        font-size: 40px;
        font-weight: 700;
        text-align: center;
        line-height: 1.425;
    }

    > svg {
        display: block;
        fill: ${props => props.theme.skyBlueColor};
        height: 80px;
        width: 80px;
        stroke-width: 1;
        stroke: ${props => props.theme.skyBlueColor};
    }

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
        -webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
        -webkit-transition: 300ms ease-out;
        transition: 300ms ease-out;
    }
`;

const Resume = () => {
    return (
        <ResumeStyle
            onClick={() =>
                window.open(
                    "https://drive.google.com/open?id=1JQGwnqnSsLsOekhkWGkI6oTCzdCuE2xW",
                    "_blank"
                )
            }
        >
            <h2>Download Resume</h2>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 17 17"
            >
                <g></g>
                <path d="M17 16v1h-17v-1h17zM13.354 8.854l-0.707-0.707-3.646 3.646v-11.793h-1v11.794l-3.647-3.648-0.708 0.708 4.854 4.853 4.854-4.853z" />
            </svg>
        </ResumeStyle>
    );
};

export default Resume;
