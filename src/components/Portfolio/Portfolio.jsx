import React from "react";
import styled from "styled-components";
import { card } from "../../assets/theme";
// import { Row, Col } from "react-bootstrap";

const PortfolioStyle = styled(card)`
    width: 40%;
    background: ${props => props.theme.blueColorBG}, url("/bg/portfolio.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    &:hover:before {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
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
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        -webkit-transition: 300ms ease-out;
        transition: 300ms ease-out;
    }
`;

const Portfolio = () => {
    return (
        <PortfolioStyle>
            <h2>Portfolio</h2>
        </PortfolioStyle>
    );
};

export default Portfolio;
