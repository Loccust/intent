import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --color-bg-primary: #1F1F27;
        --color-bg-secundary: #252733;
        --color-bg-tertiary: #22222C;
        --color-font-primary: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--color-bg-primary);
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Montserrat', sans-serif;
        color: var(--color-font-primary);
    }
`;

export default GlobalStyle;