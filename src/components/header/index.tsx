import { Link } from 'react-router-dom'
import { HContent, HList } from './styles'

const Header = () => {
  return (
    <HContent>
      <div className="container">
        <h1>Biblioteca Amiibo</h1>
        <HList>
          <Link to={'/'}>
            <h3>Home</h3>
          </Link>
          <Link to={'/gameseries'}>
            <h3>Séries</h3>
          </Link>
          <h3>Personagem</h3>
          <Link to={'/tipe'}>
            <h3>Tipo</h3>
          </Link>
        </HList>
      </div>
    </HContent>
  )
}

export default Header
