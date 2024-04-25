import styled from 'styled-components'
import { AmiiboItem } from '../vitrine/style'

export const CardBody = styled.div`
  ${AmiiboItem} {
    width: 304px;
    margin: 0;
  }

  img {
    width: 283px;
    height: 390px;
    border-radius: 16px;
  }

  h3,
  div {
    text-align: center;
    padding: 8px 0;
  }

  div {
    a {
      text-decoration: none;
    }
  }
`

export const Botao = styled.button`
  background-color: rgba(255, 0, 0);
  padding: 4px 6px;
  border: none;
  border-radius: 6px;
  margin: 8px 0;

  :hover {
    background-color: rgba(255, 0, 0, 0.5); // Cor vermelha com 50% de opacidade
  }
`
