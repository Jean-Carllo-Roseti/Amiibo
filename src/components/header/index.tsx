import { Link } from 'react-router-dom'
import { HContent, HList } from './styles'

const Header = () => {
  return (
    <HContent>
      <div className="container">
        <Link to={'/'}>
          <h1>Biblioteca Amiibo</h1>
        </Link>
        <HList>
          <Link to={'/gameseries'}>
            <h3>Séries</h3>
          </Link>
          <Link to={'/page'}>
            <h3>Personagem</h3>
          </Link>
          <Link to={'/type'}>
            <h3>Tipo</h3>
          </Link>
        </HList>
      </div>
    </HContent>
  )
}

export default Header
