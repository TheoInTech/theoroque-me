import React from "react";
import styled from "styled-components";
import portfolio from "assets/data/portfolio";

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 16px 36px;

    @media (max-width: 850px) {
        padding: 24px 8px;
    }
`;

const Project = styled.div`
    flex: 1;
    padding: 24px;
    margin: 16px auto;
    width: -webkit-fill-available;

    @media (max-width: 850px) {
        width: auto;
        padding: 24px 0;
    }
`;

const ProjectTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
`;

const ProjectDescription = styled.h4`
    font-size: 18px;
    font-weight: 400;
`;

const ProjectImage = styled.img`
    margin-top: 24px;
    max-width: 100%;
    box-shadow: ${props => props.theme.boxShadow};
`;

const ProjectImageMultipleContainer = styled.div`
    margin-top: 24px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

const ProjectImageMultiple = styled.img`
    box-shadow: ${props => props.theme.boxShadow};
    margin-top: 16px;

    &:not(:last-child) {
        margin-right: 16px;
    }
`;

const ProjectsContent = () => {
    return (
        <Container>
            {portfolio?.map(project => (
                <Project key={project._id}>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                        {project.description}
                    </ProjectDescription>
                    {Array.isArray(project.thumbnail) ? (
                        <ProjectImageMultipleContainer>
                            {project.thumbnail.map(thumb => (
                                <ProjectImageMultiple
                                    src={thumb.link}
                                    alt={thumb.alt}
                                    title={thumb.alt}
                                />
                            ))}
                        </ProjectImageMultipleContainer>
                    ) : (
                        <ProjectImage
                            src={project.thumbnail}
                            alt={project.alt}
                            title={project.alt}
                        />
                    )}
                </Project>
            ))}
        </Container>
    );
};

export default React.memo(ProjectsContent);
