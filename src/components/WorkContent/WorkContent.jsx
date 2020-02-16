import React from "react";
import styled from "styled-components";
import { overlay } from "../../assets/theme";
import works from "../../assets/data/works";
import CloseButton from "../CloseButton";
import { Row } from "react-bootstrap";

const WorkContent = ({ onClose, style }) => {
    const WorkOverlay = styled(overlay)`
        background: ${props => props.theme.blueColor};
    `;

    const Container = styled.div`
        display: flex;
        flex-flow: column nowrap;
        padding: 16px 60px;
        justify-content: center;
        align-items: center;
    `;

    const WorkWrapper = styled.div`
        width: 100%;
        margin-bottom: 48px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: flex-start;
    `;

    const Year = styled.p`
        font-size: 48px;
        font-weight: 700;
        color: ${props => props.theme.yellowColor};
        text-shadow: ${props => props.theme.textShadow};
        margin-bottom: 32px;
    `;

    const Desc = styled.div`
        text-align: right;
        word-break: break-word;
        margin-right: 36px;
        flex: 1 1 50%;
        order: 1;
    `;

    const Image = styled.img`
        box-shadow: ${props => props.theme.boxShadow};
        flex: 1 0 auto;
        order: 2;
    `;

    const ProjectsTitle = styled.p`
        font-size: 36px;
        font-weight: 600;
        color: ${props => props.theme.whiteColor};
        margin-top: 2rem;
        margin-bottom: 0.75rem;
    `;

    const ProjectsBody = styled.span`
        font-size: 24px;
        font-weight: 400;
        color: ${props => props.theme.whiteColor};

        &:not(:last-child):after {
            content: " ● ";
            display: inline-block;
            font-size: 24px;
            margin: 0px 8px;
        }
    `;

    const TechTitle = styled.p`
        font-size: 36px;
        font-weight: 600;
        color: ${props => props.theme.whiteColor};
        margin-top: 2rem;
        margin-bottom: 0.75rem;
    `;

    const TechBody = styled.span`
        font-size: 24px;
        font-weight: 400;
        color: ${props => props.theme.whiteColor};

        &:not(:last-child):after {
            content: " ● ";
            display: inline-block;
            font-size: 24px;
            margin: 0px 8px;
        }
    `;

    return (
        <Row style={style}>
            <WorkOverlay>
                <CloseButton onClick={onClose} />
                <h2>Work</h2>
                <Container>
                    {works.map(row => (
                        <WorkWrapper key={`work-${row.id}`}>
                            <Desc>
                                <Year>
                                    {`${row.year} // `}
                                    <br />
                                    {row.title}
                                </Year>
                                <ProjectsTitle>Projects</ProjectsTitle>
                                {row.projects.map((project, i) => {
                                    return (
                                        <ProjectsBody key={`project-${i}`}>
                                            {project}
                                        </ProjectsBody>
                                    );
                                })}
                                <TechTitle>Tech Stack</TechTitle>
                                {row.technologies.map((tech, i) => {
                                    return (
                                        <TechBody key={`tech-${i}`}>
                                            {tech}
                                        </TechBody>
                                    );
                                })}
                            </Desc>
                            <Image
                                src={`/work/${row.year}.png`}
                                alt={row.company}
                            />
                        </WorkWrapper>
                    ))}
                </Container>
            </WorkOverlay>
        </Row>
    );
};

export default React.memo(WorkContent);
