import { createGlobalStyle, css } from 'styled-components'

const fontStyle = css`
  color: ${({ theme }): string => theme.primaryText};
  line-height: 1.5;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Noto Sans', monospace;
    background: ${({ theme }): string => theme.background};
    ${fontStyle}
  }

  html, body, #root {
    height: 100%;
  }

  textarea, input, button {
    font-family: 'Noto Sans', monospace;
    ${fontStyle}
  }
`
