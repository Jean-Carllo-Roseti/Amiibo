import { Link } from 'react-router-dom'
import {
  HContent,
  HList,
  Hitem,
  Hamburguer,
  HamLink,
  TotalHamburguer
} from './styles'
import IconMario from '../../assets/image/iconMario.png'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HContent className="sticky-top">
      <div className="container">
        <HList>
          <TotalHamburguer>
            <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </Hamburguer>
            <HamLink className={isMenuOpen ? 'is-open' : ''}>
              <ul className="p-0">
                <li>
                  <Link className=" link " to={'/gameseries'}>
                    <h2>Séries</h2>
                  </Link>
                </li>
                <li>
                  <Link className=" link " to={'/page'}>
                    <h2>Personagens</h2>
                  </Link>
                </li>
                <li>
                  <Link className=" link " to={'/type'}>
                    <h2>Tipos</h2>
                  </Link>
                </li>
              </ul>
            </HamLink>
          </TotalHamburguer>
          <Link className=" link" to={'/'}>
            <img className="mario" src={IconMario} alt="Imagem do Mario" />
          </Link>
          <Hitem>
            <Link className="link " to={'/gameseries'}>
              <h2>Séries</h2>
            </Link>
          </Hitem>
          <Hitem>
            <Link className="link " to={'/page'}>
              <h2>Personagens</h2>
            </Link>
          </Hitem>
          <Hitem>
            <Link className="link " to={'/type'}>
              <h2>Tipos</h2>
            </Link>
          </Hitem>
        </HList>
      </div>
    </HContent>
  )
}

export default Header
