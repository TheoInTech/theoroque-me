import { createGlobalStyle } from "styled-components";

import MuliLight from "./Muli-Light.ttf";
import MuliRegular from "./Muli-Regular.ttf";
import MuliBold from "./Muli-Bold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Muli';
        src: local('Muli-Light.ttf'), local('Muli'),
        url(${MuliLight}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Muli';
        src: local('Muli-Regular.ttf'), local('Muli'),
        url(${MuliRegular}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Muli';
        src: local('Muli-Bold.ttf'), local('Muli'),
        url(${MuliBold}) format('ttf');
        font-weight: 700;
        font-style: normal
    }
`;
