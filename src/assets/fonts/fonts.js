import { createGlobalStyle } from "styled-components";

import ProximaNovaOtf from "./ProximaNova.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'ProximaNova';
        src: url(${ProximaNovaOtf});
        src: url(${ProximaNovaOtf}) format('embedded-opentype'),
            url(${ProximaNovaOtf}) format('woff'),
            url(${ProximaNovaOtf}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
`;
