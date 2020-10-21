import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    }
`;

export default GlobalStyle;