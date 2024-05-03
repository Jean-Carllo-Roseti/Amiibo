import styled from 'styled-components'
import { AmiiboItem } from '../vitrine/style'

export const ContaienrAmiiboG = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  ${AmiiboItem} {
    width: 234px;
    height: 348px;
    margin-bottom: 48px;
    img {
      border-radius: 8px;
      width: 214px;
      height: 288px;
    }
  }
`
export { AmiiboItem }

export const GridTotal = styled.div`
  background-color: #f1f1f1;
`
export const ButtonLupa = styled.button`
  border: none;

  img {
    width: 30px;
    margin-right: 16px;
  }
`
export const CabecalhoPerson = styled.div`
  align-items: center;
`
