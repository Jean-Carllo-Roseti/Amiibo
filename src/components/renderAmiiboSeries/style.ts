import styled from 'styled-components'
import { AmiiboItem } from '../vitrine/style'

export const ContainerAmiiboG = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    display: block;
  }

  ${AmiiboItem} {
    width: 234px;
    height: 348px;
    margin-bottom: 48px;

    img {
      border-radius: 8px;
      width: 214px;
      height: 288px;

      @media (max-width: 576px) {
        margin: 0 auto;
        width: 90%;
      }
    }

    @media (max-width: 576px) {
      width: 80%;
      height: 100%;
      margin: 0 auto;
      margin-bottom: 48px;
    }
  }
`
export { AmiiboItem }
