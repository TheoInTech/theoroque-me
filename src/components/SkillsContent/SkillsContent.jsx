import React from "react";
import styled from "styled-components";
import { overlay } from "../../assets/theme";
import CloseButton from "../CloseButton";
import { Row } from "react-bootstrap";

const SkillsContent = ({ onClose }) => {
    const SkillsOverlay = styled(overlay)`
        background: ${props => props.theme.aquaBlueColor};
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
            <SkillsOverlay>
                <CloseButton onClick={onClose} />
                <h2>Skills</h2>
                <Container>Work in progress</Container>
            </SkillsOverlay>
        </Row>
    );
};

export default React.memo(SkillsContent);
