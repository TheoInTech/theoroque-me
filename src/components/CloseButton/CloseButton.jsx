import React from "react";
import styled from "styled-components";

const CloseButtonStyle = styled.button`
    color: ${props => props.theme.whiteColor};
    font-size: 32px;
    font-weight: 700;
    text-shadow: ${props => props.theme.closeShadow};
    border: none;
    background: #ff0000;
    padding: 8px 16px;
    float: right;
    margin-right: -16px;
    margin-top: -16px;

    &:hover {
        background: #fb7676;
    }
`;

const CloseButton = ({ onClick }) => {
    return <CloseButtonStyle onClick={onClick}>X</CloseButtonStyle>;
};

export default CloseButton;
