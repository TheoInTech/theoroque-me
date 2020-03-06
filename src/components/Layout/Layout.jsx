import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.div`
    font-family: ${props => props.theme.muli};
    display: flex;
    flex-flow: row nowrap;
    height: 100vh;
    width: 100vw;

    @media (max-width: 850px) {
        flex-flow: column nowrap;
    }
`;

const Layout = ({ children }) => {
    return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
