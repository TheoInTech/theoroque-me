import React from "react";
import styled from "styled-components";
import { overlay, overlayTransition } from "../../assets/theme";
import works from "../../assets/data/works";
import CloseButton from "../CloseButton";
import WorkBlock from "../WorkBlock";
import { Row } from "react-bootstrap";

const WorkContent = ({ onClose }) => {
    const WorkOverlay = styled(overlay)`
        background: ${props => props.theme.blueColor};
    `;

    const Container = styled.div`
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        padding: 8px 16px;
    `;

    return (
        <Row>
            <WorkOverlay>
                <CloseButton onClick={onClose} />
                <h2>Work</h2>
                <Container>
                    {works.map((work, index) => {
                        return <WorkBlock key={work._id} work={work} />;
                    })}
                </Container>
            </WorkOverlay>
        </Row>
    );
};

export default React.memo(WorkContent);
