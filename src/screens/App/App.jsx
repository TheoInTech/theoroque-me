import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../../components/Layout";
import { theme } from "../../assets/theme";
import Info from "../../components/Info";
import Details from "../../components/Details";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4 {
    line-height: 2rem;
    margin: 8px 0;
  }

  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    .fullheight {
      height: 768px;
    }
  }
  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    .fullheight {
      height: 1024px;
    }
  }
  /* iphone5 */
  @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {
    .fullheight {
      height: 320px;
    }
  }
  @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2) {
    .fullheight {
      height: 568px;
    }
  }
  /* iPhone 4 */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    .fullheight {
      height: 320px;
    }
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    .fullheight {
      height: 480px;
    }
  }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Info />
                <Details />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
