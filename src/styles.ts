import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

`
