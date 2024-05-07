import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelhoHeader: '#ff4d4d',
  vermelhoButtonH: '#cc0211'
}

export const GlobalCss = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  .container {
    @media (min-width: 768px) {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
  }

  body {
    background-color: #f1f1f1;
  }
`
