import { Fcontent } from './styles'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <Fcontent>
      <ul className="container d-flex justify-content-around">
        <li>
          <FaInstagram size={46} />
        </li>
        <li>
          <FaFacebook size={46} />
        </li>
        <li>
          <FaYoutube size={46} />
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
