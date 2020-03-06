import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    text-align: center;
    background: linear-gradient(180deg, #072c37 0%, #04bfa6 100%) 0% 0%
        no-repeat padding-box;
    color: ${props => props.theme.whiteColor};
    padding: 24px;

    @media (max-width: 850px) {
        flex: 1 0 100%;
        padding: 24px;
    }
`;

const Image = styled.img`
    border-radius: 50% !important;
    box-shadow: ${props => props.theme.boxShadow};
    border: 5px solid ${props => props.theme.whiteColor};
    width: 100%;
    max-width: 200px;

    @media (max-width: 850px) {
        max-width: 180px;
    }
`;

const NameH1 = styled.h1`
    font-size: 96px;
    font-weight: 700;
    text-shadow: ${props => props.theme.textShadow};
    text-transform: uppercase;
    margin: 24px auto;
    line-height: 0.9em;
    letter-spacing: 6px;

    @media (max-width: 850px) {
        font-size: 64px;
    }
`;

const PositionH2 = styled.h2`
    font-size: 16px;
    line-height: 1.5rem;
`;

const PositionSpan = styled.span`
    @media (max-width: 850px) {
        display: block;
        line-height: 1.75rem;
    }

    &:not(:last-child):after {
        content: " ● ";
        display: inline-block;
        margin: 0 12px;

        @media (max-width: 850px) {
            content: "";
            margin: 0;
        }
    }
`;

const IconList = styled.ul`
    list-style: none;
    padding: 32px 0 0;

    > li {
        display: inline;
        margin: 0 24px;

        @media (max-width: 850px) {
            margin: 0px 16px;
        }
    }

    @media (max-width: 850px) {
        padding: 16px 0 0;
    }
`;

const IconLink = styled.a`
    > svg {
        height: 36px;
        width: 36px;
        fill: ${props => props.theme.whiteColor};
        transition-duration: ${props => props.theme.transitionDuration};

        &:hover {
            fill: ${props => props.theme.blackColor};
        }

        @media (max-width: 850px) {
            height: 21px;
            width: 21px;
        }
    }
`;

const BtnResume = styled.a`
    margin: 24px auto;
    padding: 8px 16px;
    border: 2px solid ${props => props.theme.whiteColor};
    border-radius: 5px;
    background: transparent;
    text-transform: uppercase;
    width: 100%;
    max-width: 220px;
    color: ${props => props.theme.whiteColor};
    font-weight: 700;
    transition-duration: ${props => props.theme.transitionDuration};

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        color: ${props => props.theme.whiteColor};
        text-decoration: none;
    }

    @media (max-width: 850px) {
        max-width: 100%;
    }
