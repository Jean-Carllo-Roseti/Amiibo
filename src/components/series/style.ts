import styled from 'styled-components'
import { AmiiboItem } from '../vitrine/style'

interface AmiiboItemProps {
  image: string
}

// AmiiboItem estilizado para aceitar a prop 'image'
export const StyledAmiiboItem = styled(AmiiboItem)<AmiiboItemProps>`
  background-image: url(${(props) => props.image});
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  color: white;
`
export const SeriesContent = styled.div``
