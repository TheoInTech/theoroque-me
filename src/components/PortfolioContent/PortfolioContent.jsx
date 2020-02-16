import React from "react";
import styled from "styled-components";
import { overlay } from "../../assets/theme";
import CloseButton from "../CloseButton";
import { Row } from "react-bootstrap";
import portfolio from "../../assets/data/portfolio";

const PortfolioContent = ({ onClose, styleArg }) => {
    const PortfolioOverlay = styled(overlay)`
        background: ${props => props.theme.blueColor};
    `;

    const Container = styled.div`
        display: flex;
        flex-flow: column wrap;
        padding: 16px 60px;
        overflow: auto;
        align-items: center;
        justify-content: center;
    `;

    const PortfolioWrapper = styled.div`
        width: 100%;
        margin-bottom: 48px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: flex-start;
    `;

    const Desc = styled.p`
        font-size: 40px;
        color: ${props => props.theme.whiteColor};
        text-align: right;
        word-break: break-word;
        margin-right: 36px;
        flex: 0 1 45%;
        order: 1;
        margin-top: 24px;

        strong {
            font-size: 48px;
            color: ${props => props.theme.yellowColor};
        }
    `;

    const Image = styled.img`
        box-shadow: ${props => props.theme.boxShadow};
        width: 700px;
        flex: 3 1 auto;
        order: 2;
    `;

    return (
        <Row style={styleArg}>
            <PortfolioOverlay>
                <CloseButton onClick={onClose} />
                <h2>Portfolio</h2>
                <Container>
                    {portfolio.map(row => (
                        <PortfolioWrapper key={`portfolio-${row.id}`}>
                            <Desc>
                                <strong>{row.title}</strong>
                                <br />
                                {row.description}
                            </Desc>
                            {typeof row.thumbnail === "string" ? (
                                <Image src={row.thumbnail} alt={row.alt} />
                            ) : (
                                row.thumbnail.map(thumb => (
                                    <Image
                                        src={thumb.link}
                                        alt={thumb.alt}
                                        style={{ "margin-right": "16px" }}
                                    />
                                ))
                            )}
                        </PortfolioWrapper>
                    ))}
                </Container>
            </PortfolioOverlay>
        </Row>
    );
};

export default React.memo(PortfolioContent);
