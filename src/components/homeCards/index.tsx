import { CardBody, Botao } from './style'

// type Props = {
//   title: string
//   image: string
// }

const Cards = () => {
  return (
    <CardBody>
      <h3> Personagem</h3>
      <img src="https://placeholder.com/288x330" alt="" />
      <div>
        <Botao>Saiba Mais</Botao>
      </div>
    </CardBody>
  )
}

export default Cards
