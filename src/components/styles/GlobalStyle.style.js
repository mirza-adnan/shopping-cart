import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
        font-family: "Poppins", sans-serif;
        background-color: var(--clr-primary);
        color: var(--clr-text);
    }

    body::-webkit-scrollbar {
        width: 0.25rem;
    }

    body::-webkit-scrollbar-track {
        background: #1e1e24;
    }

    body::-webkit-scrollbar-thumb {
        background: #00ADB5;
    }
`;

export default GlobalStyle;
