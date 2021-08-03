import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --clr-primary: #24252a;
        --clr-text: #EEEEEE;
        --clr-accent: #00ADB5;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        font-family: "Montserrat", sans-serif;
        background-color: var(--clr-primary);
        color: var(--clr-text);
    }
`;

export default GlobalStyles;
