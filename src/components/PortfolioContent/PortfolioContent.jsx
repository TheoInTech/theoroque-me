import React from "react";
import styled from "styled-components";
import { overlay } from "../../assets/theme";
import CloseButton from "../CloseButton";
import { Row } from "react-bootstrap";

const PortfolioContent = ({ onClose }) => {
    const PortfolioOverlay = styled(overlay)`
        background: ${props => props.theme.blueColor};
    `;

    const Container = styled.div`
        display: flex;
        flex-flow: column wrap;
        padding: 8px 16px;
        overflow: auto;
        align-items: center;
        justify-content: center;
    `;

    return (
        <Row>
            <PortfolioOverlay>
                <CloseButton onClick={onClose} />
                <h2>Portfolio</h2>
                <Container>Work in progress</Container>
            </PortfolioOverlay>
        </Row>
    );
};

export default React.memo(PortfolioContent);
