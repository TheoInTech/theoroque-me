import React from "react";
import styled from "styled-components";

const WorkBlock = ({ work }) => {
    const Container = styled.div`
        height: 100%;
        width: 50%;
        margin: 0 36px;
    `;

    const Image = styled.img`
        width: 100%;
        max-width: 400px;
        height: 100%;
        box-shadow: ${props => props.theme.boxShadow};
    `;

    const Year = styled.p`
        font-size: 24px;
        font-weight: 700;
        color: ${props => props.theme.yellowColor};
        text-shadow: ${props => props.theme.textShadow};
        margin: 8px 0;
    `;

    const ProjectsWrapper = styled.div`
        margin-top: 16px;
        margin-bottom: 24px;
    `;

    const ProjectsTitle = styled.p`
        font-size: 16px;
        font-weight: 600;
        color: ${props => props.theme.whiteColor};
        line-height: 0.325;
        margin-bottom: 0.5rem;
    `;

    const ProjectsBody = styled.span`
        font-size: 12px;
        font-weight: 400;
        color: ${props => props.theme.whiteColor};

        &:not(:last-child):after {
            content: " ● ";
            display: inline-block;
            font-size: 12px;
            margin: 0px 6px;
        }
    `;

    const TechWrapper = styled.div`
        margin-top: 16px;
        margin-bottom: 24px;
    `;

    const TechTitle = styled.p`
        font-size: 16px;
        font-weight: 600;
        color: ${props => props.theme.whiteColor};
        line-height: 0.325;
        margin-bottom: 0.5rem;
    `;

    const TechBody = styled.span`
        font-size: 12px;
        font-weight: 400;
        color: ${props => props.theme.whiteColor};

        &:not(:last-child):after {
            content: " ● ";
            display: inline-block;
            font-size: 12px;
            margin: 0px 6px;
        }
    `;

    return (
        <Container>
            <Image src={`/work/${work.year}.png`} alt={work.company} />
            <Year>{work.year}</Year>
            <ProjectsWrapper>
                <ProjectsTitle>Projects maintained and developed</ProjectsTitle>
                {work.projects.map((project, i) => {
                    return (
                        <ProjectsBody key={`project-${i}`}>
                            {project}
                        </ProjectsBody>
                    );
                })}
            </ProjectsWrapper>
            <TechWrapper>
                <TechTitle>Tech Stack</TechTitle>
                {work.technologies.map((tech, i) => {
                    return <TechBody key={`tech-${i}`}>{tech}</TechBody>;
                })}
            </TechWrapper>
        </Container>
    );
};

export default WorkBlock;
