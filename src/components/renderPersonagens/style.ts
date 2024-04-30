import styled from 'styled-components'
import { AmiiboItem } from '../vitrine/style'

export const ContainerAmiiboG = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  ${AmiiboItem} {
    width: 234px;
    height: 348px;

    img {
      border-radius: 8px;
      width: 214px;
      height: 288px;
    }
  }
`
export { AmiiboItem }
