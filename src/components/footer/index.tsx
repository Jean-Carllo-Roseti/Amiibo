import { Fcontent } from './styles'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import IconMario from '../../assets/image/iconMario.png'

const Footer = () => {
  return (
    <Fcontent>
      <div>
        <img
          className="justify-content-center"
          src={IconMario}
          alt="Imagem do Mario"
        />
      </div>
      <ul className="container d-flex justify-content-around">
        <li>
          <FaInstagram size={32} />
        </li>
        <li>
          <FaFacebook size={32} />
        </li>
        <li>
          <FaYoutube size={32} />
        </li>
      </ul>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
        incidunt nesciunt veniam vitae repellendus illum?
      </div>
    </Fcontent>
  )
}

export default Footer
