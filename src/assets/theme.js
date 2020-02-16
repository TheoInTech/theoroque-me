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
    lightGrayColor: "#DCD8D8",
    whiteColor: "#FFFFFF",
    hoverColor: "#0FA1DE",
    boxShadow: "0px 5px 5px #00000040",
    textShadow: "0px 4px 5px #00000029",
    closeShadow: "0px 10px 10px #00000029",
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
    -webkit-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.004), 0 50px 80px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.004), 0 50px 80px rgba(0, 0, 0, 0.05);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.004), 0 50px 80px rgba(0, 0, 0, 0.05);

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

const overlay = styled.div`
    height: 90vh;
    padding: 16px;
    flex: 1 1 auto;
    overflow: auto;
    -webkit-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.004), 0 50px 80px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.004), 0 50px 80px rgba(0, 0, 0, 0.05);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.004), 0 50px 80px rgba(0, 0, 0, 0.05);

    ::-webkit-scrollbar {
        width: 25px;
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.aquaBlueColorBG};
    }

    > h2 {
        color: ${props => props.theme.whiteColor};
        font-size: 72px;
        font-weight: 700;
        text-shadow: ${props => props.theme.textShadow};
    }
`;

export { theme, card, overlay };
