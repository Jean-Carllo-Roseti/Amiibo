import { useState } from 'react'
import { AmiiboItem } from '../vitrine/style'
import {
  CardBody,
  ImageEspaco,
  Botao,
  Modal,
  ConteudoOver,
  OverlayContainer,
  OutraCoisa
} from './style'

type Props = {
  name: string
  image: string
  amiiboSeries?: string
  gameSeries?: string
  release?: {
    au: string | null
    eu: string | null
    jp: string | null
    na: string | null
  }
}

const Cards = ({ name, image, amiiboSeries, gameSeries, release }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <CardBody>
        <AmiiboItem>
          <h3>{name}</h3>
          <img src={image} alt={`Foto do personagem ${name}`} />
          <div>
            <Botao onClick={() => setModalOpen(true)}>Saiba Mais</Botao>
          </div>
        </AmiiboItem>
      </CardBody>
      <Modal className={modalOpen ? 'visible' : ''}>
        <OverlayContainer>
          <ConteudoOver>
            <ImageEspaco>
              <img src={image} alt={`Foto do personagem ${name}`} />
            </ImageEspaco>
            <OutraCoisa>
              <h2 className="text-center mb-4">{name}</h2>
              {amiiboSeries && <h4>Amiibo Series: {amiiboSeries}</h4>}
              {gameSeries && <h4>Game Series: {gameSeries}</h4>}
              {release && (
                <ul>
                  <h4 className="mb-2 mt-4">Datas de Lançamentos</h4>
                  <li>
                    <h5>Austrália</h5> {release.au}
                  </li>
                  <li>
                    <h5>EUA</h5> {release.eu}
                  </li>
                  <li>
                    <h5>Japão</h5> {release.jp}
                  </li>
                  <li>
                    <h5>América do Norte</h5> {release.na}
                  </li>
                </ul>
              )}
            </OutraCoisa>
          </ConteudoOver>
        </OverlayContainer>
        <div className="overlay" onClick={() => setModalOpen(false)}></div>
      </Modal>
    </>
  )
}

export default Cards
