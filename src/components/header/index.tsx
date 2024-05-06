import { Link } from 'react-router-dom'
import { HContent, HList } from './styles'
import IconMario from '../../assets/image/iconMario.png'

const Header = () => {
  return (
    <HContent className="sticky-top">
      <div className="container">
        <HList>
          <Link className="d-flex link" to={'/'}>
            <div className="d-flex align-items-center">
              <img className="mario" src={IconMario} alt="Imagem do Mario" />
              <h2 className="link">Home</h2>
            </div>
          </Link>
          <li>
            <Link className="link" to={'/gameseries'}>
              <h2>Séries</h2>
            </Link>
          </li>
          <li>
            <Link className="link" to={'/page'}>
              <h2>Personagens</h2>
            </Link>
          </li>
          <li>
            <Link className="link" to={'/type'}>
              <h2>Tipos</h2>
            </Link>
          </li>
        </HList>
      </div>
    </HContent>
  )
}

export default Header
