import { createGlobalStyle, css } from 'styled-components'

const GlobalFonts = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
`

const DefaultStyles = css`
  div#__next, html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: Roboto,Arial,Helvetica,"sans-serif";
  }
  body {
    background-color: #f0f0f0;
    max-width: 1180px;
    padding: 20px 20px;
    box-sizing: border-box;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .text-center {
    text-align: center;
  }
`

export default createGlobalStyle`
  ${GlobalFonts};
  ${DefaultStyles};
`
