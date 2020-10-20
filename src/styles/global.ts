import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #561AFD;
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
        background-color: ${props => props.theme.colors.background};
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme.colors.text};
    }
`;

export default GlobalStyle;