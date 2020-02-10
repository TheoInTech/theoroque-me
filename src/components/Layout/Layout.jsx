import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Background = styled.div`
    font-family: ${props => props.theme.muli};
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    margin: 5vh;
    height: 100%;
    -webkit-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.004), 0 50px 80px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.004), 0 50px 80px rgba(0, 0, 0, 0.05);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.004), 0 50px 80px rgba(0, 0, 0, 0.05);
`;

const Layout = ({ children }) => {
    return (
        <Background>
            <Container fluid>{children}</Container>
        </Background>
    );
};

export default Layout;