`;

const Info = () => {
    return (
        <Container>
            <Image src="/theo.jpg" alt="Theo Roque" title="Theo Roque" />
            <NameH1>
                Theo
                <br />
                Roque
            </NameH1>
            <PositionH2>
                <PositionSpan>Javascript Developer</PositionSpan>
                <PositionSpan>Graphic Designer</PositionSpan>
                <PositionSpan>IT Consultant</PositionSpan>
                <PositionSpan>Technopreneur</PositionSpan>
            </PositionH2>
            <IconList>
                <li>
                    <IconLink
                        href="https://www.facebook.com/theoroque95"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            width="36"
                            height="36"
                            viewBox="0 0 17 17"
                        >
                            <g></g>
                            <path d="M12.461 5.57l-0.309 2.93h-2.342v8.5h-3.518v-8.5h-1.753v-2.93h1.753v-1.764c0-2.383 0.991-3.806 3.808-3.806h2.341v2.93h-1.465c-1.093 0-1.166 0.413-1.166 1.176v1.464h2.651z" />
                        </svg>
                    </IconLink>
                </li>
                <li>
                    <IconLink
                        href="https://www.linkedin.com/in/theoroque"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            width="36"
                            height="36"
                            viewBox="0 0 17 17"
                        >
                            <g></g>
                            <path d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z" />
                        </svg>
                    </IconLink>
                </li>
                <li>
                    <IconLink
                        href="https://www.instagram.com/theoroque95"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            width="36"
                            height="36"
                            viewBox="0 0 17 17"
                        >
                            <g></g>
                            <path d="M13 0h-9c-2.2 0-4 1.8-4 4v9c0 2.2 1.8 4 4 4h9c2.2 0 4-1.8 4-4v-9c0-2.2-1.8-4-4-4zM16 13c0 1.654-1.346 3-3 3h-9c-1.654 0-3-1.346-3-3v-6h3.207c-0.286 0.61-0.457 1.283-0.457 2 0 2.619 2.131 4.75 4.75 4.75s4.75-2.131 4.75-4.75c0-0.717-0.171-1.39-0.457-2h3.207v6zM12.25 9c0 2.068-1.682 3.75-3.75 3.75s-3.75-1.682-3.75-3.75 1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75zM12.152 6c-0.872-1.059-2.176-1.75-3.652-1.75s-2.78 0.691-3.652 1.75h-3.848v-2c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v2h-3.848zM14.454 2.722v1.298c0 0.299-0.244 0.543-0.542 0.543h-1.368c-0.3-0.001-0.544-0.245-0.544-0.543v-1.298c0-0.299 0.244-0.543 0.544-0.543h1.368c0.298 0 0.542 0.244 0.542 0.543z" />
                        </svg>
                    </IconLink>
                </li>
                <li>
                    <IconLink
                        href="https://stackoverflow.com/users/11580842/theo-roque"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            width="36"
                            height="36"
                            viewBox="0 0 17 17"
                        >
                            <g></g>
                            <path d="M12.66 16.179c0 0.312-0.009 0.312-0.009 0.312v0.009h-10.106c-0.313 0-0.313-0.009-0.313-0.009h-0.009v-6.572h1.081v5.519h8.286v-5.519h1.070v6.26zM10.509 14.356l-6.312 0.009v-1.348l6.312-0.009v1.348zM10.661 11.286l-0.116 1.339-6.295-0.58 0.125-1.339 6.286 0.58zM11.081 9.518l-0.349 1.305-6.098-1.635 0.348-1.304 6.099 1.634zM11.875 7.982l-0.688 1.16-5.437-3.213 0.687-1.161 5.438 3.214zM13.205 7.036l-1.106 0.759-3.564-5.214 1.116-0.769 3.554 5.224zM14.777 6.724l-1.331 0.232-1.080-6.224 1.33-0.232 1.081 6.224z" />
                        </svg>
                    </IconLink>
                </li>
                <li>
                    <IconLink
                        href="https://bitbucket.org/theo-roque/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            width="36"
                            height="36"
                            viewBox="0 0 17 17"
                        >
                            <g></g>
                            <path d="M13.077 11.115c0 0.746-0.389 1.962-1.308 1.962-0.92 0-1.309-1.216-1.309-1.962 0-0.745 0.389-1.962 1.309-1.962 0.919 0 1.308 1.217 1.308 1.962zM5.231 9.153c-0.919 0-1.308 1.217-1.308 1.962 0 0.746 0.389 1.962 1.308 1.962 0.919 0 1.308-1.216 1.308-1.962 0-0.745-0.389-1.962-1.308-1.962zM17 9.317c0 1.135-0.112 2.34-0.623 3.382-1.349 2.728-5.057 2.993-7.713 2.993-2.697 0-6.63-0.234-8.030-2.993-0.522-1.032-0.634-2.247-0.634-3.382 0-1.492 0.409-2.901 1.39-4.045-0.184-0.562-0.276-1.155-0.276-1.738 0-0.766 0.173-1.531 0.521-2.227 1.614 0 2.646 0.705 3.872 1.665 1.032-0.245 2.094-0.357 3.157-0.357 0.96 0 1.931 0.103 2.861 0.327 1.216-0.95 2.247-1.635 3.841-1.635 0.348 0.695 0.521 1.461 0.521 2.227 0 0.583-0.092 1.165-0.276 1.717 0.981 1.154 1.389 2.574 1.389 4.066zM14.711 11.115c0-1.563-0.949-2.942-2.615-2.942-0.674 0-1.317 0.123-1.992 0.215-0.531 0.082-1.062 0.112-1.604 0.112s-1.073-0.030-1.604-0.112c-0.664-0.092-1.318-0.215-1.992-0.215-1.665 0-2.615 1.379-2.615 2.942 0 3.126 2.86 3.606 5.353 3.606h1.717c2.493 0.001 5.352-0.48 5.352-3.606z" />
                        </svg>
                    </IconLink>
                </li>
            </IconList>
            <BtnResume
                href="https://drive.google.com/open?id=1n7WwyHQVEh3fQO6AbzKfqdyoD8ds5Xs-"
                target="_blank"
                rel="noopener noreferrer"
            >
                Download CV Here
            </BtnResume>
        </Container>
    );
};

export default React.memo(Info);
