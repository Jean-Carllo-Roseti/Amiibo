import { CardBody, Botao } from './style'

type Props = {
  name: string
  image: string
}

const Cards = ({ name, image }: Props) => {
  return (
    <CardBody>
      <h3>{name}</h3>
      <img src={image} alt="foto do personagem `${name}`" />
      <div>
        <Botao>Saiba Mais</Botao>
      </div>
    </CardBody>
  )
}

export default Cards
