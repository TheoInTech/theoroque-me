import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { AnimateOnChange } from "react-animation";

const Background = styled.div`
    font-family: ${props => props.theme.muli};
    display: flex;
    flex-wrap: wrap;
    background: none;
    margin: 5vh;
    height: 100%;
`;

const CustomAnimateOnChange = styled(AnimateOnChange)`
    display: block !important;
`;

const Layout = ({ children }) => {
    return (
        <Background>
            <Container fluid>
                <CustomAnimateOnChange animation="pop">
                    {children}
                </CustomAnimateOnChange>
            </Container>
        </Background>
    );
};

export default React.memo(Layout);
