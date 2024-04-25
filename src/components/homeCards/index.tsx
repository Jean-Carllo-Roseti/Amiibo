import { AmiiboItem } from '../vitrine/style'
import { CardBody, Botao } from './style'

type Props = {
  name: string
  image: string
}

const Cards = ({ name, image }: Props) => {
  return (
    <CardBody>
      <AmiiboItem>
        <h3>{name}</h3>
        <img src={image} alt="foto do personagem `${name}`" />
        <div>
          <Botao>Saiba Mais</Botao>
        </div>
      </AmiiboItem>
    </CardBody>
  )
}

export default Cards
