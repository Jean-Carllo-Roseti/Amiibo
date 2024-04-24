import Cards from '../homeCards'
import { DestaqueContent, Subtitulo } from './style'

const Destaque = () => {
  return (
    <>
      <Subtitulo>Destaques</Subtitulo>
      <DestaqueContent className="container">
        <Cards />
        <Cards />
        <Cards />
      </DestaqueContent>
    </>
  )
}

export default Destaque
