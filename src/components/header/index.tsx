import { Link } from 'react-router-dom'
import { HContent, HList } from './styles'

const Header = () => {
  return (
    <HContent className="sticky-top">
      <div className="container">
        <HList>
          <Link to={'/'}>
            <h2 className="ml-5">Home</h2>
          </Link>
          <Link to={'/gameseries'}>
            <h2>Séries</h2>
          </Link>
          <Link to={'/page'}>
            <h2>Personagem</h2>
          </Link>
          <Link to={'/type'}>
            <h2>Tipo</h2>
          </Link>
        </HList>
      </div>
    </HContent>
  )
}

export default Header
