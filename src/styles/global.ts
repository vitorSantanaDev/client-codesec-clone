import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.blackDark};
    font-family: ${({ theme }) => theme.font.family.default};
  }

  html, body, #__next {
    height: 100%;
  }
`

export default GlobalStyles
