import styled from "styled-components";

const theme = {
    muli: "Proxima Nova",
    greenColor: "#03a992",
    darkGreenColor: "#044740",
    blackColor: "#282828",
    grayColor: "#787878",
    offWhiteColor: "#F5F5F5",
    whiteColor: "#FFFFFF",
    boxShadow: "0px 9px 6px #00000040",
    textShadow: "0px 4px 5px #00000029",
    closeShadow: "0px 10px 10px #00000029",
    transitionDuration: "0.3s"
};

const Card = styled.div`
    height: 45vh;
    color: ${props => props.theme.whiteColor};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
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
`;

export { theme, Card };
