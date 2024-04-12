import Cards from '../../homeCards'
import { DestaqueContent } from './style'

const Destaque = () => {
  return (
    <DestaqueContent className="container">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </DestaqueContent>
  )
}

export default Destaque
