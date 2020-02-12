import styled from "styled-components";

const theme = {
    muli: "Muli",
    blueColor: "#0C3580",
    blueColorBG: "linear-gradient(#0C3580E0, #0C3580E0)",
    aquaBlueColor: "#0A71CA",
    aquaBlueColorBG: "linear-gradient(#0A71CAE0, #0A71CAE0)",
    skyBlueColor: "#CEE6F5",
    violetColor: "#351F53",
    yellowColor: "#FFD500",
    blackColor: "#000000",
    grayColor: "#565656",
    whiteColor: "#FFFFFF",
    hoverColor: "#0FA1DE",
    boxShadow: "0px 5px 5px #00000040",
    textShadow: "0px 4px 5px #00000029",
    transitionDuration: "0.3s"
};

const card = styled.div`
    height: 45vh;
    color: ${props => props.theme.whiteColor};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition-duration: ${props => props.theme.transitionDuration};
    padding: 36px;

    &:hover {
        filter: brightness(1.25);

        > h2 {
            text-shadow: 5px 5px 15px #00000029;
            color: #0c3580;
        }
    }

    > h2 {
        font-size: 72px;
        font-weight: 700;
        text-shadow: ${props => props.theme.textShadow};
    }
`;

export { theme, card };
