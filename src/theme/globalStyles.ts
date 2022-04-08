import { createGlobalStyle } from "styled-components";
import { color } from "./color";

const GlobalStyles = createGlobalStyle`
    a*,
	*::before,
	*::after {
		box-sizing: inherit;
    }

    html, body {
        font-family: sans-serif;
        font-size: 62.5%;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        color: ${color.base.black};
    }
`;

export default GlobalStyles;
