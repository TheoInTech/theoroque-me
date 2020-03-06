import React from "react";
import styled from "styled-components";
import experiences from "../../assets/data/experiences";

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 24px;

    @media (max-width: 850px) {
        padding: 24px 8px;
    }
`;

const Experience = styled.div`
    flex: 1;
    width: 100%;
    padding: 24px;
    margin: 16px auto;
    background: ${props => props.theme.whiteColor};
    box-shadow: ${props => props.theme.boxShadow};
`;

const ExperienceHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;

    img {
        flex: 1;
        max-width: 150px;
        margin-right: 36px;
    }
`;

const ExperienceHeaderTitle = styled.div`
    flex: 2;

    h3 {
        font-weight: 700;
        font-size: 28px;
    }

    h4 {
        font-weight: 400;
        font-size: 21px;
    }
`;

const ExperienceBody = styled.div`
    display: flex;
    flex-flow: column;
    margin-top: 16px;

    h3 {
        font-weight: 700;
        font-size: 24px;
        margin-top: 16px;
    }

    h4 {
        font-weight: 400;
        font-size: 21px;
        line-height: 2rem;

        span:not(:last-child):after {
            content: " ● ";
            font-size: 12px;
            display: inline-block;
            margin: 0 8px;
            color: ${props => props.theme.grayColor};
        }
    }
`;

const ExperiencesContent = () => {
    return (
        <Container>
            {experiences?.map(exp => (
                <Experience key={exp._id}>
                    <ExperienceHeader>
                        <img
                            src={`/exp/${exp.year}.png`}
                            title={exp.year}
                            alt={exp.year}
                        />
                        <ExperienceHeaderTitle>
                            <h3>
                                {exp.company} <br /> {exp.title}
                            </h3>
                            <h4>{exp.year}</h4>
                        </ExperienceHeaderTitle>
                    </ExperienceHeader>
                    <ExperienceBody>
                        <h3>Projects</h3>
                        <h4>
                            {exp.projects.map((project, key) => (
                                <span key={key}>{project}</span>
                            ))}
                        </h4>
                        <h3>Technologies Used</h3>
                        <h4>
                            {exp.technologies.map((tech, key) => (
                                <span key={key}>{tech}</span>
                            ))}
                        </h4>
                    </ExperienceBody>
                </Experience>
            ))}
        </Container>
    );
};

export default React.memo(ExperiencesContent);
