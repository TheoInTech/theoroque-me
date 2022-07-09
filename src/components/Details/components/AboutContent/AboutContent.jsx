import React from "react";
import styled from "styled-components";
import Typical from "react-typical";

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 16px 36px;

    @media (max-width: 850px) {
        padding: 16px 8px;
    }
`;

const Header = styled.div`
    flex: 1 0 40%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

const TypicalStyle = styled(Typical)`
    font-size: 36px;
    font-weight: 700;

    @media (max-width: 850px) {
        font-size: 18px;
    }
`;

const Image = styled.img`
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 50%;
    width: 100%;
    max-width: 220px;
    margin-top: 16px;

    @media (max-width: 850px) {
        max-width: 180px;
        margin: 0;
    }
`;

const Body = styled.div`
    font-size: 24px;
    font-weight: 400;
    text-align: left;

    ul {
        list-style: none;
        padding: 0;
    }

    p,
    li {
        line-height: 2rem;
    }

    @media (max-width: 850px) {
        font-size: 16px;
    }
`;

const AboutContent = () => {
    return (
        <Container>
            <Header>
                <Image src="/theo.jpg" alt="Theo Roque" title="Theo Roque" />
                <TypicalStyle
                    steps={[
                        "Hello, I am a ",
                        1000,
                        "Hello, I am a Javascript developer.",
                        2000,
                        "Hello, I am a graphic designer.",
                        2000,
                        "Hello, I am an IT consultant.",
                        2000,
                        "Hello, I am a technopreneur.",
                        2000,
                        "Hello, I am a musician.",
                        2000,
                        "Hello, I am a singer.",
                        2000,
                        "Hello, I am a traveler.",
                        2000,
                        "Hello, I am a proud Filipino.",
                        1000
                    ]}
                    loop={Infinity}
                    wrapper="p"
                />
            </Header>
            <Body>
                <ul>
                    <li>
                        <strong>Email address:</strong> theoroque95@gmail.com
                    </li>
                    <li>
                        <strong>Phone number:</strong> +63 917 507 3906
                    </li>
                </ul>
                <p>
                    With 7 years of programming experience, I
                    proactively help organizations and enterprises solve their
                    digital problems. From layout and design to web development;
                    from deployment to marketing.
                </p>
                <p>
                    Maybe I can help you build your dream business or idea, as
                    well? I'm only one quick email or phone call away. There's
                    no time to waste. Let's build it!
                </p>
            </Body>
        </Container>
    );
};

export default React.memo(AboutContent);
