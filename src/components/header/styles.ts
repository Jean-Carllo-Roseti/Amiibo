import styled from 'styled-components'
import { cores } from '../../styles'

export const HContent = styled.header`
  background-color: ${cores.vermelhoHeader};
  padding-top: 20px;
  padding-bottom: 14px;

  .mario:hover {
    transform: translateY(
      -10px
    ); /* Adicionando a transformação no hover da classe mario */
  }
`

export const HList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  align-items: center;
  margin-bottom: 0;

  img {
    width: 84px;
  }

  li {
    background-color: ${cores.vermelhoButtonH};
    border-radius: 8px;
    padding: 0 12px;
    transition: transform 0.5s ease;

    :hover {
      transform: translateY(-3px);
    }
  }

  .link {
    color: #c1c1c1;
    text-decoration: none;
    transition: transform 0.5s ease;
    display: inline-block;
  }

  .link:hover {
    color: #fff;
  }
`
