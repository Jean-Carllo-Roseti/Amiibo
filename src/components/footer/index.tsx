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
        Aviso importante: Este site foi criado para fins de pesquisa de Amiibos.
        <br />
        Não oferecemos serviços de comércio eletrônico ou venda de produtos.
      </div>
    </Fcontent>
  )
}

export default Footer
